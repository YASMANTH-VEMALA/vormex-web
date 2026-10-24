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
  return (
    <div className="sticky top-0 z-40 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-neutral-800 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 pt-5">
        {/* Title */}
        <div className={`${isSearchMode ? 'sr-only' : 'flex'} items-end justify-between gap-4`}>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Find People
            </h1>
            <p className="mt-0.5 text-sm text-gray-500 dark:text-neutral-400">
              Grow your network — students, creators and builders
            </p>
          </div>
        </div>

        {/* Search Bar (only for All tab) */}
        {activeTab === 'all' && (
          <div className="mt-4 flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
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
                className="w-full pl-11 pr-10 py-2.5 rounded-full border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm text-gray-900 dark:text-white placeholder-gray-500 outline-none shadow-sm transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:text-gray-600"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              {loading && isAuthoritativeSearch && (
                <Loader2
                  className="absolute right-11 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin text-blue-600"
                  aria-label="Searching"
                />
              )}
            </div>

            {/* Mobile filter trigger */}
            {!isSearchMode && (
              <button
                onClick={() => setShowMobileFilters(true)}
                className={`lg:hidden relative flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-semibold shadow-sm transition-colors ${
                  hasActiveFilters
                    ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400'
                    : 'border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-gray-700 dark:text-neutral-300 hover:bg-gray-50 dark:hover:bg-neutral-800'
                }`}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {activeFilterCount > 0 && (
                  <span className="flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-blue-600 text-white text-[10px] font-bold">
                    {activeFilterCount}
                  </span>
                )}
              </button>
            )}
          </div>
        )}

        {/* Tabs — underline style */}
        {!isSearchMode && (
          <nav
            className="mt-3 -mb-px flex gap-1 overflow-x-auto scrollbar-hide"
            aria-label="Find people tabs"
          >
            {tabItems.map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => {
                  setSectionError(null);
                  setActiveTab(id);
                }}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === id
                    ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                    : 'border-transparent text-gray-500 dark:text-neutral-400 hover:text-gray-800 dark:hover:text-neutral-200 hover:border-gray-300 dark:hover:border-neutral-600'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}
