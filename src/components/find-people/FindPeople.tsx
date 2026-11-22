'use client';
import { ActivePeopleFilters } from './ActivePeopleFilters';
import { FindPeopleView } from './FindPeopleView';

import type { FilterPanelProps, FindPeopleInitialCache } from './FindPeople.types';
import { usePeoplePagination } from './usePeoplePagination';
import { usePeopleRelationshipUpdates } from './usePeopleRelationshipUpdates';
import { usePeopleSearchRequest } from './usePeopleSearchRequest';
export type {
  FilterPanelProps,
  FilterSelectProps,
  FindPeopleInitialCache,
} from './FindPeople.types';

import { useDebouncedValue } from '@/hooks/useDebouncedValue';
import {
  getFilterOptions,
  getPeople,
  type FilterOptions,
  type PeopleFilters,
  type PersonCard as PersonCardType,
} from '@/lib/api/people';
import { useAuth } from '@/lib/auth/useAuth';
import {
  BROWSE_PAGE_SIZE,
  PREFETCH_REMAINING_ITEMS,
  SEARCH_DEBOUNCE_MS,
  SEARCH_MIN_CHARACTERS,
  normalizePeopleSearch,
} from '@/lib/findPeoplePolicy';
import {
  readRecentPeopleProfiles,
  readRecentPeopleSearches,
  rememberPeopleProfile,
  type RecentPerson,
} from '@/lib/findPeopleRecent';
import { FIND_PEOPLE_STALE_TIME, queryKeys } from '@/lib/queryKeys';
import { isApiTimeoutError } from '@/lib/utils/errorHandler';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

function appendUniquePeople(
  current: PersonCardType[],
  incoming: PersonCardType[]
): PersonCardType[] {
  const byId = new Map(current.map((person) => [person.id, person]));
  incoming.forEach((person) => byId.set(person.id, person));
  return Array.from(byId.values());
}

function isCancelledRequest(error: unknown): boolean {
  const candidate = error as { code?: string; name?: string } | null;
  return candidate?.code === 'ERR_CANCELED' || candidate?.name === 'CanceledError';
}

// ─────────────────────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────────────────────

