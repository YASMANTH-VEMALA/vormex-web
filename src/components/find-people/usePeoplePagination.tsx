'use client';
import { getPeople, searchPeople } from '@/lib/api/people';
import { BROWSE_PAGE_SIZE, SEARCH_PAGE_SIZE, decideFindPage } from '@/lib/findPeoplePolicy';
import { FIND_PEOPLE_STALE_TIME, queryKeys } from '@/lib/queryKeys';
import { handleApiError, isApiTimeoutError } from '@/lib/utils/errorHandler';
import React, { useCallback } from 'react';

interface usePeoplePaginationOptions {
  activeFilters: import('@/lib/api/people').PeopleFilters;
  activePeopleRequestKey: string;
  appendUniquePeople: (
    current: import('@/lib/api/people').PersonCard[],
    incoming: import('@/lib/api/people').PersonCard[]
  ) => import('@/lib/api/people').PersonCard[];
  hasMore: boolean;
  inFlightCursorsRef: React.RefObject<Set<string>>;
  isAuthoritativeSearch: boolean;
  isCancelledRequest: (error: unknown) => boolean;
  loadingMore: boolean;
  nextCursor: string | null;
  normalizedDebouncedSearch: string;
  people: import('@/lib/api/people').PersonCard[];
  queryClient: import('@tanstack/react-query').QueryClient;
  requestedCursorsRef: React.RefObject<Map<string, Set<string>>>;
  searchRequestVersionRef: React.RefObject<number>;
  setHasMore: React.Dispatch<React.SetStateAction<boolean>>;
  setLoadingMore: React.Dispatch<React.SetStateAction<boolean>>;
  setNextCursor: React.Dispatch<React.SetStateAction<string | null>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setPeople: React.Dispatch<React.SetStateAction<import('@/lib/api/people').PersonCard[]>>;
  setSectionError: React.Dispatch<React.SetStateAction<string | null>>;
  user: import('@/types/auth').User | null;
}
export function usePeoplePagination({
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
}: usePeoplePaginationOptions) {
  const loadMore = useCallback(
    async (force = false) => {
      const requestVersion = searchRequestVersionRef.current;
      if (loadingMore || (!hasMore && !force)) return;
      let activeCursorRequestKey: string | null = null;

      try {
        if (!nextCursor) {
          setHasMore(false);
          return;
        }
        activeCursorRequestKey = `${activePeopleRequestKey}:${nextCursor}`;
        const requested =
          requestedCursorsRef.current.get(activePeopleRequestKey) ?? new Set<string>();
        requestedCursorsRef.current.set(activePeopleRequestKey, requested);
        if (inFlightCursorsRef.current.has(activeCursorRequestKey)) return;
        if (!force && requested.has(nextCursor)) return;
        requested.add(nextCursor);
        inFlightCursorsRef.current.add(activeCursorRequestKey);
        setLoadingMore(true);

        const viewerId = user?.id ?? 'anonymous';
        const pageQueryKey = isAuthoritativeSearch
          ? queryKeys.peopleSearch(viewerId, normalizedDebouncedSearch, nextCursor)
          : (['find-people-filtered', viewerId, activeFilters, nextCursor] as const);
        const result = await queryClient.fetchQuery({
          queryKey: pageQueryKey,
          queryFn: () =>
            isAuthoritativeSearch
              ? searchPeople(normalizedDebouncedSearch, {
                  cursor: nextCursor,
                  limit: SEARCH_PAGE_SIZE,
                })
              : getPeople(activeFilters, { cursor: nextCursor, limit: BROWSE_PAGE_SIZE }),
          staleTime: isAuthoritativeSearch ? 2 * 60 * 1000 : FIND_PEOPLE_STALE_TIME,
          retry: (failureCount, error) =>
            !isCancelledRequest(error) && !isApiTimeoutError(error) && failureCount < 1,
        });
        if (requestVersion !== searchRequestVersionRef.current) return;
        const decision = decideFindPage({
          existingUserIds: new Set(people.map((person) => person.id)),
          incomingUserIds: result.people.map((person) => person.id),
          previousCursor: nextCursor,
          serverNextCursor: result.nextCursor,
          serverHasMore: result.hasMore,
        });
        setPeople((previous) => appendUniquePeople(previous, result.people));
        setPage((previous) => previous + 1);
        setHasMore(decision.hasMore);
        setNextCursor(decision.nextCursor);
      } catch (error) {
        if (requestVersion !== searchRequestVersionRef.current || isCancelledRequest(error)) return;
        console.error('Failed to load more:', error);
        setSectionError(handleApiError(error));
        if (nextCursor) requestedCursorsRef.current.get(activePeopleRequestKey)?.delete(nextCursor);
        setHasMore(Boolean(nextCursor));
      } finally {
        if (activeCursorRequestKey) inFlightCursorsRef.current.delete(activeCursorRequestKey);
        setLoadingMore(false);
      }
    },
    [
      searchRequestVersionRef,
      hasMore,
      loadingMore,
      nextCursor,
      activePeopleRequestKey,
      requestedCursorsRef,
      inFlightCursorsRef,
      setLoadingMore,
      user,
      isAuthoritativeSearch,
      normalizedDebouncedSearch,
      activeFilters,
      queryClient,
      people,
      setPeople,
      setPage,
      setHasMore,
      setNextCursor,
      isCancelledRequest,
      appendUniquePeople,
      setSectionError,
    ]
  );
  return { loadMore };
}
