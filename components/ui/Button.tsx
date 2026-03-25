import {
  ButtonHTMLAttributes,
  ReactNode,
  ReactElement,
  cloneElement,
} from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  asChild = false,
  ...props
}: ButtonProps) {
  const baseStyles =
    'font-semibold transition-all duration-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center';

  const variants = {
    primary:
      'bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/20',
    secondary: 'bg-muted text-foreground hover:bg-border',
    outline:
      'border-2 border-white text-white hover:bg-white hover:text-accent',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedClassName = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className,
  );

  if (asChild && children) {
    return cloneElement(
      children as ReactElement,
      {
        className: cn(
          ((children as ReactElement).props as any).className,
          combinedClassName,
        ),
      } as any,
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
