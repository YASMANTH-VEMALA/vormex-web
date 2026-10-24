'use client';

import { useState } from 'react';
import { ArrowRight, Check, Loader2, Plus, Search, X } from 'lucide-react';
import { onboardingPrimaryButton } from '../OnboardingFrame';

interface Props {
  initialData?: Record<string, unknown>;
  onComplete: (data: Record<string, unknown>) => void;
  saving: boolean;
}

const INTEREST_GROUPS = [
  {
    label: 'Tech & Engineering',
    items: [
      'Python',
      'JavaScript',
      'React',
      'AI/ML',
      'Data Science',
      'Cybersecurity',
      'Cloud/DevOps',
      'Mobile Dev',
      'Blockchain',
      'Game Dev',
      'DSA',
      'Web Dev',
    ],
  },
  {
    label: 'Business & Finance',
    items: [
      'Startups',
      'Marketing',
      'Finance',
      'Investing',
      'E-Commerce',
      'Product Management',
      'Sales',
      'Accounting',
    ],
  },
  {
    label: 'Creative & Design',
    items: [
      'UI/UX Design',
      'Graphic Design',
      'Video Editing',
      'Photography',
      'Animation',
      'Illustration',
      'Figma',
      '3D Modeling',
    ],
  },
  {
    label: 'Content & Media',
    items: [
      'YouTube',
      'Blogging',
      'Podcasting',
      'Social Media',
      'Copywriting',
      'Filmmaking',
      'Journalism',
      'Public Speaking',
    ],
  },
  {
    label: 'Music & Arts',
    items: [
      'Guitar',
      'Singing',
      'Piano',
      'Music Production',
      'Dancing',
      'Painting',
      'Poetry',
      'Theatre',
    ],
  },
  {
    label: 'Sports & Fitness',
    items: [
      'Cricket',
      'Football',
      'Basketball',
      'Badminton',
      'Swimming',
      'Gym/Fitness',
      'Yoga',
      'Running',
      'Chess',
      'Table Tennis',
    ],
  },
  {
    label: 'Life & Growth',
    items: [
      'Leadership',
      'Communication',
      'Time Management',
      'Networking',
      'Mental Health',
      'Reading',
      'Volunteering',
      'Travel',
    ],
  },
  {
    label: 'Academic',
    items: [
      'Research',
      'Competitive Exams',
      'GATE',
      'GRE',
      'CAT',
      'Interview Prep',
      'Resume Building',
      'Placements',
    ],
  },
];

function normalizeCustomLabel(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return '';
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
}

