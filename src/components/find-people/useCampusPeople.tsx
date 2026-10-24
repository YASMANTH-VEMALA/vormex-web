'use client';
import { getPeopleFromSameCollege } from '@/lib/api/people';
import { BROWSE_PAGE_SIZE } from '@/lib/findPeoplePolicy';
import { handleApiError } from '@/lib/utils/errorHandler';
import React, { useEffect } from 'react';

interface useCampusPeopleOptions {
  activeTab: import('@/components/find-people/FindPeople.types').TabType;
  colleagueLoaded: boolean;
  sectionRetryVersion: number;
  setColleagueHasMore: React.Dispatch<React.SetStateAction<boolean>>;
  setColleagueLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  setColleaguePage: React.Dispatch<React.SetStateAction<number>>;
  setColleaguePeople: React.Dispatch<React.SetStateAction<import('@/lib/api/people').PersonCard[]>>;
  setSectionError: React.Dispatch<React.SetStateAction<string | null>>;
  setSectionLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export function useCampusPeople({
  activeTab,
  colleagueLoaded,
  sectionRetryVersion,
  setColleagueHasMore,
  setColleagueLoaded,
  setColleaguePage,
  setColleaguePeople,
  setSectionError,
  setSectionLoading,
}: useCampusPeopleOptions) {
  useEffect(() => {
    if (activeTab !== 'college' || colleagueLoaded) return;
    let cancelled = false;
    setSectionLoading(true);
    setSectionError(null);
    getPeopleFromSameCollege(BROWSE_PAGE_SIZE, 1)
      .then((result) => {
        if (cancelled) return;
        setColleaguePeople(result.people);
        setColleaguePage(1);
        setColleagueHasMore(Boolean(result.hasMore));
        setColleagueLoaded(true);
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
    colleagueLoaded,
    sectionRetryVersion,
    setColleagueHasMore,
    setColleagueLoaded,
    setColleaguePage,
    setColleaguePeople,
    setSectionError,
    setSectionLoading,
  ]);
}
