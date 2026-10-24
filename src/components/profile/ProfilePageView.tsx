'use client';
import { Rss } from 'lucide-react';
import type * as React from 'react';
import { Achievements } from './Achievements';
import { ActivityCalendar } from './ActivityCalendar';
import { AddAchievementModal } from './AddAchievementModal';
import { AddCertificateModal } from './AddCertificateModal';
import { AddEducationModal } from './AddEducationModal';
import { AddExperienceModal } from './AddExperienceModal';
import { AddProjectModal } from './AddProjectModal';
import { AddSkillModal } from './AddSkillModal';
import { CertificatesGrid } from './CertificatesGrid';
import { EditProfileModal } from './EditProfileModal';
import { EducationTimeline } from './EducationTimeline';
import { ExperienceTimeline } from './ExperienceTimeline';
import { GitHubStats } from './GitHubStats';
import { ImageUploadModal } from './ImageUploadModal';
import { ProfileAbout } from './ProfileAbout';
import { ProfileFeed } from './ProfileFeed';
import { ProfileHeader } from './ProfileHeader';
import { ProfileSection, Reveal } from './ProfileSection';
import { ProjectsGrid } from './ProjectsGrid';
import { SkillsGrid } from './SkillsGrid';

interface ProfilePageViewProps {
  achievementToEdit: import('@/types/profile').Achievement | null;
  activityData: import('@/types/profile').ActivityHeatmapDay[];
  activityLoading: boolean;
  addAchievementModalOpen: boolean;
  addCertificateModalOpen: boolean;
  addEducationModalOpen: boolean;
  addExperienceModalOpen: boolean;
  addProjectModalOpen: boolean;
  addSkillModalOpen: boolean;
  authUser: import('@/types/auth').User | null;
  availableYears: import('@/types/profile').ActivityYearsResponse | null;
  avatarModalOpen: boolean;
  bannerModalOpen: boolean;
  certificateToEdit: import('@/types/profile').Certificate | null;
  editModalOpen: boolean;
  educationToEdit: import('@/types/profile').Education | null;
  experienceToEdit: import('@/types/profile').Experience | null;
  handleAchievementAdded: (achievement: import('@/types/profile').Achievement) => void;
  handleAchievementUpdated: (updatedAchievement: import('@/types/profile').Achievement) => void;
  handleAvatarUpdated: (avatarUrl: string) => void;
  handleBannerUpdated: (bannerUrl: string) => void;
  handleCertificateAdded: (certificate: import('@/types/profile').Certificate) => void;
  handleCertificateUpdated: (updatedCertificate: import('@/types/profile').Certificate) => void;
  handleEditAchievement: (achievement: import('@/types/profile').Achievement) => void;
  handleEditCertificate: (certificate: import('@/types/profile').Certificate) => void;
  handleEditProject: (project: import('@/types/profile').Project) => void;
  handleEditSkill: (skill: import('@/types/profile').UserSkill) => void;
  handleEducationAdded: (education: import('@/types/profile').Education) => void;
  handleEducationUpdated: (education: import('@/types/profile').Education) => void;
  handleExperienceAdded: (experience: import('@/types/profile').Experience) => void;
  handleExperienceUpdated: (experience: import('@/types/profile').Experience) => void;
  handleGitHubConnect: () => Promise<void>;
  handleGitHubSync: () => Promise<void>;
  handleInterestAdded: (interest: string) => void;
  handleProfileUpdate: (updatedData: Partial<import('@/types/profile').ProfileUser>) => void;
  handleProjectAdded: (project: import('@/types/profile').Project) => void;
  handleProjectDeleted: (projectId: string) => void;
  handleProjectUpdated: (updatedProject: import('@/types/profile').Project) => void;
  handleRemoveInterest: (interest: string) => Promise<void>;
  handleRemoveSkill: (id: string) => Promise<void>;
  handleSkillAdded: (skill: import('@/types/profile').UserSkill) => void;
  handleSkillDeletedFromModal: (id: string) => void;
  handleSkillUpdated: (updatedSkill: import('@/types/profile').UserSkill) => void;
  handleViewerContextChange: (
    patch: Partial<import('@/types/profile').ProfileViewerContext>,
    followersDelta?: number
  ) => void;
  handleYearChange: (year: number | null) => Promise<void>;
  isOwner: boolean;
  markProfileUnavailable: (
    knownProfile?: import('@/types/profile').FullProfileResponse | null | undefined
  ) => void;
  profile: import('@/types/profile').FullProfileResponse;
  projectToEdit: import('@/types/profile').Project | null;
  setAchievementToEdit: React.Dispatch<
    React.SetStateAction<import('@/types/profile').Achievement | null>
  >;
  setAddAchievementModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAddCertificateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAddEducationModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAddExperienceModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAddProjectModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAddSkillModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAvatarModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setBannerModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCertificateToEdit: React.Dispatch<
    React.SetStateAction<import('@/types/profile').Certificate | null>
  >;
  setEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setEducationToEdit: React.Dispatch<
    React.SetStateAction<import('@/types/profile').Education | null>
  >;
  setExperienceToEdit: React.Dispatch<
    React.SetStateAction<import('@/types/profile').Experience | null>
  >;
  setProjectToEdit: React.Dispatch<React.SetStateAction<import('@/types/profile').Project | null>>;
  setSkillToEdit: React.Dispatch<React.SetStateAction<import('@/types/profile').UserSkill | null>>;
  skillToEdit: import('@/types/profile').UserSkill | null;
}

