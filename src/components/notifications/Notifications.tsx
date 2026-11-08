'use client';

import {
  getNotifications,
  getUnreadNotificationCount,
  markAllNotificationsAsRead,
  markNotificationsAsRead,
  type Notification,
} from '@/lib/api/notifications';
import { acceptConnectionRequest, getPendingRequests, rejectConnectionRequest } from '@/lib/api/connections';
import { initializeSocket } from '@/lib/socket';
import {
  format,
  formatDistanceToNowStrict,
  isToday,
} from 'date-fns';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Bell,
  CheckCheck,
  Settings,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

type FilterTab = 'all' | 'unread' | 'connections' | 'mentions';

const FILTER_TABS: { value: FilterTab; label: string }[] = [
  { value: 'all', label: 'View all' },
  { value: 'unread', label: 'Unread' },
  { value: 'connections', label: 'Connections' },
  { value: 'mentions', label: 'Mentions' },
];

function matchesFilter(n: Notification, tab: FilterTab) {
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
function getNotificationMessage(notification: Notification): string {
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
    default:
      return `${actorName} interacted with your content`;
  }
}

interface NotificationItemProps {
  notification: Notification;
  onMarkRead: (id: string) => void;
  /** Pending connection id for this actor, when the request can still be answered here. */
  connectionId?: string;
  onConnectionResolved?: (connectionId: string) => void;
}

