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
      className="group flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-gray-700 transition-colors hover:bg-gray-100/80 dark:text-neutral-300 dark:hover:bg-neutral-800"
    >
      <Icon className={`h-5 w-5 transition-transform group-hover:scale-110 ${tone}`} />
      <span className="text-[13px] font-semibold">{label}</span>
    </button>
  );
}
