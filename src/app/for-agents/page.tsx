import type { Metadata } from 'next';
import { Users, TrendingUp, ShieldCheck, BarChart3, CreditCard, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection';
import { CTABanner } from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'For Estate Agents - Join Kova',
  description: 'Grow your estate agency with qualified leads from motivated homeowners. No upfront costs, pay only on success. Join 2,500+ agents on Kova.',
};

const benefits = [
  { icon: Users, title: 'Qualified Leads', description: 'Connect with homeowners actively looking to sell in your area. Every lead is a motivated seller.' },
  { icon: CreditCard, title: 'Pay Only on Success', description: 'No upfront fees, no monthly subscription. You only pay a small referral fee when the property sells.' },
  { icon: BarChart3, title: 'Performance Dashboard', description: 'Track your leads, manage your pipeline, and see how you compare to local competitors.' },
  { icon: ShieldCheck, title: 'Verified Badge', description: 'Stand out with our verified agent badge, showing homeowners you meet our professional standards.' },
  { icon: Zap, title: 'Instant Notifications', description: 'Get real-time alerts via email and SMS when a homeowner in your area is looking for an agent.' },
  { icon: TrendingUp, title: 'Data Insights', description: 'Access market data and performance analytics to help you win more instructions.' },
];

const process = [
  { step: '1', title: 'Apply Online', description: 'Fill out a simple application form with your agency details and coverage areas.' },
  { step: '2', title: 'Get Verified', description: 'We verify your credentials, memberships, insurance, and regulatory compliance.' },
  { step: '3', title: 'Set Up Your Profile', description: 'Upload your branding, set your fee structure, and customise your agent profile.' },
  { step: '4', title: 'Start Receiving Leads', description: 'Your profile appears in search results and you begin receiving qualified leads.' },
];

const pricing = [
  { label: 'Monthly Fee', value: 'Free', note: 'No subscription or setup costs' },
  { label: 'Cost Per Lead', value: 'Free', note: 'No charge for receiving enquiries' },
  { label: 'Referral Fee', value: '0.25%', note: 'Of final sale price, only on completion' },
  { label: 'Cap', value: '2,500', note: 'Maximum fee per transaction (+ VAT)' },
];

export default function ForAgentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sage-dark pt-32 pb-20 lg:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-sage-light text-sm font-medium mb-6">
              For Estate Agents
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Grow your agency with qualified leads
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-normal">
              Join 2,500+ estate agents receiving motivated seller leads through Kova. No upfront costs -- pay only when you succeed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="#apply" size="lg">Apply to Join <ArrowRight size={18} /></Button>
              <Button href="#pricing" variant="ghost" size="lg" className="text-white/70 hover:text-white hover:bg-white/10">
                View Pricing
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-32 lg:py-40 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-text tracking-tight">Why agents love Kova</h2>
            <p className="mt-6 text-lg text-text-secondary font-normal max-w-2xl mx-auto">
              We make it simple to connect with homeowners who are ready to sell.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <StaggerItem key={b.title}>
                <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow h-full group">
                  <div className="w-12 h-12 rounded-xl bg-sage-50 flex items-center justify-center mb-5 group-hover:bg-sage/10 transition-colors">
                    <b.icon size={24} className="text-sage" />
                  </div>
                  <h3 className="font-bold text-text text-lg mb-2">{b.title}</h3>
                  <p className="text-text-secondary text-sm font-normal leading-relaxed">{b.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How it works for agents */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text tracking-tight">Getting started is simple</h2>
          </AnimatedSection>
          <div className="space-y-6">
            {process.map((p, i) => (
              <AnimatedSection key={p.step} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center text-white font-semibold shrink-0">
                    {p.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-text text-lg mb-1">{p.title}</h3>
                    <p className="text-text-secondary text-sm font-normal">{p.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 lg:py-40 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text tracking-tight">Simple, transparent pricing</h2>
            <p className="mt-6 text-lg text-text-secondary font-normal">No hidden fees. No surprises. You only pay when your client&apos;s property sells.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="bg-white rounded-3xl shadow-card-hover overflow-hidden">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                {pricing.map((p, i) => (
                  <div key={p.label} className={`p-8 text-center ${i < pricing.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-border' : ''}`}>
                    <div className="text-sm text-text-secondary mb-2">{p.label}</div>
                    <div className="text-3xl font-bold text-text mb-1">
                      {p.label === 'Cap' && <span className="text-lg">&pound;</span>}
                      {p.value}
                      {p.label === 'Referral Fee' && <span className="text-lg"> + VAT</span>}
                    </div>
                    <div className="text-xs text-text-tertiary">{p.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Application Form Placeholder */}
      <section id="apply" className="py-24 bg-surface">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl font-bold text-text mb-4 tracking-tight">Apply to join Kova</h2>
            <p className="text-text-secondary font-normal">Fill in your details below and our team will be in touch within 48 hours.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="bg-white rounded-2xl shadow-card p-8">
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">Agency Name</label>
                    <input type="text" className="w-full h-12 px-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage" placeholder="Your Agency Ltd" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">Contact Name</label>
                    <input type="text" className="w-full h-12 px-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage" placeholder="Full name" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">Email</label>
                    <input type="email" className="w-full h-12 px-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage" placeholder="you@agency.co.uk" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">Phone</label>
                    <input type="tel" className="w-full h-12 px-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage" placeholder="020 1234 5678" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-1.5">Office Postcode</label>
                  <input type="text" className="w-full h-12 px-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage" placeholder="e.g. SW1A 1AA" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-1.5">Tell us about your agency</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage resize-none" placeholder="Coverage areas, specialisms, number of branches..." />
                </div>
                <Button className="w-full" size="lg">Submit Application <ArrowRight size={18} /></Button>
                <p className="text-xs text-text-tertiary text-center">We&apos;ll review your application and respond within 48 hours.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner variant="agent" />
    </>
  );
}
