import { NextResponse } from 'next/server';
import { createHash, randomUUID } from 'crypto';
import { getServiceClient } from '@/lib/supabase';

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });

  const { agentId, reviewerName, reviewerEmail, rating, reviewText, saleAddress, saleDate } = body;

  if (!agentId || !reviewerName || !reviewerEmail || !rating) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }
  if (typeof rating !== 'number' || rating < 1 || rating > 5) {
    return NextResponse.json({ error: 'Rating must be 1–5' }, { status: 400 });
  }

  const emailHash = createHash('md5').update(reviewerEmail.toLowerCase().trim()).digest('hex');
  const confirmToken = randomUUID();

  const sb = getServiceClient();
  if (!sb) {
    // Dev mode — acknowledge without persisting
    return NextResponse.json({
      ok: true,
      dev: true,
      message: 'Review received (dev mode — connect Supabase to persist reviews)',
    }, { status: 201 });
  }

  // Check for duplicate (same email per agent)
  const { data: existing } = await sb
    .from('reviews')
    .select('id')
    .eq('agent_id', agentId)
    .eq('reviewer_email_hash', emailHash)
    .limit(1);

  if (existing && existing.length > 0) {
    return NextResponse.json({ error: 'You have already submitted a review for this agent' }, { status: 409 });
  }

  const { error } = await sb.from('reviews').insert({
    agent_id: agentId,
    reviewer_name: reviewerName,
    reviewer_email_hash: emailHash,
    rating,
    review_text: reviewText || null,
    sale_address: saleAddress || null,
    sale_date: saleDate || null,
    verified: false,
    confirm_token: confirmToken,
  });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Send confirmation email via Resend if configured
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const confirmUrl = `${siteUrl}/api/reviews/confirm?token=${confirmToken}`;

    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'Kova Reviews <reviews@kova.com.au>',
        to: reviewerEmail,
        subject: 'Please confirm your Kova review',
        html: `
          <p>Hi ${reviewerName},</p>
          <p>Thanks for your review! Please confirm it by clicking the link below:</p>
          <p><a href="${confirmUrl}">${confirmUrl}</a></p>
          <p>This link expires in 48 hours.</p>
          <p>— The Kova Team</p>
        `,
      }),
    });
  }

  return NextResponse.json({ ok: true, message: 'Review submitted — check your email to confirm' }, { status: 201 });
}
