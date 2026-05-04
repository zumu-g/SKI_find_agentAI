'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

type LogoSize = 'sm' | 'md' | 'lg';
type LogoVariant = 'dark' | 'light';

const sizeMap: Record<LogoSize, { height: number; iconSize: number; fontSize: string; gap: string }> = {
  sm: { height: 24, iconSize: 24, fontSize: 'text-base', gap: 'gap-2' },
  md: { height: 32, iconSize: 32, fontSize: 'text-xl', gap: 'gap-2.5' },
  lg: { height: 48, iconSize: 48, fontSize: 'text-3xl', gap: 'gap-3' },
};

export function Logo({
  size = 'md',
  variant = 'dark',
  className,
}: {
  size?: LogoSize;
  variant?: LogoVariant;
  className?: string;
}) {
  const { iconSize, fontSize, gap } = sizeMap[size];
  const textColor = variant === 'light' ? '#FFFFFF' : '#2D2418';

  return (
    <Link
      href="/"
      className={cn('inline-flex items-center group select-none', gap, className)}
      aria-label="Kova — home"
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="48" height="48" rx="12" fill="#C65D3E" />

        <path
          d="M24 10L10 22H14V37H34V22H38L24 10Z"
          fill="rgba(255,255,255,0.15)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
          strokeLinejoin="round"
        />

        <polyline
          points="10,27 17,20 22,24 30,16 38,14"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        <polyline
          points="33,14 38,14 38,19"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        <rect x="20" y="28" width="8" height="9" rx="1.5" fill="rgba(255,255,255,0.4)" />
      </svg>

      <svg
        width={iconSize * (size === 'sm' ? 2.5 : size === 'md' ? 2.6 : 2.7)}
        height={iconSize}
        viewBox="0 0 84 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={cn('transition-opacity duration-200', fontSize)}
      >
        <text
          x="0"
          y="26"
          fontFamily="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          fontSize="32"
          fontWeight="700"
          letterSpacing="-1"
          fill={textColor}
        >
          Kova
        </text>
      </svg>
    </Link>
  );
}
