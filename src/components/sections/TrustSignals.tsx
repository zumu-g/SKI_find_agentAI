'use client';

import { ShieldCheck, BarChart2, Users, Star, Zap } from 'lucide-react';

const signals = [
  { icon: ShieldCheck, label: 'Verified Agents' },
  { icon: BarChart2, label: 'Real Property Data' },
  { icon: Users, label: '45,000+ Homeowners' },
  { icon: Star, label: '4.9/5 Rating' },
  { icon: Zap, label: 'AI-Powered' },
];

export function TrustSignals() {
  return (
    <section className="bg-surface border-y border-border py-5">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
          {signals.map(({ icon: Icon, label }, index) => (
            <div key={label} className="flex items-center gap-10 lg:gap-16">
              <div className="flex items-center gap-2">
                <Icon size={16} className="text-terra shrink-0" />
                <span className="text-[13px] font-semibold text-ink-secondary whitespace-nowrap">
                  {label}
                </span>
              </div>
              {index < signals.length - 1 && (
                <div className="hidden sm:block w-px h-4 bg-border shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
