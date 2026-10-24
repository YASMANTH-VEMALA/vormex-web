'use client';
import React from 'react';

export function ComposerAction({
  icon: Icon,
  label,
  tone,
  onClick,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  tone: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-gray-600 transition-colors hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
    >
      <Icon className={`h-[18px] w-[18px] ${tone}`} />
      <span className="text-xs font-medium sm:text-[13px]">{label}</span>
    </button>
  );
}
