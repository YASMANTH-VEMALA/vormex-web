'use client';
import { useSyncedState } from '@/hooks/useSyncedState';
import type { ConnectionStatus, ProfileHeaderProps, StatItemProps } from './ProfileHeader.types';
import { ProfileHeaderView } from './ProfileHeaderView';
export type { ConnectionStatus, ProfileHeaderProps, StatItemProps } from './ProfileHeader.types';

import { getOrCreateConversation } from '@/lib/api/chat';
import {
  cancelConnectionRequest,
  cancelSentRequestToUser,
  canonicalMutationRelationship,
  removeConnection,
  type RelationshipMutationResponse,
} from '@/lib/api/connections';
import { getStructuredApiError, isTerminalSafetyError } from '@/lib/api/errors';
import { followUser, getMutualInfo, unfollowUser, type MutualInfo } from '@/lib/api/follow';
import {
  hydrateRelationship,
  publishRelationship,
  useRelationship,
} from '@/lib/connections/relationshipStore';
import { useRelationshipActions } from '@/lib/connections/useRelationshipActions';
import { resolveMediaUrl } from '@/lib/utils/media';
import { formatLocation } from '@/lib/utils/profileLocation';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

function normalizeConnectionStatus(value: string | null | undefined): ConnectionStatus {
  return value === 'pending_sent' ||
    value === 'pending_received' ||
    value === 'connected' ||
    value === 'blocked'
    ? value
    : 'none';
}

function ProfileCoverImage({ imageSrc }: { imageSrc?: string | null }) {
  const resolvedSrc = resolveMediaUrl(imageSrc);
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const failed = Boolean(resolvedSrc && failedSrc === resolvedSrc);

  if (!resolvedSrc || failed) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950" />
    );
  }

  return (
    <img
      src={resolvedSrc}
      alt="Cover photo"
      className="w-full h-full object-cover"
      onError={() => setFailedSrc(resolvedSrc)}
    />
  );
}

