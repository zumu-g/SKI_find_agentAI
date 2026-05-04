'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

type TrustBadgeVariant = 'sage' | 'terra' | 'cream';

const trustBadgeVariants: Record<TrustBadgeVariant, string> = {
  sage: 'bg-sage-50 text-sage border border-sage/20',
  terra: 'bg-terra/10 text-terra-dark border border-terra/20',
  cream: 'bg-cream-dark text-text-secondary border border-border',
};

export function TrustBadge({
  text,
  variant = 'sage',
  className,
}: {
  text: string;
  variant?: TrustBadgeVariant;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full',
        trustBadgeVariants[variant],
        className
      )}
    >
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle
          cx="5"
          cy="5"
          r="4.5"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M3 5l1.3 1.5L7 3.5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {text}
    </span>
  );
}

const dotDelays = [0, 0.15, 0.3, 0.45, 0.6];

export function AIBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1.5 bg-sage-50 text-sage border border-sage/20 rounded-full text-xs font-medium',
        className
      )}
    >
      <span className="flex items-center gap-[3px]" aria-hidden="true">
        {dotDelays.map((delay, i) => (
          <motion.span
            key={i}
            className="block w-1 h-1 rounded-full bg-sage"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 1.2,
              delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </span>
      Powered by AI
    </span>
  );
}

export function VerifiedBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1.5 bg-sage-50 text-sage border border-sage/20 rounded-full text-xs font-medium',
        className
      )}
    >
      <ShieldCheck className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
      Verified Agent
    </span>
  );
}

export function StatPill({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-baseline gap-1.5 px-4 py-2 bg-cream-dark border border-border rounded-full',
        className
      )}
    >
      <span className="text-sm font-bold text-text">{value}</span>
      <span className="text-xs text-text-secondary">{label}</span>
    </span>
  );
}
