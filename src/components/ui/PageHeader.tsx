'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type PageHeaderVariant = 'sage' | 'cream' | 'terra';

const variantStyles: Record<PageHeaderVariant, { section: string; eyebrow: string; dots: string }> = {
  sage: {
    section: 'bg-sage text-white',
    eyebrow: 'text-sage-50/80',
    dots: 'bg-white/10',
  },
  cream: {
    section: 'bg-cream-dark text-text',
    eyebrow: 'text-sage',
    dots: 'bg-sage/10',
  },
  terra: {
    section: 'bg-terra text-white',
    eyebrow: 'text-white/70',
    dots: 'bg-white/10',
  },
};

const DOT_POSITIONS = [
  { top: '12%', left: '8%' },
  { top: '28%', left: '14%' },
  { top: '55%', left: '5%' },
  { top: '75%', left: '18%' },
  { top: '18%', right: '10%' },
  { top: '42%', right: '6%' },
  { top: '68%', right: '14%' },
  { top: '85%', right: '22%' },
  { top: '8%', left: '35%' },
  { top: '90%', left: '48%' },
  { top: '5%', right: '38%' },
  { top: '92%', right: '40%' },
];

const prefersReducedMotion =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  variant = 'cream',
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  variant?: PageHeaderVariant;
  className?: string;
}) {
  const styles = variantStyles[variant];

  return (
    <section
      className={cn(
        'relative overflow-hidden py-24 text-center',
        styles.section,
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {DOT_POSITIONS.map((pos, i) => (
          <span
            key={i}
            className={cn('absolute block w-1.5 h-1.5 rounded-full', styles.dots)}
            style={pos}
          />
        ))}
        <span
          className={cn('absolute block w-3 h-3 rounded-full opacity-60', styles.dots)}
          style={{ top: '38%', left: '22%' }}
        />
        <span
          className={cn('absolute block w-2 h-2 rounded-full opacity-40', styles.dots)}
          style={{ top: '60%', right: '28%' }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-4">
        {eyebrow && (
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className={cn('mb-3 text-sm font-semibold uppercase tracking-widest', styles.eyebrow)}
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.h1
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: eyebrow ? 0.08 : 0, ease: 'easeOut' }}
          className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className={cn(
              'mt-5 text-lg leading-relaxed',
              variant === 'cream' ? 'text-text-secondary' : 'opacity-80'
            )}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
