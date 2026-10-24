'use client';
import { ActivePeopleFilters } from './ActivePeopleFilters';
import { FindPeopleView } from './FindPeopleView';
import { getActiveTabFromParam } from './PeopleFilterControls';

import type { FilterPanelProps, FindPeopleInitialCache, TabType } from './FindPeople.types';
import { useCampusPeople } from './useCampusPeople';
import { usePeoplePagination } from './usePeoplePagination';
import { usePeopleRelationshipUpdates } from './usePeopleRelationshipUpdates';
import { usePeopleSearchRequest } from './usePeopleSearchRequest';
import { useSuggestedPeople } from './useSuggestedPeople';
export type {
  FilterPanelProps,
  FilterSelectProps,
  FindPeopleInitialCache,
  TabItem,
  TabType,
} from './FindPeople.types';

import { useDebouncedValue } from '@/hooks/useDebouncedValue';
import { useSyncedState } from '@/hooks/useSyncedState';
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
import { useSearchParams } from 'next/navigation';
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
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const tabParam = searchParams.get('tab');
  const cachedInitialData = queryClient.getQueryData<FindPeopleInitialCache>(
    queryKeys.findPeopleInitial(user?.id)
  );
  const cachedFilterOptions = queryClient.getQueryData<FilterOptions>(
    queryKeys.peopleFilterOptions(user?.id)
  );
  const [activeTab, setActiveTab] = useSyncedState<TabType>(
    getActiveTabFromParam(tabParam),
    tabParam
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
  const [suggestions, setSuggestions] = useState<PersonCardType[]>(
    () => cachedInitialData?.suggestions ?? []
  );
  const [colleaguePeople, setColleaguePeople] = useState<PersonCardType[]>(
    () => cachedInitialData?.colleaguePeople ?? []
  );
  const [loading, setLoading] = useState(() => !cachedInitialData);
  const [sectionLoading, setSectionLoading] = useState(false);
  const [sectionError, setSectionError] = useState<string | null>(null);
  const [sectionRetryVersion, setSectionRetryVersion] = useState(0);
  const [loadingMore, setLoadingMore] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const [, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(() => cachedInitialData?.hasMore ?? true);
  const [nextCursor, setNextCursor] = useState<string | null>(
    () => cachedInitialData?.nextCursor ?? null
  );
  const [suggestionsPage, setSuggestionsPage] = useState(1);
  const [suggestionsHasMore, setSuggestionsHasMore] = useState(
    () => cachedInitialData?.suggestionsHasMore ?? false
  );
  const [suggestionsLoaded, setSuggestionsLoaded] = useState(() =>
    Boolean(cachedInitialData?.suggestions.length)
  );
  const [colleaguePage, setColleaguePage] = useState(1);
  const [colleagueHasMore, setColleagueHasMore] = useState(
    () => cachedInitialData?.colleagueHasMore ?? false
  );
  const [colleagueLoaded, setColleagueLoaded] = useState(() =>
    Boolean(cachedInitialData?.colleaguePeople.length)
  );
  const [total, setTotal] = useState(() => cachedInitialData?.total ?? 0);
  const [selectedCollege, setSelectedCollege] = useState<string>('');
  const [selectedBranch, setSelectedBranch] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<number | undefined>(undefined);
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [openToOpportunities, setOpenToOpportunities] = useState(false);
  const debouncedSearchQuery = useDebouncedValue(searchQuery, SEARCH_DEBOUNCE_MS);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const searchRequestVersionRef = useRef(0);
  const requestedCursorsRef = useRef(new Map<string, Set<string>>());
  const inFlightCursorsRef = useRef(new Set<string>());
  const normalizedSearchQuery = normalizePeopleSearch(searchQuery);
  const normalizedDebouncedSearch = normalizePeopleSearch(debouncedSearchQuery);
  const isSearchMode = activeTab === 'all' && (searchFocused || normalizedSearchQuery.length > 0);
  const isAuthoritativeSearch = normalizedDebouncedSearch.length >= SEARCH_MIN_CHARACTERS;

  // Filters auto-apply — no apply button, LinkedIn-style
  const activeFilters = useMemo<PeopleFilters>(
    () => ({
      college: selectedCollege || undefined,
      branch: selectedBranch || undefined,
      graduationYear: selectedYear,
      location: selectedLocation || undefined,
      isOpenToOpportunities: openToOpportunities || undefined,
    }),
    [selectedCollege, selectedBranch, selectedYear, selectedLocation, openToOpportunities]
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
    selectedCollege || selectedBranch || selectedYear || selectedLocation || openToOpportunities
  );
  const activeFilterCount = [
    selectedCollege,
    selectedBranch,
    selectedYear,
    selectedLocation,
    openToOpportunities,
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
        suggestions: [],
        suggestionsHasMore: false,
        colleaguePeople: [],
        colleagueHasMore: false,
      };
    },
    staleTime: FIND_PEOPLE_STALE_TIME,
    retry: (failureCount, error) => !isApiTimeoutError(error) && failureCount < 2,
  });

  const { data: filterOptionsData } = useQuery({
    queryKey: queryKeys.peopleFilterOptions(user?.id),
    queryFn: getFilterOptions,
    staleTime: FIND_PEOPLE_STALE_TIME,
    enabled: activeTab === 'all' && !isSearchMode,
  });

  const filterOptions = filterOptionsData ?? cachedFilterOptions ?? null;
  useSuggestedPeople({
    activeTab,
    sectionRetryVersion,
    setSectionError,
    setSectionLoading,
    setSuggestions,
    setSuggestionsHasMore,
    setSuggestionsLoaded,
    setSuggestionsPage,
    suggestionsLoaded,
  });

  useCampusPeople({
    activeTab,
    colleagueLoaded,
    sectionRetryVersion,
    setColleagueHasMore,
    setColleagueLoaded,
    setColleaguePage,
    setColleaguePeople,
    setSectionError,
    setSectionLoading,
  });

  // Indexed search is authoritative. Every new query aborts the prior request and
  // stale responses are rejected even if a transport cannot be cancelled promptly.
  usePeopleSearchRequest({
    activeFilters,
    activePeopleRequestKey,
    activeTab,
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
    setOpenToOpportunities(false);
  };

  // Load more people
  const { loadMore } = usePeoplePagination({
    activeFilters,
    activePeopleRequestKey,
    activeTab,
    appendUniquePeople,
    colleagueHasMore,
    colleaguePage,
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
    setColleagueHasMore,
    setColleaguePage,
    setColleaguePeople,
    setHasMore,
    setLoadingMore,
    setNextCursor,
    setPage,
    setPeople,
    setSectionError,
    setSuggestions,
    setSuggestionsHasMore,
    setSuggestionsPage,
    suggestionsHasMore,
    suggestionsPage,
    user,
  });

  // Intersection observer for infinite scroll
  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const canLoad =
          (activeTab === 'all' && hasMore) ||
          (activeTab === 'suggestions' && suggestionsHasMore) ||
          (activeTab === 'college' && colleagueHasMore);
        if (entries[0].isIntersecting && canLoad && !loadingMore) {
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
  }, [activeTab, colleagueHasMore, hasMore, loadMore, loadingMore, suggestionsHasMore]);

  // Handle connection status change
  const { handleConnectionChange } = usePeopleRelationshipUpdates({
    colleaguePeople,
    people,
    queryClient,
    setColleaguePeople,
    setPeople,
    setSuggestions,
    suggestions,
  });

  const handleProfileIntent = useCallback(
    (person: PersonCardType) => {
      setRecentProfiles(rememberPeopleProfile(user?.id, person));
    },
    [user?.id]
  );

  // Get current display list (dedupe by id to avoid React key errors from API overlap)
  const getDisplayedPeople = () => {
    switch (activeTab) {
      case 'suggestions':
        return suggestions;
      case 'college':
        return colleaguePeople;
      default:
        return people;
    }
  };

  const displayedPeople = (() => {
    const list = getDisplayedPeople();
    const seen = new Set<string>();
    return list.filter((p) => {
      if (seen.has(p.id)) return false;
      seen.add(p.id);
      return true;
    });
  })();

  const isSearchResultsVisible = activeTab === 'all' && isSearchMode;
  const isSearchDebouncing =
    normalizedSearchQuery.length >= SEARCH_MIN_CHARACTERS &&
    normalizedSearchQuery !== normalizedDebouncedSearch;
  const isGridTab =
    (activeTab === 'all' && !isSearchMode) ||
    activeTab === 'suggestions' ||
    activeTab === 'college';
  const isGridLoading = loading || sectionLoading;
  const activeGridHasMore =
    (activeTab === 'all' && hasMore) ||
    (activeTab === 'suggestions' && suggestionsHasMore) ||
    (activeTab === 'college' && colleagueHasMore);
  const showSidebar = activeTab === 'all' && !isSearchMode;
  const prefetchIndex = Math.max(0, displayedPeople.length - PREFETCH_REMAINING_ITEMS);

  const retryActiveGrid = () => {
    setSectionError(null);
    if (activeTab === 'all') {
      // Only load-more failures use this error state for the main grid.
      void loadMore(true);
      return;
    }
    if (activeTab === 'suggestions') setSuggestionsLoaded(false);
    if (activeTab === 'college') setColleagueLoaded(false);
    setSectionRetryVersion((version) => version + 1);
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
    openToOpportunities,
    setOpenToOpportunities,
    hasActiveFilters,
    onClearAll: clearFilters,
  };

  const activeFilterChips = (
    <ActivePeopleFilters
      openToOpportunities={openToOpportunities}
      selectedBranch={selectedBranch}
      selectedCollege={selectedCollege}
      selectedLocation={selectedLocation}
      selectedYear={selectedYear}
      setOpenToOpportunities={setOpenToOpportunities}
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
      activeTab={activeTab}
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
      setActiveTab={setActiveTab}
      setSearchFocused={setSearchFocused}
      setSearchQuery={setSearchQuery}
      setSearchRetryVersion={setSearchRetryVersion}
      setSectionError={setSectionError}
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
