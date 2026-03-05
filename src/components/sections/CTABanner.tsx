'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

export function CTABanner({ variant = 'seller' }: { variant?: 'seller' | 'agent' }) {
  const isSeller = variant === 'seller';

  return (
    <section className="py-32 lg:py-40 relative overflow-hidden bg-sage">
      {/* Decorative organic shapes */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
        <circle cx="200" cy="100" r="200" fill="#1B4332" opacity="0.3" />
        <circle cx="1300" cy="500" r="250" fill="#52B788" opacity="0.15" />
        <circle cx="800" cy="50" r="120" fill="#1B4332" opacity="0.2" />
        <ellipse cx="1100" cy="200" rx="80" ry="60" fill="#52B788" opacity="0.1" />
        <circle cx="100" cy="450" r="100" fill="#52B788" opacity="0.1" />
        {/* Leaf-like shapes */}
        <path d="M600 500 Q650 400 700 500 Q650 480 600 500Z" fill="#1B4332" opacity="0.15" />
        <path d="M1200 100 Q1250 50 1280 120 Q1240 90 1200 100Z" fill="#52B788" opacity="0.1" />
      </svg>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight">
            {isSeller
              ? 'Ready to find the right agent?'
              : 'Grow your business with Kova'}
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-12 font-normal">
            {isSeller
              ? 'Join 45,000+ homeowners who found their perfect agent through Kova. Compare local agents for free in under 60 seconds.'
              : 'Connect with motivated homeowners in your area. Only pay when you succeed. Join 2,500+ agents already on the platform.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={isSeller ? '/find-agents' : '/for-agents'}
              size="lg"
              variant="primary"
            >
              {isSeller ? 'Compare Agents Now' : 'Join as an Agent'} <ArrowRight size={18} />
            </Button>
            <Button
              href={isSeller ? '/how-it-works' : '/about'}
              size="lg"
              variant="ghost"
              className="text-white/80 hover:text-white hover:bg-white/10"
            >
              {isSeller ? 'Learn How It Works' : 'Learn More'}
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
