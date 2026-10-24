'use client';
import { getSuggestions } from '@/lib/api/people';
import { BROWSE_PAGE_SIZE } from '@/lib/findPeoplePolicy';
import { handleApiError } from '@/lib/utils/errorHandler';
import React, { useEffect } from 'react';

interface useSuggestedPeopleOptions {
  activeTab: import('@/components/find-people/FindPeople.types').TabType;
  sectionRetryVersion: number;
  setSectionError: React.Dispatch<React.SetStateAction<string | null>>;
  setSectionLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setSuggestions: React.Dispatch<React.SetStateAction<import('@/lib/api/people').PersonCard[]>>;
  setSuggestionsHasMore: React.Dispatch<React.SetStateAction<boolean>>;
  setSuggestionsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  setSuggestionsPage: React.Dispatch<React.SetStateAction<number>>;
  suggestionsLoaded: boolean;
}
export function useSuggestedPeople({
  activeTab,
  sectionRetryVersion,
  setSectionError,
  setSectionLoading,
  setSuggestions,
  setSuggestionsHasMore,
  setSuggestionsLoaded,
  setSuggestionsPage,
  suggestionsLoaded,
}: useSuggestedPeopleOptions) {
  useEffect(() => {
    if (activeTab !== 'suggestions' || suggestionsLoaded) return;
    let cancelled = false;
    setSectionLoading(true);
    setSectionError(null);
    getSuggestions(BROWSE_PAGE_SIZE, 1)
      .then((result) => {
        if (cancelled) return;
        setSuggestions(result.suggestions);
        setSuggestionsPage(1);
        setSuggestionsHasMore(Boolean(result.hasMore));
        setSuggestionsLoaded(true);
      })
      .catch((error) => {
        if (!cancelled) setSectionError(handleApiError(error));
      })
      .finally(() => {
        if (!cancelled) {
          setSectionLoading(false);
        }
      });
    return () => {
      cancelled = true;
      setSectionLoading(false);
    };
  }, [
    activeTab,
    sectionRetryVersion,
    setSectionError,
    setSectionLoading,
    setSuggestions,
    setSuggestionsHasMore,
    setSuggestionsLoaded,
    setSuggestionsPage,
    suggestionsLoaded,
  ]);
}
