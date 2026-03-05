'use client';

import { AnimatedSection } from '@/components/shared/AnimatedSection';

function PostcodeIllustration() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 h-48 mx-auto">
      {/* Map background */}
      <rect x="20" y="30" width="160" height="140" rx="16" fill="#D8F3DC" opacity="0.4" />
      <rect x="30" y="40" width="140" height="120" rx="12" fill="#FDF8F3" stroke="#E8DFD3" strokeWidth="1.5" />

      {/* Map grid lines */}
      <g stroke="#E8DFD3" strokeWidth="1" opacity="0.5">
        <line x1="65" y1="40" x2="65" y2="160" />
        <line x1="100" y1="40" x2="100" y2="160" />
        <line x1="135" y1="40" x2="135" y2="160" />
        <line x1="30" y1="75" x2="170" y2="75" />
        <line x1="30" y1="110" x2="170" y2="110" />
      </g>

      {/* Small houses */}
      <g opacity="0.6">
        <rect x="45" y="82" width="14" height="10" rx="1" fill="#F7F0E8" stroke="#A89F93" strokeWidth="1" />
        <path d="M43 84 L52 78 L61 84" fill="#E8DFD3" stroke="#A89F93" strokeWidth="1" />
        <rect x="120" y="115" width="14" height="10" rx="1" fill="#F7F0E8" stroke="#A89F93" strokeWidth="1" />
        <path d="M118 117 L127 111 L136 117" fill="#E8DFD3" stroke="#A89F93" strokeWidth="1" />
        <rect x="72" y="128" width="14" height="10" rx="1" fill="#F7F0E8" stroke="#A89F93" strokeWidth="1" />
        <path d="M70 130 L79 124 L88 130" fill="#E8DFD3" stroke="#A89F93" strokeWidth="1" />
        <rect x="140" y="60" width="14" height="10" rx="1" fill="#F7F0E8" stroke="#A89F93" strokeWidth="1" />
        <path d="M138 62 L147 56 L156 62" fill="#E8DFD3" stroke="#A89F93" strokeWidth="1" />
      </g>

      {/* Dotted circle radiating from pin */}
      <circle cx="100" cy="90" r="35" stroke="#2D6A4F" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.3" />
      <circle cx="100" cy="90" r="50" stroke="#2D6A4F" strokeWidth="1" strokeDasharray="3 4" opacity="0.15" />

      {/* Map pin */}
      <g>
        <path d="M100 105 L88 82 C84 74 88 64 96 61 C100 59.5 104 59.5 108 61 C116 64 120 74 116 82 L100 105Z" fill="#C65D3E" />
        <circle cx="100" cy="76" r="8" fill="#FDF8F3" />
        <circle cx="100" cy="76" r="4" fill="#C65D3E" />
      </g>

      {/* Pin shadow */}
      <ellipse cx="100" cy="108" rx="12" ry="3" fill="#2D2418" opacity="0.1" />
    </svg>
  );
}

function CompareIllustration() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 h-48 mx-auto">
      {/* Left card */}
      <rect x="15" y="50" width="75" height="110" rx="10" fill="white" stroke="#E8DFD3" strokeWidth="1.5" />
      <circle cx="52" cy="78" r="14" fill="#D8F3DC" />
      <circle cx="52" cy="78" r="10" fill="#2D6A4F" opacity="0.3" />
      <rect x="32" y="100" width="40" height="4" rx="2" fill="#E8DFD3" />
      <rect x="38" y="110" width="28" height="3" rx="1.5" fill="#E8DFD3" opacity="0.6" />
      {/* Stars on left card */}
      <g fill="#C65D3E">
        <circle cx="35" cy="125" r="3" />
        <circle cx="44" cy="125" r="3" />
        <circle cx="53" cy="125" r="3" />
        <circle cx="62" cy="125" r="3" />
        <circle cx="71" cy="125" r="3" opacity="0.3" />
      </g>
      <rect x="35" y="136" width="34" height="12" rx="6" fill="#D8F3DC" />
      <rect x="42" y="139.5" width="20" height="5" rx="2.5" fill="#2D6A4F" opacity="0.5" />

      {/* Right card */}
      <rect x="110" y="50" width="75" height="110" rx="10" fill="white" stroke="#E8DFD3" strokeWidth="1.5" />
      <circle cx="147" cy="78" r="14" fill="#D8F3DC" />
      <circle cx="147" cy="78" r="10" fill="#2D6A4F" opacity="0.3" />
      <rect x="127" y="100" width="40" height="4" rx="2" fill="#E8DFD3" />
      <rect x="133" y="110" width="28" height="3" rx="1.5" fill="#E8DFD3" opacity="0.6" />
      {/* Stars on right card */}
      <g fill="#C65D3E">
        <circle cx="130" cy="125" r="3" />
        <circle cx="139" cy="125" r="3" />
        <circle cx="148" cy="125" r="3" />
        <circle cx="157" cy="125" r="3" />
        <circle cx="166" cy="125" r="3" />
      </g>
      <rect x="130" y="136" width="34" height="12" rx="6" fill="#D8F3DC" />
      <rect x="137" y="139.5" width="20" height="5" rx="2.5" fill="#2D6A4F" opacity="0.5" />

      {/* Magnifying glass */}
      <circle cx="100" cy="38" r="18" stroke="#2D6A4F" strokeWidth="3" fill="#FDF8F3" opacity="0.9" />
      <line x1="113" y1="50" x2="124" y2="61" stroke="#2D6A4F" strokeWidth="3" strokeLinecap="round" />

      {/* Bar chart below */}
      <g opacity="0.7">
        <rect x="50" y="180" width="16" height="12" rx="2" fill="#52B788" />
        <rect x="72" y="172" width="16" height="20" rx="2" fill="#2D6A4F" />
        <rect x="94" y="176" width="16" height="16" rx="2" fill="#52B788" />
        <rect x="116" y="168" width="16" height="24" rx="2" fill="#2D6A4F" />
        <rect x="138" y="174" width="16" height="18" rx="2" fill="#52B788" />
      </g>
    </svg>
  );
}

