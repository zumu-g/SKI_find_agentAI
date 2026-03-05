import type { Metadata } from 'next';
import { Suspense } from 'react';
import { FindAgentsContent } from './FindAgentsContent';

export const metadata: Metadata = {
  title: 'Find Estate Agents Near You',
  description: 'Compare the best estate agents in your area. View ratings, reviews, fees, and performance data. Free comparison tool for homeowners.',
};

export default function FindAgentsPage() {
  return (
    <Suspense>
      <FindAgentsContent />
    </Suspense>
  );
}
