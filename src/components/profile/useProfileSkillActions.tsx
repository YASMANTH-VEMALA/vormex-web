'use client';
import { deleteSkill, updateProfile } from '@/lib/api/profile';
import type { Experience } from '@/types/profile';
interface useProfileSkillActionsOptions {
  fetchProfile: (options?: { background?: boolean | undefined }) => Promise<void>;
  profile: import('@/types/profile').FullProfileResponse | null;
  updateProfileState: (
    updater: (
      currentProfile: import('@/types/profile').FullProfileResponse
    ) => import('@/types/profile').FullProfileResponse
  ) => void;
}
export function useProfileSkillActions({
  fetchProfile,
  profile,
  updateProfileState,
}: useProfileSkillActionsOptions) {
  const handleRemoveSkill = async (id: string) => {
    if (!profile) return;
    if (!confirm('Are you sure you want to remove this skill?')) return;

    const originalSkills = profile.skills;
    // Optimistic
    updateProfileState((currentProfile) => ({
      ...currentProfile,
      skills: currentProfile.skills.filter((skill) => skill.id !== id),
    }));

    try {
      await deleteSkill(id);
    } catch (err) {
      // Revert
      updateProfileState((currentProfile) => ({
        ...currentProfile,
        skills: originalSkills,
      }));
      console.error('Failed to delete skill', err);
    }
  };

  const handleSkillDeletedFromModal = (id: string) => {
    updateProfileState((currentProfile) => ({
      ...currentProfile,
      skills: currentProfile.skills.filter((skill) => skill.id !== id),
    }));
  };

  const handleInterestAdded = (interest: string) => {
    updateProfileState((currentProfile) => ({
      ...currentProfile,
      user: {
        ...currentProfile.user,
        interests: [...(currentProfile.user.interests || []), interest],
      },
    }));
    void fetchProfile({ background: true });
  };

  const handleRemoveInterest = async (interest: string) => {
    if (!profile) return;
    if (!confirm(`Remove interest "${interest}"?`)) return;

    const newInterests = profile.user.interests?.filter((i) => i !== interest) || [];
    // Optimistic
    updateProfileState((currentProfile) => ({
      ...currentProfile,
      user: { ...currentProfile.user, interests: newInterests },
    }));

    try {
      await updateProfile({ interests: newInterests });
    } catch {
      void fetchProfile({ background: true }); // Revert/Refresh
    }
  };

  const handleExperienceAdded = (experience: Experience) => {
    updateProfileState((currentProfile) => ({
      ...currentProfile,
      experiences: [experience, ...currentProfile.experiences],
    }));
  };

  const handleExperienceUpdated = (experience: Experience) => {
    updateProfileState((currentProfile) => ({
      ...currentProfile,
      experiences: currentProfile.experiences.map((item) =>
        item.id === experience.id ? experience : item
      ),
    }));
  };
  return {
    handleExperienceAdded,
    handleExperienceUpdated,
    handleInterestAdded,
    handleRemoveInterest,
    handleRemoveSkill,
    handleSkillDeletedFromModal,
  };
}