function ConfidenceIllustration() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 h-48 mx-auto">
      {/* Key */}
      <g transform="translate(50, 30) rotate(15)">
        <circle cx="30" cy="30" r="22" stroke="#2D6A4F" strokeWidth="3" fill="#D8F3DC" />
        <circle cx="30" cy="30" r="10" stroke="#2D6A4F" strokeWidth="2" fill="#FDF8F3" />
        <rect x="48" y="26" width="50" height="8" rx="3" fill="#2D6A4F" />
        <rect x="82" y="26" width="8" height="18" rx="2" fill="#2D6A4F" />
        <rect x="72" y="26" width="6" height="14" rx="2" fill="#2D6A4F" />
      </g>

      {/* House keychain shape */}
      <g transform="translate(45, 15)">
        <path d="M30 5 L20 13 L20 22 L40 22 L40 13 Z" fill="#C65D3E" stroke="#A74A2F" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="27" y="16" width="6" height="6" rx="1" fill="#FDF8F3" />
      </g>

      {/* Checkmark circle */}
      <circle cx="100" cy="130" r="30" fill="#D8F3DC" stroke="#2D6A4F" strokeWidth="2" />
      <path d="M85 130 L95 140 L115 120" stroke="#2D6A4F" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Sparkles */}
      <g fill="#E8956F" opacity="0.6">
        <path d="M45 110 L47 116 L53 118 L47 120 L45 126 L43 120 L37 118 L43 116Z" />
        <path d="M155 100 L157 105 L162 107 L157 109 L155 114 L153 109 L148 107 L153 105Z" />
        <path d="M140 140 L141.5 144 L145.5 145.5 L141.5 147 L140 151 L138.5 147 L134.5 145.5 L138.5 144Z" />
      </g>

      {/* Handshake below */}
      <g transform="translate(60, 165)" opacity="0.7">
        <path d="M10 15 Q20 5 35 10 L50 5 Q55 3 60 8 L70 18" stroke="#2D6A4F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M10 15 Q15 20 25 18 Q35 16 45 20 Q55 24 70 18" stroke="#2D6A4F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  );
}

const steps = [
  {
    number: '01',
    title: 'Tell us about your property',
    description: 'Enter your postcode and a few details about your home. It takes less than 60 seconds.',
    illustration: PostcodeIllustration,
  },
  {
    number: '02',
    title: 'Compare local agents',
    description: 'See a personalised shortlist ranked by real performance data, fees, reviews, and sales history.',
    illustration: CompareIllustration,
  },
  {
    number: '03',
    title: 'Choose with confidence',
    description: 'Pick the agent that is right for you. Book a free valuation directly -- no obligation, no pressure.',
    illustration: ConfidenceIllustration,
  },
];

export function HowItWorksPreview() {
  return (
    <section className="py-32 lg:py-40 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-24">
          <span className="text-sm font-semibold text-sage uppercase tracking-wider">Simple Process</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-text tracking-tight">
            Three steps to the right agent
          </h2>
          <p className="mt-6 text-lg text-text-secondary font-normal max-w-2xl mx-auto">
            No lengthy forms, no pressure calls. Just smart comparison in under a minute.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => {
            const Illustration = step.illustration;
            return (
              <AnimatedSection key={step.number} delay={i * 0.15}>
                <div className="bg-white rounded-3xl p-8 shadow-card text-center h-full">
                  <span className="text-5xl font-bold text-sage/10">{step.number}</span>
                  <div className="my-6">
                    <Illustration />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-text mb-3">{step.title}</h3>
                  <p className="text-text-secondary font-normal leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
