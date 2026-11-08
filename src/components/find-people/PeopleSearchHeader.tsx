'use client';
import { Loader2, Search, SlidersHorizontal, X } from 'lucide-react';
import React from 'react';

interface PeopleSearchHeaderProps {
  activeFilterCount: number;
  activeTab: import('@/components/find-people/FindPeople.types').TabType;
  hasActiveFilters: boolean;
  isAuthoritativeSearch: boolean;
  isSearchMode: boolean;
  loading: boolean;
  searchQuery: string;
  setActiveTab: React.Dispatch<
    React.SetStateAction<import('@/components/find-people/FindPeople.types').TabType>
  >;
  setSearchFocused: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setSectionError: React.Dispatch<React.SetStateAction<string | null>>;
  setShowMobileFilters: React.Dispatch<React.SetStateAction<boolean>>;
  tabItems: import('@/components/find-people/FindPeople.types').TabItem[];
}

export function PeopleSearchHeader({
  activeFilterCount,
  activeTab,
  hasActiveFilters,
  isAuthoritativeSearch,
  isSearchMode,
  loading,
  searchQuery,
  setActiveTab,
  setSearchFocused,
  setSearchQuery,
  setSectionError,
  setShowMobileFilters,
  tabItems,
}: PeopleSearchHeaderProps) {
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  return (
    <header className="border-b border-gray-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 pb-4 pt-6 sm:px-6">
        {/* Title row */}
        <div className={`${isSearchMode ? 'sr-only' : 'flex'} items-center gap-3`}>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm shadow-blue-600/25">
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="10" cy="10" r="6" fill="currentColor" fillOpacity=".2" />
              <path d="m20 20-4.2-4.2" />
              <path d="M10 7.5v5M7.5 10h5" />
            </svg>
          </span>
          <div className="min-w-0">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">
              Find People
            </h1>
            <p className="truncate text-sm text-gray-500 dark:text-neutral-400">
              Grow your network — students, creators and builders
            </p>
          </div>
        </div>

        {/* Search (All tab only) */}
        {activeTab === 'all' && (
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
                  <Loader2
                    className="h-4 w-4 animate-spin text-blue-600"
                    aria-label="Searching"
                  />
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
        )}

        {/* Tabs — pill chips */}
        {!isSearchMode && (
          <nav
            className="scrollbar-hide -mx-1 mt-4 flex gap-2 overflow-x-auto px-1 pb-1"
            aria-label="Find people tabs"
          >
            {tabItems.map(({ id, label, Icon }) => {
              const active = activeTab === id;
              return (
                <button
                  key={id}
                  type="button"
                  aria-current={active ? 'page' : undefined}
                  onClick={() => {
                    setSectionError(null);
                    setActiveTab(id);
                  }}
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                    active
                      ? 'border-blue-600 bg-blue-600 text-white shadow-sm shadow-blue-600/25'
                      : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </button>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
