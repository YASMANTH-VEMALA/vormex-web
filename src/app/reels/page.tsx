'use client';

import { ReelsFeed } from '@/components/reels';
import { cn } from '@/lib/utils';
import { ArrowLeft, BarChart3, Compass, FileVideo, MoreHorizontal, Plus } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type FeedMode = 'foryou' | 'following';

const reelTools = [
  {
    title: 'Trending',
    description: 'Discover popular reels',
    href: '/reels/trending',
    icon: Compass,
  },
  { title: 'Drafts', description: 'Continue a saved reel', href: '/reels/drafts', icon: FileVideo },
  {
    title: 'Analytics',
    description: 'See how your reels perform',
    href: '/reels/analytics',
    icon: BarChart3,
  },
];

export default function ReelsPage() {
  const [mode, setMode] = useState<FeedMode>('foryou');
  const [showTools, setShowTools] = useState(false);

  useEffect(() => {
    if (!showTools) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowTools(false);
        document.getElementById('reels-options-button')?.focus();
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [showTools]);

  return (
    <div className="relative min-h-[100dvh] w-full bg-black">
      <header className="pointer-events-none absolute inset-x-0 top-0 z-20 bg-gradient-to-b from-black/80 via-black/35 to-transparent px-3 pb-8 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-5 sm:pt-4">
        {showTools && (
          <button
            type="button"
            aria-label="Close reels options"
            onClick={() => setShowTools(false)}
            className="pointer-events-auto fixed inset-0 z-20 cursor-default"
          />
        )}
        <div className="pointer-events-auto relative z-30 mx-auto flex max-w-3xl items-center justify-between gap-2">
          <Link
            href="/feed"
            aria-label="Back to feed"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-md hover:bg-white/20 sm:w-auto sm:gap-2 sm:px-3"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="hidden text-sm font-semibold md:inline">Reels</span>
          </Link>

          <div
            role="group"
            aria-label="Reels feed"
            className="flex shrink-0 rounded-full border border-white/10 bg-black/40 p-1 backdrop-blur-md"
          >
            {(['foryou', 'following'] as const).map((feedMode) => (
              <button
                key={feedMode}
                type="button"
                aria-pressed={mode === feedMode}
                onClick={() => {
                  setMode(feedMode);
                  setShowTools(false);
                }}
                className={cn(
                  'rounded-full px-3 py-2 text-xs font-semibold transition-colors sm:px-4 sm:text-sm',
                  mode === feedMode
                    ? 'bg-white text-black'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                )}
              >
                {feedMode === 'foryou' ? 'For You' : 'Following'}
              </button>
            ))}
          </div>

          <div className="relative flex shrink-0 items-center gap-1.5">
            <Link
              href="/reels/create"
              aria-label="Create reel"
              title="Create reel"
              className="flex h-9 w-9 items-center justify-center gap-1.5 rounded-full bg-[#5b5fef] text-white shadow-sm hover:bg-[#4949cc] sm:w-auto sm:px-3"
            >
              <Plus className="h-5 w-5" />
              <span className="hidden text-xs font-semibold sm:inline">Create</span>
            </Link>
            <button
              id="reels-options-button"
              type="button"
              aria-label="Reels options"
              aria-expanded={showTools}
              aria-controls="reels-options"
              onClick={() => setShowTools((open) => !open)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md hover:bg-white/20"
            >
              <MoreHorizontal className="h-5 w-5" />
            </button>
            {showTools && (
              <nav
                id="reels-options"
                aria-label="Reels tools"
                className="absolute right-0 top-12 w-64 overflow-hidden rounded-2xl border border-white/15 bg-[#1c1f27] p-1.5 text-white shadow-xl"
              >
                {reelTools.map(({ title, description, href, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setShowTools(false)}
                    className="flex items-center gap-3 rounded-xl p-3 hover:bg-white/10 focus-visible:bg-white/10"
                  >
                    <Icon className="h-5 w-5 shrink-0 text-indigo-300" />
                    <span>
                      <span className="block text-sm font-semibold">{title}</span>
                      <span className="mt-0.5 block text-xs text-neutral-400">{description}</span>
                    </span>
                  </Link>
                ))}
              </nav>
            )}
          </div>
        </div>
      </header>
      <ReelsFeed key={mode} mode={mode} />
    </div>
  );
}
