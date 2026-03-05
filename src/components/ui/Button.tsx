import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'white';
type Size = 'sm' | 'md' | 'lg';

const variants: Record<Variant, string> = {
  primary: 'bg-terra text-white font-semibold hover:bg-terra-dark active:scale-[0.98] shadow-sm hover:shadow-md',
  secondary: 'border-2 border-sage text-sage font-semibold hover:bg-sage hover:text-white active:scale-[0.98]',
  ghost: 'text-sage font-medium hover:text-sage-light hover:bg-sage-50',
  white: 'bg-white text-text font-semibold hover:bg-surface shadow-sm hover:shadow-md active:scale-[0.98]',
};

const sizes: Record<Size, string> = {
  sm: 'px-5 py-2 text-sm rounded-full',
  md: 'px-7 py-3 text-base rounded-full',
  lg: 'px-9 py-4 text-lg rounded-full',
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
} & (ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement>);

export function Button({ variant = 'primary', size = 'md', href, className, children, ...props }: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer',
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
