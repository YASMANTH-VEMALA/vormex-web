'use client';

import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { BareSectionContext, Reveal } from './ProfileSection';

export interface HighlightSection {
  key: string;
  label: string;
  icon: ReactNode;
  count: number;
  /** Opens the "add" modal for this section. Only used for the owner. */
  onAdd: () => void;
  /** Renders the section's own component (grid / timeline). */
  render: () => ReactNode;
}

interface ProfileHighlightsProps {
  sections: HighlightSection[];
  isOwner: boolean;
}

const CARD =
  'w-full min-w-0 max-w-full overflow-hidden rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900';

/**
 * One card for skills, projects, experience, education, certificates and
 * achievements.
 * - Nothing added yet: a single "build your profile" card (owner) or nothing (visitor).
 * - Otherwise: one tabbed card that shows one section at a time, listing only
 *   the sections that have content. The owner gets "+" chips for the rest.
 */
export function ProfileHighlights({ sections, isOwner }: ProfileHighlightsProps) {
  const filled = sections.filter((section) => section.count > 0);
  const empty = sections.filter((section) => section.count === 0);
  const [selected, setSelected] = useState<string | null>(null);

  if (filled.length === 0) {
    if (!isOwner) return null;
    return (
      <Reveal className="min-w-0 max-w-full">
        <section className={cn(CARD, 'p-4 sm:p-6')}>
          <h2 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-lg">
            Build out your profile
          </h2>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            Add what you know and have done so people can find and trust you.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {empty.map((section) => (
              <button
                key={section.key}
                type="button"
                onClick={section.onAdd}
                className="group flex items-center gap-2.5 rounded-lg border border-dashed border-neutral-300 px-3 py-3 text-left text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-400 hover:bg-neutral-50 dark:border-white/15 dark:text-neutral-200 dark:hover:border-white/30 dark:hover:bg-white/5"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-500 dark:bg-white/10 dark:text-neutral-300">
                  {section.icon}
                </span>
                <span className="min-w-0 flex-1 truncate">{section.label}</span>
                <Plus className="h-4 w-4 flex-shrink-0 text-neutral-400 transition-colors group-hover:text-neutral-900 dark:group-hover:text-white" />
              </button>
            ))}
          </div>
        </section>
      </Reveal>
    );
  }

  const active = filled.find((section) => section.key === selected) ?? filled[0];

  return (
    <Reveal className="min-w-0 max-w-full">
      <section className={CARD}>
        <div className="flex items-center gap-2 border-b border-neutral-200 px-3 py-3 dark:border-white/10 sm:px-5">
          <div
            role="tablist"
            aria-label="Profile highlights"
            className="flex min-w-0 flex-1 gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {filled.map((section) => {
              const isActive = section.key === active.key;
              return (
                <button
                  key={section.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelected(section.key)}
                  className={cn(
                    'inline-flex flex-shrink-0 items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                      : 'text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-white/10'
                  )}
                >
                  {section.label}
                  <span
                    className={cn(
                      'rounded-full px-1.5 text-xs',
                      isActive
                        ? 'bg-white/20 text-white dark:bg-black/10 dark:text-neutral-900'
                        : 'bg-neutral-100 text-neutral-500 dark:bg-white/10 dark:text-neutral-400'
                    )}
                  >
                    {section.count}
                  </span>
                </button>
              );
            })}
          </div>
          {isOwner && empty.length > 0 && (
            <div className="hidden flex-shrink-0 items-center gap-1 sm:flex">
              {empty.map((section) => (
                <button
                  key={section.key}
                  type="button"
                  onClick={section.onAdd}
                  title={`Add ${section.label}`}
                  aria-label={`Add ${section.label}`}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-dashed border-neutral-300 text-neutral-500 transition-colors hover:border-neutral-400 hover:text-neutral-900 dark:border-white/20 dark:text-neutral-400 dark:hover:border-white/40 dark:hover:text-white"
                >
                  {section.icon}
                </button>
              ))}
            </div>
          )}
        </div>
        <div role="tabpanel" className="min-w-0 max-w-full p-4 sm:p-6">
          <BareSectionContext.Provider value={true}>
            <div key={active.key}>{active.render()}</div>
          </BareSectionContext.Provider>
        </div>
      </section>
    </Reveal>
  );
}
