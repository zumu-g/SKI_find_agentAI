import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import agentsData from '@/data/agents.json';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const postcode = searchParams.get('postcode')?.trim();
  const sort = searchParams.get('sort') || 'rating';

  if (!postcode || !/^\d{4}$/.test(postcode)) {
    return NextResponse.json({ error: 'Invalid postcode' }, { status: 400 });
  }

  // Use Supabase if configured, otherwise fall back to static JSON
  if (supabase) {
    const { data, error } = await supabase
      .from('agent_stats')
      .select('*')
      .contains('coverage_postcodes', [postcode]);

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    type Row = Record<string, number>;
    const sorted = (data ?? [] as Row[]).sort((a: Row, b: Row) => {
      if (sort === 'reviews') return b.total_reviews - a.total_reviews;
      if (sort === 'sold') return b.properties_sold - a.properties_sold;
      if (sort === 'speed') return (a.avg_sale_time ?? 999) - (b.avg_sale_time ?? 999);
      return b.average_rating - a.average_rating;
    });

    return NextResponse.json(sorted);
  }

  // JSON fallback
  const agents = agentsData as {
    id: string; slug: string; name: string; agency: string; profileImage: string;
    shortBio: string; phone: string; email: string; coverageAreas: string[];
    tier: string; verified: boolean; stats: Record<string, number>;
    address: { city: string; county: string; postcode: string };
  }[];

  const results = agents
    .filter((a) => a.coverageAreas.includes(postcode))
    .sort((a, b) => {
      if (sort === 'reviews') return b.stats.totalReviews - a.stats.totalReviews;
      if (sort === 'sold') return b.stats.propertiesSold - a.stats.propertiesSold;
      if (sort === 'speed') return a.stats.averageSaleTime - b.stats.averageSaleTime;
      return b.stats.averageRating - a.stats.averageRating;
    });

  return NextResponse.json(results);
}
