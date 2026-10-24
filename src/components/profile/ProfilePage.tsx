'use client';
import { PrivateProfileState } from './PrivateProfileState';
import { ProfileLoadErrorState } from './ProfileLoadErrorState';
import type { ProfilePageProps } from './ProfilePage.types';
import { ProfilePageView } from './ProfilePageView';
import { ProfileUnavailableState } from './ProfileUnavailableState';
import { useProfileCacheHydration } from './useProfileCacheHydration';
import { useProfileFetch } from './useProfileFetch';
import { useProfileRecordActions } from './useProfileRecordActions';
export type { ProfilePageProps } from './ProfilePage.types';

import {
  getActivityHeatmap,
  getCoreProfile,
  materializeCoreProfile,
  profileQueryAliases,
  startGitHubOAuth,
  syncGitHubStats,
} from '@/lib/api/profile';
import { useAuth } from '@/lib/auth/useAuth';
import { ACTIVITY_STALE_TIME, queryKeys } from '@/lib/queryKeys';
import { removeProfileQueries } from '@/lib/safety/clientCleanup';
import { SAFETY_STATE_CHANGED_EVENT, getSocket } from '@/lib/socket';
import type {
  Achievement,
  ActivityHeatmapDay,
  ActivityYearsResponse,
  Certificate,
  CoreProfileResponse,
  Education,
  Experience,
  FullProfileResponse,
  ProfileViewerContext,
  Project,
  UserSkill,
} from '@/types/profile';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';
import { ProfileSkeleton } from './ProfileSkeleton';

