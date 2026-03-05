# Resume Prompt — Kova Project

Copy and paste this to resume the project in a new Claude Code session:

---

We're continuing work on the Kova project — a UK estate agent comparison/referral platform. Here's where we left off:

## What's Built
- Full Next.js 15 website with V3 design (sage green/terracotta/cream, custom SVG illustrations)
- Pages: homepage, find-agents (postcode search), agent profiles (12 mock agents), how-it-works, about, contact, for-agents, guides/sell-for-maximum-price
- Pushed to GitHub: https://github.com/zumu-g/SKI_find_agentAI.git (main branch)
- Business plan, marketing plan, and homeowner guide in docs/ folder

## Pending Decision: Brand Name
"Kova" has UK property conflicts. A naming committee researched 75+ names and presented 3 finalists:

1. **Vendora** (recommended) — Latin "I sell", brandable, vendora.co.uk/.ai likely available
2. **AgentLens** — "see your agents clearly", contains SEO keyword "agent"
3. **SellSure** — contains top search keyword "sell", emotionally reassuring

I need to choose one (or explore alternatives), then rebrand the entire site.

## Next Steps After Naming
- Rebrand site with chosen name (logo, metadata, copy, colours if needed)
- Register domain
- Set up Vercel deployment
- Build out programmatic SEO pages (200+ local area pages)
- Connect real agent data (Land Registry API, Rightmove/Zoopla scraping)
- Build agent onboarding portal (for-agents sign-up flow)
- Implement lead capture and referral tracking
- Add blog/content section for SEO (per marketing plan)

## Key Files
- `CLAUDE.md` — project context for Claude Code
- `docs/business-plan.md` — investor-ready business plan
- `docs/marketing-plan.md` — year 1 marketing strategy
- `docs/homeowner-guide-sell-for-maximum-price.md` — lead magnet content
- `docs/naming_research_domain_availability.txt` — naming research
- `docs/SEO_Keyword_Research_Report_UK_Estate_Agent_Comparison.md` — keyword data

## To Start Dev Server
```bash
lsof -ti TCP:3000 | xargs kill -9 2>/dev/null; npx next dev -p 3000
```
