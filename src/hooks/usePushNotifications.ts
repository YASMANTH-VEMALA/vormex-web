'use client';

import apiClient from '@/lib/api/client';
import { getOrCreateInstallId } from '@/lib/device/installId';
import { onForegroundMessage, requestNotificationToken } from '@/lib/firebase';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import type { MessagePayload } from 'firebase/messaging';
import { useCallback, useEffect, useState, useSyncExternalStore } from 'react';

const PERMISSION_EVENT = 'vormex:notification-permission';
function permissionSnapshot(): NotificationPermission | 'unsupported' {
  return typeof window !== 'undefined' && 'Notification' in window && 'serviceWorker' in navigator
    ? Notification.permission
    : 'unsupported';
}
function subscribePermission(onChange: () => void) {
  let disposed = false;
  let status: PermissionStatus | undefined;
  window.addEventListener('focus', onChange);
  window.addEventListener(PERMISSION_EVENT, onChange);
  void navigator.permissions
    ?.query({ name: 'notifications' })
    .then((result) => {
      if (disposed) return;
      status = result;
      result.addEventListener('change', onChange);
      onChange();
    })
    .catch(() => {});
  return () => {
    disposed = true;
    status?.removeEventListener('change', onChange);
    window.removeEventListener('focus', onChange);
    window.removeEventListener(PERMISSION_EVENT, onChange);
  };
}

/** Browser permission is external state; registration belongs to one user/query. */
export function usePushNotifications(userId: string | undefined) {
  const permission = useSyncExternalStore(
    subscribePermission,
    permissionSnapshot,
    () => 'unsupported' as const
  );
  const queryClient = useQueryClient();
  const [optedOutUser, setOptedOutUser] = useState<string | null>(null);
  const [requesting, setRequesting] = useState(false);
  const [foregroundNotification, setForegroundNotification] = useState<MessagePayload | null>(null);
  const enabled = Boolean(userId) && permission === 'granted' && optedOutUser !== userId;
  const registration = useQuery({
    queryKey: ['web-push-registration', userId],
    enabled,
    retry: false,
    staleTime: Infinity,
    queryFn: async ({ signal }) => {
      const token = await requestNotificationToken();
      if (!token || signal.aborted) return null;
      await apiClient.post(
        '/devices/register',
        {
          token,
          platform: 'web',
          deviceId: getOrCreateInstallId(),
        },
        { signal }
      );
      return token;
    },
  });

  useEffect(() => {
    if (!enabled) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const unsubscribe = onForegroundMessage((payload) => {
      setForegroundNotification(payload);
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => setForegroundNotification(null), 5000);
    });
    return () => {
      unsubscribe?.();
      if (timer) clearTimeout(timer);
    };
  }, [enabled]);

  const refetch = registration.refetch;
  const requestPermission = useCallback(async (): Promise<boolean> => {
    if (!userId || permission === 'unsupported') return false;
    setRequesting(true);
    try {
      const next = await Notification.requestPermission();
      window.dispatchEvent(new Event(PERMISSION_EVENT));
      if (next !== 'granted') return false;
      setOptedOutUser(null);
      const result = await refetch({ cancelRefetch: false });
      return Boolean(result.data);
    } finally {
      setRequesting(false);
    }
  }, [userId, permission, refetch]);

  const unsubscribe = useCallback(async () => {
    if (!userId || !registration.data) return;
    await apiClient.delete('/devices/unregister', { data: { token: registration.data } });
    setOptedOutUser(userId);
    queryClient.setQueryData(['web-push-registration', userId], null);
  }, [userId, registration.data, queryClient]);
  const dismissNotification = useCallback(() => setForegroundNotification(null), []);
  const subscribed = enabled && Boolean(registration.data);
  return {
    isSupported: permission !== 'unsupported',
    isPermissionGranted: permission === 'granted',
    isTokenRegistered: subscribed,
    isSubscribed: subscribed,
    isLoading: requesting || registration.isFetching,
    foregroundNotification,
    requestPermission,
    subscribe: requestPermission,
    dismissNotification,
    unsubscribe,
  };
}
