/**
 * Pulls agent data from Apify's Domain.com.au agent scraper and upserts into Supabase.
 * Run manually: npx tsx scripts/sync-agents-from-apify.ts
 * Run weekly:   GitHub Actions (.github/workflows/refresh-agents.yml)
 *
 * Required env vars:
 *   APIFY_TOKEN              — from apify.com/account/integrations
 *   APIFY_ACTOR_ID           — easyapi/domain-com-au-real-estate-agents-scraper
 *   SUPABASE_URL             — from Supabase project settings
 *   SUPABASE_SERVICE_ROLE_KEY — from Supabase project settings > API
 */

import { createClient } from '@supabase/supabase-js';

const APIFY_TOKEN = process.env.APIFY_TOKEN!;
const ACTOR_ID = process.env.APIFY_ACTOR_ID || 'easyapi/domain-com-au-real-estate-agents-scraper';
const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Domain.com.au suburb search URLs to scrape
// Format: https://www.domain.com.au/real-estate-agents/{suburb}-{state}-{postcode}/
// Add more suburbs/states here to expand coverage
const SEARCH_URLS: string[] = [
  // Sydney
  'https://www.domain.com.au/real-estate-agents/sydney-nsw-2000/',
  'https://www.domain.com.au/real-estate-agents/bondi-nsw-2026/',
  'https://www.domain.com.au/real-estate-agents/parramatta-nsw-2150/',
  'https://www.domain.com.au/real-estate-agents/chatswood-nsw-2067/',
  // Melbourne
  'https://www.domain.com.au/real-estate-agents/melbourne-vic-3000/',
  'https://www.domain.com.au/real-estate-agents/richmond-vic-3121/',
  'https://www.domain.com.au/real-estate-agents/st-kilda-vic-3182/',
  // Brisbane
  'https://www.domain.com.au/real-estate-agents/brisbane-qld-4000/',
  'https://www.domain.com.au/real-estate-agents/fortitude-valley-qld-4006/',
  // Perth
  'https://www.domain.com.au/real-estate-agents/perth-wa-6000/',
  // Adelaide
  'https://www.domain.com.au/real-estate-agents/adelaide-sa-5000/',
  // Gold Coast
  'https://www.domain.com.au/real-estate-agents/surfers-paradise-qld-4217/',
  // Sunshine Coast
  'https://www.domain.com.au/real-estate-agents/noosa-heads-qld-4567/',
  // ACT
  'https://www.domain.com.au/real-estate-agents/canberra-act-2600/',
];

type ApifyAgent = {
  agentId?: string;
  name: string;
  jobTitle?: string;
  agencyName?: string;
  phone?: string;
  mobile?: string;
  emailAvailable?: boolean;
  photo?: string;
  profileUrl?: string;
  profileTier?: string;
  propertiesForSale?: number;
  avgSoldPrice?: number;
  avgDaysOnMarket?: number;
  totalSoldAuctioned?: number;
};

function slugify(name: string, agency: string): string {
  return `${name}-${agency}`
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80);
}

function postcodeFromUrl(url: string): string {
  const m = url.match(/-(\d{4})\/$/);
  return m ? m[1] : '';
}

