'use client';
import { getPeople, searchPeople } from '@/lib/api/people';
import {
  BROWSE_PAGE_SIZE,
  SEARCH_MIN_CHARACTERS,
  SEARCH_PAGE_SIZE,
  decideFindPage,
} from '@/lib/findPeoplePolicy';
import { rememberPeopleSearch } from '@/lib/findPeopleRecent';
import { FIND_PEOPLE_STALE_TIME, queryKeys } from '@/lib/queryKeys';
import { handleApiError, isApiTimeoutError } from '@/lib/utils/errorHandler';
import React, { useEffect } from 'react';

interface usePeopleSearchRequestOptions {
  activeFilters: import('@/lib/api/people').PeopleFilters;
  activePeopleRequestKey: string;
  activeTab: import('@/components/find-people/FindPeople.types').TabType;
  debouncedSearchQuery: string;
  hasActiveFilters: boolean;
  initialData:
    | {
        people: import('@/lib/api/people').PersonCard[];
        total: number;
        hasMore: boolean;
        nextCursor: string | null | undefined;
        suggestions: never[];
        suggestionsHasMore: boolean;
        colleaguePeople: never[];
        colleagueHasMore: boolean;
      }
    | undefined;
  initialLoading: boolean;
  isAuthoritativeSearch: boolean;
  isCancelledRequest: (error: unknown) => boolean;
  isSearchMode: boolean;
  normalizedDebouncedSearch: string;
  normalizedSearchQuery: string;
  queryClient: import('@tanstack/react-query').QueryClient;
  requestedCursorsRef: React.RefObject<Map<string, Set<string>>>;
  searchRequestVersionRef: React.RefObject<number>;
  searchRetryVersion: number;
  setHasMore: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setNextCursor: React.Dispatch<React.SetStateAction<string | null>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setPeople: React.Dispatch<React.SetStateAction<import('@/lib/api/people').PersonCard[]>>;
  setRecentSearches: React.Dispatch<React.SetStateAction<string[]>>;
  setSearchError: React.Dispatch<React.SetStateAction<string | null>>;
  setSectionError: React.Dispatch<React.SetStateAction<string | null>>;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  user: import('@/types/auth').User | null;
}
export function usePeopleSearchRequest({
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
}: usePeopleSearchRequestOptions) {
  useEffect(() => {
    const requestVersion = ++searchRequestVersionRef.current;
    if (activeTab !== 'all') return;

    const controller = new AbortController();
    setPage(1);
    setSearchError(null);
    setSectionError(null);
    requestedCursorsRef.current.set(activePeopleRequestKey, new Set(['__first__']));

    if (isSearchMode && normalizedSearchQuery.length < SEARCH_MIN_CHARACTERS) {
      setPeople([]);
      setTotal(0);
      setHasMore(false);
      setNextCursor(null);
      setLoading(false);
      return () => controller.abort();
    }

    if (isSearchMode && normalizedSearchQuery !== normalizedDebouncedSearch) {
      setPeople([]);
      setTotal(0);
      setHasMore(false);
      setNextCursor(null);
      setLoading(true);
      return () => controller.abort();
    }

    if (!isAuthoritativeSearch && !hasActiveFilters) {
      if (initialData) {
        setPeople(initialData.people);
        setTotal(initialData.total);
        setHasMore(initialData.hasMore);
        setNextCursor(initialData.nextCursor ?? null);
      }
      setLoading(!initialData && initialLoading);
      return () => controller.abort();
    }

    const viewerId = user?.id ?? 'anonymous';
    const firstPageQueryKey = isAuthoritativeSearch
      ? queryKeys.peopleSearch(viewerId, normalizedDebouncedSearch)
      : (['find-people-filtered', viewerId, activeFilters, 'first'] as const);
    const cached =
      queryClient.getQueryData<Awaited<ReturnType<typeof getPeople>>>(firstPageQueryKey);
    if (cached) {
      setPeople(cached.people);
      setTotal(cached.total);
      setHasMore(cached.hasMore);
      setNextCursor(cached.nextCursor ?? null);
    }
    setLoading(!cached);

    void queryClient
      .fetchQuery({
        queryKey: firstPageQueryKey,
        queryFn: () =>
          isAuthoritativeSearch
            ? searchPeople(
                normalizedDebouncedSearch,
                { limit: SEARCH_PAGE_SIZE },
                controller.signal
              )
            : getPeople(activeFilters, { limit: BROWSE_PAGE_SIZE }, controller.signal),
        staleTime: isAuthoritativeSearch ? 2 * 60 * 1000 : FIND_PEOPLE_STALE_TIME,
        retry: (failureCount, error) =>
          !isCancelledRequest(error) && !isApiTimeoutError(error) && failureCount < 1,
      })
      .then((result) => {
        if (controller.signal.aborted || requestVersion !== searchRequestVersionRef.current) return;
        const decision = decideFindPage({
          existingUserIds: new Set<string>(),
          incomingUserIds: result.people.map((person) => person.id),
          previousCursor: null,
          serverNextCursor: result.nextCursor,
          serverHasMore: result.hasMore,
        });
        setPeople(result.people);
        setTotal(result.total);
        setHasMore(decision.hasMore);
        setNextCursor(decision.nextCursor);
        if (isAuthoritativeSearch) {
          setRecentSearches(rememberPeopleSearch(user?.id, debouncedSearchQuery));
        }
      })
      .catch((error) => {
        if (controller.signal.aborted || isCancelledRequest(error)) return;
        if (requestVersion === searchRequestVersionRef.current) {
          setSearchError(handleApiError(error));
        }
      })
      .finally(() => {
        if (!controller.signal.aborted && requestVersion === searchRequestVersionRef.current) {
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [
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
    user?.id,
  ]);
}
