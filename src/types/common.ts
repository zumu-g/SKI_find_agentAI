export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number;
  outcome?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Review {
  id: string;
  agentId: string;
  author: string;
  rating: number;
  title: string;
  body: string;
  date: string;
  verified: boolean;
  propertyType?: string;
  location?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