function suburbFromUrl(url: string): string {
  const m = url.match(/agents\/(.+?)-[a-z]{2,3}-\d{4}\//);
  if (!m) return '';
  return m[1].replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function stateFromUrl(url: string): string {
  const m = url.match(/-([a-z]{2,3})-\d{4}\//);
  return m ? m[1].toUpperCase() : '';
}

async function runApifyActor(urls: string[]): Promise<string> {
  console.log(`Starting Apify actor ${ACTOR_ID} with ${urls.length} URLs...`);

  const res = await fetch(
    `https://api.apify.com/v2/acts/${encodeURIComponent(ACTOR_ID)}/runs?token=${APIFY_TOKEN}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ startUrls: urls.map((u) => ({ url: u })), maxItems: 500 }),
    }
  );

  if (!res.ok) throw new Error(`Apify run failed: ${await res.text()}`);
  const { data } = await res.json();
  return data.id;
}

async function waitForRun(runId: string): Promise<void> {
  console.log(`Waiting for run ${runId}...`);
  for (let i = 0; i < 60; i++) {
    await new Promise((r) => setTimeout(r, 15_000));
    const res = await fetch(
      `https://api.apify.com/v2/actor-runs/${runId}?token=${APIFY_TOKEN}`
    );
    const { data } = await res.json();
    console.log(`  Status: ${data.status}`);
    if (data.status === 'SUCCEEDED') return;
    if (['FAILED', 'ABORTED', 'TIMED-OUT'].includes(data.status)) {
      throw new Error(`Apify run ${data.status}`);
    }
  }
  throw new Error('Apify run timed out after 15 minutes');
}

async function fetchDataset(runId: string): Promise<ApifyAgent[]> {
  const res = await fetch(
    `https://api.apify.com/v2/actor-runs/${runId}/dataset/items?token=${APIFY_TOKEN}&format=json`
  );
  if (!res.ok) throw new Error(`Dataset fetch failed: ${await res.text()}`);
  return res.json();
}

async function upsertAgents(agents: ApifyAgent[], urlMap: Map<string, string>): Promise<void> {
  const sb = createClient(SUPABASE_URL, SUPABASE_KEY, { auth: { persistSession: false } });

  const rows = agents
    .filter((a) => a.name?.trim())
    .map((a) => {
      const sourceUrl = urlMap.get(a.agentId || '') || '';
      const postcode = postcodeFromUrl(sourceUrl);
      const suburb = suburbFromUrl(sourceUrl);
      const state = stateFromUrl(sourceUrl);
      const slug = slugify(a.name, a.agencyName || 'agent');

      return {
        external_id: a.agentId || null,
        slug,
        name: a.name.trim(),
        agency: a.agencyName || null,
        profile_image: a.photo || null,
        phone: a.phone || a.mobile || null,
        mobile: a.mobile || null,
        postcode: postcode || '0000',
        suburb: suburb || 'Unknown',
        state: state || null,
        coverage_postcodes: postcode ? [postcode] : [],
        tier: a.profileTier === 'platinum' ? 'premium' : a.profileTier === 'gold' ? 'featured' : 'standard',
        verified: !!a.profileTier && a.profileTier !== 'standard',
        properties_sold: a.totalSoldAuctioned || 0,
        avg_sale_time: a.avgDaysOnMarket || null,
        avg_sold_price: a.avgSoldPrice || null,
        active_listings: a.propertiesForSale || 0,
        profile_url: a.profileUrl || null,
        source: 'domain',
        last_scraped_at: new Date().toISOString(),
      };
    });

  console.log(`Upserting ${rows.length} agents...`);

  // Batch upsert in chunks of 100
  for (let i = 0; i < rows.length; i += 100) {
    const chunk = rows.slice(i, i + 100);
    const { error } = await sb
      .from('agents')
      .upsert(chunk, { onConflict: 'external_id', ignoreDuplicates: false });

    if (error) console.error(`Upsert error (chunk ${i}–${i + 100}):`, error.message);
    else console.log(`  ✓ Upserted ${i + chunk.length}/${rows.length}`);
  }
}

async function main() {
  if (!APIFY_TOKEN) throw new Error('APIFY_TOKEN not set');
  if (!SUPABASE_URL) throw new Error('SUPABASE_URL not set');
  if (!SUPABASE_KEY) throw new Error('SUPABASE_SERVICE_ROLE_KEY not set');

  const runId = await runApifyActor(SEARCH_URLS);
  await waitForRun(runId);
  const agents = await fetchDataset(runId);

  console.log(`Fetched ${agents.length} agents from Apify`);

  // Build URL map (agentId -> source URL) — Apify returns source URL in metadata
  const urlMap = new Map<string, string>();

  await upsertAgents(agents, urlMap);
  console.log('Sync complete ✓');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
