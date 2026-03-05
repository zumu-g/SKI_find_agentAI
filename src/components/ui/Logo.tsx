'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className, variant = 'dark' }: { className?: string; variant?: 'dark' | 'light' }) {
  const textColor = variant === 'light' ? 'text-white' : 'text-text';
  const accentColor = variant === 'light' ? 'text-white/60' : 'text-sage';

  return (
    <Link href="/" className={cn('flex items-center gap-2.5 group', className)}>
      <div className="relative w-9 h-9 flex items-center justify-center">
        <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9">
          <rect width="36" height="36" rx="10" className={cn(variant === 'light' ? 'fill-white/10' : 'fill-sage')} />
          {/* Simple house shape */}
          <path
            d="M18 8L8 17H11V27H25V17H28L18 8Z"
            fill={variant === 'light' ? 'rgba(255,255,255,0.2)' : '#D8F3DC'}
            stroke={variant === 'light' ? 'white' : 'white'}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Door */}
          <rect x="15" y="20" width="6" height="7" rx="1" fill={variant === 'light' ? 'rgba(255,255,255,0.3)' : '#FDF8F3'} />
          {/* Sparkle dots */}
          <circle cx="28" cy="10" r="1.5" fill={variant === 'light' ? 'white' : '#E8956F'} />
          <circle cx="31" cy="7" r="1" fill={variant === 'light' ? 'rgba(255,255,255,0.6)' : '#C65D3E'} />
          <circle cx="25" cy="7" r="1" fill={variant === 'light' ? 'rgba(255,255,255,0.6)' : '#E8956F'} />
        </svg>
      </div>
      <div className="flex items-baseline gap-0.5">
        <span className={cn('text-xl font-bold tracking-tight', textColor)}>
          Kova
        </span>
        <span className={cn('text-[10px] font-semibold tracking-wide', accentColor)}>
          ai
        </span>
      </div>
    </Link>
  );
}
