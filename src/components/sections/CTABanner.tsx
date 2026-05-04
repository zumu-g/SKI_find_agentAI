'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function CTABanner({ variant = 'seller' }: { variant?: 'seller' | 'agent' }) {
  const isAgent = variant === 'agent';
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-[#f5f5f5] py-24 lg:py-32">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="max-w-2xl mx-auto px-6 text-center"
      >
        <span className="text-[11px] font-semibold text-[#C65D3E] uppercase tracking-[0.1em]">
          GET STARTED
        </span>

        <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-black text-[#0a0a0a] tracking-tight leading-[1.05]">
          {isAgent
            ? <>Grow your business<br className="hidden sm:block" /> with Kova</>
            : <>Ready to find your<br className="hidden sm:block" /> perfect agent?</>}
        </h2>

        <p className="mt-4 text-[17px] text-[#525252] leading-relaxed">
          {isAgent
            ? 'Connect with motivated homeowners in your area. Only pay when you succeed.'
            : "Join 45,000+ Australians who've sold smarter with Kova. Free, fast, no obligation."}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={isAgent ? '/for-agents' : '/find-agents'}
            className="inline-flex items-center justify-center rounded-full bg-[#C65D3E] text-white font-bold px-8 py-3.5 text-[16px] hover:bg-[#b04f33] transition-colors duration-200"
          >
            {isAgent ? 'Join as an Agent' : 'Find My Agent'}
          </Link>
          <Link
            href={isAgent ? '/about' : '/how-it-works'}
            className="inline-flex items-center justify-center rounded-full border border-[#e5e5e5] bg-white text-[#0a0a0a] font-semibold px-8 py-3.5 text-[16px] hover:border-[#c0c0c0] transition-colors duration-200"
          >
            {isAgent ? 'Learn More' : 'How It Works'}
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-[12px] font-semibold text-[#8a8a8a] uppercase tracking-wide">
          <span>✓ Free for homeowners</span>
          <span>✓ No cold calls</span>
          <span>✓ Licensed agents</span>
        </div>
      </motion.div>
    </section>
  );
}
