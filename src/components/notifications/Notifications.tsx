'use client';

import {
  getNotifications,
  getUnreadNotificationCount,
  markAllNotificationsAsRead,
  markNotificationsAsRead,
  type Notification,
} from '@/lib/api/notifications';
import { getPendingRequests } from '@/lib/api/connections';
import { initializeSocket } from '@/lib/socket';
import { AnimatePresence } from 'framer-motion';
import { Bell, CheckCheck, Settings } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';
import { FILTER_TABS, NotificationItem, matchesFilter, type FilterTab } from './NotificationItem';

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
            setPendingByUser(Object.fromEntries(res.connections.map((c) => [c.user.id, c.id])))
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
    return (
      <div className={cn(cardClass, 'w-[26rem] max-w-[calc(100vw-2rem)] p-4 shadow-2xl md:p-5')}>
        {content}
      </div>
    );
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