export default function StepInterests({ initialData, onComplete, saving }: Props) {
  const [selected, setSelected] = useState<string[]>((initialData?.interests as string[]) || []);
  const [canTeach, setCanTeach] = useState<string[]>((initialData?.canTeach as string[]) || []);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(INTEREST_GROUPS[0].label);
  const toggle = (item: string) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((value) => value !== item) : [...prev, item],
    );
    if (selected.includes(item)) setCanTeach((prev) => prev.filter((value) => value !== item));
  };
  const query = search.trim();
  const groups = INTEREST_GROUPS.filter((group) => query || group.label === category)
    .map((group) => ({
      ...group,
      items: group.items.filter(
        (item) => !query || item.toLowerCase().includes(query.toLowerCase()),
      ),
    }))
    .filter((group) => group.items.length > 0);
  const customLabel = normalizeCustomLabel(query).slice(0, 80);
  const canAdd =
    query &&
    !INTEREST_GROUPS.some((group) =>
      group.items.some((item) => item.toLowerCase() === query.toLowerCase()),
    ) &&
    !selected.some((item) => item.toLowerCase() === customLabel.toLowerCase());
  return (
    <div className="space-y-6">
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-4 top-[18px] h-5 w-5 text-stone-400"
          aria-hidden="true"
        />
        <input
          aria-label="Search interests"
          value={search}
          disabled={saving}
          maxLength={80}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for something you enjoy"
          className="min-h-14 w-full rounded-xl border border-stone-200 bg-white pl-12 pr-12 text-base outline-none placeholder:text-stone-400 focus:border-stone-500 focus:ring-4 focus:ring-stone-500/5 dark:border-stone-700 dark:bg-stone-900"
        />
        {search && (
          <button
            type="button"
            onClick={() => setSearch('')}
            aria-label="Clear search"
            className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-lg text-stone-500"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      {!query && (
        <fieldset
          disabled={saving}
          aria-label="Browse interest categories"
          className="flex flex-wrap gap-x-1 gap-y-1 border-b border-stone-200 pb-4 dark:border-stone-800"
        >
          {INTEREST_GROUPS.map((group) => (
            <button
              type="button"
              key={group.label}
              aria-pressed={category === group.label}
              onClick={() => setCategory(group.label)}
              className={
                'min-h-10 rounded-lg px-3 text-xs font-medium transition sm:text-sm ' +
                (category === group.label
                  ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900'
                  : 'text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800')
              }
            >
              {group.label
                .replace(' & Engineering', '')
                .replace(' & Finance', '')
                .replace('Creative & Design', 'Design')
                .replace('Content & Media', 'Media')
                .replace('Life & Growth', 'Personal growth')}
            </button>
          ))}
        </fieldset>
      )}
      <fieldset
        disabled={saving}
        aria-label="Available interests"
        className="min-h-[180px] space-y-5"
      >
        {groups.length === 0 && (
          <p className="py-4 text-sm text-stone-500">
            Make it yours. Add this as a new interest below.
          </p>
        )}
        {groups.map((group) => (
          <div key={group.label}>
            {query && <h2 className="mb-3 text-xs text-stone-500">{group.label}</h2>}
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((item) => {
                const checked = selected.includes(item);
                return (
                  <button
                    type="button"
                    key={item}
                    aria-pressed={checked}
                    onClick={() => toggle(item)}
                    className={
                      'inline-flex min-h-12 items-center gap-2 rounded-full border px-4 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500 ' +
                      (checked
                        ? 'border-[#b65b3d] bg-[#fbefe8] text-[#8e442c] dark:border-orange-400 dark:bg-orange-400/10 dark:text-orange-300'
                        : 'border-stone-200 bg-white text-stone-600 hover:border-stone-400 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300')
                    }
                  >
                    {checked ? (
                      <Check className="h-3.5 w-3.5" />
                    ) : (
                      <Plus className="h-3.5 w-3.5 text-stone-400" />
                    )}
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
        {canAdd && (
          <button
            type="button"
            onClick={() => {
              setSelected((prev) => [...prev, customLabel]);
              setSearch('');
            }}
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-dashed border-stone-400 px-4 text-sm dark:border-stone-600"
          >
            <Plus className="h-4 w-4" />
            Add “{customLabel}”
          </button>
        )}
      </fieldset>
      <div aria-live="polite" className="rounded-xl bg-stone-100/80 p-4 dark:bg-stone-900">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-medium">
            {selected.length >= 2 ? 'A good start.' : 'Choose at least two'}
          </p>
          <span className="text-xs text-stone-500">{selected.length} selected</span>
        </div>
        {selected.length > 0 ? (
          <div aria-label="Selected interests" className="mt-3 flex flex-wrap gap-2">
            {selected.map((item) => (
              <button
                key={item}
                type="button"
                disabled={saving}
                aria-label={'Remove ' + item}
                onClick={() => toggle(item)}
                className="inline-flex min-h-9 items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-xs text-stone-700 dark:bg-stone-800 dark:text-stone-200"
              >
                {item}
                <X className="h-3 w-3 text-stone-400" />
              </button>
            ))}
          </div>
        ) : (
          <p className="mt-1 text-xs leading-5 text-stone-500">
            Browse a category or search. There’s no wrong combination.
          </p>
        )}
      </div>
      {selected.length > 0 && (
        <details className="text-sm">
          <summary className="cursor-pointer text-stone-500">
            Want to share any of these skills? <span className="text-stone-400">Optional</span>
          </summary>
          <fieldset
            disabled={saving}
            aria-label="Skills you can share"
            className="mt-3 flex flex-wrap gap-2"
          >
            {selected.map((item) => {
              const checked = canTeach.includes(item);
              return (
                <button
                  type="button"
                  key={item}
                  aria-pressed={checked}
                  onClick={() =>
                    setCanTeach((prev) =>
                      checked ? prev.filter((value) => value !== item) : [...prev, item],
                    )
                  }
                  className={
                    'inline-flex min-h-10 items-center gap-2 rounded-full border px-3 text-xs ' +
                    (checked
                      ? 'border-stone-900 bg-stone-900 text-white dark:border-stone-100 dark:bg-stone-100 dark:text-stone-900'
                      : 'border-stone-200 bg-white text-stone-600 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300')
                  }
                >
                  {checked && <Check className="h-3 w-3" />}
                  {item}
                </button>
              );
            })}
          </fieldset>
        </details>
      )}
      <button
        type="button"
        disabled={selected.length < 2 || saving}
        onClick={() =>
          onComplete({
            interests: selected,
            skills: selected.map((name) => ({
              name,
              proficiency: 'Beginner',
              category: 'General',
            })),
            canTeach: canTeach.filter((item) => selected.includes(item)),
            wantToLearn: selected.filter((item) => !canTeach.includes(item)),
          })
        }
        className={onboardingPrimaryButton}
      >
        {saving ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Getting things ready
          </>
        ) : (
          <>
            Continue
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
    </div>
  );
}
