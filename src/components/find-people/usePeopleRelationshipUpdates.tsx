'use client';
import {
  type PeopleResponse,
  type PersonCard as PersonCardType,
  type PersonRelationship,
} from '@/lib/api/people';
import { useAuth } from '@/lib/auth/useAuth';
import { withPersonRelationship } from '@/lib/findPeoplePolicy';
import { queryKeys } from '@/lib/queryKeys';
import type { CoreProfileResponse, FullProfileResponse } from '@/types/profile';
import React, { useCallback } from 'react';
import type { FindPeopleInitialCache } from './FindPeople.types';

interface usePeopleRelationshipUpdatesOptions {
  colleaguePeople: import('@/lib/api/people').PersonCard[];
  people: import('@/lib/api/people').PersonCard[];
  queryClient: import('@tanstack/react-query').QueryClient;
  setColleaguePeople: React.Dispatch<React.SetStateAction<import('@/lib/api/people').PersonCard[]>>;
  setPeople: React.Dispatch<React.SetStateAction<import('@/lib/api/people').PersonCard[]>>;
  setSuggestions: React.Dispatch<React.SetStateAction<import('@/lib/api/people').PersonCard[]>>;
  suggestions: import('@/lib/api/people').PersonCard[];
}
export function usePeopleRelationshipUpdates({
  colleaguePeople,
  people,
  queryClient,
  setColleaguePeople,
  setPeople,
  setSuggestions,
  suggestions,
}: usePeopleRelationshipUpdatesOptions) {
  const viewerId = useAuth().user?.id;
  const handleConnectionChange = useCallback(
    (personId: string, relationship: PersonRelationship) => {
      const updateList = (list: PersonCardType[]) =>
        list.map((p) => (p.id === personId ? withPersonRelationship(p, relationship) : p));
      const targetPerson = [people, suggestions, colleaguePeople]
        .flat()
        .find((person) => person.id === personId);

      setPeople(updateList);
      setSuggestions(updateList);
      setColleaguePeople(updateList);

      queryClient.setQueriesData<PeopleResponse>({ queryKey: ['people-search'] }, (cached) =>
        cached ? { ...cached, people: updateList(cached.people) } : cached
      );
      queryClient.setQueriesData<PeopleResponse>(
        { queryKey: ['find-people-filtered'] },
        (cached) => (cached ? { ...cached, people: updateList(cached.people) } : cached)
      );
      queryClient.setQueryData<FindPeopleInitialCache>(
        queryKeys.findPeopleInitial(viewerId),
        (cached) =>
          cached
            ? {
                ...cached,
                people: updateList(cached.people),
                suggestions: updateList(cached.suggestions),
                colleaguePeople: updateList(cached.colleaguePeople),
              }
            : cached
      );

      const profileAliases = new Set(
        [
          personId,
          targetPerson?.username,
          targetPerson?.username ? `@${targetPerson.username}` : null,
        ].filter((value): value is string => Boolean(value))
      );
      profileAliases.forEach((alias) => {
        queryClient.setQueryData<CoreProfileResponse>(queryKeys.profileCore(alias), (cached) =>
          cached
            ? {
                ...cached,
                viewerContext: {
                  ...cached.viewerContext,
                  connectionStatus: relationship.status,
                  connectionId: relationship.connectionId ?? null,
                },
              }
            : cached
        );
        queryClient.setQueryData<FullProfileResponse>(queryKeys.profile(alias), (cached) =>
          cached
            ? {
                ...cached,
                viewerContext: {
                  ...cached.viewerContext,
                  connectionStatus: relationship.status,
                  connectionId: relationship.connectionId ?? null,
                },
              }
            : cached
        );
      });
    },
    [
      colleaguePeople,
      people,
      queryClient,
      setColleaguePeople,
      setPeople,
      setSuggestions,
      suggestions,
      viewerId,
    ]
  );
  return { handleConnectionChange };
}