function FindPeopleSession() {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const cachedInitialData = queryClient.getQueryData<FindPeopleInitialCache>(
    queryKeys.findPeopleInitial(user?.id)
  );
  const cachedFilterOptions = queryClient.getQueryData<FilterOptions>(
    queryKeys.peopleFilterOptions(user?.id)
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [searchRetryVersion, setSearchRetryVersion] = useState(0);
  const [recentSearches, setRecentSearches] = useState<string[]>(() =>
    readRecentPeopleSearches(user?.id)
  );
  const [recentProfiles, setRecentProfiles] = useState<RecentPerson[]>(() =>
    readRecentPeopleProfiles(user?.id)
  );
  const [people, setPeople] = useState<PersonCardType[]>(() => cachedInitialData?.people ?? []);
  const [loading, setLoading] = useState(() => !cachedInitialData);
  const [sectionError, setSectionError] = useState<string | null>(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const [, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(() => cachedInitialData?.hasMore ?? true);
  const [nextCursor, setNextCursor] = useState<string | null>(
    () => cachedInitialData?.nextCursor ?? null
  );
  const [total, setTotal] = useState(() => cachedInitialData?.total ?? 0);
  const [selectedCollege, setSelectedCollege] = useState<string>('');
  const [selectedBranch, setSelectedBranch] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<number | undefined>(undefined);
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const debouncedSearchQuery = useDebouncedValue(searchQuery, SEARCH_DEBOUNCE_MS);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const searchRequestVersionRef = useRef(0);
  const requestedCursorsRef = useRef(new Map<string, Set<string>>());
  const inFlightCursorsRef = useRef(new Set<string>());
  const normalizedSearchQuery = normalizePeopleSearch(searchQuery);
  const normalizedDebouncedSearch = normalizePeopleSearch(debouncedSearchQuery);
  const isSearchMode = searchFocused || normalizedSearchQuery.length > 0;
  const isAuthoritativeSearch = normalizedDebouncedSearch.length >= SEARCH_MIN_CHARACTERS;

  // Filters auto-apply — no apply button, LinkedIn-style
  const activeFilters = useMemo<PeopleFilters>(
    () => ({
      college: selectedCollege || undefined,
      branch: selectedBranch || undefined,
      graduationYear: selectedYear,
      location: selectedLocation || undefined,
    }),
    [selectedCollege, selectedBranch, selectedYear, selectedLocation]
  );
  const activePeopleRequestKey = useMemo(
    () =>
      JSON.stringify({
        viewerId: user?.id ?? 'anonymous',
        query: isAuthoritativeSearch ? normalizedDebouncedSearch : '',
        filters: isAuthoritativeSearch ? {} : activeFilters,
      }),
    [activeFilters, isAuthoritativeSearch, normalizedDebouncedSearch, user?.id]
  );
  const hasActiveFilters = Boolean(
    selectedCollege || selectedBranch || selectedYear || selectedLocation
  );
  const activeFilterCount = [
    selectedCollege,
    selectedBranch,
    selectedYear,
    selectedLocation,
  ].filter(Boolean).length;

  // Cached initial data - instant when navigating back from profile
  const {
    data: initialData,
    isLoading: initialLoading,
    isError: initialError,
    refetch: refetchInitial,
  } = useQuery({
    queryKey: queryKeys.findPeopleInitial(user?.id),
    queryFn: async () => {
      const allPeopleRes = await getPeople({}, { limit: BROWSE_PAGE_SIZE });
      return {
        people: allPeopleRes.people,
        total: allPeopleRes.total,
        hasMore: allPeopleRes.hasMore,
        nextCursor: allPeopleRes.nextCursor,
      };
    },
    staleTime: FIND_PEOPLE_STALE_TIME,
    retry: (failureCount, error) => !isApiTimeoutError(error) && failureCount < 2,
  });

  const { data: filterOptionsData } = useQuery({
    queryKey: queryKeys.peopleFilterOptions(user?.id),
    queryFn: getFilterOptions,
    staleTime: FIND_PEOPLE_STALE_TIME,
    enabled: !isSearchMode,
  });

  const filterOptions = filterOptionsData ?? cachedFilterOptions ?? null;
  // Indexed search is authoritative. Every new query aborts the prior request and
  // stale responses are rejected even if a transport cannot be cancelled promptly.
  usePeopleSearchRequest({
    activeFilters,
    activePeopleRequestKey,
    debouncedSearchQuery,
    hasActiveFilters,
    initialData,
    initialLoading,
    isAuthoritativeSearch,
    isCancelledRequest,
    isSearchMode,
    normalizedDebouncedSearch,
    normalizedSearchQuery,
    queryClient,
    requestedCursorsRef,
    searchRequestVersionRef,
    searchRetryVersion,
    setHasMore,
    setLoading,
    setNextCursor,
    setPage,
    setPeople,
    setRecentSearches,
    setSearchError,
    setSectionError,
    setTotal,
    user,
  });

  // Clear filters
  const clearFilters = () => {
    setSelectedCollege('');
    setSelectedBranch('');
    setSelectedYear(undefined);
    setSelectedLocation('');
  };

  // Load more people
  const { loadMore } = usePeoplePagination({
    activeFilters,
    activePeopleRequestKey,
    appendUniquePeople,
    hasMore,
    inFlightCursorsRef,
    isAuthoritativeSearch,
    isCancelledRequest,
    loadingMore,
    nextCursor,
    normalizedDebouncedSearch,
    people,
    queryClient,
    requestedCursorsRef,
    searchRequestVersionRef,
    setHasMore,
    setLoadingMore,
    setNextCursor,
    setPage,
    setPeople,
    setSectionError,
    user,
  });

  // Intersection observer for infinite scroll
  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loadingMore) {
          void loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasMore, loadMore, loadingMore]);

  // Handle connection status change
  const { handleConnectionChange } = usePeopleRelationshipUpdates({
    people,
    queryClient,
    setPeople,
  });

  const handleProfileIntent = useCallback(
    (person: PersonCardType) => {
      setRecentProfiles(rememberPeopleProfile(user?.id, person));
    },
    [user?.id]
  );

  const displayedPeople = (() => {
    const list = people;
    const seen = new Set<string>();
    return list.filter((p) => {
      if (seen.has(p.id)) return false;
      seen.add(p.id);
      return true;
    });
  })();

  const isSearchResultsVisible = isSearchMode;
  const isSearchDebouncing =
    normalizedSearchQuery.length >= SEARCH_MIN_CHARACTERS &&
    normalizedSearchQuery !== normalizedDebouncedSearch;
  const isGridTab = !isSearchMode;
  const isGridLoading = loading;
  const activeGridHasMore = hasMore;
  const showSidebar = !isSearchMode;
  const prefetchIndex = Math.max(0, displayedPeople.length - PREFETCH_REMAINING_ITEMS);

  const retryActiveGrid = () => {
    setSectionError(null);
    // Only load-more failures use this error state for the main grid.
    void loadMore(true);
  };

  const filterPanelProps: FilterPanelProps = {
    filterOptions,
    userCollege: user?.college,
    selectedCollege,
    setSelectedCollege,
    selectedBranch,
    setSelectedBranch,
    selectedYear,
    setSelectedYear,
    selectedLocation,
    setSelectedLocation,
    hasActiveFilters,
    onClearAll: clearFilters,
  };

  const activeFilterChips = (
    <ActivePeopleFilters
      selectedBranch={selectedBranch}
      selectedCollege={selectedCollege}
      selectedLocation={selectedLocation}
      selectedYear={selectedYear}
      setSelectedBranch={setSelectedBranch}
      setSelectedCollege={setSelectedCollege}
      setSelectedLocation={setSelectedLocation}
      setSelectedYear={setSelectedYear}
    />
  );

  return (
    <FindPeopleView
      activeFilterChips={activeFilterChips}
      activeFilterCount={activeFilterCount}
      activeGridHasMore={activeGridHasMore}
      clearFilters={clearFilters}
      displayedPeople={displayedPeople}
      filterPanelProps={filterPanelProps}
      handleConnectionChange={handleConnectionChange}
      handleProfileIntent={handleProfileIntent}
      hasActiveFilters={hasActiveFilters}
      initialError={initialError}
      isAuthoritativeSearch={isAuthoritativeSearch}
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
      setSearchFocused={setSearchFocused}
      setSearchQuery={setSearchQuery}
      setSearchRetryVersion={setSearchRetryVersion}
      setShowMobileFilters={setShowMobileFilters}
      showMobileFilters={showMobileFilters}
      showSidebar={showSidebar}
      total={total}
      user={user}
    />
  );
}

export function FindPeople() {
  const { user } = useAuth();
  return <FindPeopleSession key={user?.id ?? 'anonymous'} />;
}
export default FindPeople;
