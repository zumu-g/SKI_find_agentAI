import { NavItem } from '@/types/common';

export const SITE_NAME = 'Kova';
export const SITE_TAGLINE = 'AI-Powered Agent Intelligence';
export const SITE_DESCRIPTION = 'Find your perfect estate agent with AI-powered matching. Compare top-performing local agents based on real sales data. Free, impartial, and takes 60 seconds.';
export const SITE_URL = 'https://kova.ai';

export const NAV_ITEMS: NavItem[] = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Find Agents', href: '/find-agents' },
  { label: 'For Agents', href: '/for-agents' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const STATS = [
  { label: 'Homeowners Matched', value: 45000, suffix: '+' },
  { label: 'Verified Agents', value: 2500, suffix: '+' },
  { label: 'Average Price Achieved', value: 98.2, suffix: '%' },
  { label: 'Average Rating', value: 4.8, suffix: '/5' },
];
