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
  people: import('@/lib/api/people').PersonCard[];
  queryClient: import('@tanstack/react-query').QueryClient;
  setPeople: React.Dispatch<React.SetStateAction<import('@/lib/api/people').PersonCard[]>>;
}
export function usePeopleRelationshipUpdates({
  people,
  queryClient,
  setPeople,
}: usePeopleRelationshipUpdatesOptions) {
  const viewerId = useAuth().user?.id;
  const handleConnectionChange = useCallback(
    (personId: string, relationship: PersonRelationship) => {
      const updateList = (list: PersonCardType[]) =>
        list.map((p) => (p.id === personId ? withPersonRelationship(p, relationship) : p));
      const targetPerson = people.find((person) => person.id === personId);

      setPeople(updateList);

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
    [people, queryClient, setPeople, viewerId]
  );
  return { handleConnectionChange };
}
