'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import type * as React from 'react';
import { PeopleBrowseLayout } from './PeopleBrowseLayout';
import { FilterPanel, tabItems } from './PeopleFilterControls';
import { PeopleSearchHeader } from './PeopleSearchHeader';

interface FindPeopleViewProps {
  activeFilterChips: React.JSX.Element;
  activeFilterCount: number;
  activeGridHasMore: boolean;
  activeTab: import('@/components/find-people/FindPeople.types').TabType;
  clearFilters: () => void;
  displayedPeople: import('@/lib/api/people').PersonCard[];
  filterPanelProps: import('@/components/find-people/FindPeople.types').FilterPanelProps;
  handleConnectionChange: (
    personId: string,
    relationship: import('@/lib/api/people').PersonRelationship
  ) => void;
  handleProfileIntent: (person: import('@/lib/api/people').PersonCard) => void;
  hasActiveFilters: boolean;
  initialError: boolean;
  isAuthoritativeSearch: boolean;
  isGridLoading: boolean;
  isGridTab: boolean;
  isSearchDebouncing: boolean;
  isSearchMode: boolean;
  isSearchResultsVisible: boolean;
  loadMore: (force?: boolean) => Promise<void>;
  loadMoreRef: React.RefObject<HTMLDivElement | null>;
  loading: boolean;
  loadingMore: boolean;
  normalizedDebouncedSearch: string;
  normalizedSearchQuery: string;
  prefetchIndex: number;
  queryClient: import('@tanstack/react-query').QueryClient;
  recentProfiles: import('@/lib/findPeopleRecent').RecentPerson[];
  recentSearches: string[];
  refetchInitial: (options?: import('@tanstack/react-query').RefetchOptions | undefined) => Promise<
    import('@tanstack/react-query').QueryObserverResult<
      {
        people: import('@/lib/api/people').PersonCard[];
        total: number;
        hasMore: boolean;
        nextCursor: string | null | undefined;
        suggestions: never[];
        suggestionsHasMore: boolean;
        colleaguePeople: never[];
        colleagueHasMore: boolean;
      },
      Error
    >
  >;
  retryActiveGrid: () => void;
  searchError: string | null;
  searchQuery: string;
  sectionError: string | null;
  setActiveTab: React.Dispatch<
    React.SetStateAction<import('@/components/find-people/FindPeople.types').TabType>
  >;
  setSearchFocused: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setSearchRetryVersion: React.Dispatch<React.SetStateAction<number>>;
  setSectionError: React.Dispatch<React.SetStateAction<string | null>>;
  setShowMobileFilters: React.Dispatch<React.SetStateAction<boolean>>;
  showMobileFilters: boolean;
  showSidebar: boolean;
  total: number;
  user: import('@/types/auth').User | null;
}

export function FindPeopleView({
  activeFilterChips,
  activeFilterCount,
  activeGridHasMore,
  activeTab,
  clearFilters,
  displayedPeople,
  filterPanelProps,
  handleConnectionChange,
  handleProfileIntent,
  hasActiveFilters,
  initialError,
  isAuthoritativeSearch,
  isGridLoading,
  isGridTab,
  isSearchDebouncing,
  isSearchMode,
  isSearchResultsVisible,
  loadMore,
  loadMoreRef,
  loading,
  loadingMore,
  normalizedDebouncedSearch,
  normalizedSearchQuery,
  prefetchIndex,
  queryClient,
  recentProfiles,
  recentSearches,
  refetchInitial,
  retryActiveGrid,
  searchError,
  searchQuery,
  sectionError,
  setActiveTab,
  setSearchFocused,
  setSearchQuery,
  setSearchRetryVersion,
  setSectionError,
  setShowMobileFilters,
  showMobileFilters,
  showSidebar,
  total,
  user,
}: FindPeopleViewProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-950 pb-24">
      {/* Header */}
      <PeopleSearchHeader
        activeFilterCount={activeFilterCount}
        activeTab={activeTab}
        hasActiveFilters={hasActiveFilters}
        isAuthoritativeSearch={isAuthoritativeSearch}
        isSearchMode={isSearchMode}
        loading={loading}
        searchQuery={searchQuery}
        setActiveTab={setActiveTab}
        setSearchFocused={setSearchFocused}
        setSearchQuery={setSearchQuery}
        setSectionError={setSectionError}
        setShowMobileFilters={setShowMobileFilters}
        tabItems={tabItems}
      />

      {/* Body */}
      <PeopleBrowseLayout
        FilterPanel={FilterPanel}
        activeFilterChips={activeFilterChips}
        activeGridHasMore={activeGridHasMore}
        activeTab={activeTab}
        clearFilters={clearFilters}
        displayedPeople={displayedPeople}
        filterPanelProps={filterPanelProps}
        handleConnectionChange={handleConnectionChange}
        handleProfileIntent={handleProfileIntent}
        hasActiveFilters={hasActiveFilters}
        initialError={initialError}
        isGridLoading={isGridLoading}
        isGridTab={isGridTab}
        isSearchDebouncing={isSearchDebouncing}
        isSearchMode={isSearchMode}
        isSearchResultsVisible={isSearchResultsVisible}
        loadMore={loadMore}
        loadMoreRef={loadMoreRef}
        loading={loading}
        loadingMore={loadingMore}
        normalizedDebouncedSearch={normalizedDebouncedSearch}
        normalizedSearchQuery={normalizedSearchQuery}
        prefetchIndex={prefetchIndex}
        queryClient={queryClient}
        recentProfiles={recentProfiles}
        recentSearches={recentSearches}
        refetchInitial={refetchInitial}
        retryActiveGrid={retryActiveGrid}
        searchError={searchError}
        searchQuery={searchQuery}
        sectionError={sectionError}
        setSearchQuery={setSearchQuery}
        setSearchRetryVersion={setSearchRetryVersion}
        showSidebar={showSidebar}
        total={total}
        user={user}
      />

      {/* Mobile filter bottom sheet */}
      <AnimatePresence>
        {showMobileFilters && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMobileFilters(false)}
              className="lg:hidden fixed inset-0 z-50 bg-black/40"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
              className="lg:hidden fixed inset-x-0 bottom-0 z-50 max-h-[85vh] overflow-y-auto rounded-t-2xl bg-white dark:bg-neutral-900 shadow-2xl"
            >
              <div className="sticky top-0 bg-white dark:bg-neutral-900 px-5 pt-3 pb-2 border-b border-gray-100 dark:border-neutral-800">
                <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-gray-300 dark:bg-neutral-700" />
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-semibold text-gray-900 dark:text-white">Filters</h2>
                  <button
                    onClick={() => setShowMobileFilters(false)}
                    className="p-2 -mr-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-neutral-800"
                    aria-label="Close filters"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-5">
                <FilterPanel {...filterPanelProps} />
              </div>
              <div className="sticky bottom-0 flex gap-3 border-t border-gray-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4">
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="px-5 py-2.5 rounded-full border border-gray-300 dark:border-neutral-700 text-sm font-semibold text-gray-700 dark:text-neutral-300 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
                  >
                    Reset
                  </button>
                )}
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="flex-1 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  Show {total.toLocaleString()} result{total !== 1 ? 's' : ''}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
