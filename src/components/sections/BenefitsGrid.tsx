'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection';

function BrainSparkleIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <path d="M14 28V24C10 22 8 18 10 14C12 10 16 8 20 8C24 8 28 10 30 14C32 18 30 22 26 24V28" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 28H25V31C25 32.5 23.5 34 22 34H18C16.5 34 15 32.5 15 31V28Z" stroke="#2D6A4F" strokeWidth="2" strokeLinejoin="round" />
      <line x1="17" y1="28" x2="17" y2="24" stroke="#2D6A4F" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="23" y1="28" x2="23" y2="24" stroke="#2D6A4F" strokeWidth="1.5" strokeLinecap="round" />
      {/* Sparkles */}
      <path d="M32 6L33 9L36 10L33 11L32 14L31 11L28 10L31 9Z" fill="#C65D3E" opacity="0.7" />
      <path d="M6 12L7 14L9 15L7 16L6 18L5 16L3 15L5 14Z" fill="#C65D3E" opacity="0.5" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <path d="M20 4L6 10V20C6 28 12 34 20 37C28 34 34 28 34 20V10L20 4Z" stroke="#2D6A4F" strokeWidth="2" strokeLinejoin="round" fill="#D8F3DC" fillOpacity="0.3" />
      <path d="M14 20L18 24L26 16" stroke="#2D6A4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StopwatchLeafIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <circle cx="20" cy="22" r="13" stroke="#2D6A4F" strokeWidth="2" />
      <line x1="20" y1="22" x2="20" y2="15" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="22" x2="25" y2="22" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="5" x2="20" y2="9" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="5" x2="24" y2="5" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" />
      {/* Leaf accent */}
      <path d="M31 8C31 8 36 4 36 8C36 12 31 12 31 8Z" fill="#52B788" />
      <line x1="31" y1="8" x2="34" y2="10" stroke="#2D6A4F" strokeWidth="0.8" />
    </svg>
  );
}

function GiftBoxIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <rect x="6" y="16" width="28" height="20" rx="3" stroke="#2D6A4F" strokeWidth="2" />
      <rect x="4" y="10" width="32" height="8" rx="3" stroke="#2D6A4F" strokeWidth="2" fill="#D8F3DC" fillOpacity="0.3" />
      <line x1="20" y1="10" x2="20" y2="36" stroke="#2D6A4F" strokeWidth="2" />
      <path d="M20 10C20 10 14 4 12 6C10 8 14 10 20 10Z" stroke="#C65D3E" strokeWidth="1.5" fill="#C65D3E" fillOpacity="0.2" />
      <path d="M20 10C20 10 26 4 28 6C30 8 26 10 20 10Z" stroke="#C65D3E" strokeWidth="1.5" fill="#C65D3E" fillOpacity="0.2" />
    </svg>
  );
}

function EyeTransparencyIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <path d="M4 20C4 20 10 10 20 10C30 10 36 20 36 20C36 20 30 30 20 30C10 30 4 20 4 20Z" stroke="#2D6A4F" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="20" cy="20" r="6" stroke="#2D6A4F" strokeWidth="2" />
      <circle cx="20" cy="20" r="2.5" fill="#2D6A4F" />
      {/* Radiating lines */}
      <g stroke="#52B788" strokeWidth="1" opacity="0.5" strokeLinecap="round">
        <line x1="20" y1="4" x2="20" y2="7" />
        <line x1="30" y1="7" x2="28" y2="9" />
        <line x1="10" y1="7" x2="12" y2="9" />
      </g>
    </svg>
  );
}

function HeartStarIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <path d="M20 35L8 22C4 18 4 12 8 8C12 4 18 4 20 10C22 4 28 4 32 8C36 12 36 18 32 22L20 35Z" stroke="#2D6A4F" strokeWidth="2" strokeLinejoin="round" fill="#D8F3DC" fillOpacity="0.3" />
      {/* Star inside */}
      <path d="M20 14L22 19L27 19.5L23 23L24 28L20 25.5L16 28L17 23L13 19.5L18 19Z" fill="#C65D3E" opacity="0.6" />
    </svg>
  );
}

const benefits = [
  {
    icon: BrainSparkleIcon,
    title: 'AI-Powered Matching',
    description: 'Our intelligent algorithms analyse thousands of data points to find the agent best suited to your property, location, and goals.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Verified Performance',
    description: 'Agent rankings are powered by verified Land Registry sales records, not self-reported figures. Real results, real transparency.',
  },
  {
    icon: StopwatchLeafIcon,
    title: 'Save Hours',
    description: 'No more ringing around for valuations. Compare agents side by side in under 60 seconds with all the data you need.',
  },
  {
    icon: GiftBoxIcon,
    title: 'Completely Free',
    description: 'No cost to you, ever. Agents pay a small referral fee only when your property sells. Our success is tied to yours.',
  },
  {
    icon: EyeTransparencyIcon,
    title: 'Full Transparency',
    description: 'See real fees, real performance data, and genuine reviews. No hidden agendas, no pay-to-play rankings.',
  },
  {
    icon: HeartStarIcon,
    title: 'Verified Reviews',
    description: 'Every review comes from a real homeowner who used the platform. Authentic feedback you can trust.',
  },
];

export function BenefitsGrid() {
  return (
    <section className="py-32 lg:py-40 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-24">
          <span className="text-sm font-semibold text-sage uppercase tracking-wider">Why Kova</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-text tracking-tight">
            The smarter way to choose your agent
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <StaggerItem key={benefit.title}>
                <div className="bg-white rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-shadow h-full text-center">
                  <div className="flex justify-center mb-5">
                    <Icon />
                  </div>
                  <h3 className="font-bold text-text text-lg mb-3">{benefit.title}</h3>
                  <p className="text-text-secondary font-normal leading-relaxed text-sm">{benefit.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
