'use client';
import type { Achievement, Certificate, Education, Project, UserSkill } from '@/types/profile';
import type * as React from 'react';
import { useProfileSkillActions } from './useProfileSkillActions';
interface useProfileRecordActionsOptions {
  fetchProfile: (options?: { background?: boolean | undefined }) => Promise<void>;
  profile: import('@/types/profile').FullProfileResponse | null;
  setAchievementToEdit: React.Dispatch<
    React.SetStateAction<import('@/types/profile').Achievement | null>
  >;
  setAddAchievementModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAddCertificateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAddProjectModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAddSkillModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCertificateToEdit: React.Dispatch<
    React.SetStateAction<import('@/types/profile').Certificate | null>
  >;
  setProjectToEdit: React.Dispatch<React.SetStateAction<import('@/types/profile').Project | null>>;
  setSkillToEdit: React.Dispatch<React.SetStateAction<import('@/types/profile').UserSkill | null>>;
  updateProfileState: (
    updater: (
      currentProfile: import('@/types/profile').FullProfileResponse
    ) => import('@/types/profile').FullProfileResponse
  ) => void;
}
export function useProfileRecordActions({
  fetchProfile,
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
}: useProfileRecordActionsOptions) {
  const handleAvatarUpdated = (avatarUrl: string) => {
    updateProfileState((currentProfile) => ({
      ...currentProfile,
      user: { ...currentProfile.user, avatar: avatarUrl, profileImage: avatarUrl },
    }));
  };

  const handleBannerUpdated = (bannerUrl: string) => {
    updateProfileState((currentProfile) => ({
      ...currentProfile,
      user: { ...currentProfile.user, bannerImageUrl: bannerUrl },
    }));
  };

  const handleProjectAdded = (project: Project) => {
    updateProfileState((currentProfile) => ({
      ...currentProfile,
      projects: [project, ...currentProfile.projects],
    }));
  };

  const handleEditProject = (project: Project) => {
    setProjectToEdit(project);
    setAddProjectModalOpen(true);
  };

  const handleProjectUpdated = (updatedProject: Project) => {
    updateProfileState((currentProfile) => ({
      ...currentProfile,
      projects: currentProfile.projects.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      ),
    }));
  };

  const handleProjectDeleted = (projectId: string) => {
    updateProfileState((currentProfile) => ({
      ...currentProfile,
      projects: currentProfile.projects.filter((project) => project.id !== projectId),
    }));
  };

  const handleSkillAdded = (skill: UserSkill) => {
    updateProfileState((currentProfile) => ({
      ...currentProfile,
      skills: [...currentProfile.skills, skill],
    }));
  };

  const handleEditSkill = (skill: UserSkill) => {
    setSkillToEdit(skill);
    setAddSkillModalOpen(true);
  };

  const handleSkillUpdated = (updatedSkill: UserSkill) => {
    updateProfileState((currentProfile) => ({
      ...currentProfile,
      skills: currentProfile.skills.map((skill) =>
        skill.id === updatedSkill.id ? updatedSkill : skill
      ),
    }));
  };

  const {
    handleExperienceAdded,
    handleExperienceUpdated,
    handleInterestAdded,
    handleRemoveInterest,
    handleRemoveSkill,
    handleSkillDeletedFromModal,
  } = useProfileSkillActions({
    fetchProfile: (...args: Parameters<typeof fetchProfile>) => fetchProfile(...args),
    profile,
    updateProfileState,
  });

  const handleEducationAdded = (education: Education) => {
    updateProfileState((currentProfile) => ({
      ...currentProfile,
      education: [education, ...currentProfile.education],
    }));
  };

  const handleEducationUpdated = (education: Education) => {
    updateProfileState((currentProfile) => ({
      ...currentProfile,
      education: currentProfile.education.map((item) =>
        item.id === education.id ? education : item
      ),
    }));
  };

  const handleAchievementAdded = (achievement: Achievement) => {
    updateProfileState((currentProfile) => ({
      ...currentProfile,
      achievements: [achievement, ...currentProfile.achievements],
    }));
  };

  const handleCertificateAdded = (certificate: Certificate) => {
    updateProfileState((currentProfile) => ({
      ...currentProfile,
      certificates: [certificate, ...currentProfile.certificates],
    }));
  };

  const handleEditCertificate = (certificate: Certificate) => {
    setCertificateToEdit(certificate);
    setAddCertificateModalOpen(true);
  };

  const handleEditAchievement = (achievement: Achievement) => {
    setAchievementToEdit(achievement);
    setAddAchievementModalOpen(true);
  };

  const handleCertificateUpdated = (updatedCertificate: Certificate) => {
    if (!profile) return;
    updateProfileState((currentProfile) => ({
      ...currentProfile,
      certificates: currentProfile.certificates.map((certificate) =>
        certificate.id === updatedCertificate.id ? updatedCertificate : certificate
      ),
    }));
  };

  const handleAchievementUpdated = (updatedAchievement: Achievement) => {
    if (!profile) return;
    updateProfileState((currentProfile) => ({
      ...currentProfile,
      achievements: currentProfile.achievements.map((achievement) =>
        achievement.id === updatedAchievement.id ? updatedAchievement : achievement
      ),
    }));
  };
  return {
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
  };
}
