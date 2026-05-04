import { NavItem } from '@/types/common';

export const SITE_NAME = 'Kova';
export const SITE_TAGLINE = 'Find your perfect agent. Sell for more.';
export const SITE_DESCRIPTION =
  'Find the right estate agent with AI. Compare top local agents by real performance data, fees, and verified reviews — free for homeowners.';
export const SITE_URL = 'https://kova.ai';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Find Agents', href: '/find-agents' },
  { label: 'For Agents', href: '/for-agents' },
  { label: 'About', href: '/about' },
];

export const FOOTER_LINKS = {
  forSellers: [
    { label: 'For Sellers', href: '/find-agents' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Find Agents', href: '/find-agents' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'For Agents', href: '/for-agents' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
};

export const TRUST_STATS = {
  homeowners: '45,000+',
  agents: '2,500+',
  avgPrice: '98.2%',
  totalValue: '£127M+',
};

export const STATS = [
  { label: 'Homeowners Matched', value: 45000, suffix: '+' },
  { label: 'Verified Agents', value: 2500, suffix: '+' },
  { label: 'Average Price Achieved', value: 98.2, suffix: '%' },
  { label: 'Average Rating', value: 4.8, suffix: '/5' },
];
