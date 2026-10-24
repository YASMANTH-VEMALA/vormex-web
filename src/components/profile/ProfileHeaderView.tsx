'use client';
import ConnectionSentToast from '@/components/engagement/ConnectionSentToast';
import { BlockUserModal } from '@/components/ui/BlockUserModal';
import { ReportModal } from '@/components/ui/ReportModal';
import { VerificationBadge } from '@/components/ui/VerificationBadge';
import { publishRelationship } from '@/lib/connections/relationshipStore';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Camera,
  ExternalLink,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  MapPin,
} from 'lucide-react';
import type * as React from 'react';
import { ProfileIdentityActions } from './ProfileIdentityActions';
import { ProfileStatistics } from './ProfileStatistics';

interface ProfileHeaderViewProps {
  ProfileCoverImage: (props: { imageSrc?: string | null | undefined }) => React.JSX.Element;
  StatItem: (
    props: import('@/components/profile/ProfileHeader.types').StatItemProps
  ) => React.JSX.Element;
  actionMenuRef: React.RefObject<HTMLDivElement | null>;
  connectionStatus: import('@/components/profile/ProfileHeader.types').ConnectionStatus;
  copied: boolean;
  errorFor: (userId: string) => string | undefined;
  failedIds: ReadonlySet<string>;
  formatNumber: (num: number) => string;
  handleAcceptRequest: () => void;
  handleCancelRequest: () => Promise<void>;
  handleConnect: () => void;
  handleCopyLink: () => void;
  handleFollowToggle: () => Promise<void>;
  handleMessage: () => Promise<void>;
  handleRemoveConnection: () => Promise<void> | undefined;
  isFollowedBy: boolean;
  isFollowing: boolean;
  isOwner: boolean;
  loadingConnection: boolean;
  loadingFollow: boolean;
  loadingMessage: boolean;
  locationLabel: string;
  messageError: string | null;
  mutualInfo: import('@/lib/api/follow').MutualInfo | null;
  mutualSectionRef: React.RefObject<HTMLDivElement | null>;
  onEditAvatar: (() => void) | undefined;
  onEditBanner: (() => void) | undefined;
  onEditProfile: (() => void) | undefined;
  onProfileUnavailable: (() => void) | undefined;
  profileImageSrc: string | null;
  router: import('next/dist/shared/lib/app-router-context.shared-runtime').AppRouterInstance;
  setBlockedProfileId: React.Dispatch<React.SetStateAction<string | null>>;
  setIsFollowing: React.Dispatch<React.SetStateAction<boolean>>;
  setShowBlockModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowConnectMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMoreMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setShowReportModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowShareMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setShowToast: React.Dispatch<React.SetStateAction<boolean>>;
  showBlockModal: boolean;
  showConnectMenu: boolean;
  showMoreMenu: boolean;
  showReportModal: boolean;
  showShareMenu: boolean;
  showToast: boolean;
  stats: import('@/types/profile').ProfileStats;
  user: import('@/types/profile').ProfileUser;
}

