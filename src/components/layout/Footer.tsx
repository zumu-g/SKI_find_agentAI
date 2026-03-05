import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { Shield, Award, Lock } from 'lucide-react';

const footerLinks = {
  'For Sellers': [
    { label: 'Find Agents', href: '/find-agents' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Selling Guides', href: '#' },
    { label: 'Market Reports', href: '#' },
  ],
  'For Agents': [
    { label: 'Join Kova', href: '/for-agents' },
    { label: 'Agent Dashboard', href: '#' },
    { label: 'Pricing', href: '/for-agents' },
    { label: 'Success Stories', href: '#' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Complaints', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-sage-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              AI-powered agent intelligence. Find your perfect estate agent through transparent, data-driven comparison.
            </p>
            <div className="mt-6 flex gap-3">
              <div className="flex items-center gap-1.5 text-xs text-white/50">
                <Shield size={14} />
                <span>ICO Registered</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-white/50">
                <Lock size={14} />
                <span>SSL Secured</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/50 hover:text-sage-light transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Kova. All rights reserved. Property data sourced from HM Land Registry.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-white/40">
              <Award size={14} />
              <span>Propertymark Partner</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
