'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Phone, Mail, Globe, ShieldCheck, Clock, TrendingUp, Home, Calendar, Star, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { StarRating } from '@/components/ui/StarRating';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { formatPercentage, pluralize } from '@/lib/utils';
import type { Agent } from '@/types/agent';
import type { Review } from '@/types/common';

function StatCard({ icon: Icon, value, label }: { icon: React.ElementType; value: string; label: string }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-card text-center">
      <Icon size={20} className="mx-auto text-sage mb-2" />
      <div className="text-2xl font-bold text-text">{value}</div>
      <div className="text-xs text-text-tertiary mt-1">{label}</div>
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-card">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-sage-50 flex items-center justify-center text-sm font-semibold text-sage">
            {review.author.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <div className="font-medium text-text text-sm">{review.author}</div>
            <div className="text-xs text-text-tertiary">{review.location} &middot; {new Date(review.date).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}</div>
          </div>
        </div>
        {review.verified && (
          <Badge variant="success"><CheckCircle size={12} /> Verified</Badge>
        )}
      </div>
      <StarRating rating={review.rating} size={14} className="mb-2" />
      <h4 className="font-bold text-text text-sm mb-1">{review.title}</h4>
      <p className="text-sm text-text-secondary font-normal leading-relaxed">{review.body}</p>
    </div>
  );
}

export function AgentProfileContent({ agent, reviews }: { agent: Agent; reviews: Review[] }) {
  const specialismLabels: Record<string, string> = {
    'residential-sales': 'Residential Sales',
    'residential-lettings': 'Lettings',
    'new-builds': 'New Builds',
    'luxury': 'Luxury Properties',
    'first-time-buyers': 'First-Time Buyers',
    'investment': 'Investment',
    'rural': 'Rural & Country',
  };

  return (
    <div className="min-h-screen bg-surface pt-24 pb-20">
      {/* Header */}
      <div className="bg-sage-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <Link href="/find-agents" className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to results
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10"
          >
            <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-2xl overflow-hidden shrink-0 relative border border-white/10">
              <Image
                src={agent.profileImage}
                alt={agent.name}
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">{agent.name}</h1>
                {agent.verified && (
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-sage/20 text-sage-light text-xs font-medium">
                    <ShieldCheck size={14} /> Verified Agent
                  </div>
                )}
                {agent.tier !== 'standard' && (
                  <Badge variant="premium">{agent.tier === 'premium' ? 'Premium Agent' : 'Featured Agent'}</Badge>
                )}
              </div>
              <p className="text-lg text-white/70 mb-4 font-normal">{agent.agency}</p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <StarRating rating={agent.stats.averageRating} size={18} showValue className="[&_span]:text-white" />
                <span className="text-sm text-white/50">({agent.stats.totalReviews} reviews)</span>
                <span className="text-sm text-white/30">|</span>
                <div className="flex items-center gap-1.5 text-sm text-white/60">
                  <MapPin size={14} />
                  <span>{agent.address.city}, {agent.address.county}</span>
                </div>
                <span className="text-sm text-white/30">|</span>
                <div className="flex items-center gap-1.5 text-sm text-white/60">
                  <Calendar size={14} />
                  <span>Est. {agent.yearEstablished}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {agent.specialisms.map((s) => (
                  <Badge key={s} variant="outline" className="border-white/20 text-white/70 bg-white/5">
                    {specialismLabels[s] || s}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats Grid */}
            <AnimatedSection>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <StatCard icon={Home} value={agent.stats.propertiesSold.toString()} label="Properties Sold" />
                <StatCard icon={Clock} value={`${agent.stats.averageSaleTime} days`} label="Avg. Sale Time" />
                <StatCard icon={TrendingUp} value={formatPercentage(agent.stats.askingPriceAchieved)} label="Price Achieved" />
                <StatCard icon={Star} value={agent.stats.averageRating.toFixed(1)} label="Avg. Rating" />
              </div>
            </AnimatedSection>

            {/* Bio */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl shadow-card p-8">
                <h2 className="text-2xl font-bold text-text mb-4">About {agent.name}</h2>
                <p className="text-text-secondary font-normal leading-relaxed">{agent.bio}</p>
              </div>
            </AnimatedSection>

            {/* Reviews */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl shadow-card p-8">
                <h2 className="text-2xl font-bold text-text mb-6">
                  Reviews ({reviews.length})
                </h2>
                {reviews.length > 0 ? (
                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <ReviewCard key={review.id} review={review} />
                    ))}
                  </div>
                ) : (
                  <p className="text-text-secondary text-center py-8">No reviews yet for this agent.</p>
                )}
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl shadow-card p-6 sticky top-28">
                <h3 className="text-lg font-bold text-text mb-4">Get in Touch</h3>
                <div className="space-y-3 mb-6">
                  <a href={`tel:${agent.phone}`} className="flex items-center gap-3 text-sm text-text-secondary hover:text-text transition-colors">
                    <Phone size={16} className="text-sage" />
                    {agent.phone}
                  </a>
                  <a href={`mailto:${agent.email}`} className="flex items-center gap-3 text-sm text-text-secondary hover:text-text transition-colors">
                    <Mail size={16} className="text-sage" />
                    {agent.email}
                  </a>
                  {agent.website && (
                    <div className="flex items-center gap-3 text-sm text-text-secondary">
                      <Globe size={16} className="text-sage" />
                      {agent.website.replace('https://', '')}
                    </div>
                  )}
                  <div className="flex items-center gap-3 text-sm text-text-secondary">
                    <MapPin size={16} className="text-sage" />
                    <span>{agent.address.line1}, {agent.address.city}, {agent.address.postcode}</span>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Request Free Valuation
                </Button>
                <p className="text-xs text-text-tertiary text-center mt-3">
                  Free, no obligation. We&apos;ll never share your details without consent.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl shadow-card p-6">
                <h3 className="text-lg font-bold text-text mb-4">Coverage Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {agent.coverageAreas.map((area) => (
                    <Badge key={area} variant="outline">{area}</Badge>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-sage-50 rounded-2xl p-6 border border-sage/10">
                <h3 className="text-sm font-bold text-text mb-2">Performance Summary</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex justify-between">
                    <span>Active Listings</span>
                    <span className="font-medium text-text">{agent.stats.activeListings}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Years Experience</span>
                    <span className="font-medium text-text">{agent.stats.yearsExperience}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Total Reviews</span>
                    <span className="font-medium text-text">{agent.stats.totalReviews}</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