export function ProfilePageView({
  achievementToEdit,
  activityData,
  activityLoading,
  addAchievementModalOpen,
  addCertificateModalOpen,
  addEducationModalOpen,
  addExperienceModalOpen,
  addProjectModalOpen,
  addSkillModalOpen,
  authUser,
  availableYears,
  avatarModalOpen,
  bannerModalOpen,
  certificateToEdit,
  editModalOpen,
  educationToEdit,
  experienceToEdit,
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
  handleGitHubConnect,
  handleGitHubSync,
  handleInterestAdded,
  handleProfileUpdate,
  handleProjectAdded,
  handleProjectDeleted,
  handleProjectUpdated,
  handleRemoveInterest,
  handleRemoveSkill,
  handleSkillAdded,
  handleSkillDeletedFromModal,
  handleSkillUpdated,
  handleViewerContextChange,
  handleYearChange,
  isOwner,
  markProfileUnavailable,
  profile,
  projectToEdit,
  setAchievementToEdit,
  setAddAchievementModalOpen,
  setAddCertificateModalOpen,
  setAddEducationModalOpen,
  setAddExperienceModalOpen,
  setAddProjectModalOpen,
  setAddSkillModalOpen,
  setAvatarModalOpen,
  setBannerModalOpen,
  setCertificateToEdit,
  setEditModalOpen,
  setEducationToEdit,
  setExperienceToEdit,
  setProjectToEdit,
  setSkillToEdit,
  skillToEdit,
}: ProfilePageViewProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-neutral-50 pb-24 dark:bg-neutral-950">
      <ProfileHeader
        user={{
          ...profile.user,
          profileRing:
            profile.user.profileRing ??
            (isOwner ? (authUser as { profileRing?: string })?.profileRing : undefined),
        }}
        stats={profile.stats}
        viewerContext={profile.viewerContext}
        isOwner={!!isOwner}
        onViewerContextChange={handleViewerContextChange}
        onProfileUnavailable={() => markProfileUnavailable(profile)}
        onEditProfile={() => setEditModalOpen(true)}
        onEditAvatar={() => setAvatarModalOpen(true)}
        onEditBanner={() => setBannerModalOpen(true)}
      />

      <div className="mx-auto mt-4 w-full min-w-0 max-w-5xl px-3 sm:mt-8 sm:px-6 lg:px-8">
        <div className="grid min-w-0 gap-4 [&>*]:min-w-0 sm:gap-6">
          {/* About Section (Bio & Interests) */}
          <ProfileAbout
            user={profile.user}
            stats={profile.stats}
            isOwner={!!isOwner}
            onRemoveInterest={handleRemoveInterest}
          />

          <Reveal>
            <GitHubStats
              github={profile.github}
              isOwner={!!isOwner}
              onSync={handleGitHubSync}
              onConnect={handleGitHubConnect}
            />
          </Reveal>

          <Reveal>
            <ActivityCalendar
              userId={profile.user.id}
              activityData={activityData}
              currentStreak={profile.stats.currentStreak}
              longestStreak={profile.stats.longestStreak}
              onYearChange={handleYearChange}
              availableYears={availableYears || undefined}
              isLoading={activityLoading}
            />
          </Reveal>

          <SkillsGrid
            skills={profile.skills}
            isOwner={!!isOwner}
            onAddSkill={() => {
              setSkillToEdit(null);
              setAddSkillModalOpen(true);
            }}
            onRemoveSkill={handleRemoveSkill}
            onEditSkill={handleEditSkill}
          />

          <ProjectsGrid
            projects={profile.projects}
            isOwner={!!isOwner}
            onAddProject={() => {
              setProjectToEdit(null);
              setAddProjectModalOpen(true);
            }}
            onEditProject={handleEditProject}
          />

          <ExperienceTimeline
            experiences={profile.experiences}
            isOwner={!!isOwner}
            onAddExperience={() => {
              setExperienceToEdit(null);
              setAddExperienceModalOpen(true);
            }}
            onEditExperience={(experience) => {
              setExperienceToEdit(experience);
              setAddExperienceModalOpen(true);
            }}
          />

          <EducationTimeline
            education={profile.education}
            isOwner={!!isOwner}
            onAddEducation={() => {
              setEducationToEdit(null);
              setAddEducationModalOpen(true);
            }}
            onEditEducation={(education) => {
              setEducationToEdit(education);
              setAddEducationModalOpen(true);
            }}
          />

          <CertificatesGrid
            certificates={profile.certificates}
            isOwner={!!isOwner}
            onAddCertificate={() => {
              setCertificateToEdit(null);
              setAddCertificateModalOpen(true);
            }}
            onEditCertificate={handleEditCertificate}
          />

          <Achievements
            achievements={profile.achievements}
            isOwner={!!isOwner}
            onAddAchievement={() => {
              setAchievementToEdit(null);
              setAddAchievementModalOpen(true);
            }}
            onEditAchievement={handleEditAchievement}
          />

          <ProfileSection
            icon={<Rss className="h-5 w-5" />}
            title="Posts & activity"
            subtitle="Posts, articles, and reels"
          >
            <ProfileFeed
              key={profile.user.id}
              userId={profile.user.id}
              initialFeed={profile.recentActivity}
            />
          </ProfileSection>
        </div>
      </div>

      {isOwner && profile && (
        <EditProfileModal
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          user={profile.user}
          onProfileUpdate={handleProfileUpdate}
        />
      )}

      {/* Add/Edit Project Modal */}
      {isOwner && (
        <AddProjectModal
          isOpen={addProjectModalOpen}
          onClose={() => {
            setAddProjectModalOpen(false);
            setProjectToEdit(null);
          }}
          onProjectAdded={handleProjectAdded}
          onProjectUpdated={handleProjectUpdated}
          onProjectDeleted={handleProjectDeleted}
          projectToEdit={projectToEdit}
        />
      )}

      {/* Add/Edit Skill Modal */}
      {isOwner && profile && (
        <AddSkillModal
          isOpen={addSkillModalOpen}
          onClose={() => {
            setAddSkillModalOpen(false);
            setSkillToEdit(null);
          }}
          onSkillAdded={handleSkillAdded}
          onSkillUpdated={handleSkillUpdated}
          onSkillDeleted={handleSkillDeletedFromModal}
          onInterestAdded={handleInterestAdded}
          existingSkills={profile.skills.map((s) => s.skill.name)}
          existingInterests={profile.user.interests || []}
          skillToEdit={skillToEdit}
        />
      )}

      {isOwner && (
        <AddExperienceModal
          isOpen={addExperienceModalOpen}
          onClose={() => {
            setAddExperienceModalOpen(false);
            setExperienceToEdit(null);
          }}
          onExperienceAdded={handleExperienceAdded}
          experienceToEdit={experienceToEdit}
          onExperienceUpdated={handleExperienceUpdated}
        />
      )}

      {isOwner && (
        <AddEducationModal
          isOpen={addEducationModalOpen}
          onClose={() => {
            setAddEducationModalOpen(false);
            setEducationToEdit(null);
          }}
          onEducationAdded={handleEducationAdded}
          educationToEdit={educationToEdit}
          onEducationUpdated={handleEducationUpdated}
        />
      )}

      {isOwner && (
        <AddAchievementModal
          isOpen={addAchievementModalOpen}
          onClose={() => {
            setAddAchievementModalOpen(false);
            setAchievementToEdit(null);
          }}
          onAchievementAdded={handleAchievementAdded}
          achievementToEdit={achievementToEdit}
          onAchievementUpdated={handleAchievementUpdated}
        />
      )}

      {isOwner && (
        <AddCertificateModal
          isOpen={addCertificateModalOpen}
          onClose={() => {
            setAddCertificateModalOpen(false);
            setCertificateToEdit(null);
          }}
          onCertificateAdded={handleCertificateAdded}
          certificateToEdit={certificateToEdit}
          onCertificateUpdated={handleCertificateUpdated}
        />
      )}

      {isOwner && profile && (
        <ImageUploadModal
          isOpen={avatarModalOpen}
          onClose={() => setAvatarModalOpen(false)}
          type="avatar"
          currentImageUrl={profile.user.avatar}
          onImageUpdated={handleAvatarUpdated}
        />
      )}

      {isOwner && profile && (
        <ImageUploadModal
          isOpen={bannerModalOpen}
          onClose={() => setBannerModalOpen(false)}
          type="banner"
          currentImageUrl={profile.user.bannerImageUrl}
          onImageUpdated={handleBannerUpdated}
        />
      )}
    </div>
  );
}
