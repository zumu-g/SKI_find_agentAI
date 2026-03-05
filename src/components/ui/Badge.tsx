import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'success' | 'premium' | 'outline';

const variants: Record<BadgeVariant, string> = {
  default: 'bg-sage-50 text-sage',
  success: 'bg-sage-50 text-sage',
  premium: 'bg-terra/10 text-terra-dark',
  outline: 'border border-border text-text-secondary',
};

export function Badge({ children, variant = 'default', className }: {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}) {
  return (
    <span className={cn(
      'inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full',
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}
