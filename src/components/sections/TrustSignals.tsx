'use client';

import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { Shield, Award, CheckCircle, Lock } from 'lucide-react';

const signals = [
  { icon: Shield, label: 'ICO Registered' },
  { icon: Award, label: 'Propertymark Partner' },
  { icon: CheckCircle, label: 'Land Registry Verified' },
  { icon: Lock, label: 'GDPR Compliant' },
];

export function TrustSignals() {
  return (
    <section className="py-12 bg-cream border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            <p className="text-sm text-text-secondary font-medium">Trusted & Verified:</p>
            {signals.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-text-tertiary">
                <Icon size={18} />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
