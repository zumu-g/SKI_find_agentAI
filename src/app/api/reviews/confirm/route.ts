import { NextResponse } from 'next/server';
import { getServiceClient } from '@/lib/supabase';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');

  if (!token) return NextResponse.redirect(new URL('/?review=invalid', request.url));

  const sb = getServiceClient();
  if (!sb) return NextResponse.redirect(new URL('/?review=error', request.url));

  const { data, error } = await sb
    .from('reviews')
    .select('id, confirmed_at')
    .eq('confirm_token', token)
    .single();

  if (error || !data) return NextResponse.redirect(new URL('/?review=invalid', request.url));
  if (data.confirmed_at) return NextResponse.redirect(new URL('/?review=already-confirmed', request.url));

  await sb
    .from('reviews')
    .update({ verified: true, confirmed_at: new Date().toISOString(), confirm_token: null })
    .eq('id', data.id);

  return NextResponse.redirect(new URL('/?review=confirmed', request.url));
}
