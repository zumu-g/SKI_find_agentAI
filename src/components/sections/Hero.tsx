'use client';

import { motion } from 'framer-motion';
import { PostcodeSearch } from '@/components/search/PostcodeSearch';

const ease = [0.22, 1, 0.36, 1] as const;

const stagger = (i: number) => ({ duration: 0.45, delay: i * 0.08, ease });

function AgentComparisonCard() {
  const agents = [
    { initials: 'MH', name: 'Mitchell Harris', score: '9.4', rank: 1, stars: 5, reviews: 127 },
    { initials: 'SP', name: 'Sarah Palmer', score: '8.7', rank: 2, stars: 5, reviews: 98 },
    { initials: 'RB', name: 'Roberts & Bell', score: '8.1', rank: 3, stars: 4, reviews: 74 },
  ];

  return (
    <div className="w-full rounded-[16px] border border-border bg-white p-5" style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-ink-tertiary mb-0.5">Agent Results</p>
          <p className="text-sm font-bold text-ink">Surry Hills, 2010</p>
        </div>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface text-[11px] font-semibold text-ink-secondary">
          <svg viewBox="0 0 8 8" className="w-1.5 h-1.5 shrink-0">
            <circle cx="4" cy="4" r="4" fill="#52B788" />
          </svg>
          3 matches
        </span>
      </div>

      <div className="flex flex-col gap-2.5">
        {agents.map((agent) => (
          <div
            key={agent.initials}
            className="flex items-center gap-3 p-3 rounded-[10px] bg-surface"
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold text-white shrink-0"
              style={{ background: agent.rank === 1 ? '#C65D3E' : '#8a8a8a' }}
            >
              {agent.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold text-ink leading-tight truncate">{agent.name}</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 8 8" className="w-2 h-2">
                      <path
                        d="M4 0.5L4.927 3.118H7.694L5.384 4.764L6.31 7.382L4 5.736L1.69 7.382L2.616 4.764L0.306 3.118H3.073L4 0.5Z"
                        fill={i < agent.stars ? '#C65D3E' : '#e5e5e5'}
                      />
                    </svg>
                  ))}
                </div>
                <span className="text-[10px] text-ink-tertiary">{agent.reviews} reviews</span>
              </div>
            </div>
            <div className="shrink-0 text-right">
              <div
                className="inline-flex items-center justify-center w-10 h-8 rounded-[8px] text-sm font-black"
                style={{
                  background: agent.rank === 1 ? '#fde8e0' : '#f5f5f5',
                  color: agent.rank === 1 ? '#C65D3E' : '#525252',
                }}
              >
                {agent.score}
              </div>
              <p className="text-[9px] font-semibold uppercase tracking-wide text-ink-tertiary mt-0.5">Score</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-border grid grid-cols-3 gap-3">
        {[
          { label: 'Avg Days', value: '38' },
          { label: 'List Price', value: '101.4%' },
          { label: 'Listings', value: '24' },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-[15px] font-black text-ink leading-none">{stat.value}</p>
            <p className="text-[9px] font-semibold uppercase tracking-[0.08em] text-ink-tertiary mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">

          <div className="flex-[0_0_55%] min-w-0">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={stagger(0)}
              className="text-[11px] font-semibold text-terra uppercase tracking-[0.1em] mb-5"
            >
              AI-Powered Agent Matching
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={stagger(1)}
              className="text-[clamp(2.75rem,5.5vw,4.5rem)] font-black text-ink leading-[1.05] tracking-tight"
            >
              Find the right agent.
              <br />
              Sell for more.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={stagger(2)}
              className="text-[17px] text-ink-secondary leading-relaxed max-w-md mt-5"
            >
              Compare top local estate agents by real performance data. Free, impartial, 60 seconds.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={stagger(3)}
              className="mt-8"
            >
              <PostcodeSearch size="large" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={stagger(4)}
              className="mt-8 flex items-center gap-6"
            >
              {[
                { value: '45,000+', label: 'HOMEOWNERS' },
                { value: '2,500+', label: 'AGENTS' },
                { value: '98.2%', label: 'AVG. PRICE' },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6">
                  {i > 0 && <span className="w-px h-8 bg-border shrink-0" />}
                  <div>
                    <p className="text-[22px] font-black text-ink leading-none">{stat.value}</p>
                    <p className="text-[11px] uppercase tracking-wide text-ink-tertiary mt-0.5">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="flex-[0_0_45%] min-w-0 w-full lg:w-auto"
          >
            <AgentComparisonCard />
          </motion.div>

        </div>
      </div>
      <div className="mt-24 border-b border-border" />
    </section>
  );
}
