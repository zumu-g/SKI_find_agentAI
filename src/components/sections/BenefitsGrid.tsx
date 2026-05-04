'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShieldCheck, Zap, Star, Banknote } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Verified data',
    description: 'Real property transaction data, not self-reported.',
  },
  {
    icon: Zap,
    title: 'AI matching',
    description: 'Ranks agents by what matters for your property.',
  },
  {
    icon: Star,
    title: 'Genuine reviews',
    description: 'Verified after every completed sale.',
  },
  {
    icon: Banknote,
    title: 'Free for sellers',
    description: 'We earn a referral fee from agents. You pay nothing.',
  },
];

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] },
  },
};

export function BenefitsGrid() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: '-80px' });

  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-16 items-start">

          <AnimatedSection direction="left" delay={0} className="lg:sticky lg:top-28 lg:self-start">
            <span className="text-[11px] font-semibold text-terra uppercase tracking-[0.1em]">
              WHY KOVA
            </span>
            <h2 className="mt-3 text-[clamp(1.75rem,3vw,2.5rem)] font-black text-ink tracking-tight leading-[1.1]">
              Built for homeowners, not agents
            </h2>
            <p className="mt-4 text-[16px] text-ink-secondary leading-relaxed">
              Every feature gives you more information, more confidence, and a better sale price.
            </p>
            <a
              href="#how-it-works"
              className="text-[14px] font-semibold text-terra hover:text-terra-dark mt-6 inline-block transition-colors duration-200"
            >
              See how it works →
            </a>
          </AnimatedSection>

          <motion.div
            ref={gridRef}
            initial="hidden"
            animate={gridInView ? 'visible' : 'hidden'}
            variants={gridVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  variants={cardVariants}
                  className="bg-white rounded-[16px] p-6"
                >
                  <div className="w-8 h-8 rounded-[8px] bg-surface flex items-center justify-center">
                    <Icon size={16} className="text-terra" />
                  </div>
                  <h3 className="text-[15px] font-bold text-ink mt-3 mb-1">{benefit.title}</h3>
                  <p className="text-[13px] text-ink-secondary leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
