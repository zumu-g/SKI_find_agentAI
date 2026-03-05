'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Search, MapPin, ArrowRight, ShieldCheck, SlidersHorizontal, Clock, TrendingUp, Star } from 'lucide-react';
import { PostcodeSearch } from '@/components/search/PostcodeSearch';
import { StarRating } from '@/components/ui/StarRating';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection';
import { searchAgents, getPostcodePrefix } from '@/lib/agents';
import { cn } from '@/lib/utils';
import type { Agent } from '@/types/agent';

function AgentResultCard({ agent, rank }: { agent: Agent; rank: number }) {
  return (
    <Link href={`/agents/${agent.slug}`} className="group block">
      <div className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden border border-transparent hover:border-sage/20">
        <div className="p-6 lg:p-8">
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="relative shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden relative">
                <Image
                  src={agent.profileImage}
                  alt={agent.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-sage text-white text-xs font-bold flex items-center justify-center">
                #{rank}
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="font-bold text-text text-lg">{agent.name}</h3>
                {agent.verified && <ShieldCheck size={16} className="text-sage" />}
                {agent.tier !== 'standard' && (
                  <Badge variant="premium">{agent.tier === 'premium' ? 'Premium' : 'Featured'}</Badge>
                )}
              </div>
              <p className="text-sm text-text-secondary mb-2">{agent.agency}</p>
              <div className="flex items-center gap-3">
                <StarRating rating={agent.stats.averageRating} size={14} showValue />
                <span className="text-xs text-text-tertiary">({agent.stats.totalReviews} reviews)</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            <div className="text-center p-3 bg-surface rounded-xl">
              <div className="text-lg font-semibold text-text">{agent.stats.propertiesSold}</div>
              <div className="text-xs text-text-tertiary">Sold</div>
            </div>
            <div className="text-center p-3 bg-surface rounded-xl">
              <div className="text-lg font-semibold text-text">{agent.stats.averageSaleTime}d</div>
              <div className="text-xs text-text-tertiary">Avg. Time</div>
            </div>
            <div className="text-center p-3 bg-surface rounded-xl">
              <div className="text-lg font-semibold text-text">{agent.stats.askingPriceAchieved}%</div>
              <div className="text-xs text-text-tertiary">Price Achieved</div>
            </div>
            <div className="text-center p-3 bg-surface rounded-xl">
              <div className="text-lg font-semibold text-text">{agent.stats.activeListings}</div>
              <div className="text-xs text-text-tertiary">Active Listings</div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-6 pt-5 border-t border-border">
            <div className="flex items-center gap-1.5 text-sm text-text-secondary">
              <MapPin size={14} />
              <span>{agent.address.city}, {agent.address.county}</span>
            </div>
            <span className="text-sm font-semibold text-terra group-hover:text-terra-dark flex items-center gap-1 transition-colors">
              View Profile <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function FindAgentsContent() {
  const searchParams = useSearchParams();
  const postcodeParam = searchParams.get('postcode') || '';
  const sortParam = searchParams.get('sort') || 'rating';

  const [results, setResults] = useState<Agent[]>([]);
  const [sortBy, setSortBy] = useState(sortParam);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (postcodeParam) {
      const agents = searchAgents(postcodeParam, sortBy);
      setResults(agents);
      setHasSearched(true);
    }
  }, [postcodeParam, sortBy]);

  const sortOptions = [
    { value: 'rating', label: 'Highest Rated', icon: Star },
    { value: 'sold', label: 'Most Sold', icon: TrendingUp },
    { value: 'speed', label: 'Fastest Seller', icon: Clock },
    { value: 'reviews', label: 'Most Reviewed', icon: Star },
  ];

  if (!postcodeParam) {
    return (
      <div className="min-h-screen bg-cream pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-text mb-4 tracking-tight">Find Agents Near You</h1>
          <p className="text-lg text-text-secondary font-normal mb-10">Enter your postcode to see the top-rated estate agents in your area.</p>
          <PostcodeSearch size="large" className="mx-auto" />
        </div>
      </div>
    );
  }

  const areaName = getPostcodePrefix(postcodeParam);

  return (
    <div className="min-h-screen bg-cream pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-text tracking-tight">
                Agents near {areaName}
              </h1>
              <p className="text-text-secondary font-normal mt-1">
                {results.length > 0
                  ? `${results.length} agents found in your area`
                  : 'Searching for agents...'}
              </p>
            </div>
            <PostcodeSearch size="default" className="max-w-xs" />
          </div>

          {results.length > 0 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              <SlidersHorizontal size={16} className="text-text-tertiary shrink-0" />
              <span className="text-sm text-text-secondary shrink-0">Sort by:</span>
              {sortOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setSortBy(opt.value)}
                  className={cn(
                    'px-3 py-1.5 text-sm rounded-full whitespace-nowrap transition-all',
                    sortBy === opt.value
                      ? 'bg-sage text-white font-medium'
                      : 'bg-white text-text-secondary hover:bg-sage-50 border border-border'
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {results.length > 0 ? (
          <StaggerContainer className="flex flex-col gap-6">
            {results.map((agent, i) => (
              <StaggerItem key={agent.id}>
                <AgentResultCard agent={agent} rank={i + 1} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : hasSearched ? (
          <AnimatedSection className="text-center py-20">
            <div className="w-20 h-20 rounded-full bg-sage-50 flex items-center justify-center mx-auto mb-6">
              <Search size={32} className="text-sage" />
            </div>
            <h2 className="text-2xl font-bold text-text mb-3">No agents found</h2>
            <p className="text-text-secondary font-normal max-w-md mx-auto mb-8">
              We don&apos;t have agents in the {areaName} area yet, but we&apos;re expanding quickly. Try a nearby postcode or check back soon.
            </p>
            <Button href="/find-agents" variant="secondary">Try Another Postcode</Button>
          </AnimatedSection>
        ) : null}
      </div>
    </div>
  );
}
