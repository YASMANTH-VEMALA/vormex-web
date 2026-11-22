import { cn } from '@/lib/utils';
import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={cn(
        'glass rounded-2xl p-6 text-card-foreground',
        className
      )}
    >
      {children}
    </div>
  );
}
