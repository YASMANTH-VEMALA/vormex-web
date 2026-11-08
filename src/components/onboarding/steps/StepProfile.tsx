'use client';

import {
  ArrowRight,
  BriefcaseBusiness,
  Camera,
  Check,
  Code2,
  Cpu,
  Dumbbell,
  FlaskConical,
  Laptop,
  Loader2,
  ChevronDown,
  Music2,
  Palette,
  PenTool,
  Rocket,
  Trophy,
} from 'lucide-react';
import { useState } from 'react';
import { onboardingPrimaryButton } from '../OnboardingFrame';
import CollegeSearch from '../CollegeSearch';

interface Props {
  initialData?: Record<string, unknown>;
  onComplete: (data: Record<string, unknown>) => void;
  saving: boolean;
  userCollege: string;
}

const GOALS = [
  { id: 'learn_coding', label: 'Coding & technology', icon: Laptop },
  { id: 'start_business', label: 'Business & startups', icon: Rocket },
  { id: 'design', label: 'Design & creativity', icon: Palette },
  { id: 'get_internship', label: 'Career & internships', icon: BriefcaseBusiness },
  { id: 'competitive_programming', label: 'Competitive coding', icon: Trophy },
  { id: 'ai_ml', label: 'AI & data science', icon: Cpu },
  { id: 'content_creation', label: 'Content creation', icon: PenTool },
  { id: 'research', label: 'Research & academics', icon: FlaskConical },
  { id: 'sports_fitness', label: 'Sports & fitness', icon: Dumbbell },
  { id: 'music_arts', label: 'Music & arts', icon: Music2 },
  { id: 'photography', label: 'Photography & film', icon: Camera },
  { id: 'freelance', label: 'Freelancing', icon: Code2 },
];

const LOOKING_FOR = [
  { id: 'study_partner', label: 'Study Partner' },
  { id: 'project_collaborator', label: 'Project Mate' },
  { id: 'mentor', label: 'Mentor' },
  { id: 'co_founder', label: 'Co-Founder' },
  { id: 'accountability_buddy', label: 'Accountability Buddy' },
  { id: 'hackathon_team', label: 'Hackathon Teammate' },
];

export default function StepProfile({ initialData, onComplete, saving, userCollege }: Props) {
  const [college, setCollege] = useState<string>(
    (initialData?.college as string) || userCollege || '',
  );
  const [primaryGoal, setPrimaryGoal] = useState<string>(
    (initialData?.primaryGoal as string) || '',
  );
  const [lookingFor, setLookingFor] = useState<string[]>(
    (initialData?.lookingFor as string[]) || [],
  );
  const [showAll, setShowAll] = useState(false);
  const featuredIds = [
    'learn_coding',
    'start_business',
    'design',
    'get_internship',
    'content_creation',
    'research',
  ];
  const visibleGoals = showAll
    ? GOALS
    : GOALS.filter((goal) => featuredIds.includes(goal.id) || primaryGoal === goal.id);
  const canContinue = college.trim().length >= 2 && primaryGoal !== '';
  return (
    <div className="space-y-8">
      <CollegeSearch value={college} onChange={setCollege} disabled={saving} />
      <fieldset disabled={saving}>
        <legend className="text-sm font-medium">What brings you to Vormex?</legend>
        <p className="mt-1 text-sm text-gray-400">Just choose one to start.</p>
        <div className="mt-4 grid grid-cols-2 gap-2.5">
          {visibleGoals.map((goal) => {
            const Icon = goal.icon;
            const selected = primaryGoal === goal.id;
            return (
              <button
                type="button"
                key={goal.id}
                aria-pressed={selected}
                onClick={() => setPrimaryGoal(goal.id)}
                className={
                  'flex min-h-[66px] items-center gap-2 rounded-xl border px-3 py-3 sm:gap-3 sm:px-4 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500 ' +
                  (selected
                    ? 'border-[#2563eb] bg-[#eff6ff] text-gray-900 dark:border-blue-400 dark:bg-blue-400/10 dark:text-white'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-gray-400 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300')
                }
              >
                <Icon
                  className={
                    'h-5 w-5 shrink-0 ' +
                    (selected ? 'text-[#2563eb] dark:text-blue-400' : 'text-gray-400')
                  }
                  aria-hidden="true"
                />
                <span className="flex-1 text-sm font-medium">{goal.label}</span>
                <span
                  className={
                    'flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ' +
                    (selected
                      ? 'border-[#2563eb] bg-[#2563eb] text-white dark:border-blue-400 dark:bg-blue-400 dark:text-neutral-950'
                      : 'border-gray-200 dark:border-neutral-600')
                  }
                >
                  {selected && <Check className="h-3 w-3" />}
                </span>
              </button>
            );
          })}
        </div>
        <button
          type="button"
          aria-expanded={showAll}
          onClick={() => setShowAll(!showAll)}
          className="mt-3 inline-flex min-h-10 items-center gap-1.5 text-sm text-gray-500 underline-offset-4 hover:underline"
        >
          {showAll ? 'Show fewer' : 'More things to explore'}
          <ChevronDown className={'h-3.5 w-3.5 transition ' + (showAll ? 'rotate-180' : '')} />
        </button>
      </fieldset>
      <details className="border-t border-gray-200 pt-5 dark:border-neutral-800">
        <summary className="cursor-pointer text-sm text-gray-500">
          Looking for someone specific? <span className="text-gray-400">Optional</span>
        </summary>
        <fieldset
          disabled={saving}
          aria-label="People you want to meet"
          className="mt-4 flex flex-wrap gap-2"
        >
          {LOOKING_FOR.map((item) => {
            const selected = lookingFor.includes(item.id);
            return (
              <button
                type="button"
                key={item.id}
                aria-pressed={selected}
                onClick={() =>
                  setLookingFor((prev) =>
                    selected ? prev.filter((id) => id !== item.id) : [...prev, item.id],
                  )
                }
                className={
                  'min-h-10 rounded-full border px-4 text-sm ' +
                  (selected
                    ? 'border-gray-900 bg-gray-900 text-white dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900'
                    : 'border-gray-200 bg-white text-gray-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300')
                }
              >
                {item.label}
              </button>
            );
          })}
        </fieldset>
      </details>
      <button
        type="button"
        disabled={!canContinue || saving}
        onClick={() =>
          onComplete({ college: college.trim(), primaryGoal, lookingFor, secondaryGoals: [] })
        }
        className={onboardingPrimaryButton}
      >
        {saving ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Saving
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
