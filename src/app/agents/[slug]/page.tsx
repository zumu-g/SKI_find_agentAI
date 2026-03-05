import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllAgents, getAgentBySlug, getReviewsForAgent } from '@/lib/agents';
import { AgentProfileContent } from './AgentProfileContent';

export async function generateStaticParams() {
  return getAllAgents().map((agent) => ({ slug: agent.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);
  if (!agent) return {};
  return {
    title: `${agent.name} - ${agent.agency}`,
    description: agent.shortBio,
  };
}

export default async function AgentProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);
  if (!agent) notFound();
  const reviews = getReviewsForAgent(agent.id);
  return <AgentProfileContent agent={agent} reviews={reviews} />;
}
