'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, ShieldCheck } from 'lucide-react';
import { StarRating } from '@/components/ui/StarRating';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection';
import { getFeaturedAgents } from '@/lib/agents';
import type { Agent } from '@/types/agent';

function AgentCard({ agent }: { agent: Agent }) {
  return (
    <Link href={`/agents/${agent.slug}`} className="group block">
      <div className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden border border-transparent hover:border-sage/20">
        <div className="relative h-1.5 bg-gradient-to-r from-sage via-sage-light to-terra" />

        <div className="p-6 lg:p-8">
          <div className="flex items-start gap-4 mb-5">
            <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 relative">
              <Image
                src={agent.profileImage}
                alt={agent.name}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-text text-lg truncate">{agent.name}</h3>
                {agent.verified && <ShieldCheck size={16} className="text-sage shrink-0" />}
              </div>
              <p className="text-sm text-text-secondary">{agent.agency}</p>
              <StarRating rating={agent.stats.averageRating} size={14} showValue className="mt-1" />
            </div>
            {agent.tier !== 'standard' && (
              <Badge variant="premium" className="shrink-0">
                {agent.tier === 'premium' ? 'Premium' : 'Featured'}
              </Badge>
            )}
          </div>

          <p className="text-sm text-text-secondary leading-relaxed mb-5 line-clamp-2">{agent.shortBio}</p>

          <div className="grid grid-cols-3 gap-3 mb-5">
            <div className="text-center p-3 bg-sage-50 rounded-xl">
              <div className="text-lg font-semibold text-text">{agent.stats.propertiesSold}</div>
              <div className="text-xs text-text-tertiary">Properties Sold</div>
            </div>
            <div className="text-center p-3 bg-sage-50 rounded-xl">
              <div className="text-lg font-semibold text-text">{agent.stats.averageSaleTime}d</div>
              <div className="text-xs text-text-tertiary">Avg. Sale Time</div>
            </div>
            <div className="text-center p-3 bg-sage-50 rounded-xl">
              <div className="text-lg font-semibold text-text">{agent.stats.askingPriceAchieved}%</div>
              <div className="text-xs text-text-tertiary">Price Achieved</div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-sm text-text-secondary">
              <MapPin size={14} />
              <span>{agent.address.city}</span>
            </div>
            <span className="text-sm font-medium text-terra group-hover:text-terra-dark flex items-center gap-1 transition-colors">
              View Profile <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function FeaturedAgents() {
  const agents = getFeaturedAgents(3);

  return (
    <section className="py-32 lg:py-40 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <span className="text-sm font-semibold text-sage uppercase tracking-wider">Top Agents</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-text tracking-tight">
            Meet our highest-rated agents
          </h2>
          <p className="mt-6 text-lg text-text-secondary font-normal max-w-2xl mx-auto">
            These agents consistently deliver outstanding results for homeowners across the UK.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {agents.map((agent) => (
            <StaggerItem key={agent.id}>
              <AgentCard agent={agent} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.4} className="text-center mt-16">
          <Button href="/find-agents" variant="secondary" size="lg">
            View All Agents <ArrowRight size={18} />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
