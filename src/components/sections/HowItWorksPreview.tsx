'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, BarChart2, CheckCircle } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

const steps = [
  {
    step: 'STEP 01',
    icon: MapPin,
    title: 'Enter your postcode',
    description: 'Tell us where your property is. Takes 10 seconds.',
  },
  {
    step: 'STEP 02',
    icon: BarChart2,
    title: 'Compare local agents',
    description: 'See a ranked shortlist based on real sales data, fees, and verified reviews.',
  },
  {
    step: 'STEP 03',
    icon: CheckCircle,
    title: 'Book for free',
    description: 'Choose your agent and book a free valuation — no obligation.',
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function HowItWorksPreview() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: '-80px' });

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        <AnimatedSection direction="up" className="mb-14 max-w-xl">
          <span className="text-[11px] font-semibold text-terra uppercase tracking-[0.1em]">
            HOW IT WORKS
          </span>
          <h2 className="mt-3 text-[clamp(1.75rem,3vw,2.5rem)] font-black text-ink tracking-tight leading-[1.1]">
            Three steps to the right agent
          </h2>
          <p className="mt-4 text-[16px] text-ink-secondary">
            No lengthy forms. No pressure calls. Smart comparison in under a minute.
          </p>
        </AnimatedSection>

        <div
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 12 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.1, ease }}
                className="bg-surface rounded-[16px] p-7"
              >
                <p className="text-[11px] font-semibold text-ink-tertiary uppercase tracking-[0.1em] mb-4">
                  {step.step}
                </p>
                <div className="w-10 h-10 bg-white rounded-[10px] flex items-center justify-center mb-4">
                  <Icon size={20} className="text-terra" />
                </div>
                <h3 className="text-[19px] font-bold text-ink mb-2">{step.title}</h3>
                <p className="text-[14px] text-ink-secondary leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
