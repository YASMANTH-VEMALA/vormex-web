import { cn } from '@/lib/utils';
import React, { useId } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = '', id, ...props }: InputProps) {
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          'w-full px-3.5 py-2.5 border rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/60 dark:focus:ring-blue-400/60',
          'bg-white dark:bg-white/5 text-gray-900 dark:text-white',
          'border-gray-300 dark:border-white/10 dark:focus:border-blue-400/60',
          'placeholder:text-gray-400 dark:placeholder:text-neutral-500',
          error && 'border-red-500 dark:border-red-600',
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
}
