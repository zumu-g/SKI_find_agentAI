import { Hero } from '@/components/sections/Hero';
import { TrustSignals } from '@/components/sections/TrustSignals';
import { HowItWorksPreview } from '@/components/sections/HowItWorksPreview';
import { BenefitsGrid } from '@/components/sections/BenefitsGrid';
import { StatsCounter } from '@/components/sections/StatsCounter';
import { FeaturedAgents } from '@/components/sections/FeaturedAgents';
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { CTABanner } from '@/components/sections/CTABanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <HowItWorksPreview />
      <BenefitsGrid />
      <StatsCounter />
      <FeaturedAgents />
      <TestimonialsCarousel />
      <FAQAccordion limit={5} />
      <CTABanner variant="seller" />
    </>
  );
}
