import agentsData from '@/data/agents.json';
import reviewsData from '@/data/reviews.json';
import { Agent } from '@/types/agent';
import { Review } from '@/types/common';

const agents = agentsData as Agent[];
const reviews = reviewsData as Review[];

export function getAllAgents(): Agent[] {
  return agents;
}

export function getAgentBySlug(slug: string): Agent | undefined {
  return agents.find((a) => a.slug === slug);
}

export function getFeaturedAgents(limit = 3): Agent[] {
  return agents
    .filter((a) => a.tier === 'featured' || a.tier === 'premium')
    .sort((a, b) => b.stats.averageRating - a.stats.averageRating)
    .slice(0, limit);
}

export function getAgentsByArea(postcodePrefix: string): Agent[] {
  const prefix = postcodePrefix.toUpperCase().replace(/\s/g, '');
  return agents.filter((a) =>
    a.coverageAreas.some((area) => prefix.startsWith(area) || area.startsWith(prefix))
  );
}

export function getReviewsForAgent(agentId: string): Review[] {
  return reviews.filter((r) => r.agentId === agentId);
}

export function searchAgents(
  postcode: string,
  sortBy: string = 'rating'
): Agent[] {
  const prefix = getPostcodePrefix(postcode);
  let results = getAgentsByArea(prefix);

  switch (sortBy) {
    case 'reviews':
      results.sort((a, b) => b.stats.totalReviews - a.stats.totalReviews);
      break;
    case 'sold':
      results.sort((a, b) => b.stats.propertiesSold - a.stats.propertiesSold);
      break;
    case 'speed':
      results.sort((a, b) => a.stats.averageSaleTime - b.stats.averageSaleTime);
      break;
    case 'rating':
    default:
      results.sort((a, b) => b.stats.averageRating - a.stats.averageRating);
      break;
  }

  return results;
}

export function getPostcodePrefix(postcode: string): string {
  const clean = postcode.toUpperCase().replace(/\s/g, '');
  const match = clean.match(/^([A-Z]{1,2}\d{1,2})/);
  return match ? match[1] : clean;
}

export function validatePostcode(postcode: string): boolean {
  const regex = /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i;
  return regex.test(postcode.trim());
}
