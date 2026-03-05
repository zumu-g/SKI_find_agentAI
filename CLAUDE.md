# Kova — AI-Powered Estate Agent Comparison Platform

## Project
UK estate agent comparison/referral site. Homeowners enter postcode, compare agents by real performance data (Land Registry, verified reviews), choose an agent. Revenue: 0.25% referral fee on sale price (capped £2,500 + VAT).

## Tech Stack
- Next.js 15.1.0 with App Router
- TypeScript
- Tailwind CSS v4 (uses `@theme` in globals.css, NOT tailwind.config.ts)
- PostCSS with `@tailwindcss/postcss`
- Framer Motion for animations
- Lucide React + custom inline SVGs for illustrations

## Design System (V3)
- Palette: sage (#2D6A4F), terracotta (#C65D3E), cream (#FDF8F3)
- Font: Inter only (sans-serif throughout)
- Style: warm, organic, hand-drawn aesthetic inspired by gatheredhere.com.au
- Headings: font-bold (not extrabold), body: font-normal
- Buttons: rounded-full (pill shape), primary=bg-terra, secondary=border-sage

## Key Patterns
- Agent data: src/data/agents.json (12 mock agents with Unsplash images)
- Agent search: src/lib/agents.ts (postcode prefix matching)
- Components: src/components/{layout,sections,search,shared,ui}/
- Pages use generateStaticParams for SSG where applicable

## Git
- Remote: https://github.com/zumu-g/SKI_find_agentAI.git
- Branch: main
