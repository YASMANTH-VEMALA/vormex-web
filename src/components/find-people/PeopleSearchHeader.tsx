'use client';
import { Loader2, Search, SlidersHorizontal, X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface PeopleSearchHeaderProps {
  activeFilterCount: number;
  hasActiveFilters: boolean;
  isAuthoritativeSearch: boolean;
  isSearchMode: boolean;
  loading: boolean;
  searchQuery: string;
  setSearchFocused: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setShowMobileFilters: React.Dispatch<React.SetStateAction<boolean>>;
}

export function PeopleSearchHeader({
  activeFilterCount,
  hasActiveFilters,
  isAuthoritativeSearch,
  isSearchMode,
  loading,
  searchQuery,
  setSearchFocused,
  setSearchQuery,
  setShowMobileFilters,
}: PeopleSearchHeaderProps) {
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  return (
    <header className="relative overflow-hidden border-b border-gray-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
      {/* Official Vormex cover, faded in from the right so it frames the title without competing with it. */}
      {!isSearchMode && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-3/5 opacity-70 [mask-image:linear-gradient(to_right,transparent,black_55%)] dark:opacity-25 sm:block"
        >
          <Image
            src="/vormex-profile-cover.png"
            alt=""
            fill
            sizes="60vw"
            className="object-cover object-right"
          />
        </div>
      )}
      <div className="relative mx-auto max-w-7xl px-4 pb-4 pt-6 sm:px-6">
        {/* Title row */}
        <div className={`${isSearchMode ? 'sr-only' : 'flex'} items-center gap-4`}>
          <span className="flex h-14 w-14 shrink-0 items-center justify-center">
            <Image
              src="/logo.png"
              alt="Vormex"
              width={56}
              height={56}
              priority
              className="h-14 w-14 object-contain dark:invert"
            />
          </span>
          <div className="min-w-0">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-[28px]">
              Find People
            </h1>
            <p className="truncate text-sm text-gray-500 dark:text-neutral-400">
              Meet builders, creators and students who share your goals
            </p>
          </div>
        </div>

        {/* Search */}
        {
          <div className={`${isSearchMode ? '' : 'mt-5'} flex items-center gap-2`}>
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => {
                  if (!searchQuery.trim()) setSearchFocused(false);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Escape') {
                    setSearchQuery('');
                    setSearchFocused(false);
                    event.currentTarget.blur();
                  }
                }}
                placeholder="Search by name, username, college, skills..."
                aria-label="Search people"
                className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 pl-12 pr-24 text-sm text-gray-900 outline-none transition placeholder:text-gray-500 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:focus:bg-neutral-900"
              />
              <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1.5">
                {loading && isAuthoritativeSearch && (
                  <Loader2 className="h-4 w-4 animate-spin text-blue-600" aria-label="Searching" />
                )}
                {searchQuery ? (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      searchInputRef.current?.focus();
                    }}
                    className="rounded-full p-1.5 text-gray-400 hover:bg-gray-200 hover:text-gray-600 dark:hover:bg-neutral-700"
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                ) : (
                  <kbd className="hidden rounded-md border border-gray-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-gray-400 dark:border-neutral-700 dark:bg-neutral-900 sm:block">
                    Esc to clear
                  </kbd>
                )}
              </div>
            </div>

            {/* Mobile filter trigger */}
            {!isSearchMode && (
              <button
                type="button"
                onClick={() => setShowMobileFilters(true)}
                className={`relative flex h-12 items-center gap-2 rounded-xl border px-4 text-sm font-semibold transition-colors lg:hidden ${
                  hasActiveFilters
                    ? 'border-blue-600 bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400'
                    : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800'
                }`}
              >
                <SlidersHorizontal className="h-4 w-4" />
                <span className="hidden sm:inline">Filters</span>
                {activeFilterCount > 0 && (
                  <span className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-bold text-white">
                    {activeFilterCount}
                  </span>
                )}
              </button>
            )}
          </div>
        }
      </div>
    </header>
  );
}
