'use client';
import { useSyncedState } from '@/hooks/useSyncedState';
import { useAuth } from '@/lib/auth/useAuth';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { NearbyUserProfileCard } from './NearbyUserProfileCard';

import ConnectionSentToast from '@/components/engagement/ConnectionSentToast';
import { useDebouncedValue } from '@/hooks/useDebouncedValue';
import { useThrottledCallback } from '@/hooks/useThrottledCallback';
import { sendConnectionRequest } from '@/lib/api/connections';
import { getNearbyUsers, updateLocation, type NearbyUser } from '@/lib/api/location';
import { updateLocation as emitLocationUpdate } from '@/lib/socket';
import { AlertCircle, Filter, Loader2, MapPin, RefreshCw, Search, Users, X } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

// Dynamically import the map component (no SSR for Leaflet)
const LocationMap = dynamic(() => import('./LocationMap').then((mod) => mod.LocationMap), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-neutral-800">
      <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
    </div>
  ),
});

export function NearbyUsers() {
  const [watchError, setLocationError] = useState<string | null>(null);

  const [radius, setRadius] = useState(50);
  const [selectedUser, setSelectedUser] = useState<NearbyUser | null>(null);
  const [connectingUserId, setConnectingUserId] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastName, setToastName] = useState('');

  // Radius options in km
  const radiusOptions = [10, 25, 50, 100, 200];

  // Get current location from browser (prompts for permission)
  const getCurrentLocation = useCallback((): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported by your browser'));
        return;
      }

      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0, // Always get fresh location for initial request
      });
    });
  }, []);

  // Watch position for real-time location updates
  const watchPositionIdRef = useRef<number | null>(null);
  const loadMoreRef = useRef<HTMLButtonElement | null>(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const debouncedSearch = useDebouncedValue(searchQuery, 300);
  const pushRealtimeLocationUpdate = useThrottledCallback(
    (lat: number, lng: number, accuracy?: number) => {
      void updateLocation(lat, lng, accuracy).catch(console.warn);
      emitLocationUpdate({ lat, lng, accuracy });
    },
    15_000
  );

  const viewerId = useAuth().user?.id;
  const locationResource = useQuery({
    queryKey: ['device-location', viewerId],
    queryFn: async () => {
      const position = await getCurrentLocation();
      const { latitude, longitude, accuracy } = position.coords;
      await updateLocation(latitude, longitude, accuracy).catch(console.warn);
      return { lat: latitude, lng: longitude };
    },
    enabled: !!viewerId,
    retry: false,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
  const [myLocation, setMyLocation] = useSyncedState(locationResource.data ?? null);
  const locationError =
    watchError ||
    (locationResource.isError
      ? 'Unable to access your location. Check browser permission and try again.'
      : null);
  const nearbyResource = useInfiniteQuery({
    queryKey: ['nearby-users', viewerId, myLocation?.lat, myLocation?.lng, radius, debouncedSearch],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      getNearbyUsers(
        radius,
        50,
        myLocation!.lat,
        myLocation!.lng,
        debouncedSearch || undefined,
        pageParam
      ),
    getNextPageParam: (last, pages) => (last.hasMore ? pages.length + 1 : undefined),
    enabled: !!viewerId && myLocation !== null && !locationError,
    retry: false,
  });
  const nearbyUsers = useMemo(() => {
    const byId = new Map<string, NearbyUser>();
    for (const page of nearbyResource.data?.pages ?? [])
      for (const user of page.users ?? []) byId.set(user.id, user);
    return [...byId.values()];
  }, [nearbyResource.data]);
  const hasMore = nearbyResource.hasNextPage;
  const loadingMore = nearbyResource.isFetchingNextPage;
  const refreshing = locationResource.isFetching || nearbyResource.isRefetching;
  const loading =
    locationResource.isPending || (!locationResource.isError && nearbyResource.isPending);
  const { isFetchingNextPage, hasNextPage, fetchNextPage } = nearbyResource;
  const loadMoreNearby = useCallback(async () => {
    if (!isFetchingNextPage && hasNextPage) await fetchNextPage();
  }, [isFetchingNextPage, hasNextPage, fetchNextPage]);
  const refreshLocation = async () => {
    setLocationError(null);
    const result = await locationResource.refetch();
    if (result.data) {
      setMyLocation(result.data);
      await nearbyResource.refetch();
    }
  };
  const canWatch = !!myLocation && !locationError;

  // Real-time location sharing: watch position and update server + broadcast via socket
  useEffect(() => {
    if (!canWatch) return;

    const watchId = navigator.geolocation?.watchPosition?.(
      (position) => {
        const { latitude, longitude, accuracy } = position.coords;
        setMyLocation({ lat: latitude, lng: longitude });
        pushRealtimeLocationUpdate(latitude, longitude, accuracy);
      },
      (err) => {
        if (err.code === 1) setLocationError('Location permission denied.');
      },
      { enableHighAccuracy: true, maximumAge: 30000 }
    );

    watchPositionIdRef.current = watchId ?? null;
    return () => {
      if (watchPositionIdRef.current != null) {
        navigator.geolocation?.clearWatch?.(watchPositionIdRef.current);
      }
    };
  }, [canWatch, pushRealtimeLocationUpdate, setMyLocation]);

  useEffect(() => {
    const target = loadMoreRef.current;
    if (!target || !hasMore) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void loadMoreNearby();
      },
      { rootMargin: '0px 200px' }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [hasMore, loadMoreNearby]);

  // Handle connection
  const handleConnect = async (userId: string) => {
    setConnectingUserId(userId);
    try {
      await sendConnectionRequest(userId);
      // Find user name for toast
      const user = nearbyUsers?.find((u: NearbyUser) => u.id === userId);
      setToastName(user?.name || '');
      setShowToast(true);
    } catch (error) {
      console.error('Failed to connect:', error);
    } finally {
      setConnectingUserId(null);
    }
  };

  return (
    <div className="h-[calc(100vh-200px)] min-h-[500px] flex flex-col bg-gray-50 dark:bg-neutral-950 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800 px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white">People Nearby</h2>
              <p className="text-xs text-gray-500 dark:text-neutral-400">
                {myLocation && (
                  <>
                    Your location: {myLocation.lat.toFixed(4)}, {myLocation.lng.toFixed(4)} ·{' '}
                  </>
                )}
                {nearbyUsers.length} people within {radius}km
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <select
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
              className="px-3 py-1.5 bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300 rounded-lg text-sm border-0 focus:ring-2 focus:ring-blue-500"
            >
              {radiusOptions.map((r) => (
                <option key={r} value={r}>
                  {r} km
                </option>
              ))}
            </select>
            <button
              onClick={refreshLocation}
              disabled={refreshing}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
              title="Refresh location"
            >
              <RefreshCw
                className={`w-5 h-5 text-gray-600 dark:text-neutral-400 ${
                  refreshing ? 'animate-spin' : ''
                }`}
              />
            </button>
          </div>
        </div>
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, username, college, skills..."
            className="w-full pl-9 pr-16 py-2 rounded-lg bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-white placeholder-gray-500 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-700"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            )}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`p-1.5 rounded-full transition-colors ${
                showFilters
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600'
                  : 'text-gray-500 hover:bg-gray-200 dark:hover:bg-neutral-700'
              }`}
            >
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>
        {/* Filters Panel */}
        {showFilters && (
          <div className="mt-3 p-3 bg-gray-50 dark:bg-neutral-800 rounded-lg space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-neutral-300 block">
              Search radius
            </label>
            <select
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
              className="w-full px-3 py-2 bg-white dark:bg-neutral-900 rounded-lg text-sm"
            >
              {radiusOptions.map((r) => (
                <option key={r} value={r}>
                  Within {r} km
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Map or Loading/Error */}
      <div className="flex-1 relative">
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-neutral-900 z-10">
            <Loader2 className="w-8 h-8 animate-spin text-blue-500 mb-4" />
            <p className="text-gray-500 dark:text-neutral-400">Finding people near you...</p>
          </div>
        )}

        {!loading && locationError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-neutral-900 z-10 p-4">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 max-w-sm">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-700 dark:text-red-400 font-medium">Location Error</p>
                  <p className="text-red-600 dark:text-red-300 text-sm mt-1">{locationError}</p>
                  <button
                    onClick={refreshLocation}
                    className="mt-3 text-sm text-red-600 dark:text-red-400 hover:underline font-medium"
                  >
                    Try again
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {!loading && !locationError && myLocation && (
          <LocationMap
            center={myLocation}
            radius={radius}
            users={nearbyUsers}
            onUserClick={(user) => setSelectedUser(user)}
          />
        )}

        {/* Users List (Bottom Sheet) */}
        {!loading && !locationError && nearbyUsers.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-800 rounded-t-2xl max-h-48 overflow-hidden z-[500]">
            <div className="p-2">
              <div className="w-12 h-1 bg-gray-300 dark:bg-neutral-700 rounded-full mx-auto mb-2" />
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {nearbyUsers.map((user) => (
                  <button
                    key={user.id}
                    onClick={() => setSelectedUser(user)}
                    className="flex-shrink-0 flex items-center gap-2 p-2 bg-gray-50 dark:bg-neutral-800 rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                      {user.profileImage ? (
                        <img
                          src={user.profileImage}
                          alt={user.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-white font-bold text-sm">
                          {user.name?.charAt(0) || '?'}
                        </span>
                      )}
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate max-w-[100px]">
                        {user.name}
                      </p>
                      <p className="text-xs text-blue-600 dark:text-blue-400">
                        {user.distance < 1
                          ? `${Math.round(user.distance * 1000)}m`
                          : `${user.distance.toFixed(1)}km`}
                      </p>
                    </div>
                  </button>
                ))}
                {hasMore && (
                  <button
                    ref={loadMoreRef}
                    type="button"
                    onClick={() => void loadMoreNearby()}
                    disabled={loadingMore}
                    className="flex-shrink-0 rounded-xl border border-gray-200 px-4 text-sm font-semibold text-blue-600 disabled:opacity-60 dark:border-neutral-700 dark:text-blue-400"
                  >
                    {loadingMore ? 'Loading…' : 'Next 50'}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Empty state */}
        {!loading && !locationError && nearbyUsers.length === 0 && myLocation && (
          <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-800 rounded-t-2xl p-6 z-[500]">
            <div className="text-center">
              <Users className="w-12 h-12 text-gray-300 dark:text-neutral-700 mx-auto mb-3" />
              <h3 className="font-medium text-gray-900 dark:text-white mb-1">No one nearby</h3>
              <p className="text-sm text-gray-500 dark:text-neutral-400">
                Try increasing the search radius to find more people
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Selected User Card Modal - rendered via portal */}
      {selectedUser &&
        typeof document !== 'undefined' &&
        createPortal(
          <NearbyUserProfileCard
            onConnect={handleConnect}
            connectingUserId={connectingUserId}
            user={selectedUser}
            onClose={() => setSelectedUser(null)}
          />,
          document.body
        )}

      <ConnectionSentToast
        show={showToast}
        recipientName={toastName}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}
