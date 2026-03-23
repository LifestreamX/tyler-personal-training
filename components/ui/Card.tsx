import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-muted border border-border rounded-xl p-6',
        hover &&
          'transition-transform duration-300 hover:scale-[1.02] hover:border-accent/50',
        className,
      )}
    >
      {children}
    </div>
  );
}
