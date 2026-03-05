'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Search,
  Users,
  Home,
  PoundSterling,
  Megaphone,
  FileCheck,
  Scale,
  ListChecks,
  ArrowRight,
  Download,
  ChevronUp,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Metadata is exported from a separate file for server components.  */
/*  Because this page uses 'use client' for the sticky ToC scroll     */
/*  tracking, we export metadata via generateMetadata in a co-located */
/*  layout or head file. For simplicity we embed it via <head> below. */
/* ------------------------------------------------------------------ */

const sections = [
  { id: 'understanding-value', label: 'Understanding Your Property\'s Value', icon: Search },
  { id: 'choosing-agent', label: 'Choosing the Right Agent', icon: Users },
  { id: 'preparing-home', label: 'Preparing Your Home', icon: Home },
  { id: 'pricing-strategy', label: 'Pricing Strategy', icon: PoundSterling },
  { id: 'marketing', label: 'Marketing Your Property', icon: Megaphone },
  { id: 'sales-process', label: 'The Sales Process', icon: FileCheck },
  { id: 'legal-financial', label: 'Legal & Financial', icon: Scale },
  { id: 'top-20-tips', label: 'Top 20 Tips', icon: ListChecks },
];

function useActiveSection() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeId;
}

/* ------------------------------------------------------------------ */
/*  Reusable prose components                                         */
/* ------------------------------------------------------------------ */

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl sm:text-3xl font-bold text-text tracking-tight scroll-mt-24 mb-6">
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl font-semibold text-text mt-10 mb-4">{children}</h3>;
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-text-secondary font-normal leading-relaxed mb-4">{children}</p>;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mb-6">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckCircle size={16} className="text-sage mt-1 shrink-0" />
          <span className="text-sm text-text-secondary leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Callout({ type = 'tip', children }: { type?: 'tip' | 'warning'; children: React.ReactNode }) {
  const isTip = type === 'tip';
  return (
    <div className={`rounded-2xl p-5 mb-6 ${isTip ? 'bg-sage-50 border border-sage/10' : 'bg-terra/5 border border-terra/10'}`}>
      <div className="flex items-start gap-3">
        {isTip ? (
          <Lightbulb size={18} className="text-sage mt-0.5 shrink-0" />
        ) : (
          <AlertTriangle size={18} className="text-terra mt-0.5 shrink-0" />
        )}
        <div className="text-sm text-text leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-2 mb-6 list-none">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-sage text-white text-xs font-bold shrink-0 mt-0.5">
            {i + 1}
          </span>
          <span className="text-sm text-text-secondary leading-relaxed">{item}</span>
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------------------------------------------ */
/*  Page component                                                    */
/* ------------------------------------------------------------------ */

export default function SellForMaximumPricePage() {
  const activeId = useActiveSection();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* SEO head tags (client component workaround) */}
      <title>How to Sell Your Home for the Maximum Price | Kova</title>
      <meta
        name="description"
        content="The complete UK homeowner's guide to selling your property for the best possible price. Expert advice on valuations, choosing an estate agent, pricing strategy, and more."
      />
      <meta
        name="keywords"
        content="sell house for maximum price, estate agent tips UK, how to sell my house, property selling guide, choose estate agent, home selling checklist"
      />

      {/* Hero */}
      <section className="bg-sage-dark pt-32 pb-20 lg:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-sage-light text-sm font-medium mb-6">
              Free Homeowner Guide
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              How to sell your home for the maximum price
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto font-normal mb-10">
              A comprehensive, UK-specific guide covering everything from valuations and agent selection to pricing strategy and completion day. Written by the team at Kova.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/find-agents" size="lg" variant="primary">
                Compare Agents Free <ArrowRight size={18} />
              </Button>
              <Button size="lg" variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
                <Download size={18} /> Download PDF
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content area with sidebar ToC */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-16">
            {/* Sticky sidebar ToC -- desktop only */}
            <aside className="hidden lg:block">
              <nav className="sticky top-28">
                <p className="text-xs font-semibold text-sage uppercase tracking-wider mb-4">Contents</p>
                <ul className="space-y-1">
                  {sections.map(({ id, label, icon: Icon }) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-colors duration-200 ${
                          activeId === id
                            ? 'bg-sage-50 text-sage font-semibold'
                            : 'text-text-secondary hover:text-text hover:bg-surface'
                        }`}
                      >
                        <Icon size={16} className="shrink-0" />
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-4 rounded-2xl bg-sage-50 border border-sage/10">
                  <p className="text-xs font-semibold text-sage mb-2">Need help choosing an agent?</p>
                  <p className="text-xs text-text-secondary mb-3">Compare top-performing local agents with verified data.</p>
                  <Button href="/find-agents" size="sm" variant="primary" className="w-full text-xs">
                    Compare Agents <ArrowRight size={14} />
                  </Button>
                </div>
              </nav>
            </aside>

            {/* Main content */}
            <article className="max-w-3xl">
              {/* ---------------------------------------------------- */}
              {/*  Section 1: Understanding Value                       */}
              {/* ---------------------------------------------------- */}
              <AnimatedSection>
                <SectionHeading id="understanding-value">1. Understanding Your Property&apos;s True Value</SectionHeading>
                <Paragraph>
                  Before you speak to a single estate agent, do your own homework. The more you know about your property&apos;s
                  market value, the better equipped you&apos;ll be to spot an agent who overvalues to win your instruction -- or
                  one who undervalues to secure a quick sale.
                </Paragraph>

                <SubHeading>How to Research Comparable Sales</SubHeading>
                <Paragraph>
                  The best way to understand what your home is worth is to look at what similar properties nearby have
                  actually sold for -- not what they were listed at.
                </Paragraph>
                <BulletList
                  items={[
                    'HM Land Registry Price Paid Data (gov.uk/search-house-prices) -- shows actual completion prices, dates, and property types. Focus on the last 12 months within a quarter-mile radius.',
                    'Rightmove Sold Prices (rightmove.co.uk/house-prices) -- combines Land Registry data with original listing photos so you can compare condition.',
                    'Zoopla Estimates -- useful as a rough starting point but cannot account for condition, improvements, or hyperlocal factors.',
                  ]}
                />
                <Callout type="tip">
                  <strong>Top tip:</strong> Create a spreadsheet of 5-10 comparable sales. Note the sold price, date, property
                  type, bedroom count, condition, and differences from your property. This gives you an evidence-based price
                  range before agents walk through your door.
                </Callout>

                <SubHeading>Factors That Affect Valuation</SubHeading>
                <Paragraph>
                  Understanding what drives value helps you interpret agent valuations and prioritise improvements.
                </Paragraph>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-2xl p-5 shadow-card">
                    <p className="text-sm font-semibold text-text mb-3">Location Factors</p>
                    <BulletList
                      items={[
                        'School catchment areas (Ofsted Outstanding)',
                        'Transport links and commute times',
                        'Flood risk (check gov.uk)',
                        'Nearby planning applications',
                        'Conservation area status',
                      ]}
                    />
                  </div>
                  <div className="bg-white rounded-2xl p-5 shadow-card">
                    <p className="text-sm font-semibold text-text mb-3">Property Factors</p>
                    <BulletList
                      items={[
                        'Total square footage',
                        'Condition of boiler, roof, electrics',
                        'EPC rating',
                        'South-facing garden premium',
                        'Off-street parking',
                      ]}
                    />
                  </div>
                </div>

                <SubHeading>Why You Should Get 3+ Valuations</SubHeading>
                <Paragraph>
                  Never instruct an agent based on a single valuation. Getting at least three valuations gives you a realistic
                  price range, insight into agent quality, negotiating leverage on fees, and a sense of each agent&apos;s marketing
                  approach.
                </Paragraph>
                <Callout type="warning">
                  <strong>Beware &quot;buying the instruction.&quot;</strong> Some agents deliberately overvalue to win your business,
                  then push for price reductions later. If one valuation is significantly above the others, ask them to justify
                  it with specific comparable evidence.
                </Callout>
              </AnimatedSection>

              {/* ---------------------------------------------------- */}
              {/*  Section 2: Choosing the Right Agent                  */}
              {/* ---------------------------------------------------- */}
              <AnimatedSection>
                <div className="border-t border-text/5 mt-16 pt-16" />
                <SectionHeading id="choosing-agent">2. Choosing the Right Estate Agent</SectionHeading>
                <Paragraph>
                  Your choice of estate agent can mean a difference of tens of thousands of pounds in your final sale price, and
                  months in how long it takes. This is not a decision to take lightly.
                </Paragraph>

                <SubHeading>What to Look For</SubHeading>
                <BulletList
                  items={[
                    'Number of properties sold in your area in the last 12 months',
                    'Average time from listing to sale agreed',
                    'Average percentage of asking price achieved',
                    'Quality of current listings (photography, descriptions, floorplans)',
                    'Online reviews on Google, Trustpilot, and allAgents',
                    'Communication style -- do they listen to your priorities?',
                  ]}
                />

                <SubHeading>Red Flags to Avoid</SubHeading>
                <div className="bg-terra/5 rounded-2xl p-5 mb-6 border border-terra/10">
                  <ul className="space-y-2">
                    {[
                      'Significantly higher valuation than competitors without evidence',
                      'Pressure to sign immediately or claims of "a buyer waiting"',
                      'Vague fee structures or reluctance to put terms in writing',
                      'Tie-in periods longer than 12 weeks',
                      'No professional photography included as standard',
                      'Poor-quality current listings on Rightmove/Zoopla',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <AlertTriangle size={14} className="text-terra mt-1 shrink-0" />
                        <span className="text-sm text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <SubHeading>12 Questions to Ask During Valuations</SubHeading>
                <NumberedList
                  items={[
                    'How many properties have you sold within half a mile of here in the last 12 months?',
                    'What is your average time from listing to sale agreed?',
                    'What percentage of asking price do you typically achieve?',
                    'Can you show me three comparable sales that support your valuation?',
                    'What is your marketing package? (Photography, floorplan, portals, social media)',
                    'Who will conduct the viewings? Will it always be the same person?',
                    'How often will you update me, and through which channels?',
                    'What is your fee structure, and what exactly is included?',
                    'What is the tie-in period and notice period?',
                    'What would your strategy be if we have not received an offer within four weeks?',
                    'Do you have properties currently listed for more than 12 weeks? If so, why?',
                    'Can I speak to two or three recent clients?',
                  ]}
                />

                <SubHeading>Understanding Fee Structures</SubHeading>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-text/10">
                        <th className="text-left py-3 pr-4 font-semibold text-text">Type</th>
                        <th className="text-left py-3 pr-4 font-semibold text-text">Typical Fee</th>
                        <th className="text-left py-3 font-semibold text-text">Best For</th>
                      </tr>
                    </thead>
                    <tbody className="text-text-secondary">
                      <tr className="border-b border-text/5">
                        <td className="py-3 pr-4 font-medium text-text">Sole agency</td>
                        <td className="py-3 pr-4">0.75%-1.5% + VAT</td>
                        <td className="py-3">Most sellers (best value)</td>
                      </tr>
                      <tr className="border-b border-text/5">
                        <td className="py-3 pr-4 font-medium text-text">Multi-agency</td>
                        <td className="py-3 pr-4">2%-3% + VAT</td>
                        <td className="py-3">Slow markets or unusual properties</td>
                      </tr>
                      <tr className="border-b border-text/5">
                        <td className="py-3 pr-4 font-medium text-text">Joint sole agency</td>
                        <td className="py-3 pr-4">1.5%-2% + VAT</td>
                        <td className="py-3">Wider coverage without full multi-agency cost</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-text">Online / hybrid</td>
                        <td className="py-3 pr-4">Fixed fee GBP 999-4,999</td>
                        <td className="py-3">Higher-value properties (if you are hands-on)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <Callout type="tip">
                  <strong>Always negotiate.</strong> Agent fees are not fixed. Even a 0.25% reduction on a GBP 350,000 sale
                  saves you GBP 875 + VAT.
                </Callout>

                <SubHeading>How Kova Helps With This Decision</SubHeading>
                <Paragraph>
                  Comparing agents manually is time-consuming and limited to whoever you happen to contact. Kova uses verified
                  Land Registry data to rank every estate agent in your area by actual performance -- properties sold, prices
                  achieved, and time taken. Combined with verified homeowner reviews, it gives you an evidence-based shortlist
                  in under 60 seconds, completely free.
                </Paragraph>
              </AnimatedSection>

              {/* ---------------------------------------------------- */}
              {/*  Section 3: Preparing Your Home                       */}
              {/* ---------------------------------------------------- */}
              <AnimatedSection>
                <div className="border-t border-text/5 mt-16 pt-16" />
                <SectionHeading id="preparing-home">3. Preparing Your Home for Sale</SectionHeading>
                <Paragraph>
                  The way you present your property can add -- or lose -- thousands of pounds. You do not need to spend a
                  fortune, but you do need to be strategic.
                </Paragraph>

                <SubHeading>Kerb Appeal: First Impressions Count</SubHeading>
                <Paragraph>
                  Buyers form an opinion within seconds of arriving. The exterior sets expectations for what is inside.
                </Paragraph>
                <BulletList
                  items={[
                    'Clean and repaint the front door in a smart, neutral colour',
                    'Polish or replace door furniture (handle, knocker, letterbox, house number)',
                    'Clean all windows inside and out',
                    'Weed and tidy the front garden; add seasonal planters either side of the door',
                    'Pressure wash the driveway and path',
                    'Ensure exterior lights work and bins are out of sight',
                    'Repair or repaint fencing, walls, and any peeling exterior paintwork',
                  ]}
                />

                <SubHeading>Decluttering and Staging</SubHeading>
                <Paragraph>
                  Buyers need to imagine themselves living in your home. Anything that prevents that -- excessive personal items,
                  clutter, or bold decor -- works against you.
                </Paragraph>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {[
                    { room: 'Kitchen', tips: 'Clear worktops completely. Leave only a kettle and chopping board. Descale taps. Clean behind appliances.' },
                    { room: 'Living Room', tips: 'Remove excess furniture. Limit to two sofas and a coffee table. Add a throw and neutral cushions.' },
                    { room: 'Bedrooms', tips: 'Fresh neutral bedding. Clear bedside tables. Tidy wardrobes (buyers will look inside).' },
                    { room: 'Bathrooms', tips: 'Remove all products from shower edges. Display fresh matching towels. Replace tired sealant.' },
                  ].map((r) => (
                    <div key={r.room} className="bg-white rounded-2xl p-5 shadow-card">
                      <p className="text-sm font-semibold text-text mb-2">{r.room}</p>
                      <p className="text-sm text-text-secondary leading-relaxed">{r.tips}</p>
                    </div>
                  ))}
                </div>
                <Callout type="tip">
                  <strong>Deep clean:</strong> Pay for a professional deep clean before listing photos. This is one of the
                  highest-return investments you can make.
                </Callout>

                <SubHeading>Cost-Effective Improvements That Add Value</SubHeading>
                <div className="space-y-3 mb-6">
                  {[
                    { label: 'Kitchen refresh', cost: 'GBP 200-2,000', detail: 'Repaint cabinets, replace handles, new worktop or splashback' },
                    { label: 'Bathroom update', cost: 'GBP 100-1,500', detail: 'Regrout, new toilet seat, new shower head, heated towel rail' },
                    { label: 'Garden', cost: 'GBP 100-1,000', detail: 'Mow and edge lawn, fresh bark/gravel, pressure wash patio, repair fences' },
                    { label: 'General', cost: 'GBP 50-500', detail: 'Neutral paint, new light fittings, fix squeaky doors and dripping taps' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4 bg-white rounded-2xl p-4 shadow-card">
                      <span className="text-xs font-bold text-sage bg-sage-50 px-3 py-1 rounded-full shrink-0 mt-0.5">
                        {item.cost}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-text">{item.label}</p>
                        <p className="text-sm text-text-secondary">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <SubHeading>Renovations That DON&apos;T Add Value</SubHeading>
                <BulletList
                  items={[
                    'Loft conversions without building regulations sign-off',
                    'Swimming pools (seen as a maintenance burden in the UK)',
                    'Overly bespoke finishes that appeal to a narrow market',
                    'Garage conversions in areas where parking is at a premium',
                    'Over-improving for the street -- spending GBP 80k on an extension when neighbours sell for GBP 250k',
                  ]}
                />

                <SubHeading>Professional Photography Tips</SubHeading>
                <BulletList
                  items={[
                    'Schedule for a bright day, mid-morning or early afternoon',
                    'Open all curtains and blinds; turn on all interior lights',
                    'Remove cars from the driveway for the exterior shot',
                    'Ensure every room is camera-ready before the photographer arrives',
                    'For premium properties, consider twilight photography (taken at dusk with interior lights glowing)',
                  ]}
                />
              </AnimatedSection>

              {/* ---------------------------------------------------- */}
              {/*  Section 4: Pricing Strategy                          */}
              {/* ---------------------------------------------------- */}
              <AnimatedSection>
                <div className="border-t border-text/5 mt-16 pt-16" />
                <SectionHeading id="pricing-strategy">4. Pricing Strategy</SectionHeading>
                <Paragraph>
                  Pricing is arguably the most important decision in the entire selling process. Get it right and your property
                  attracts strong interest and competitive offers. Get it wrong and it can languish on the market for months.
                </Paragraph>

                <SubHeading>The Psychology of Pricing</SubHeading>
                <Paragraph>
                  Buyers search portals using price brackets. On Rightmove, a buyer searching up to GBP 300,000 will never see
                  your property if it is listed at GBP 310,000.
                </Paragraph>
                <Callout type="tip">
                  <strong>Price brackets matter.</strong> If your property is worth around GBP 310,000, listing at
                  GBP 300,000 puts you in the searches of every buyer up to GBP 300,000 AND everyone above. Listing at
                  GBP 310,000 misses an entire bracket.
                </Callout>

                <SubHeading>Pricing Methods Compared</SubHeading>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-text/10">
                        <th className="text-left py-3 pr-4 font-semibold text-text">Method</th>
                        <th className="text-left py-3 pr-4 font-semibold text-text">How It Works</th>
                        <th className="text-left py-3 font-semibold text-text">Best For</th>
                      </tr>
                    </thead>
                    <tbody className="text-text-secondary">
                      <tr className="border-b border-text/5">
                        <td className="py-3 pr-4 font-medium text-text">Fixed / Asking Price</td>
                        <td className="py-3 pr-4">Set a price, expect offers near or at that level</td>
                        <td className="py-3">Standard approach in England & Wales</td>
                      </tr>
                      <tr className="border-b border-text/5">
                        <td className="py-3 pr-4 font-medium text-text">Offers Over</td>
                        <td className="py-3 pr-4">Sets a baseline, invites bids above</td>
                        <td className="py-3">Competitive markets; common in Scotland</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-text">Guide Price</td>
                        <td className="py-3 pr-4">Suggests a ballpark, invites offers</td>
                        <td className="py-3">Unusual properties or renovation projects</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <SubHeading>The Danger of Overpricing</SubHeading>
                <Callout type="warning">
                  <strong>This is the single most common mistake sellers make.</strong> Overpriced properties attract fewer
                  viewings, sit on the market longer, develop a &quot;stale&quot; reputation, and ultimately sell for less than they
                  would have if priced correctly from day one. Data consistently shows that well-priced properties achieve a
                  higher final sale price than those that start high and reduce.
                </Callout>
                <NumberedList
                  items={[
                    'Fewer viewings because your property looks poor value vs competitors',
                    'Buyers in your price bracket compare it with better properties',
                    'After 4-6 weeks, you reduce the price -- visible on Rightmove',
                    'Savvy buyers wait for further reductions, sensing desperation',
                    'You sell for less than you would have at the correct price from day one',
                  ]}
                />

                <SubHeading>When to Consider Price Reductions</SubHeading>
                <Paragraph>
                  If your property has been listed for 4-6 weeks with no offers despite reasonable viewing numbers, the price is
                  probably too high. Reduce by at least 5%, ideally dropping into a lower Rightmove search bracket, and time it
                  with a fresh marketing push.
                </Paragraph>
              </AnimatedSection>

              {/* ---------------------------------------------------- */}
              {/*  Section 5: Marketing                                 */}
              {/* ---------------------------------------------------- */}
              <AnimatedSection>
                <div className="border-t border-text/5 mt-16 pt-16" />
                <SectionHeading id="marketing">5. Marketing Your Property</SectionHeading>
                <Paragraph>
                  Even a beautifully presented, well-priced property will not sell if nobody sees it. Effective marketing is what
                  separates a good agent from a mediocre one.
                </Paragraph>

                <SubHeading>What Good Marketing Includes</SubHeading>
                <BulletList
                  items={[
                    'Professional photography (minimum 15-20 images)',
                    'Detailed, accurate floorplan',
                    'Compelling written description (not just a room list)',
                    'Listings on all major portals (Rightmove, Zoopla, OnTheMarket)',
                    'Premium or Featured placement on at least one portal',
                    'Social media promotion',
                    'EPC in place before listing goes live',
                  ]}
                />

                <SubHeading>Portal Listings</SubHeading>
                <Paragraph>
                  <strong>Rightmove</strong> is the UK&apos;s largest property portal with over 80% of buyer traffic -- listing here
                  is non-negotiable. <strong>Zoopla</strong> is the second-largest and also essential. <strong>OnTheMarket</strong> is
                  the third major portal and captures a meaningful segment, particularly at the premium end.
                </Paragraph>
                <Paragraph>
                  Ask your agent which portals they list on, whether they will pay for premium placements, and how quickly the
                  listing goes live after photos are taken.
                </Paragraph>

                <SubHeading>Social Media and Digital Marketing</SubHeading>
                <Paragraph>
                  A growing number of buyers discover properties through Instagram and Facebook. Good agents share property
                  videos, run targeted ads to people looking to move to your area, and create &quot;coming soon&quot; teasers before
                  the listing goes live.
                </Paragraph>

                <SubHeading>Floorplans and Virtual Tours</SubHeading>
                <Paragraph>
                  Rightmove data shows listings with floorplans receive 30% more interest. Never list without one. Virtual tours
                  (Matterport or similar) are particularly valuable for out-of-area buyers and for reducing time-wasting viewings.
                </Paragraph>

                <SubHeading>Open House vs Private Viewings</SubHeading>
                <Paragraph>
                  Open houses create efficiency and a sense of competition, but offer less individual attention. Private viewings
                  allow tailored tours and better rapport. For higher-value properties, private viewings are almost always
                  preferred. Whichever approach you choose, ensure your agent accompanies every viewing.
                </Paragraph>
              </AnimatedSection>

              {/* ---------------------------------------------------- */}
              {/*  Section 6: Sales Process                             */}
              {/* ---------------------------------------------------- */}
              <AnimatedSection>
                <div className="border-t border-text/5 mt-16 pt-16" />
                <SectionHeading id="sales-process">6. The Sales Process</SectionHeading>
                <Paragraph>
                  Once you accept an offer, the real work begins. The period between &quot;sale agreed&quot; and completion is where many
                  sales fall through. Understanding the process helps you keep things on track.
                </Paragraph>

                <SubHeading>Understanding the Chain</SubHeading>
                <Paragraph>
                  A chain forms when your sale depends on your buyer selling their property, and so on. The longer the chain, the
                  higher the risk of collapse.
                </Paragraph>
                <div className="space-y-2 mb-6">
                  {[
                    { type: 'Cash buyer, no chain', risk: 'Lowest risk', colour: 'bg-sage' },
                    { type: 'First-time buyer with mortgage', risk: 'Low risk', colour: 'bg-sage/70' },
                    { type: 'Buyer who has already sold (STC)', risk: 'Medium risk', colour: 'bg-terra/50' },
                    { type: 'Buyer who still needs to sell', risk: 'Higher risk', colour: 'bg-terra' },
                  ].map((b) => (
                    <div key={b.type} className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-card">
                      <span className={`w-3 h-3 rounded-full ${b.colour} shrink-0`} />
                      <span className="text-sm text-text font-medium flex-1">{b.type}</span>
                      <span className="text-xs text-text-secondary">{b.risk}</span>
                    </div>
                  ))}
                </div>

                <SubHeading>Negotiating Offers</SubHeading>
                <BulletList
                  items={[
                    'Never respond to an offer immediately -- take time to consider',
                    'Ask your agent about the buyer\'s chain status, mortgage approval, and timeline',
                    'A first offer is rarely a final offer; always counter-offer if it is below expectations',
                    'Consider the whole package: a lower cash offer may be worth more than a higher offer with chain risk',
                    'If you have multiple offers, inform all parties -- competition drives prices up',
                  ]}
                />

                <SubHeading>Choosing a Solicitor / Conveyancer</SubHeading>
                <BulletList
                  items={[
                    'Look for Law Society Conveyancing Quality Scheme (CQS) accreditation',
                    'Expect GBP 850-1,800 + disbursements for a standard sale',
                    'Prioritise responsiveness -- slow conveyancing is the top cause of delays',
                    'Instruct a solicitor before you list to save weeks later',
                  ]}
                />

                <SubHeading>Surveys and What to Expect</SubHeading>
                <Paragraph>
                  Your buyer will likely commission a survey. Minor issues are normal. Significant problems (subsidence, Japanese
                  knotweed, asbestos) often trigger renegotiation. If you know about issues, disclose them upfront -- surprises
                  in surveys kill deals.
                </Paragraph>

                <SubHeading>Exchange and Completion Timeline</SubHeading>
                <div className="bg-white rounded-2xl p-6 shadow-card mb-6">
                  <p className="text-sm font-semibold text-text mb-4">Typical timeline (England & Wales)</p>
                  <div className="space-y-3 text-sm text-text-secondary">
                    {[
                      ['Week 0', 'Offer accepted, solicitors instructed'],
                      ['Week 1-2', 'Searches ordered'],
                      ['Week 2-4', 'Survey completed'],
                      ['Week 3-6', 'Searches returned; mortgage offer issued'],
                      ['Week 4-8', 'Enquiries raised and answered'],
                      ['Week 8-12', 'Exchange of contracts (sale becomes legally binding)'],
                      ['Week 10-16', 'Completion -- moving day'],
                    ].map(([week, desc]) => (
                      <div key={week} className="flex items-start gap-4">
                        <span className="font-semibold text-sage shrink-0 w-20">{week}</span>
                        <span>{desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* ---------------------------------------------------- */}
              {/*  Section 7: Legal & Financial                         */}
              {/* ---------------------------------------------------- */}
              <AnimatedSection>
                <div className="border-t border-text/5 mt-16 pt-16" />
                <SectionHeading id="legal-financial">7. Legal & Financial Considerations</SectionHeading>

                <SubHeading>EPC Requirements</SubHeading>
                <Paragraph>
                  An Energy Performance Certificate is a legal requirement before marketing. It costs GBP 60-120 and is valid
                  for 10 years. Properties with higher EPC ratings (A-C) achieve 5-14% higher prices than equivalent G-rated
                  homes. Quick wins include loft insulation, LED lighting, and a smart thermostat.
                </Paragraph>

                <SubHeading>Stamp Duty (How It Affects Your Buyer)</SubHeading>
                <Paragraph>
                  You do not pay Stamp Duty when selling, but your buyer does, and it directly affects what they can offer.
                </Paragraph>
                <div className="bg-white rounded-2xl p-6 shadow-card mb-6 overflow-x-auto">
                  <p className="text-sm font-semibold text-text mb-4">SDLT Rates (England & Northern Ireland, from April 2025)</p>
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-text/10">
                        <th className="text-left py-2 pr-4 font-semibold text-text">Band</th>
                        <th className="text-left py-2 font-semibold text-text">Rate</th>
                      </tr>
                    </thead>
                    <tbody className="text-text-secondary">
                      <tr className="border-b border-text/5"><td className="py-2 pr-4">Up to GBP 125,000</td><td className="py-2">0%</td></tr>
                      <tr className="border-b border-text/5"><td className="py-2 pr-4">GBP 125,001 - 250,000</td><td className="py-2">2%</td></tr>
                      <tr className="border-b border-text/5"><td className="py-2 pr-4">GBP 250,001 - 925,000</td><td className="py-2">5%</td></tr>
                      <tr className="border-b border-text/5"><td className="py-2 pr-4">GBP 925,001 - 1,500,000</td><td className="py-2">10%</td></tr>
                      <tr><td className="py-2 pr-4">Over GBP 1,500,000</td><td className="py-2">12%</td></tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-text-secondary mt-3">First-time buyers: 0% on the first GBP 300,000 (properties up to GBP 500,000). Additional properties: 5% surcharge on top of standard rates.</p>
                </div>
                <Callout type="tip">
                  <strong>Threshold awareness:</strong> Properties just above a stamp duty bracket can be harder to sell. If
                  your property is around GBP 250,000, first-time buyers have significant purchasing power -- they are a
                  key audience.
                </Callout>

                <SubHeading>Capital Gains Tax</SubHeading>
                <Paragraph>
                  If the property is your main residence throughout ownership, you are exempt under Private Residence Relief.
                  CGT may apply if the property was rented out, is a second home, or was not always your primary residence.
                  Current residential rates are 18% (basic rate) and 24% (higher rate) with a GBP 3,000 annual exempt amount.
                  Speak to a tax adviser before listing if CGT may apply.
                </Paragraph>

                <SubHeading>Material Information Requirements</SubHeading>
                <Paragraph>
                  Since 2022, agents must include detailed &quot;material information&quot; in listings upfront: council tax band, tenure,
                  construction type, EPC rating, parking, flooding risk, broadband speed, and more. Providing this honestly from
                  the start reduces the risk of buyers pulling out after discovering something they were not told.
                </Paragraph>
              </AnimatedSection>

              {/* ---------------------------------------------------- */}
              {/*  Section 8: Top 20 Tips                               */}
              {/* ---------------------------------------------------- */}
              <AnimatedSection>
                <div className="border-t border-text/5 mt-16 pt-16" />
                <SectionHeading id="top-20-tips">8. Top 20 Tips -- Quick-Reference Checklist</SectionHeading>
                <Paragraph>
                  The most impactful actions summarised in one place. Print this, stick it on the fridge, and tick them off.
                </Paragraph>

                <div className="space-y-3 mb-8">
                  {[
                    'Research comparable sales using Land Registry and Rightmove sold prices before any agent visits.',
                    'Get at least three agent valuations and compare their evidence, not just their figures.',
                    'Beware agents who overvalue -- the highest valuation is not always the best one.',
                    'Choose your agent on performance data (sales in your area, time to sell, prices achieved).',
                    'Negotiate the agent\'s fee -- they are almost always flexible.',
                    'Instruct a solicitor early, ideally before you go on the market.',
                    'Get your EPC done first -- you need it before marketing, and a good rating is a selling point.',
                    'Declutter ruthlessly -- buyers need to see the space, not your belongings.',
                    'Invest in kerb appeal -- a clean front door and planted pots cost little but make a big impression.',
                    'Deep clean the entire property before photos are taken.',
                    'Repaint scuffed or bold walls in neutral colours.',
                    'Fix the small things -- dripping taps, squeaky doors, and cracked tiles signal neglect.',
                    'Insist on professional photography with a minimum of 15 high-quality images.',
                    'Ensure your listing includes a floorplan -- 30% more engagement on Rightmove.',
                    'Price realistically from day one -- overpricing costs you time and money.',
                    'Understand Rightmove price brackets and position your listing to maximise search visibility.',
                    'Make your property available for viewings as flexibly as possible, including evenings and weekends.',
                    'Consider the whole offer, not just the price -- chain, timeline, and buyer position all matter.',
                    'Stay responsive -- reply to solicitor queries within 24 hours to keep your chain moving.',
                    'Keep emotion in check -- price and present your home as a financial asset, not a sentimental one.',
                  ].map((tip, i) => (
                    <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-card">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-sage text-white text-xs font-bold shrink-0">
                        {i + 1}
                      </span>
                      <p className="text-sm text-text leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* ---------------------------------------------------- */}
              {/*  Bottom CTA                                           */}
              {/* ---------------------------------------------------- */}
              <AnimatedSection>
                <div className="border-t border-text/5 mt-16 pt-16" />
                <div className="rounded-3xl bg-sage-dark p-8 sm:p-12 text-center relative overflow-hidden">
                  {/* Decorative shapes */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400" fill="none" preserveAspectRatio="none">
                    <circle cx="100" cy="50" r="120" fill="#1B4332" opacity="0.3" />
                    <circle cx="700" cy="350" r="150" fill="#52B788" opacity="0.15" />
                  </svg>
                  <div className="relative">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                      Ready to find the right agent?
                    </h2>
                    <p className="text-white/60 max-w-xl mx-auto mb-8 font-normal">
                      Now that you know what to look for, compare top-performing estate agents in your area using verified
                      Land Registry data and real homeowner reviews. Free, impartial, and takes 60 seconds.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <Button href="/find-agents" size="lg" variant="primary">
                        Compare Agents Now <ArrowRight size={18} />
                      </Button>
                      <Button size="lg" variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
                        <Download size={18} /> Download This Guide
                      </Button>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-text-secondary mt-8 text-center leading-relaxed">
                  This guide is provided by Kova for informational purposes. While we strive to ensure accuracy, property
                  transactions are complex and individual circumstances vary. Always seek professional legal and financial
                  advice for your specific situation. Last updated March 2026.
                </p>
              </AnimatedSection>
            </article>
          </div>
        </div>
      </section>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-sage text-white shadow-lg flex items-center justify-center hover:bg-sage-dark transition-colors z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </>
  );
}
