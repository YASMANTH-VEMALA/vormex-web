'use client';
import { getStructuredApiError, isTerminalSafetyError } from '@/lib/api/errors';
import { getActivityYears, getCoreProfile, getProfile } from '@/lib/api/profile';
import { ACTIVITY_STALE_TIME, PROFILE_STALE_TIME, queryKeys } from '@/lib/queryKeys';
import type { CoreProfileResponse, FullProfileResponse } from '@/types/profile';
import type * as React from 'react';
import { useCallback } from 'react';
interface useProfileFetchOptions {
  authUser: import('@/types/auth').User | null;
  commitCoreProfile: (core: import('@/types/profile').CoreProfileResponse) => void;
  commitProfile: (nextProfile: import('@/types/profile').FullProfileResponse) => void;
  isAuthenticated: boolean;
  markProfileUnavailable: (
    knownProfile?: import('@/types/profile').FullProfileResponse | null | undefined
  ) => void;
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
  targetUserId: string | null;
  userId: string | undefined;
}
export function useProfileFetch({
  authUser,
  commitCoreProfile,
  commitProfile,
  isAuthenticated,
  markProfileUnavailable,
  queryClient,
  setActivityData,
  setAvailableYears,
  setError,
  setIsPrivate,
  setIsUnavailable,
  setLoading,
  targetUserId,
  userId,
}: useProfileFetchOptions) {
  const fetchProfile = useCallback(
    async ({ background = false }: { background?: boolean } = {}) => {
      // `isOwner` is deliberately not read here: it now derives from the loaded
      // profile, so depending on it would rebuild this callback once the profile
      // arrives and kick off a redundant background refetch.
      console.log('ProfilePage - fetchProfile called', {
        targetUserId,
        authUser,
        isAuthenticated,
      });

      if (!targetUserId) {
        console.log('No targetUserId, not authenticated or no user ID provided');
        setLoading(false);
        if (!userId) {
          setError('Please login to view your profile.');
          if (typeof window !== 'undefined') {
            setTimeout(() => {
              window.location.href = '/login';
            }, 2000);
          }
        } else {
          setError('Invalid user ID provided.');
        }
        return;
      }

      if (
        !background ||
        (!queryClient.getQueryData(queryKeys.profile(targetUserId)) &&
          !queryClient.getQueryData(queryKeys.profileCore(targetUserId)))
      ) {
        setLoading(true);
      }
      setError(null);
      setIsPrivate(false);
      setIsUnavailable(false);

      try {
        console.log('Fetching profile for:', targetUserId);
        const core = await queryClient.fetchQuery({
          queryKey: queryKeys.profileCore(targetUserId),
          queryFn: () => getCoreProfile(targetUserId),
          staleTime: PROFILE_STALE_TIME,
        });
        commitCoreProfile(core);
        setLoading(false);

        queryClient
          .fetchQuery({
            queryKey: queryKeys.profileActivityYears(core.user.id),
            queryFn: () => getActivityYears(core.user.id),
            staleTime: ACTIVITY_STALE_TIME,
          })
          .then((years) => setAvailableYears(years))
          .catch((err) => console.error('Failed to fetch activity years:', err));

        // The expensive bundle never blocks the header/about paint.
        void queryClient
          .fetchQuery({
            queryKey: queryKeys.profile(targetUserId),
            queryFn: () => getProfile(targetUserId),
            staleTime: PROFILE_STALE_TIME,
          })
          .then((bundle) => {
            const latestCore =
              queryClient.getQueryData<CoreProfileResponse>(queryKeys.profileCore(targetUserId)) ??
              core;
            const mergedBundle: FullProfileResponse = {
              ...bundle,
              user: { ...bundle.user, ...latestCore.user },
              stats: latestCore.stats,
              viewerContext: {
                ...core.viewerContext,
                ...bundle.viewerContext,
              },
            };
            commitProfile(mergedBundle);
            setActivityData(mergedBundle.activityHeatmap || []);
          })
          .catch((bundleError) => {
            console.error('Deferred profile bundle failed:', bundleError);
          });
      } catch (err: unknown) {
        const structured = getStructuredApiError(err);
        const error = err as {
          response?: { status?: number; data?: { error?: string } };
          message?: string;
        };

        if (isTerminalSafetyError(err)) {
          markProfileUnavailable();
          return;
        }

        if (error.response?.status === 403) {
          setIsPrivate(true);
          setError(error.response?.data?.error || 'This profile is private.');
        } else if (error.response?.status === 404) {
          // 404 on own profile = stale token (user deleted from DB, e.g. after reset)
          if (targetUserId && authUser?.id === targetUserId && typeof window !== 'undefined') {
            const { removeToken } = await import('@/lib/auth/authHelpers');
            const Cookies = (await import('js-cookie')).default;
            removeToken();
            Cookies.remove('authToken');
            Cookies.remove('vx_auth_present');
            Cookies.remove('vx_csrf');
            window.location.href = '/login';
            return;
          }
          setError('User not found.');
        } else {
          setError(structured.message || 'Failed to load profile.');
        }
        setLoading(false);
      }
    },
    [
      authUser,
      commitCoreProfile,
      commitProfile,
      isAuthenticated,
      markProfileUnavailable,
      queryClient,
      setActivityData,
      setAvailableYears,
      setError,
      setIsPrivate,
      setIsUnavailable,
      setLoading,
      targetUserId,
      userId,
    ]
  );
  return { fetchProfile };
}
