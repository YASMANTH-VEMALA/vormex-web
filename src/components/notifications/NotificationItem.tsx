'use client';

import { type Notification } from '@/lib/api/notifications';
import { acceptConnectionRequest, rejectConnectionRequest } from '@/lib/api/connections';
import { format, formatDistanceToNowStrict, isToday } from 'date-fns';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export type FilterTab = 'all' | 'unread' | 'connections' | 'mentions';

export const FILTER_TABS: { value: FilterTab; label: string }[] = [
  { value: 'all', label: 'View all' },
  { value: 'unread', label: 'Unread' },
  { value: 'connections', label: 'Connections' },
  { value: 'mentions', label: 'Mentions' },
];

export function matchesFilter(n: Notification, tab: FilterTab) {
  switch (tab) {
    case 'unread':
      return !n.isRead;
    case 'connections':
      return n.type === 'CONNECTION_REQUEST' || n.type === 'CONNECTION_ACCEPTED';
    case 'mentions':
      return n.type === 'MENTION';
    default:
      return true;
  }
}

// Get notification message
export function getNotificationMessage(notification: Notification): string {
  const actorName = notification.actor?.name || 'Someone';

  switch (notification.type) {
    case 'POST_REACTION':
      const reactionLabels: Record<string, string> = {
        LIKE: 'liked',
        CELEBRATE: 'celebrated',
        SUPPORT: 'supported',
        INSIGHTFUL: 'found insightful',
        CURIOUS: 'is curious about',
      };
      const action = reactionLabels[notification.reactionType || 'LIKE'] || 'reacted to';
      return `${actorName} ${action} your post`;
    case 'POST_LIKE':
      return `${actorName} liked your post`;
    case 'COMMENT':
      return `${actorName} commented on your post`;
    case 'COMMENT_LIKE':
      return `${actorName} liked your comment`;
    case 'MENTION':
      return `${actorName} mentioned you`;
    case 'CONNECTION_REQUEST':
      return `${actorName} sent you a connection request`;
    case 'CONNECTION_ACCEPTED':
      return `${actorName} accepted your connection request`;
    case 'POLL_VOTE':
      return `${actorName} voted on your poll`;
    case 'POST_SHARE':
      return `${actorName} shared your post`;
    case 'GROUP_INVITE':
      return `${actorName} invited you to join ${notification.content || 'a group'}`;
    case 'GROUP_JOIN_REQUEST':
      return `${actorName} requested to join your group`;
    case 'GROUP_JOIN_APPROVED':
      return `Your request to join ${notification.content || 'the group'} was approved`;
    case 'group_join_request':
    case 'hackathon_team_application':
    case 'hackathon_team_application_accepted':
    case 'hackathon_team_application_rejected':
      return notification.body || notification.title;
    default:
      return `${actorName} interacted with your content`;
  }
}

export interface NotificationItemProps {
  notification: Notification;
  onMarkRead: (id: string) => void;
  /** Pending connection id for this actor, when the request can still be answered here. */
  connectionId?: string;
  onConnectionResolved?: (connectionId: string) => void;
}

export function NotificationItem({
  notification,
  onMarkRead,
  connectionId,
  onConnectionResolved,
}: NotificationItemProps) {
  const router = useRouter();
  const [requestState, setRequestState] = useState<'idle' | 'busy' | 'accepted' | 'declined'>(
    'idle'
  );
  const canRespond =
    notification.type === 'CONNECTION_REQUEST' && (!!connectionId || requestState !== 'idle');

  const respond = async (accept: boolean) => {
    if (!connectionId || requestState === 'busy') return;
    setRequestState('busy');
    try {
      if (accept) await acceptConnectionRequest(connectionId);
      else await rejectConnectionRequest(connectionId);
      setRequestState(accept ? 'accepted' : 'declined');
      if (!notification.isRead) onMarkRead(notification.id);
      onConnectionResolved?.(connectionId);
    } catch (error) {
      console.error('Error responding to connection request:', error);
      setRequestState('idle');
    }
  };

  const handleClick = () => {
    // Mark as read
    if (!notification.isRead) {
      onMarkRead(notification.id);
    }

    // Navigate based on notification type
    const groupId =
      typeof notification.data?.groupId === 'string' ? notification.data.groupId : null;
    if (notification.type === 'GROUP_INVITE' || notification.type === 'GROUP_JOIN_APPROVED') {
      router.push('/groups?tab=invites');
    } else if (notification.type === 'group_join_request' && groupId) {
      router.push(`/groups/${groupId}/settings?tab=requests`);
    } else if (notification.type.startsWith('hackathon_team_application')) {
      router.push('/hackathons');
    } else if (notification.reelId) {
      router.push(`/reels/${notification.reelId}`);
    } else if (notification.postId) {
      if (notification.commentId) {
        router.push(`/post/${notification.postId}?comment=${notification.commentId}`);
      } else {
        router.push(`/post/${notification.postId}`);
      }
    } else if (
      notification.type === 'CONNECTION_REQUEST' ||
      notification.type === 'CONNECTION_ACCEPTED'
    ) {
      if (notification.actor) {
        router.push(`/profile/${notification.actor.username}`);
      }
    }
  };

  const message = getNotificationMessage(notification);
  const actorName = notification.actor?.name || 'Someone';
  const hasActor = message.startsWith(actorName);
  const rest = hasActor ? message.slice(actorName.length) : ` ${message}`;
  const created = new Date(notification.createdAt);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      className="flex w-full cursor-pointer gap-3 py-4 text-left first:pt-0 last:pb-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
    >
      <div className="relative h-11 w-11 flex-shrink-0">
        <div className="h-11 w-11 overflow-hidden rounded-full bg-muted">
          {notification.actor?.profileImage ? (
            <Image
              src={notification.actor.profileImage}
              alt={notification.actor.name}
              width={44}
              height={44}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-muted-foreground">
              {notification.actor?.name?.charAt(0).toUpperCase() || '?'}
            </div>
          )}
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div>
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm text-muted-foreground">
              {hasActor && <span className="font-medium text-foreground">{actorName}</span>}
              {rest}
            </p>
            {!notification.isRead && (
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
            )}
          </div>
          <div className="mt-0.5 flex items-center justify-between gap-2 text-xs text-muted-foreground">
            <span>{format(created, isToday(created) ? "'Today' h:mm a" : 'EEEE h:mm a')}</span>
            <span>{formatDistanceToNowStrict(created, { addSuffix: true })}</span>
          </div>
        </div>

        {notification.content && !canRespond && (
          <div className="line-clamp-3 rounded-lg bg-muted p-2.5 text-sm tracking-[-0.006em]">
            {notification.content}
          </div>
        )}
        {canRespond && (
          <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
            {requestState === 'accepted' || requestState === 'declined' ? (
              <span className="text-xs font-medium text-muted-foreground">
                {requestState === 'accepted' ? 'Connected' : 'Request declined'}
              </span>
            ) : (
              <>
                <button
                  type="button"
                  disabled={requestState === 'busy'}
                  onClick={() => respond(false)}
                  className="h-7 rounded-md border border-border bg-background px-3 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:opacity-50"
                >
                  Decline
                </button>
                <button
                  type="button"
                  disabled={requestState === 'busy'}
                  onClick={() => respond(true)}
                  className="h-7 rounded-md bg-foreground px-3 text-xs font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  Accept
                </button>
              </>
            )}
          </div>
        )}
        {notification.postPreview && !notification.content && (
          <div className="line-clamp-1 text-xs text-muted-foreground">
            {notification.postPreview}
          </div>
        )}
      </div>
    </motion.div>
  );
}
