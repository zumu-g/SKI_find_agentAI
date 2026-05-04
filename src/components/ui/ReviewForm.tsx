'use client';

import { useState } from 'react';
import { Star, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ReviewFormProps {
  agentId: string;
  agentName: string;
}

export function ReviewForm({ agentId, agentName }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [saleAddress, setSaleAddress] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) { setErrorMsg('Please select a rating'); return; }
    if (!name.trim() || !email.trim()) { setErrorMsg('Name and email are required'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setErrorMsg('Please enter a valid email'); return; }

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          agentId,
          reviewerName: name.trim(),
          reviewerEmail: email.trim(),
          rating,
          reviewText: text.trim() || undefined,
          saleAddress: saleAddress.trim() || undefined,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong');
        setStatus('error');
      } else {
        setStatus('success');
      }
    } catch {
      setErrorMsg('Network error — please try again');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="w-14 h-14 rounded-full bg-sage-50 flex items-center justify-center mb-4">
          <CheckCircle size={28} className="text-sage" />
        </div>
        <h3 className="text-lg font-bold text-ink mb-2">Review submitted</h3>
        <p className="text-sm text-ink-secondary max-w-sm">
          We&apos;ve sent a confirmation link to your email. Your review will appear once confirmed.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="text-sm text-ink-secondary">
        Sold through {agentName}? Share your experience to help other homeowners.
      </p>

      {/* Star picker */}
      <div>
        <label className="block text-sm font-semibold text-ink mb-2">Your rating</label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setRating(n)}
              onMouseEnter={() => setHover(n)}
              onMouseLeave={() => setHover(0)}
              className="p-0.5 transition-transform hover:scale-110 active:scale-95"
              aria-label={`Rate ${n} star${n !== 1 ? 's' : ''}`}
            >
              <Star
                size={28}
                className={cn(
                  'transition-colors',
                  (hover || rating) >= n ? 'text-[#F5A623] fill-[#F5A623]' : 'text-border-strong'
                )}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Name + email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-ink mb-1.5">Your name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Smith"
            className="w-full h-11 px-4 rounded-xl border border-border bg-surface text-sm text-ink placeholder:text-ink-tertiary focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-ink mb-1.5">Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@example.com"
            className="w-full h-11 px-4 rounded-xl border border-border bg-surface text-sm text-ink placeholder:text-ink-tertiary focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition"
          />
        </div>
      </div>

      {/* Review text */}
      <div>
        <label className="block text-sm font-semibold text-ink mb-1.5">
          Your review <span className="font-normal text-ink-tertiary">(optional)</span>
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tell other sellers what it was like working with this agent..."
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-sm text-ink placeholder:text-ink-tertiary focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition resize-none"
        />
      </div>

      {/* Sale address */}
      <div>
        <label className="block text-sm font-semibold text-ink mb-1.5">
          Property sold <span className="font-normal text-ink-tertiary">(optional — helps verify your review)</span>
        </label>
        <input
          type="text"
          value={saleAddress}
          onChange={(e) => setSaleAddress(e.target.value)}
          placeholder="e.g. 12 Main St, Bondi NSW 2026"
          className="w-full h-11 px-4 rounded-xl border border-border bg-surface text-sm text-ink placeholder:text-ink-tertiary focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition"
        />
      </div>

      {errorMsg && (
        <div className="flex items-center gap-2 text-sm text-terra bg-[#fdf0ec] rounded-xl px-4 py-3">
          <AlertCircle size={16} className="shrink-0" />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full h-11 rounded-full bg-terra hover:bg-terra-dark text-white font-semibold text-sm transition-colors disabled:opacity-60"
      >
        {status === 'loading' ? 'Submitting...' : 'Submit Review'}
      </button>

      <p className="text-xs text-ink-tertiary text-center">
        We&apos;ll send a confirmation email. Your email address is never shown publicly.
      </p>
    </form>
  );
}