function ProfileHeaderSession({
  user,
  stats,
  viewerContext,
  isOwner,
  onEditProfile,
  onEditBanner,
  onEditAvatar,
  onViewerContextChange,
  onProfileUnavailable,
}: ProfileHeaderProps) {
  const router = useRouter();
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const actionMenuRef = useRef<HTMLDivElement>(null);
  const mutualSectionRef = useRef<HTMLDivElement>(null);
  const mutualRequestedRef = useRef(false);

  /*
   * Connection state lives in the shared relationship store, the same one the
   * feed rails read. Keeping it in local state here meant a request sent on
   * this page was invisible to the rails until a full reload, and a request
   * sent from a rail was invisible here.
   *
   * "blocked" is not a relationship the store models, so it stays local and
   * takes precedence over whatever the store says.
   */
  // Derived rather than stored, so it resets by itself when the header is
  // reused for a different person instead of needing an effect to clear it.
  const [blockedProfileId, setBlockedProfileId] = useState<string | null>(null);
  const viewerStatus = normalizeConnectionStatus(viewerContext?.connectionStatus);
  const viewerConnectionId = viewerContext?.connectionId || null;
  const isBlocked = viewerStatus === 'blocked' || blockedProfileId === user.id;

  useEffect(() => {
    if (viewerStatus === 'blocked') return;
    hydrateRelationship(user.id, { status: viewerStatus, connectionId: viewerConnectionId });
  }, [user.id, viewerConnectionId, viewerStatus]);

  const relationship = useRelationship(
    user.id,
    viewerStatus === 'blocked' ? 'none' : viewerStatus,
    viewerConnectionId
  );
  const connectionStatus: ConnectionStatus = isBlocked ? 'blocked' : relationship.status;
  const connectionId = relationship.connectionId;

  const { connect, accept, failedIds, errorFor } = useRelationshipActions();

  const [isFollowing, setIsFollowing] = useSyncedState(Boolean(viewerContext?.isFollowing));
  const isFollowedBy = Boolean(viewerContext?.isFollowedBy);
  const [mutualInfo, setMutualInfo] = useState<MutualInfo | null>(null);
  const [loadingConnection, setLoadingConnection] = useState(false);
  const [loadingFollow, setLoadingFollow] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(false);
  const [showConnectMenu, setShowConnectMenu] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showBlockModal, setShowBlockModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [messageError, setMessageError] = useState<string | null>(null);
  const locationLabel = formatLocation(user.location);
  const profileImageSrc = user.avatar ?? user.profileImage ?? null;

  const handleProfileActionError = useCallback(
    (error: unknown, fallback: string) => {
      if (isTerminalSafetyError(error)) {
        setMessageError('This profile is unavailable.');
        onProfileUnavailable?.();
        return;
      }
      setMessageError(getStructuredApiError(error).message || fallback);
    },
    [onProfileUnavailable]
  );

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (actionMenuRef.current?.contains(event.target as Node)) {
        return;
      }

      setShowShareMenu(false);
      setShowConnectMenu(false);
      setShowMoreMenu(false);
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Mirror store movement back into the profile payload so the page's own copy
  // (and its cached query data) stays truthful without a refetch.
  const lastPublished = useRef<string | null>(null);
  useEffect(() => {
    const signature = `${relationship.status}:${relationship.connectionId ?? ''}`;
    if (lastPublished.current === null) {
      lastPublished.current = signature;
      return;
    }
    if (lastPublished.current === signature) return;
    lastPublished.current = signature;
    onViewerContextChange?.({
      connectionStatus: relationship.status,
      connectionId: relationship.connectionId,
      direction: relationship.status === 'pending_sent' ? 'sent' : null,
    });
  }, [onViewerContextChange, relationship]);

  const fetchMutualRelationship = useCallback(async () => {
    if (mutualRequestedRef.current || isOwner) {
      return;
    }
    mutualRequestedRef.current = true;
    try {
      setMutualInfo(await getMutualInfo(user.id));
    } catch (error) {
      mutualRequestedRef.current = false;
      if (isTerminalSafetyError(error)) {
        onProfileUnavailable?.();
      }
    }
  }, [isOwner, onProfileUnavailable, user.id]);

  // Mutual lists are lower-priority. Load them only when their section nears
  // the viewport; connection/follow controls already came from core profile.
  useEffect(() => {
    const element = mutualSectionRef.current;
    if (!element || isOwner) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          void fetchMutualRelationship();
          observer.disconnect();
        }
      },
      { rootMargin: '300px 0px' }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [fetchMutualRelationship, isOwner]);

  /*
   * All four mutations commit to their outcome before the request settles, and
   * revert only if the server refuses. The shared store is what the button
   * renders from, so publishing is all that is needed here — the effect above
   * relays the change on to the profile payload.
   */

  // Handle connection request
  const handleConnect = () => {
    setShowToast(true);
    void connect(user.id);
  };

  // Accept connection request
  const handleAcceptRequest = () => {
    void accept(user.id);
  };

  // Retreats are not covered by the shared actions hook; they only exist here.
  const retreat = async (
    run: () => Promise<RelationshipMutationResponse>,
    fallbackMessage: string
  ) => {
    if (loadingConnection) return;
    const previous = { status: relationship.status, connectionId };
    setLoadingConnection(true);
    setShowConnectMenu(false);
    publishRelationship(user.id, { status: 'none', connectionId: null });
    try {
      // The server answers with where the pair now stands, so a retreat that
      // raced something else (they accepted first) repaints instead of lying.
      publishRelationship(user.id, canonicalMutationRelationship(await run(), 'none'));
    } catch (error) {
      publishRelationship(user.id, previous);
      handleProfileActionError(error, fallbackMessage);
    } finally {
      setLoadingConnection(false);
    }
  };

  /*
   * Cancel by connection id when we have one, by recipient when we do not.
   *
   * The header paints "Pending" from whichever payload arrived first, and a
   * cached one can carry the status without a usable id. Guarding the whole
   * retreat on `connectionId` — as this did — turned Cancel into a button that
   * looked live, fired no request and reported nothing.
   */
  const handleCancelRequest = () =>
    retreat(
      () =>
        connectionId ? cancelConnectionRequest(connectionId) : cancelSentRequestToUser(user.id),
      'Unable to cancel the connection request.'
    );

  // Removal genuinely needs the row; there is no by-user form of it.
  const handleRemoveConnection = () => {
    if (!connectionId) return;
    return retreat(() => removeConnection(connectionId), 'Unable to remove this connection.');
  };

  // Handle follow/unfollow
  const handleFollowToggle = async () => {
    try {
      setLoadingFollow(true);
      if (isFollowing) {
        await unfollowUser(user.id);
        setIsFollowing(false);
        onViewerContextChange?.({ isFollowing: false }, -1);
      } else {
        await followUser(user.id);
        setIsFollowing(true);
        onViewerContextChange?.({ isFollowing: true }, 1);
      }
    } catch (error) {
      handleProfileActionError(error, 'Unable to update the follow state.');
    } finally {
      setLoadingFollow(false);
    }
  };

  const handleMessage = async () => {
    try {
      setLoadingMessage(true);
      setMessageError(null);
      setShowConnectMenu(false);
      setShowMoreMenu(false);

      const conversation = await getOrCreateConversation(user.id);
      router.push(`/messages/${conversation.id}`);
    } catch (error) {
      if (isTerminalSafetyError(error)) {
        setMessageError('This profile is unavailable.');
        onProfileUnavailable?.();
        return;
      }
      const apiError = error as {
        message?: string;
        response?: { data?: { message?: string; error?: string } };
      };
      setMessageError(
        apiError.response?.data?.message ||
          apiError.response?.data?.error ||
          getStructuredApiError(error).message ||
          apiError.message ||
          'Unable to open messages right now.'
      );
    } finally {
      setLoadingMessage(false);
    }
  };

  // Format numbers for display
  const formatNumber = (num: number): string => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  // Copy profile URL
  const handleCopyLink = () => {
    const url = `${window.location.origin}/profile/${user.username || user.id}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setShowShareMenu(false);
      setShowMoreMenu(false);
    }, 2000);
  };

  return (
    <ProfileHeaderView
      ProfileCoverImage={ProfileCoverImage}
      StatItem={StatItem}
      actionMenuRef={actionMenuRef}
      connectionStatus={connectionStatus}
      copied={copied}
      errorFor={errorFor}
      failedIds={failedIds}
      formatNumber={formatNumber}
      handleAcceptRequest={handleAcceptRequest}
      handleCancelRequest={handleCancelRequest}
      handleConnect={handleConnect}
      handleCopyLink={handleCopyLink}
      handleFollowToggle={handleFollowToggle}
      handleMessage={handleMessage}
      handleRemoveConnection={handleRemoveConnection}
      isFollowedBy={isFollowedBy}
      isFollowing={isFollowing}
      isOwner={isOwner}
      loadingConnection={loadingConnection}
      loadingFollow={loadingFollow}
      loadingMessage={loadingMessage}
      locationLabel={locationLabel}
      messageError={messageError}
      mutualInfo={mutualInfo}
      mutualSectionRef={mutualSectionRef}
      onEditAvatar={onEditAvatar}
      onEditBanner={onEditBanner}
      onEditProfile={onEditProfile}
      onProfileUnavailable={onProfileUnavailable}
      profileImageSrc={profileImageSrc}
      router={router}
      setBlockedProfileId={setBlockedProfileId}
      setIsFollowing={setIsFollowing}
      setShowBlockModal={setShowBlockModal}
      setShowConnectMenu={setShowConnectMenu}
      setShowMoreMenu={setShowMoreMenu}
      setShowReportModal={setShowReportModal}
      setShowShareMenu={setShowShareMenu}
      setShowToast={setShowToast}
      showBlockModal={showBlockModal}
      showConnectMenu={showConnectMenu}
      showMoreMenu={showMoreMenu}
      showReportModal={showReportModal}
      showShareMenu={showShareMenu}
      showToast={showToast}
      stats={stats}
      user={user}
    />
  );
}

function StatItem({ value, label, isClickable, onClick }: StatItemProps) {
  const baseClasses = 'flex items-center gap-1';
  const clickableClasses = isClickable
    ? 'cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 [&>span]:transition-colors hover:[&>span]:text-blue-600 dark:hover:[&>span]:text-blue-400'
    : '';

  return (
    <div
      className={`${baseClasses} ${clickableClasses}`}
      onClick={isClickable ? onClick : undefined}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={isClickable ? (e) => e.key === 'Enter' && onClick?.() : undefined}
    >
      <span className="text-sm sm:text-lg font-bold text-gray-900 dark:text-white">{value}</span>
      <span className="text-[10px] sm:text-sm text-gray-500 dark:text-neutral-400">{label}</span>
    </div>
  );
}

export function ProfileHeader(props: ProfileHeaderProps) {
  return <ProfileHeaderSession key={props.user.id} {...props} />;
}
