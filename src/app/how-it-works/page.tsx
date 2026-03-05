import type { Metadata } from 'next';
import Image from 'next/image';
import { BarChart3, Handshake, CheckCircle, Clock, Shield, PiggyBank, ArrowRight, Search, Star, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CTABanner } from '@/components/sections/CTABanner';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection';

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'Learn how Kova helps you find the perfect estate agent with AI-powered matching. Three simple steps to compare agents, read reviews, and choose with confidence.',
};

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Enter your postcode',
    description: 'Tell us where your property is. We use your postcode to identify the top-performing estate agents operating in your specific area.',
    details: [
      'Takes less than 10 seconds',
      'Covers all UK postcodes',
      'Instant results, no waiting',
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
  },
  {
    number: '02',
    icon: BarChart3,
    title: 'Compare agents side by side',
    description: 'See a personalised shortlist of local agents ranked by real performance data from HM Land Registry -- not self-reported figures or paid placements.',
    details: [
      'Real sales history from Land Registry',
      'Verified homeowner reviews',
      'Average time to sell and price achieved',
      'Fee transparency and comparison',
    ],
    image: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=800&q=80',
  },
  {
    number: '03',
    icon: Handshake,
    title: 'Choose your agent with confidence',
    description: 'Select the agents you want to hear from. Request free, no-obligation valuations and choose the agent that is right for you and your property.',
    details: [
      'Only selected agents contact you',
      'Free market valuations',
      'No commitment or obligation',
      'We never share your data without consent',
    ],
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80',
  },
];

const benefits = [
  { icon: PiggyBank, title: 'Completely Free', description: 'Our service costs you nothing. Agents pay a small referral fee only when your property sells.' },
  { icon: Shield, title: 'Unbiased Rankings', description: 'Agent rankings are based on verified data, never influenced by payments or sponsorships.' },
  { icon: Clock, title: '60 Seconds', description: 'From entering your postcode to comparing local agents takes under a minute.' },
  { icon: Star, title: 'Verified Reviews', description: 'Every review comes from a real homeowner who used the platform. No fake reviews, ever.' },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sage-dark pt-32 pb-20 lg:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-sage-light text-sm font-medium mb-6">
              Simple & Transparent
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              How Kova works
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto font-normal">
              We believe choosing an estate agent should be as informed and confident as every other major financial decision. Here&apos;s how we make that happen.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Steps */}
      <section className="py-32 lg:py-40 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 lg:space-y-32">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.1}>
                <div className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-5xl font-bold text-sage/15">{step.number}</span>
                      <div className="w-14 h-14 rounded-xl bg-sage-50 flex items-center justify-center">
                        <step.icon size={28} className="text-sage" />
                      </div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-text mb-4">{step.title}</h2>
                    <p className="text-text-secondary font-normal leading-relaxed mb-6">{step.description}</p>
                    <ul className="space-y-3">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <CheckCircle size={18} className="text-sage mt-0.5 shrink-0" />
                          <span className="text-sm text-text">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex-1 w-full">
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text tracking-tight">Why homeowners choose Kova</h2>
          </AnimatedSection>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <StaggerItem key={b.title}>
                <div className="bg-white rounded-2xl p-8 shadow-card h-full text-center">
                  <div className="w-12 h-12 rounded-xl bg-sage-50 flex items-center justify-center mx-auto mb-5">
                    <b.icon size={24} className="text-sage" />
                  </div>
                  <h3 className="font-bold text-text mb-2">{b.title}</h3>
                  <p className="text-sm text-text-secondary font-normal">{b.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How We Make Money */}
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <FileCheck size={40} className="text-sage mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-text mb-6 tracking-tight">How we make money</h2>
            <p className="text-lg text-text-secondary font-normal leading-relaxed mb-3">
              Kova is <strong className="text-text font-semibold">completely free for homeowners</strong>. When you choose an agent through our platform and your property sells, the agent pays us a small referral fee.
            </p>
            <p className="text-text-secondary font-normal leading-relaxed">
              This means our incentives are perfectly aligned with yours -- we only succeed when you have a successful sale. Agent rankings are never influenced by this fee.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <FAQAccordion limit={5} />
      <CTABanner variant="seller" />
    </>
  );
}
