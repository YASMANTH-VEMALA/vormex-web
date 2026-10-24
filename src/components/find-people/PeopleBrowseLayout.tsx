'use client';
import { ProfileLink } from '@/components/profile/ProfileLink';
import { UserAvatar } from '@/components/ui/UserAvatar';
import { VerificationBadge } from '@/components/ui/VerificationBadge';
import { SEARCH_MIN_CHARACTERS } from '@/lib/findPeoplePolicy';
import { queryKeys } from '@/lib/queryKeys';
import { AlertCircle, Loader2, RefreshCw, Search, Users } from 'lucide-react';
import React from 'react';
import { NearbyUsers } from './NearbyUsers';
import { PeopleYouKnowTab } from './PeopleYouKnowTab';
import { PersonCard } from './PersonCard';
import { PersonCardSkeleton } from './PersonCardSkeleton';
import { SearchPersonRow, SearchPersonRowSkeleton } from './SearchPersonRow';
import { SmartMatchesTab } from './SmartMatchesTab';

interface PeopleBrowseLayoutProps {
  FilterPanel: ({
    filterOptions,
    userCollege,
    selectedCollege,
    setSelectedCollege,
    selectedBranch,
    setSelectedBranch,
    selectedYear,
    setSelectedYear,
    selectedLocation,
    setSelectedLocation,
    openToOpportunities,
    setOpenToOpportunities,
    hasActiveFilters,
    onClearAll,
  }: import('@/components/find-people/FindPeople.types').FilterPanelProps) => React.JSX.Element;
  activeFilterChips: React.JSX.Element;
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
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setSearchRetryVersion: React.Dispatch<React.SetStateAction<number>>;
  showSidebar: boolean;
  total: number;
  user: import('@/types/auth').User | null;
}

