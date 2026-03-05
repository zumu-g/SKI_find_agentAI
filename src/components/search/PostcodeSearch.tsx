'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { validatePostcode } from '@/lib/agents';

export function PostcodeSearch({ size = 'large', className }: {
  size?: 'default' | 'large';
  className?: string;
}) {
  const router = useRouter();
  const [postcode, setPostcode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postcode.trim()) {
      setError('Please enter your postcode');
      return;
    }
    if (!validatePostcode(postcode)) {
      setError('Please enter a valid UK postcode');
      return;
    }
    setError('');
    router.push(`/find-agents?postcode=${encodeURIComponent(postcode.trim())}`);
  };

  const isLarge = size === 'large';

  return (
    <form onSubmit={handleSubmit} className={cn('w-full max-w-xl', className)}>
      <div className={cn(
        'relative flex items-center bg-white rounded-full shadow-elevated overflow-hidden transition-shadow border border-border focus-within:ring-2 focus-within:ring-sage/30 focus-within:border-sage',
        isLarge ? 'h-16 sm:h-[72px]' : 'h-12'
      )}>
        <div className={cn('flex items-center pl-4 sm:pl-6 text-text-tertiary', isLarge ? 'gap-3' : 'gap-2')}>
          <MapPin size={isLarge ? 22 : 18} className="text-sage shrink-0" />
        </div>
        <input
          type="text"
          placeholder="Enter your postcode"
          value={postcode}
          onChange={(e) => { setPostcode(e.target.value); setError(''); }}
          className={cn(
            'flex-1 bg-transparent outline-none text-text placeholder:text-text-tertiary px-3',
            isLarge ? 'text-lg' : 'text-base'
          )}
        />
        <button
          type="submit"
          className={cn(
            'bg-terra hover:bg-terra-dark text-white font-semibold transition-all active:scale-[0.97] shrink-0',
            isLarge
              ? 'h-12 sm:h-14 px-6 sm:px-8 mr-1.5 sm:mr-2 rounded-full text-base'
              : 'h-9 px-5 mr-1.5 rounded-full text-sm'
          )}
        >
          <span className="hidden sm:inline">Compare Agents</span>
          <Search size={20} className="sm:hidden" />
        </button>
      </div>
      {error && (
        <p className="mt-2 text-sm text-terra pl-2">{error}</p>
      )}
      <p className={cn(
        'mt-3 text-center',
        isLarge ? 'text-sm text-text-tertiary' : 'text-xs text-text-tertiary'
      )}>
        Free service. No obligation. No spam.
      </p>
    </form>
  );
}