export function ProfilePage({ userId, openEditModalOnMount }: ProfilePageProps) {
  const { user: authUser, isAuthenticated } = useAuth();
  const queryClient = useQueryClient();

  // Determine if viewing own profile
  // Resolve "me" to current user's ID (e.g. /profile/me)
  const resolvedUserId =
    userId?.toLowerCase() === 'me'
      ? isAuthenticated && authUser?.id
        ? authUser.id
        : null
      : userId;
  const targetUserId = resolvedUserId ?? (isAuthenticated && authUser?.id ? authUser.id : null);

  const cachedBundle = targetUserId
    ? (queryClient.getQueryData<FullProfileResponse>(queryKeys.profile(targetUserId)) ?? null)
    : null;
  const cachedCore = targetUserId
    ? (queryClient.getQueryData<CoreProfileResponse>(queryKeys.profileCore(targetUserId)) ?? null)
    : null;
  const cachedProfile = cachedBundle || (cachedCore ? materializeCoreProfile(cachedCore) : null);
  const cachedActivityYears = cachedProfile?.user.id
    ? (queryClient.getQueryData<ActivityYearsResponse>(
        queryKeys.profileActivityYears(cachedProfile.user.id)
      ) ?? null)
    : null;

  const [profile, setProfile] = useState<FullProfileResponse | null>(() => cachedProfile);
  const [loading, setLoading] = useState(() => !cachedProfile);
  const [error, setError] = useState<string | null>(null);
  const [isPrivate, setIsPrivate] = useState(false);
  const [isUnavailable, setIsUnavailable] = useState(false);

  /*
   * `targetUserId` is whatever the URL carried — usually a username, sometimes a
   * UUID. Comparing it to `authUser.id` alone reported "not the owner" for your
   * own profile whenever you arrived by username (e.g. /profile/<your-handle>),
   * hiding every edit control. Match the loaded profile's identity too.
   */
  const isOwner = Boolean(
    isAuthenticated &&
    authUser?.id &&
    (authUser.id === targetUserId || (profile ? profile.user.id === authUser.id : false))
  );

  // Modals
  const [editModalOpen, setEditModalOpen] = useState(Boolean(openEditModalOnMount));
  const [addProjectModalOpen, setAddProjectModalOpen] = useState(false);
  const [addSkillModalOpen, setAddSkillModalOpen] = useState(false);
  const [addExperienceModalOpen, setAddExperienceModalOpen] = useState(false);
  const [addEducationModalOpen, setAddEducationModalOpen] = useState(false);
  const [addAchievementModalOpen, setAddAchievementModalOpen] = useState(false);
  const [addCertificateModalOpen, setAddCertificateModalOpen] = useState(false);
  const [avatarModalOpen, setAvatarModalOpen] = useState(false);
  const [bannerModalOpen, setBannerModalOpen] = useState(false);

  // Edit State
  const [projectToEdit, setProjectToEdit] = useState<Project | null>(null);
  const [skillToEdit, setSkillToEdit] = useState<UserSkill | null>(null);
  const [experienceToEdit, setExperienceToEdit] = useState<Experience | null>(null);
  const [educationToEdit, setEducationToEdit] = useState<Education | null>(null);
  const [certificateToEdit, setCertificateToEdit] = useState<Certificate | null>(null);
  const [achievementToEdit, setAchievementToEdit] = useState<Achievement | null>(null);

  // Activity calendar state
  const [activityData, setActivityData] = useState<ActivityHeatmapDay[]>(
    () => cachedProfile?.activityHeatmap || []
  );
  const [availableYears, setAvailableYears] = useState<ActivityYearsResponse | null>(
    () => cachedActivityYears
  );

  const markProfileUnavailable = useCallback(
    (knownProfile?: FullProfileResponse | null) => {
      removeProfileQueries(queryClient, [
        targetUserId || '',
        knownProfile?.user.id || '',
        knownProfile?.user.username || '',
        knownProfile?.user.username ? `@${knownProfile.user.username}` : '',
      ]);
      setProfile(null);
      setActivityData([]);
      setAvailableYears(null);
      setIsPrivate(false);
      setIsUnavailable(true);
      setError('This profile is unavailable.');
      setLoading(false);
    },
    [queryClient, targetUserId]
  );

  const commitProfile = useCallback(
    (nextProfile: FullProfileResponse) => {
      setProfile(nextProfile);
      if (targetUserId) {
        for (const alias of profileQueryAliases(targetUserId, nextProfile)) {
          queryClient.setQueryData(queryKeys.profile(alias), nextProfile);
        }
      }
    },
    [queryClient, targetUserId]
  );

  const commitCoreProfile = useCallback(
    (core: CoreProfileResponse) => {
      if (targetUserId) {
        for (const alias of profileQueryAliases(targetUserId, core)) {
          queryClient.setQueryData(queryKeys.profileCore(alias), core);
        }
      }
      setProfile((currentProfile) => materializeCoreProfile(core, currentProfile));
    },
    [queryClient, targetUserId]
  );

  useQuery({
    queryKey: queryKeys.profileCore(targetUserId ?? ''),
    queryFn: async () => {
      const core = await getCoreProfile(targetUserId!);
      commitCoreProfile(core);
      return core;
    },
    enabled: Boolean(targetUserId) && !isUnavailable,
    staleTime: 0,
    refetchInterval: 10_000,
    refetchOnWindowFocus: 'always',
    retry: false,
  });
  useEffect(() => {
    const socket = getSocket();
    if (!socket || !targetUserId) return;
    const refresh = () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.profileCore(targetUserId) });
    };
    socket.on('notification:new', refresh);
    socket.on('post:liked', refresh);
    socket.on('connect', refresh);
    return () => {
      socket.off('notification:new', refresh);
      socket.off('post:liked', refresh);
      socket.off('connect', refresh);
    };
  }, [queryClient, targetUserId]);

  const updateProfileState = useCallback(
    (updater: (currentProfile: FullProfileResponse) => FullProfileResponse) => {
      setProfile((currentProfile) => {
        if (!currentProfile) return currentProfile;
        const nextProfile = updater(currentProfile);
        if (targetUserId) {
          for (const alias of profileQueryAliases(targetUserId, nextProfile)) {
            queryClient.setQueryData(queryKeys.profile(alias), nextProfile);
            queryClient.setQueryData<CoreProfileResponse>(
              queryKeys.profileCore(alias),
              (currentCore) =>
                currentCore
                  ? {
                      ...currentCore,
                      user: { ...currentCore.user, ...nextProfile.user },
                      stats: nextProfile.stats,
                      viewerContext: {
                        ...currentCore.viewerContext,
                        ...nextProfile.viewerContext,
                      },
                    }
                  : currentCore
            );
          }
        }
        return nextProfile;
      });
    },
    [queryClient, targetUserId]
  );

  const handleViewerContextChange = useCallback(
    (patch: Partial<ProfileViewerContext>, followersDelta = 0) => {
      updateProfileState((currentProfile) => ({
        ...currentProfile,
        stats:
          followersDelta === 0
            ? currentProfile.stats
            : {
                ...currentProfile.stats,
                followersCount: Math.max(0, currentProfile.stats.followersCount + followersDelta),
              },
        viewerContext: {
          ...currentProfile.viewerContext,
          ...patch,
        },
      }));
    },
    [updateProfileState]
  );

  // Handler for avatar update
  const {
    handleAchievementAdded,
    handleAchievementUpdated,
    handleAvatarUpdated,
    handleBannerUpdated,
    handleCertificateAdded,
    handleCertificateUpdated,
    handleEditAchievement,
    handleEditCertificate,
    handleEditProject,
    handleEditSkill,
    handleEducationAdded,
    handleEducationUpdated,
    handleExperienceAdded,
    handleExperienceUpdated,
    handleInterestAdded,
    handleProjectAdded,
    handleProjectDeleted,
    handleProjectUpdated,
    handleRemoveInterest,
    handleRemoveSkill,
    handleSkillAdded,
    handleSkillDeletedFromModal,
    handleSkillUpdated,
  } = useProfileRecordActions({
    fetchProfile: (...args: Parameters<typeof fetchProfile>) => fetchProfile(...args),
    profile,
    setAchievementToEdit,
    setAddAchievementModalOpen,
    setAddCertificateModalOpen,
    setAddProjectModalOpen,
    setAddSkillModalOpen,
    setCertificateToEdit,
    setProjectToEdit,
    setSkillToEdit,
    updateProfileState,
  });

  useProfileCacheHydration({
    queryClient,
    setActivityData,
    setAvailableYears,
    setError,
    setIsPrivate,
    setIsUnavailable,
    setLoading,
    setProfile,
    targetUserId,
  });

  // Fetch profile data
  const { fetchProfile } = useProfileFetch({
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
  });

  useEffect(() => {
    if (!targetUserId || isOwner) return;
    const handleSafetyStateChanged = () => {
      removeProfileQueries(queryClient, [targetUserId]);
      setProfile(null);
      setActivityData([]);
      setAvailableYears(null);
      setLoading(true);
      void fetchProfile();
    };
    window.addEventListener(SAFETY_STATE_CHANGED_EVENT, handleSafetyStateChanged);
    return () => window.removeEventListener(SAFETY_STATE_CHANGED_EVENT, handleSafetyStateChanged);
  }, [fetchProfile, isOwner, queryClient, targetUserId]);

  useEffect(() => {
    void fetchProfile({ background: true });

    // Handle GitHub OAuth callback
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const githubStatus = urlParams.get('github');
      const githubMessage = urlParams.get('message');

      if (githubStatus === 'connected') {
        console.log('GitHub connected successfully, refreshing profile...');
        // Clean up URL
        window.history.replaceState({}, '', window.location.pathname);
        // Refetch profile to get updated GitHub data
        setTimeout(() => {
          void fetchProfile({ background: true });
        }, 500);
      } else if (githubStatus === 'error') {
        console.error('GitHub connection error:', githubMessage);
        // Clean up URL
        window.history.replaceState({}, '', window.location.pathname);
      }
    }
  }, [fetchProfile]);

  const [activityLoading, setActivityLoading] = useState(false);

  // Handle year change for activity calendar
  const handleYearChange = async (year: number | null) => {
    if (!profile) return;
    setActivityLoading(true);

    try {
      const data = await queryClient.fetchQuery({
        queryKey: queryKeys.profileActivityHeatmap(profile.user.id, year),
        queryFn: () => getActivityHeatmap(profile.user.id, year || undefined),
        staleTime: ACTIVITY_STALE_TIME,
      });
      setActivityData(data.days || []);
    } catch (err) {
      console.error('Failed to fetch activity data:', err);
    } finally {
      setActivityLoading(false);
    }
  };

  const handleGitHubSync = async () => {
    try {
      await syncGitHubStats();
      void fetchProfile({ background: true });
    } catch (err) {
      console.error('Failed to sync GitHub:', err);
    }
  };

  const handleGitHubConnect = async () => {
    try {
      const { authUrl } = await startGitHubOAuth();
      window.location.href = authUrl;
    } catch (err) {
      console.error('Failed to start GitHub OAuth:', err);
    }
  };

  const handleProfileUpdate = (updatedData: Partial<FullProfileResponse['user']>) => {
    updateProfileState((currentProfile) => ({
      ...currentProfile,
      user: { ...currentProfile.user, ...updatedData },
    }));
  };

  if (loading) {
    return <ProfileSkeleton />;
  }

  if (isUnavailable) {
    return <ProfileUnavailableState />;
  }

  if (isPrivate) {
    return <PrivateProfileState error={error} isAuthenticated={isAuthenticated} />;
  }

  if (error || !profile) {
    return <ProfileLoadErrorState error={error} fetchProfile={fetchProfile} />;
  }

  return (
    <ProfilePageView
      achievementToEdit={achievementToEdit}
      activityData={activityData}
      activityLoading={activityLoading}
      addAchievementModalOpen={addAchievementModalOpen}
      addCertificateModalOpen={addCertificateModalOpen}
      addEducationModalOpen={addEducationModalOpen}
      addExperienceModalOpen={addExperienceModalOpen}
      addProjectModalOpen={addProjectModalOpen}
      addSkillModalOpen={addSkillModalOpen}
      authUser={authUser}
      availableYears={availableYears}
      avatarModalOpen={avatarModalOpen}
      bannerModalOpen={bannerModalOpen}
      certificateToEdit={certificateToEdit}
      editModalOpen={isOwner && editModalOpen}
      educationToEdit={educationToEdit}
      experienceToEdit={experienceToEdit}
      handleAchievementAdded={handleAchievementAdded}
      handleAchievementUpdated={handleAchievementUpdated}
      handleAvatarUpdated={handleAvatarUpdated}
      handleBannerUpdated={handleBannerUpdated}
      handleCertificateAdded={handleCertificateAdded}
      handleCertificateUpdated={handleCertificateUpdated}
      handleEditAchievement={handleEditAchievement}
      handleEditCertificate={handleEditCertificate}
      handleEditProject={handleEditProject}
      handleEditSkill={handleEditSkill}
      handleEducationAdded={handleEducationAdded}
      handleEducationUpdated={handleEducationUpdated}
      handleExperienceAdded={handleExperienceAdded}
      handleExperienceUpdated={handleExperienceUpdated}
      handleGitHubConnect={handleGitHubConnect}
      handleGitHubSync={handleGitHubSync}
      handleInterestAdded={handleInterestAdded}
      handleProfileUpdate={handleProfileUpdate}
      handleProjectAdded={handleProjectAdded}
      handleProjectDeleted={handleProjectDeleted}
      handleProjectUpdated={handleProjectUpdated}
      handleRemoveInterest={handleRemoveInterest}
      handleRemoveSkill={handleRemoveSkill}
      handleSkillAdded={handleSkillAdded}
      handleSkillDeletedFromModal={handleSkillDeletedFromModal}
      handleSkillUpdated={handleSkillUpdated}
      handleViewerContextChange={handleViewerContextChange}
      handleYearChange={handleYearChange}
      isOwner={isOwner}
      markProfileUnavailable={markProfileUnavailable}
      profile={profile}
      projectToEdit={projectToEdit}
      setAchievementToEdit={setAchievementToEdit}
      setAddAchievementModalOpen={setAddAchievementModalOpen}
      setAddCertificateModalOpen={setAddCertificateModalOpen}
      setAddEducationModalOpen={setAddEducationModalOpen}
      setAddExperienceModalOpen={setAddExperienceModalOpen}
      setAddProjectModalOpen={setAddProjectModalOpen}
      setAddSkillModalOpen={setAddSkillModalOpen}
      setAvatarModalOpen={setAvatarModalOpen}
      setBannerModalOpen={setBannerModalOpen}
      setCertificateToEdit={setCertificateToEdit}
      setEditModalOpen={setEditModalOpen}
      setEducationToEdit={setEducationToEdit}
      setExperienceToEdit={setExperienceToEdit}
      setProjectToEdit={setProjectToEdit}
      setSkillToEdit={setSkillToEdit}
      skillToEdit={skillToEdit}
    />
  );
}