export function PeopleBrowseLayout({
  FilterPanel,
  activeFilterChips,
  activeGridHasMore,
  activeTab,
  clearFilters,
  displayedPeople,
  filterPanelProps,
  handleConnectionChange,
  handleProfileIntent,
  hasActiveFilters,
  initialError,
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
  setSearchQuery,
  setSearchRetryVersion,
  showSidebar,
  total,
  user,
}: PeopleBrowseLayoutProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 flex items-start gap-6">
      {/* Desktop filter sidebar */}
      {showSidebar && (
        <aside className="hidden lg:block w-64 shrink-0 sticky top-[200px]">
          <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 shadow-sm p-4">
            <FilterPanel {...filterPanelProps} />
          </div>
        </aside>
      )}

      {/* Main content */}
      <main className="flex-1 min-w-0">
        {isSearchResultsVisible && (
          <section className="mx-auto max-w-3xl" aria-label="People search results">
            {normalizedSearchQuery.length < SEARCH_MIN_CHARACTERS ? (
              <div className="space-y-7">
                {recentSearches.length > 0 && (
                  <div>
                    <h2 className="text-sm font-bold text-gray-900 dark:text-white">
                      Recent searches
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {recentSearches.slice(0, 10).map((recent) => (
                        <button
                          key={recent}
                          type="button"
                          onMouseDown={(event) => event.preventDefault()}
                          onClick={() => setSearchQuery(recent)}
                          className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
                        >
                          {recent}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {recentProfiles.length > 0 && (
                  <div>
                    <h2 className="text-sm font-bold text-gray-900 dark:text-white">
                      Recently viewed
                    </h2>
                    <div className="mt-2 divide-y divide-gray-100 dark:divide-neutral-800">
                      {recentProfiles.slice(0, 8).map((person) => (
                        <ProfileLink
                          key={person.id}
                          profileId={person.username || person.id}
                          className="flex min-w-0 items-center gap-3 rounded-xl px-2 py-3 hover:bg-gray-100/80 dark:hover:bg-neutral-900"
                        >
                          <UserAvatar
                            imageSrc={person.profileImage}
                            name={person.name || person.username || 'Vormex user'}
                            className="h-11 w-11 shrink-0 bg-gray-100 text-sm font-semibold dark:bg-neutral-800"
                          />
                          <span className="min-w-0 flex-1">
                            <span className="flex min-w-0 items-center gap-1.5">
                              <span className="truncate text-sm font-bold text-gray-900 dark:text-white">
                                {person.name?.trim() || person.username?.trim() || 'Vormex user'}
                              </span>
                              <VerificationBadge
                                profileBadgeStyle={person.profileBadgeStyle}
                                isPremium={person.isPremium}
                                size="small"
                              />
                            </span>
                            <span className="block truncate text-xs text-gray-500 dark:text-neutral-400">
                              @{person.username}
                            </span>
                            {(person.headline || person.college) && (
                              <span className="mt-0.5 block truncate text-xs text-gray-600 dark:text-neutral-300">
                                {person.headline || person.college}
                              </span>
                            )}
                          </span>
                        </ProfileLink>
                      ))}
                    </div>
                  </div>
                )}

                {recentSearches.length === 0 && recentProfiles.length === 0 && (
                  <div className="py-16 text-center">
                    <Search className="mx-auto h-10 w-10 text-gray-300 dark:text-neutral-700" />
                    <h2 className="mt-4 font-semibold text-gray-900 dark:text-white">
                      Search the Vormex community
                    </h2>
                    <p className="mt-1 text-sm text-gray-500 dark:text-neutral-400">
                      Enter at least two characters to search names, skills, interests, colleges and
                      branches.
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div>
                {!loading && !isSearchDebouncing && !searchError && displayedPeople.length > 0 && (
                  <p className="mb-2 px-3 text-xs font-medium text-gray-500 dark:text-neutral-400">
                    {total.toLocaleString()} matching result{total !== 1 ? 's' : ''}
                  </p>
                )}

                {(loading || isSearchDebouncing) && displayedPeople.length === 0 && (
                  <div className="divide-y divide-gray-100 dark:divide-neutral-800">
                    {Array.from({ length: 7 }).map((_, index) => (
                      <SearchPersonRowSkeleton key={index} />
                    ))}
                  </div>
                )}

                {!loading && !isSearchDebouncing && searchError && displayedPeople.length === 0 && (
                  <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-12 text-center dark:border-red-900/60 dark:bg-red-950/20">
                    <AlertCircle className="mx-auto h-10 w-10 text-red-400" />
                    <p className="mt-3 text-sm text-red-600 dark:text-red-400">{searchError}</p>
                    <button
                      type="button"
                      onClick={() => {
                        void queryClient.removeQueries({
                          queryKey: queryKeys.peopleSearch(
                            user?.id ?? 'anonymous',
                            normalizedDebouncedSearch
                          ),
                        });
                        setSearchRetryVersion((version) => version + 1);
                      }}
                      className="mt-4 rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                    >
                      Retry
                    </button>
                  </div>
                )}

                {!loading &&
                  !isSearchDebouncing &&
                  !searchError &&
                  displayedPeople.length === 0 && (
                    <div className="py-16 text-center">
                      <Users className="mx-auto h-10 w-10 text-gray-300 dark:text-neutral-700" />
                      <h2 className="mt-4 font-semibold text-gray-900 dark:text-white">
                        No people found
                      </h2>
                      <p className="mt-1 text-sm text-gray-500 dark:text-neutral-400">
                        Try a name, skill, interest, college or branch.
                      </p>
                    </div>
                  )}

                {displayedPeople.length > 0 && (
                  <div className="divide-y divide-gray-100 dark:divide-neutral-800">
                    {displayedPeople.map((person, index) => (
                      <div key={person.id} ref={index === prefetchIndex ? loadMoreRef : undefined}>
                        <SearchPersonRow
                          person={person}
                          query={normalizedDebouncedSearch}
                          onConnectionChange={handleConnectionChange}
                          onProfileIntent={handleProfileIntent}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {sectionError && displayedPeople.length > 0 && (
                  <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/60 dark:bg-red-950/20 dark:text-red-300">
                    <span className="truncate">{sectionError}</span>
                    <button
                      type="button"
                      onClick={() => void loadMore(true)}
                      className="shrink-0 font-semibold underline underline-offset-2"
                    >
                      Retry
                    </button>
                  </div>
                )}
              </div>
            )}
          </section>
        )}

        {/* Active filter chips + result count */}
        {!isSearchMode && activeTab === 'all' && hasActiveFilters && !isGridLoading && (
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {activeFilterChips}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-xs font-semibold text-gray-500 dark:text-neutral-400 hover:text-gray-700 dark:hover:text-neutral-200 underline underline-offset-2"
              >
                Clear all
              </button>
            )}
            <span className="ml-auto text-sm text-gray-500 dark:text-neutral-400">
              {total.toLocaleString()} result{total !== 1 ? 's' : ''}
            </span>
          </div>
        )}

        {activeTab === 'known' && <PeopleYouKnowTab />}

        {/* Smart Matches Tab Content */}
        {activeTab === 'smart' && <SmartMatchesTab />}

        {/* Nearby Tab Content */}
        {activeTab === 'nearby' && <NearbyUsers />}

        {/* Skeleton Loading */}
        {isGridTab && isGridLoading && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <PersonCardSkeleton key={i} />
            ))}
          </div>
        )}

        {/* Error State */}
        {!isSearchMode && activeTab === 'all' && !isGridLoading && initialError && (
          <div className="text-center py-16 bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800">
            <AlertCircle className="w-12 h-12 mx-auto text-red-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Failed to load people
            </h3>
            <p className="text-gray-500 dark:text-neutral-400 max-w-md mx-auto mb-4">
              Something went wrong. Please try again.
            </p>
            <button
              onClick={() => refetchInitial()}
              className="px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Retry
            </button>
          </div>
        )}

        {isGridTab && !isGridLoading && sectionError && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-6 py-12 text-center dark:border-red-900/60 dark:bg-red-950/20">
            <AlertCircle className="mx-auto mb-4 h-12 w-12 text-red-400" />
            <p className="text-sm text-red-600 dark:text-red-400">{sectionError}</p>
            <button
              type="button"
              onClick={retryActiveGrid}
              className="mt-4 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Retry
            </button>
          </div>
        )}

        {/* Empty State */}
        {isGridTab &&
          !isGridLoading &&
          !(activeTab === 'all' && initialError) &&
          !sectionError &&
          displayedPeople.length === 0 && (
            <div className="text-center py-16 bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center">
                <Users className="w-8 h-8 text-gray-400 dark:text-neutral-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {activeTab === 'suggestions'
                  ? 'No suggestions yet'
                  : activeTab === 'college'
                    ? 'No colleagues found'
                    : searchQuery || hasActiveFilters
                      ? 'No results found'
                      : 'No people found'}
              </h3>
              <p className="text-gray-500 dark:text-neutral-400 max-w-md mx-auto">
                {activeTab === 'suggestions'
                  ? 'Complete your profile to get personalized suggestions'
                  : activeTab === 'college'
                    ? 'Add your college information to find colleagues'
                    : searchQuery || hasActiveFilters
                      ? 'Try a different search term or adjust your filters'
                      : 'Check back later for new users'}
              </p>
              {hasActiveFilters && activeTab === 'all' && (
                <button
                  onClick={clearFilters}
                  className="mt-4 px-5 py-2 rounded-full border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 text-sm font-semibold hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors"
                >
                  Clear filters
                </button>
              )}
            </div>
          )}

        {/* People Grid */}
        {isGridTab && !isGridLoading && displayedPeople.length > 0 && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {displayedPeople.map((person, index) => (
              <div
                key={person.id}
                ref={index === prefetchIndex ? loadMoreRef : undefined}
                className="min-w-0"
              >
                <PersonCard
                  person={person}
                  onConnectionChange={handleConnectionChange}
                  onProfileIntent={handleProfileIntent}
                />
              </div>
            ))}
          </div>
        )}

        {/* Load More Trigger */}
        {(isGridTab || isSearchResultsVisible) && activeGridHasMore && !isGridLoading && (
          <div className="flex justify-center py-8">
            {loadingMore ? (
              <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
            ) : (
              <button
                onClick={() => void loadMore()}
                className="flex items-center gap-2 px-6 py-2 rounded-full border border-gray-300 dark:border-neutral-700 text-sm font-semibold text-gray-600 dark:text-neutral-400 hover:bg-white dark:hover:bg-neutral-900 hover:text-gray-800 dark:hover:text-neutral-200 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Load more
              </button>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
