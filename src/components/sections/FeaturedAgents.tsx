'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ShieldCheck } from 'lucide-react';
import { StarRating } from '@/components/ui/StarRating';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection';
import { getFeaturedAgents } from '@/lib/agents';
import type { Agent } from '@/types/agent';

function AgentCard({ agent }: { agent: Agent }) {
  return (
    <Link href={`/agents/${agent.slug}`} className="group block h-full">
      <div className="bg-surface rounded-[16px] overflow-hidden hover:bg-surface-hover transition-colors duration-200 h-full flex flex-col">
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={agent.profileImage}
            alt={agent.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[15px] font-bold text-ink leading-tight">{agent.name}</span>
            {agent.verified && (
              <ShieldCheck size={14} className="text-sage shrink-0" />
            )}
            {agent.tier !== 'standard' && (
              <span className="ml-auto bg-terra text-white text-[10px] font-semibold rounded-full px-2 py-0.5">
                {agent.tier === 'premium' ? 'Premium' : 'Featured'}
              </span>
            )}
          </div>

          <p className="text-[12px] text-ink-tertiary mt-0.5">{agent.agency}</p>
          <StarRating rating={agent.stats.averageRating} size={12} className="mt-2" />

          <div className="border-t border-border mt-4 pt-4">
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center">
                <div className="text-[18px] font-black text-ink">{agent.stats.propertiesSold}</div>
                <div className="text-[10px] font-semibold text-ink-tertiary uppercase tracking-wide mt-0.5">SOLD</div>
              </div>
              <div className="text-center">
                <div className="text-[18px] font-black text-ink">{agent.stats.averageSaleTime}d</div>
                <div className="text-[10px] font-semibold text-ink-tertiary uppercase tracking-wide mt-0.5">AVG. DAYS</div>
              </div>
              <div className="text-center">
                <div className="text-[18px] font-black text-ink">{agent.stats.askingPriceAchieved}%</div>
                <div className="text-[10px] font-semibold text-ink-tertiary uppercase tracking-wide mt-0.5">PRICE</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-1 text-[12px] text-ink-tertiary">
              <MapPin size={12} className="shrink-0" />
              <span>{agent.address.city}</span>
            </div>
            <span className="text-[13px] font-semibold text-terra group-hover:text-terra-dark transition-colors duration-200">
              View Profile →
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
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="text-[11px] font-semibold text-terra uppercase tracking-[0.1em]">
                FEATURED AGENTS
              </span>
              <h2 className="mt-3 text-[clamp(1.75rem,3vw,2.5rem)] font-black text-ink tracking-tight">
                Top performers near you
              </h2>
            </div>
            <Link
              href="/find-agents"
              className="hidden md:block text-[14px] font-semibold text-terra hover:text-terra-dark transition-colors duration-200 shrink-0"
            >
              View all agents →
            </Link>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {agents.map((agent) => (
            <StaggerItem key={agent.id}>
              <AgentCard agent={agent} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.3} className="mt-8 flex md:hidden justify-center">
          <Link
            href="/find-agents"
            className="text-[14px] font-semibold text-terra hover:text-terra-dark transition-colors duration-200"
          >
            View all agents →
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
