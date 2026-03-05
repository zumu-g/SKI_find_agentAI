import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export function StarRating({ rating, size = 16, showValue = false, className }: {
  rating: number;
  size?: number;
  showValue?: boolean;
  className?: string;
}) {
  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={size}
            className={cn(
              'transition-colors',
              star <= Math.round(rating) ? 'fill-terra text-terra' : 'fill-border text-border'
            )}
          />
        ))}
      </div>
      {showValue && (
        <span className="text-sm font-medium text-text ml-1">{rating.toFixed(1)}</span>
      )}
    </div>
  );
}
