-- Kova: Agent comparison platform schema
-- Run this in Supabase SQL Editor to initialise the database

create extension if not exists "uuid-ossp";

-- ── Agents ──────────────────────────────────────────────────────────────────

create table if not exists agents (
  id                    uuid primary key default gen_random_uuid(),
  external_id           text unique,               -- Apify / Domain agent ID
  slug                  text unique not null,
  name                  text not null,
  agency                text,
  profile_image         text,
  bio                   text,
  short_bio             text,
  phone                 text,
  mobile                text,
  email                 text,
  website               text,
  address_line1         text,
  suburb                text not null,
  state                 text,
  postcode              text not null,
  coverage_postcodes    text[] default '{}',
  specialisms           text[] default '{}',
  tier                  text default 'standard',   -- standard | featured | premium
  verified              boolean default false,
  year_established      int,
  -- Scraped performance data from Domain/REA
  properties_sold       int default 0,
  avg_sale_time         int,                       -- days on market
  avg_sold_price        numeric,
  asking_price_achieved numeric,                   -- % of asking
  active_listings       int default 0,
  years_experience      int default 0,
  profile_url           text,
  source                text default 'manual',     -- domain | rea | manual
  last_scraped_at       timestamptz,
  created_at            timestamptz default now(),
  updated_at            timestamptz default now()
);

create index if not exists agents_postcode_idx on agents(postcode);
create index if not exists agents_coverage_idx on agents using gin(coverage_postcodes);
create index if not exists agents_slug_idx on agents(slug);

-- ── Reviews ─────────────────────────────────────────────────────────────────

create table if not exists reviews (
  id                  uuid primary key default gen_random_uuid(),
  agent_id            uuid references agents(id) on delete cascade,
  reviewer_name       text not null,
  reviewer_email_hash text not null,   -- md5(lower(email)) — never store raw email
  rating              smallint not null check (rating between 1 and 5),
  review_text         text,
  sale_address        text,            -- helps verification without a data API
  sale_date           date,
  verified            boolean default false,
  confirm_token       text,            -- cleared after confirmation
  confirmed_at        timestamptz,
  created_at          timestamptz default now()
);

create index if not exists reviews_agent_idx on reviews(agent_id);
create index if not exists reviews_verified_idx on reviews(verified);
create index if not exists reviews_token_idx on reviews(confirm_token) where confirm_token is not null;

-- ── Agent stats view ────────────────────────────────────────────────────────
-- Combines scraped performance data with live review aggregates

create or replace view agent_stats as
select
  a.id,
  a.slug,
  a.name,
  a.agency,
  a.profile_image,
  a.short_bio,
  a.phone,
  a.email,
  a.suburb,
  a.state,
  a.postcode,
  a.coverage_postcodes,
  a.tier,
  a.verified,
  a.properties_sold,
  a.avg_sale_time,
  a.asking_price_achieved,
  a.active_listings,
  a.years_experience,
  a.profile_url,
  coalesce(count(r.id) filter (where r.verified), 0)::int          as total_reviews,
  coalesce(round(avg(r.rating) filter (where r.verified), 1), 0)   as average_rating
from agents a
left join reviews r on r.agent_id = a.id
group by a.id;

-- ── Updated-at trigger ──────────────────────────────────────────────────────

create or replace function set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger agents_updated_at
  before update on agents
  for each row execute function set_updated_at();
