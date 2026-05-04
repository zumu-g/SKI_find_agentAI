'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

const stats = [
  { value: 127, prefix: '$', suffix: 'B+', label: 'TOTAL SALE VALUE', decimals: 0 },
  { value: 45000, prefix: '', suffix: '+', label: 'HOMEOWNERS HELPED', decimals: 0 },
  { value: 2500, prefix: '', suffix: '+', label: 'VERIFIED AGENTS', decimals: 0 },
  { value: 98.2, prefix: '', suffix: '%', label: 'AVERAGE PRICE ACHIEVED', decimals: 1 },
];

function AnimatedNumber({
  value,
  prefix,
  suffix,
  decimals,
}: {
  value: number;
  prefix: string;
  suffix: string;
  decimals: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 50, damping: 20, mass: 1 });
  const displayed = useTransform(spring, (v) =>
    decimals > 0 ? v.toFixed(decimals) : Math.floor(v).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      <motion.span>{displayed}</motion.span>
      {suffix}
    </span>
  );
}

export function StatsCounter() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center" ref={sectionRef}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-[11px] font-semibold text-terra uppercase tracking-[0.1em]"
          >
            THE NUMBERS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.07, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-[clamp(1.75rem,3vw,2.5rem)] font-black text-ink tracking-tight mt-3"
          >
            The numbers speak for themselves
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.45,
                delay: 0.1 + i * 0.07,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="bg-white rounded-[16px] p-8 text-center"
            >
              <div className="text-[clamp(2.25rem,4vw,3.5rem)] font-black text-ink leading-none tabular-nums">
                <AnimatedNumber
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
              <div className="text-[11px] font-semibold text-ink-tertiary uppercase tracking-[0.1em] mt-3">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