export function ProfileHeaderView({
  ProfileCoverImage,
  StatItem,
  actionMenuRef,
  connectionStatus,
  copied,
  errorFor,
  failedIds,
  formatNumber,
  handleAcceptRequest,
  handleCancelRequest,
  handleConnect,
  handleCopyLink,
  handleFollowToggle,
  handleMessage,
  handleRemoveConnection,
  isFollowedBy,
  isFollowing,
  isOwner,
  loadingConnection,
  loadingFollow,
  loadingMessage,
  locationLabel,
  messageError,
  mutualInfo,
  mutualSectionRef,
  onEditAvatar,
  onEditBanner,
  onEditProfile,
  onProfileUnavailable,
  profileImageSrc,
  router,
  setBlockedProfileId,
  setIsFollowing,
  setShowBlockModal,
  setShowConnectMenu,
  setShowMoreMenu,
  setShowReportModal,
  setShowShareMenu,
  setShowToast,
  showBlockModal,
  showConnectMenu,
  showMoreMenu,
  showReportModal,
  showShareMenu,
  showToast,
  stats,
  user,
}: ProfileHeaderViewProps) {
  return (
    <div className="min-w-0 max-w-full overflow-x-clip">
      {/* ══════════════════════════════════════════════════════════════════════════
          BANNER SECTION - LinkedIn Style with Customizable Cover
      ══════════════════════════════════════════════════════════════════════════ */}
      <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 w-full">
        <ProfileCoverImage imageSrc={user.bannerImageUrl} />

        {/* Depth overlay so the profile card melts into the banner */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent pointer-events-none" />

        {/* Edit banner button (owner only) */}
        {isOwner && (
          <button
            onClick={onEditBanner}
            className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm text-gray-700 dark:text-neutral-200 text-sm font-medium hover:bg-white dark:hover:bg-neutral-800 transition-all shadow-lg border border-gray-200/50 dark:border-neutral-700/50"
          >
            <Camera className="w-4 h-4" />
            <span className="hidden sm:inline">Edit cover</span>
          </button>
        )}
      </div>

      {/* ══════════════════════════════════════════════════════════════════════════════
          MAIN PROFILE CARD - Clean, Spacious Layout
      ══════════════════════════════════════════════════════════════════════════════ */}
      <div className="mx-auto w-full min-w-0 max-w-5xl px-3 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative min-w-0 rounded-2xl border border-gray-100 bg-white shadow-xl shadow-neutral-900/[0.06] dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-black/40 -mt-16 sm:-mt-20"
        >
          {/* Profile content wrapper with generous padding */}
          <div className="px-4 sm:px-8 lg:px-10 pt-20 sm:pt-4 pb-6">
            {/* Top section: Avatar + Actions */}
            <ProfileIdentityActions
              actionMenuRef={actionMenuRef}
              connectionStatus={connectionStatus}
              copied={copied}
              errorFor={errorFor}
              failedIds={failedIds}
              handleAcceptRequest={handleAcceptRequest}
              handleCancelRequest={handleCancelRequest}
              handleConnect={handleConnect}
              handleCopyLink={handleCopyLink}
              handleFollowToggle={handleFollowToggle}
              handleMessage={handleMessage}
              handleRemoveConnection={handleRemoveConnection}
              isFollowing={isFollowing}
              isOwner={isOwner}
              loadingConnection={loadingConnection}
              loadingFollow={loadingFollow}
              loadingMessage={loadingMessage}
              messageError={messageError}
              onEditAvatar={onEditAvatar}
              onEditProfile={onEditProfile}
              profileImageSrc={profileImageSrc}
              setShowBlockModal={setShowBlockModal}
              setShowConnectMenu={setShowConnectMenu}
              setShowMoreMenu={setShowMoreMenu}
              setShowReportModal={setShowReportModal}
              setShowShareMenu={setShowShareMenu}
              showConnectMenu={showConnectMenu}
              showMoreMenu={showMoreMenu}
              showShareMenu={showShareMenu}
              user={user}
            />

            {/* ═══════════════════════════════════════════════════════════════════════
                USER INFORMATION - Clear Typography Hierarchy
            ═══════════════════════════════════════════════════════════════════════ */}
            <div className="mt-6 sm:mt-8">
              {/* Name Row */}
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {user.name}
                </h1>
                <VerificationBadge
                  profileBadgeStyle={user.profileBadgeStyle}
                  isPremium={user.isPremium}
                  size="large"
                />
                {user.isOpenToOpportunities && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                    #OpenToWork
                  </span>
                )}
              </div>

              {/* Headline - Prominent */}
              {user.headline && (
                <p className="mt-2 text-lg text-gray-700 dark:text-neutral-200 font-medium leading-relaxed">
                  {user.headline}
                </p>
              )}

              {/* Location & Education - Lighter weight */}
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 dark:text-neutral-400">
                {locationLabel && (
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {locationLabel}
                  </span>
                )}
                {user.college && (
                  <span className="flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4" />
                    {user.college}
                  </span>
                )}
                {user.branch && (
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4" />
                    {user.branch}
                  </span>
                )}
              </div>

              {/* Social Links - Integrated inline */}
              {(user.linkedinUrl || user.githubProfileUrl || user.portfolioUrl) && (
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  {user.linkedinUrl && (
                    <a
                      href={user.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {user.githubProfileUrl && (
                    <a
                      href={user.githubProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-gray-700 dark:text-neutral-300 hover:underline font-medium"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {user.portfolioUrl && (
                    <a
                      href={user.portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
                    >
                      <Globe className="w-4 h-4" />
                      Portfolio
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* ═══════════════════════════════════════════════════════════════════════
                STATS SECTION - Single, Clean, Number-Focused
            ═══════════════════════════════════════════════════════════════════════ */}
            <ProfileStatistics
              StatItem={StatItem}
              formatNumber={formatNumber}
              isFollowedBy={isFollowedBy}
              isOwner={isOwner}
              mutualInfo={mutualInfo}
              mutualSectionRef={mutualSectionRef}
              router={router}
              stats={stats}
              user={user}
            />
          </div>
        </motion.div>
      </div>

      <ConnectionSentToast
        show={showToast}
        recipientName={user.name}
        onClose={() => setShowToast(false)}
      />
      {!isOwner && (
        <>
          <ReportModal
            isOpen={showReportModal}
            onClose={() => setShowReportModal(false)}
            type="user"
            targetId={user.id}
            targetName={user.name}
          />
          <BlockUserModal
            isOpen={showBlockModal}
            onClose={() => setShowBlockModal(false)}
            userId={user.id}
            userName={user.name}
            userImage={profileImageSrc}
            onBlocked={() => {
              setBlockedProfileId(user.id);
              publishRelationship(user.id, { status: 'none', connectionId: null });
              setIsFollowing(false);
              onProfileUnavailable?.();
            }}
          />
        </>
      )}
    </div>
  );
}
