'use client';

import { Check, ChevronDown, Link2, Plus } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import type { StoryCategory, StoryVisibility } from '@/lib/api/stories';
import type { StoryMusic } from '@/lib/stories/music';
import { StoryMusicPicker } from './StoryMusicPicker';

interface StoryDetailsPanelProps {
  STORY_CATEGORIES: { value: StoryCategory; label: string; icon: ReactNode }[];
  VISIBILITY_OPTIONS: { value: StoryVisibility; label: string; icon: ReactNode; desc: string }[];
  category: StoryCategory;
  setCategory: (category: StoryCategory) => void;
  visibility: StoryVisibility;
  setVisibility: (visibility: StoryVisibility) => void;
  music: StoryMusic | null;
  setMusic: (music: StoryMusic | null) => void;
  linkUrl: string;
  setLinkUrl: (url: string) => void;
  linkTitle: string;
  setLinkTitle: (title: string) => void;
  error: string | null;
}

export function StoryDetailsPanel({
  STORY_CATEGORIES,
  VISIBILITY_OPTIONS,
  category,
  setCategory,
  visibility,
  setVisibility,
  music,
  setMusic,
  linkUrl,
  setLinkUrl,
  linkTitle,
  setLinkTitle,
  error,
}: StoryDetailsPanelProps) {
  const [linkExpanded, setLinkExpanded] = useState(Boolean(linkUrl));
  const audience = VISIBILITY_OPTIONS.find((option) => option.value === visibility);
  return (
    <div className="space-y-5 p-5 sm:p-6">
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Choose who sees your story and add a finishing touch.
      </p>

      <fieldset>
        <legend className="mb-2.5 text-sm font-semibold tracking-tight">Category</legend>
        <div className="grid grid-cols-3 gap-1.5">
          {STORY_CATEGORIES.map((option) => (
            <button
              type="button"
              key={option.value}
              aria-pressed={category === option.value}
              onClick={() => setCategory(option.value)}
              className={`flex min-h-10 items-center gap-2 rounded-lg border px-2.5 py-2 text-left text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${category === option.value ? 'border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900' : 'border-neutral-200 text-neutral-600 hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800'}`}
            >
              <span className="shrink-0 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:stroke-[1.75]">
                {option.icon}
              </span>
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-2.5 text-sm font-semibold tracking-tight">Audience</legend>
        <div className="grid grid-cols-3 gap-1.5 rounded-xl border border-neutral-200 bg-neutral-50 p-1 dark:border-neutral-700 dark:bg-neutral-800/50">
          {VISIBILITY_OPTIONS.map((option) => (
            <button
              type="button"
              key={option.value}
              aria-pressed={visibility === option.value}
              onClick={() => setVisibility(option.value)}
              className={`flex min-h-10 items-center justify-center gap-1.5 rounded-lg px-1 py-2 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 ${visibility === option.value ? 'bg-white text-neutral-950 shadow-sm ring-1 ring-neutral-200 dark:bg-neutral-700 dark:text-white dark:ring-neutral-600' : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'}`}
            >
              <span className="shrink-0 [&>svg]:h-3.5 [&>svg]:w-3.5">{option.icon}</span>
              {option.label}
            </button>
          ))}
        </div>
        <p className="mt-2 flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
          <Check className="h-3 w-3" />
          {audience?.desc}
        </p>
      </fieldset>

      <section
        aria-label="Story soundtrack"
        className="border-t border-neutral-100 pt-4 dark:border-neutral-800"
      >
        <div className="mb-2.5 flex items-center justify-between">
          <h3 className="text-sm font-semibold">Soundtrack</h3>
          <span className="text-xs text-neutral-400">Optional</span>
        </div>
        <StoryMusicPicker music={music} onChange={setMusic} />
      </section>

      <section className="border-t border-neutral-100 pt-4 dark:border-neutral-800">
        <button
          type="button"
          aria-expanded={linkExpanded}
          aria-controls="story-link-fields"
          onClick={() => setLinkExpanded((expanded) => !expanded)}
          className="flex w-full items-center gap-2 text-sm font-medium"
        >
          <Link2 className="h-4 w-4 text-neutral-500" />
          <span>{linkUrl ? 'Story link' : 'Add a link'}</span>
          <span className="ml-auto text-xs font-normal text-neutral-400">Optional</span>
          {linkExpanded ? (
            <ChevronDown className="h-4 w-4 text-neutral-400" />
          ) : (
            <Plus className="h-4 w-4 text-neutral-400" />
          )}
        </button>
        {linkExpanded && (
          <div id="story-link-fields" className="mt-3 space-y-2">
            <label htmlFor="story-link-url" className="sr-only">
              Link URL
            </label>
            <input
              id="story-link-url"
              type="url"
              value={linkUrl}
              onChange={(event) => setLinkUrl(event.target.value)}
              placeholder="https://example.com"
              className="w-full rounded-lg border border-neutral-200 bg-transparent px-3 py-2.5 text-sm outline-none focus:border-neutral-500 dark:border-neutral-700"
            />
            <label htmlFor="story-link-title" className="sr-only">
              Link title
            </label>
            <input
              id="story-link-title"
              value={linkTitle}
              onChange={(event) => setLinkTitle(event.target.value)}
              placeholder="Link title (optional)"
              className="w-full rounded-lg border border-neutral-200 bg-transparent px-3 py-2.5 text-sm outline-none focus:border-neutral-500 dark:border-neutral-700"
            />
          </div>
        )}
      </section>
      {error && (
        <p
          role="alert"
          className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600 dark:bg-red-500/10 dark:text-red-400"
        >
          {error}
        </p>
      )}
    </div>
  );
}
