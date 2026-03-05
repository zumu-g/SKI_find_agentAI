import type { Metadata } from 'next';
import Image from 'next/image';
import { Target, Eye, Heart, Scale, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection';
import { CTABanner } from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Kova empowers homeowners to find the right estate agent through AI-powered, data-driven comparison. Learn about our mission and team.',
};

const values = [
  { icon: Eye, title: 'Transparency', description: 'No hidden agendas. Every ranking, every data point, and every business decision is made with complete openness.' },
  { icon: Heart, title: 'Homeowner First', description: 'Every decision we make starts with one question: does this help the homeowner make a better choice?' },
  { icon: Scale, title: 'Fairness', description: 'Agents are ranked on merit alone. No pay-to-play, no preferential treatment. Performance data speaks for itself.' },
  { icon: Target, title: 'Accuracy', description: 'We use verified data from HM Land Registry, not self-reported figures. Our recommendations are grounded in fact.' },
];

const team = [
  {
    name: 'Alexandra Hart',
    role: 'CEO & Co-Founder',
    bio: 'Former property journalist with 15 years covering the UK housing market. Alex saw first-hand how opaque the estate agent selection process was for homeowners.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80',
  },
  {
    name: 'Marcus Chen',
    role: 'CTO & Co-Founder',
    bio: 'Previously led data engineering at a PropTech startup. Marcus builds the systems that turn raw Land Registry data into actionable insights.',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80',
  },
  {
    name: 'Priya Kapoor',
    role: 'Head of Agent Relations',
    bio: '10 years in estate agency management. Priya ensures our platform works for agents as well as homeowners, maintaining the partnerships that power our service.',
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&q=80',
  },
  {
    name: 'Tom Bradley',
    role: 'Head of Product',
    bio: 'UX specialist focused on making complex property data accessible and useful. Tom ensures every homeowner can navigate their agent comparison with confidence.',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sage-dark pt-32 pb-20 lg:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Your home deserves the right agent
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto font-normal">
              We started Kova because we believed homeowners deserved better than a Google search and a gut feeling when choosing who to trust with their biggest financial asset.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="py-32 lg:py-40 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <AnimatedSection>
              <span className="text-sm font-semibold text-sage uppercase tracking-wider">Our Mission</span>
              <h2 className="mt-4 text-3xl font-bold text-text mb-6 tracking-tight">
                Empowering informed decisions
              </h2>
              <p className="text-text-secondary font-normal leading-relaxed mb-4">
                Selling a home is one of life&apos;s most significant financial decisions. Yet most homeowners choose their estate agent based on a leaflet through the door, a sign on the neighbour&apos;s lawn, or a quick Google search.
              </p>
              <p className="text-text-secondary font-normal leading-relaxed">
                We believe you deserve better. Kova gives every homeowner access to the same data-driven insights that property professionals use -- verified sales records, performance metrics, and authentic reviews -- so you can choose your agent with confidence, not guesswork.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <span className="text-sm font-semibold text-sage uppercase tracking-wider">Our Vision</span>
              <h2 className="mt-4 text-3xl font-bold text-text mb-6 tracking-tight">
                A transparent property market
              </h2>
              <p className="text-text-secondary font-normal leading-relaxed mb-4">
                We envision a property market where choosing an estate agent is as clear, confident, and informed as every other major financial decision.
              </p>
              <p className="text-text-secondary font-normal leading-relaxed">
                A market where agent performance is visible, where reviews are genuine, and where homeowners have the power to compare and choose based on evidence. That&apos;s the market we&apos;re building.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-text tracking-tight">What we stand for</h2>
          </AnimatedSection>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="bg-white rounded-2xl p-8 shadow-card h-full text-center">
                  <div className="w-12 h-12 rounded-xl bg-sage-50 flex items-center justify-center mx-auto mb-5">
                    <v.icon size={24} className="text-sage" />
                  </div>
                  <h3 className="font-bold text-text mb-2">{v.title}</h3>
                  <p className="text-sm text-text-secondary font-normal leading-relaxed">{v.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 lg:py-40 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-text tracking-tight">Our team</h2>
            <p className="mt-6 text-lg text-text-secondary font-normal max-w-2xl mx-auto">
              A small, passionate team bringing together property expertise, data science, and product design.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((person) => (
              <StaggerItem key={person.name}>
                <div className="bg-white rounded-2xl shadow-card overflow-hidden h-full">
                  <div className="h-40 relative">
                    <Image
                      src={person.photo}
                      alt={person.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-text">{person.name}</h3>
                    <p className="text-sm text-sage font-medium mb-3">{person.role}</p>
                    <p className="text-sm text-text-secondary font-normal leading-relaxed">{person.bio}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTABanner variant="seller" />
    </>
  );
}
