import React from 'react';

export interface AlertProps {
  type: 'success' | 'error';
  message: string;
  className?: string;
}

export function Alert({ type, message, className = '' }: AlertProps) {
  const baseClasses = 'p-3 rounded-md text-sm';
  const typeClasses = {
    success: 'bg-green-50 text-green-800 border border-green-200',
    error: 'bg-red-50 text-red-800 border border-red-200',
  };

  return (
    <div className={`${baseClasses} ${typeClasses[type]} ${className}`}>
      {message}
    </div>
  );
}