function NotificationItem({
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
    if (notification.type === 'GROUP_INVITE' || notification.type === 'GROUP_JOIN_APPROVED') {
      router.push('/groups?tab=invites');
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

interface NotificationsProps {
  isOpen?: boolean;
  onClose?: () => void;
  isDropdown?: boolean;
}

export function Notifications({ isOpen = true, isDropdown = false }: NotificationsProps) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [unreadCount, setUnreadCount] = useState(0);
  const [activeTab, setActiveTab] = useState<FilterTab>('all');
  const [pendingByUser, setPendingByUser] = useState<Record<string, string>>({});

  // Fetch notifications
  useEffect(() => {
    if (!isOpen) return;

    const fetchNotifications = async () => {
      setLoading(true);
      try {
        const [notifResponse, countRes] = await Promise.all([
          getNotifications(),
          getUnreadNotificationCount(),
        ]);
        setNotifications((notifResponse as { notifications: Notification[] }).notifications);
        getPendingRequests(1, 100)
          .then((res) =>
            setPendingByUser(
              Object.fromEntries(res.connections.map((c) => [c.user.id, c.id]))
            )
          )
          .catch(() => undefined);
        setUnreadCount((countRes as unknown as { count: number }).count);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, [isOpen]);

  // Setup real-time notifications
  useEffect(() => {
    const refetch = () => {
      setUnreadCount((prev) => prev + 1);
      getNotifications()
        .then((res) => setNotifications(res.notifications))
        .catch(console.error);
    };
    initializeSocket({
      onNotificationNew: refetch,
      onNotificationMention: refetch,
      onNotificationComment: refetch,
      onNotificationLike: refetch,
      onNotificationReaction: refetch,
      onNotificationCommentLike: refetch,
    });

    return () => {
      // Cleanup listeners if needed
    };
  }, []);

  // Mark notification as read
  const handleMarkRead = async (id: string) => {
    try {
      await markNotificationsAsRead([id]);
      setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, isRead: true } : n)));
      setUnreadCount((prev) => Math.max(0, prev - 1));
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  // Mark all as read
  const handleMarkAllRead = async () => {
    try {
      await markAllNotificationsAsRead();
      setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
      setUnreadCount(0);
    } catch (error) {
      console.error('Error marking all as read:', error);
    }
  };

  const tabCounts = useMemo(
    () => ({
      all: notifications.length,
      unread: notifications.filter((n) => !n.isRead).length,
      connections: notifications.filter((n) => matchesFilter(n, 'connections')).length,
      mentions: notifications.filter((n) => matchesFilter(n, 'mentions')).length,
    }),
    [notifications]
  );

  const filtered = useMemo(
    () => notifications.filter((n) => matchesFilter(n, activeTab)),
    [notifications, activeTab]
  );

  const content = (
    <>
      {/* Header */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold leading-none tracking-[-0.006em]">
            Your notifications
          </h2>
          <div className="flex items-center gap-1">
            <button
              onClick={handleMarkAllRead}
              disabled={unreadCount === 0}
              aria-label="Mark all as read"
              title="Mark all as read"
              className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-40"
            >
              <CheckCheck className="h-[18px] w-[18px]" />
            </button>
            {!isDropdown && (
              <Link
                href="/notifications/settings"
                aria-label="Notification settings"
                className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Settings className="h-[18px] w-[18px]" />
              </Link>
            )}
          </div>
        </div>

        {/* Segmented tabs */}
        <div
          role="tablist"
          className="flex w-full max-w-full items-center gap-1 overflow-x-auto rounded-md bg-muted p-1 text-muted-foreground [scrollbar-width:none]"
        >
          {FILTER_TABS.map((tab) => {
            const active = activeTab === tab.value;
            const count = tabCounts[tab.value];
            return (
              <button
                key={tab.value}
                role="tab"
                aria-selected={active}
                onClick={() => setActiveTab(tab.value)}
                className={cn(
                  'inline-flex h-8 items-center gap-2 whitespace-nowrap rounded-sm px-4 text-sm font-medium transition-all',
                  active ? 'bg-background text-foreground shadow-sm' : 'hover:text-foreground'
                )}
              >
                {tab.label}
                <span className="flex size-5 items-center justify-center rounded-full bg-muted-foreground/30 text-xs text-foreground">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* List */}
      <div className={cn('overflow-y-auto', isDropdown ? 'max-h-96' : 'flex-1 pb-24')}>
        {loading ? (
          <div className="divide-y divide-dashed divide-border" aria-label="Loading notifications">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex animate-pulse gap-3 py-4 first:pt-0">
                <div className="h-11 w-11 rounded-full bg-muted" />
                <div className="flex-1 space-y-2 pt-1">
                  <div className="h-3.5 w-3/4 rounded bg-muted" />
                  <div className="h-3 w-1/3 rounded bg-muted/70" />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center space-y-2.5 py-12 text-center">
            <div className="rounded-full bg-muted p-4">
              <Bell className="h-6 w-6 text-muted-foreground" />
            </div>
            <p className="text-sm font-medium text-muted-foreground">
              {activeTab === 'all' ? 'No notifications yet.' : 'Nothing here.'}
            </p>
          </div>
        ) : (
          <div className="divide-y divide-dashed divide-border">
            <AnimatePresence initial={false}>
              {filtered.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                  onMarkRead={handleMarkRead}
                  connectionId={
                    notification.actor ? pendingByUser[notification.actor.id] : undefined
                  }
                />
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </>
  );

  const cardClass =
    'flex w-full flex-col gap-6 rounded-xl border border-border bg-card p-4 text-card-foreground md:p-8';

  if (isDropdown) {
    return <div className={cn(cardClass, 'w-[26rem] max-w-[calc(100vw-2rem)] p-4 shadow-2xl md:p-5')}>{content}</div>;
  }

  return (
    <div className="flex min-h-screen justify-center bg-background px-3 py-6 md:py-10">
      <div className={cn(cardClass, 'max-w-[520px] self-start')}>{content}</div>
    </div>
  );
}

// Notification Bell with Badge for Dock/Header
export function NotificationBell() {
  const [unreadCount, setUnreadCount] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  // Fetch unread count
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await getUnreadNotificationCount();
        setUnreadCount((res as unknown as { count: number }).count);
      } catch (error) {
        console.error('Error fetching notification count:', error);
      }
    };

    fetchCount();

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        void fetchCount();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Real-time updates
  useEffect(() => {
    initializeSocket({
      onNotificationNew: () => setUnreadCount((prev) => prev + 1),
      onNotificationMention: () => setUnreadCount((prev) => prev + 1),
      onNotificationComment: () => setUnreadCount((prev) => prev + 1),
      onNotificationLike: () => setUnreadCount((prev) => prev + 1),
      onNotificationReaction: () => setUnreadCount((prev) => prev + 1),
      onNotificationCommentLike: () => setUnreadCount((prev) => prev + 1),
    });
  }, []);

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
      >
        <Bell className="w-6 h-6 text-gray-600 dark:text-neutral-400" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs font-bold text-white bg-red-500 rounded-full">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {showDropdown && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setShowDropdown(false)} />
          <div className="absolute right-0 top-full mt-2 z-50">
            <Notifications isDropdown onClose={() => setShowDropdown(false)} />
          </div>
        </>
      )}
    </div>
  );
}

export default Notifications;
