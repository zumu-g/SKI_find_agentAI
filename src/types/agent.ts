export interface Agent {
  id: string;
  slug: string;
  name: string;
  agency: string;
  profileImage: string;
  bio: string;
  shortBio: string;
  phone: string;
  email: string;
  website?: string;
  address: {
    line1: string;
    city: string;
    county: string;
    postcode: string;
  };
  coverageAreas: string[];
  specialisms: AgentSpecialism[];
  stats: AgentStats;
  tier: 'standard' | 'featured' | 'premium';
  verified: boolean;
  yearEstablished: number;
}

export interface AgentStats {
  averageRating: number;
  totalReviews: number;
  propertiesSold: number;
  averageSaleTime: number;
  askingPriceAchieved: number;
  activeListings: number;
  yearsExperience: number;
}

export type AgentSpecialism =
  | 'residential-sales'
  | 'residential-lettings'
  | 'new-builds'
  | 'luxury'
  | 'first-time-buyers'
  | 'investment'
  | 'rural';
