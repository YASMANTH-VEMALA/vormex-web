'use client';
import { materializeCoreProfile } from '@/lib/api/profile';
import { queryKeys } from '@/lib/queryKeys';
import type {
  ActivityYearsResponse,
  CoreProfileResponse,
  FullProfileResponse,
} from '@/types/profile';
import type * as React from 'react';
import { useEffect } from 'react';
interface useProfileCacheHydrationOptions {
  queryClient: import('@tanstack/react-query').QueryClient;
  setActivityData: React.Dispatch<
    React.SetStateAction<import('@/types/profile').ActivityHeatmapDay[]>
  >;
  setAvailableYears: React.Dispatch<
    React.SetStateAction<import('@/types/profile').ActivityYearsResponse | null>
  >;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  setIsPrivate: React.Dispatch<React.SetStateAction<boolean>>;
  setIsUnavailable: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setProfile: React.Dispatch<
    React.SetStateAction<import('@/types/profile').FullProfileResponse | null>
  >;
  targetUserId: string | null;
}
export function useProfileCacheHydration({
  queryClient,
  setActivityData,
  setAvailableYears,
  setError,
  setIsPrivate,
  setIsUnavailable,
  setLoading,
  setProfile,
  targetUserId,
}: useProfileCacheHydrationOptions) {
  useEffect(() => {
    if (!targetUserId) return;

    const warmBundle = queryClient.getQueryData<FullProfileResponse>(
      queryKeys.profile(targetUserId)
    );
    const warmCore = queryClient.getQueryData<CoreProfileResponse>(
      queryKeys.profileCore(targetUserId)
    );
    const warmProfile = warmBundle || (warmCore ? materializeCoreProfile(warmCore) : null);

    if (!warmProfile) {
      setProfile(null);
      setActivityData([]);
      setAvailableYears(null);
      setLoading(true);
      setIsUnavailable(false);
      return;
    }

    setProfile(warmProfile);
    setActivityData(warmProfile.activityHeatmap || []);
    setAvailableYears(
      queryClient.getQueryData<ActivityYearsResponse>(
        queryKeys.profileActivityYears(warmProfile.user.id)
      ) ?? null
    );
    setLoading(false);
    setError(null);
    setIsPrivate(false);
    setIsUnavailable(false);
  }, [
    queryClient,
    setActivityData,
    setAvailableYears,
    setError,
    setIsPrivate,
    setIsUnavailable,
    setLoading,
    setProfile,
    targetUserId,
  ]);
}
