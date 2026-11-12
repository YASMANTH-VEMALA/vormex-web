'use client';
import ConnectionSentToast from '@/components/engagement/ConnectionSentToast';
import { useDebouncedValue } from '@/hooks/useDebouncedValue';
import { useThrottledCallback } from '@/hooks/useThrottledCallback';
import { sendConnectionRequest } from '@/lib/api/connections';
import {
  getNearbyUsers,
  NEARBY_RADIUS_OPTIONS,
  updateLocation,
  updateLocationSettings,
  type NearbyUser,
} from '@/lib/api/location';
import { useAuth } from '@/lib/auth/useAuth';
import {
  checkGeolocationSupport,
  geoIssue,
  getGeolocationPermission,
  requestDevicePosition,
  type GeocodedPlace,
  type GeoIssue,
} from '@/lib/geolocation';
import { updateLocation as emitLocationUpdate } from '@/lib/socket';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  LocateFixed,
  MapPin,
  RefreshCw,
  Search,
  UserPlus,
  Users,
  X,
} from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import dynamic from 'next/dynamic';
import { NearbyManualLocation } from './NearbyManualLocation';
import { formatNearbyDistance, NearbyUserProfileCard } from './NearbyUserProfileCard';

// Leaflet touches `window`, so the map is client-only.
const NearbyMap = dynamic(() => import('./NearbyMap').then((m) => m.NearbyMap), {
  ssr: false,
  loading: () => <div className="h-64 animate-pulse rounded-xl bg-gray-200 dark:bg-neutral-800" />,
});

const PAGE_SIZE = 50;

function isGeoIssue(value: unknown): value is GeoIssue {
  return typeof value === 'object' && value !== null && 'kind' in value && 'message' in value;
}

export function NearbyUsers() {
  const viewerId = useAuth().user?.id;

  const [radius, setRadius] = useState(50);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebouncedValue(searchQuery, 300);

  // Location state. The server measures from the last saved location, so a saved place keeps
  // the tab useful even when GPS is blocked.
  const [placeVersion, setPlaceVersion] = useState(0); // bumps when a city is picked manually
  const [actionError, setActionError] = useState<string | null>(null);
  const [showManual, setShowManual] = useState(false);
  const [savingPlace, setSavingPlace] = useState(false);
  const [updatingPrivacy, setUpdatingPrivacy] = useState(false);

  const [selectedUser, setSelectedUser] = useState<NearbyUser | null>(null);
  const [connectingUserId, setConnectingUserId] = useState<string | null>(null);
  const [requestedIds, setRequestedIds] = useState<Set<string>>(() => new Set());
  const [showToast, setShowToast] = useState(false);
  const [toastName, setToastName] = useState('');
  const loadMoreRef = useRef<HTMLButtonElement | null>(null);

  const pushRealtimeLocationUpdate = useThrottledCallback(
    (lat: number, lng: number, accuracy?: number) => {
      void updateLocation(lat, lng, accuracy).catch(console.warn);
      emitLocationUpdate({ lat, lng, accuracy });
    },
    15_000
  );

  // Ask for the device location when the tab opens (and again on retry), then save it.
  const deviceLocation = useQuery({
    queryKey: ['nearby-device-location', viewerId],
    enabled: !!viewerId,
    retry: false,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    queryFn: async () => {
      const permission = await getGeolocationPermission();
      const unsupported = checkGeolocationSupport();
      if (unsupported) throw unsupported;
      if (permission === 'denied') throw geoIssue('denied');
      const position = await requestDevicePosition();
      try {
        await updateLocation(position.lat, position.lng, position.accuracy);
      } catch {
        throw new Error('save-failed');
      }
      return position;
    },
  });
  const locating = !viewerId || deviceLocation.isFetching;
  const geoProblem = deviceLocation.isError && isGeoIssue(deviceLocation.error) ? deviceLocation.error : null;
  const saveError =
    actionError ??
    (deviceLocation.isError && !geoProblem
      ? "We found you but couldn't save your location. Please try again."
      : null);
  const gpsActive = deviceLocation.isSuccess && placeVersion === 0;
  const locationVersion = deviceLocation.dataUpdatedAt + placeVersion;

  const retryLocation = () => {
    setActionError(null);
    void deviceLocation.refetch();
  };

  const pickPlace = async (place: GeocodedPlace) => {
    setSavingPlace(true);
    setActionError(null);
    try {
      await updateLocation(place.lat, place.lng, undefined, {
        city: place.name,
        state: place.region,
        country: place.country,
        countryCode: place.countryCode,
      });
      setShowManual(false);
      setPlaceVersion((v) => v + 1);
    } catch {
      setActionError("Couldn't save that city. Please try again.");
    } finally {
      setSavingPlace(false);
    }
  };

  const nearbyResource = useInfiniteQuery({
    queryKey: ['nearby-users', viewerId, locationVersion, radius, debouncedSearch],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      getNearbyUsers(radius, PAGE_SIZE, debouncedSearch || undefined, pageParam),
    getNextPageParam: (last, pages) => (last.hasMore ? pages.length + 1 : undefined),
    enabled: !!viewerId && !locating,
    retry: 1,
    placeholderData: (previous) => previous,
  });
  const { isFetchingNextPage, hasNextPage, fetchNextPage, refetch } = nearbyResource;

  const nearbyUsers = useMemo(() => {
    const byId = new Map<string, NearbyUser>();
    for (const page of nearbyResource.data?.pages ?? [])
      for (const user of page.users ?? []) byId.set(user.id, user);
    return [...byId.values()];
  }, [nearbyResource.data]);

  const firstPage = nearbyResource.data?.pages[0];
  const needsLocation = !!firstPage?.locationRequired;
  const locationTurnedOff = !!firstPage?.locationPermissionDenied;
  const yourPlace = firstPage?.yourLocation?.city ?? firstPage?.yourLocation?.region ?? null;
  const loading = locating || (nearbyResource.isPending && !nearbyResource.isError);
  const fetchError = nearbyResource.isError && !nearbyResource.isFetching;

  // Real-time sharing while GPS is active: save + broadcast position changes (throttled).
  useEffect(() => {
    if (!gpsActive || !navigator.geolocation?.watchPosition) return;
    const watchId = navigator.geolocation.watchPosition(
      ({ coords }) => pushRealtimeLocationUpdate(coords.latitude, coords.longitude, coords.accuracy),
      () => undefined,
      { enableHighAccuracy: false, maximumAge: 60_000 }
    );
    return () => navigator.geolocation.clearWatch(watchId);
  }, [gpsActive, pushRealtimeLocationUpdate]);

  const loadMore = useCallback(async () => {
    if (!isFetchingNextPage && hasNextPage) await fetchNextPage();
  }, [isFetchingNextPage, hasNextPage, fetchNextPage]);

  useEffect(() => {
    const target = loadMoreRef.current;
    if (!target || !hasNextPage) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void loadMore();
      },
      { rootMargin: '0px 0px 300px 0px' }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [hasNextPage, loadMore]);

  const updateSettings = async (settings: { shareLocationPublic?: boolean; locationPermission?: boolean }) => {
    setUpdatingPrivacy(true);
    try {
      await updateLocationSettings(settings);
      await refetch();
    } catch {
      setActionError("Couldn't update your privacy setting. Please try again.");
    } finally {
      setUpdatingPrivacy(false);
    }
  };

  const handleConnect = async (userId: string) => {
    setConnectingUserId(userId);
    try {
      await sendConnectionRequest(userId);
      setRequestedIds((prev) => new Set(prev).add(userId));
      setToastName(nearbyUsers.find((u) => u.id === userId)?.name || '');
      setShowToast(true);
    } catch (error) {
      console.error('Failed to connect:', error);
    } finally {
      setConnectingUserId(null);
    }
  };

  const suggestedRadius = firstPage?.suggestedRadiusKm ?? null;
  const hasSearch = debouncedSearch.trim().length > 0;

  return (
    <div className="flex min-h-[500px] flex-col overflow-hidden rounded-xl bg-gray-50 dark:bg-neutral-950">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white px-4 py-3 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900/30">
              <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white">People Nearby</h2>
              <p className="text-xs text-gray-500 dark:text-neutral-400" aria-live="polite">
                {yourPlace ? `Around ${yourPlace} · ` : ''}
                {loading ? 'Searching…' : `${nearbyUsers.length}${hasNextPage ? '+' : ''} within ${radius} km`}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <select
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
              aria-label="Search radius"
              className="rounded-lg border-0 bg-gray-100 px-3 py-1.5 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800 dark:text-neutral-300"
            >
              {NEARBY_RADIUS_OPTIONS.map((r) => (
                <option key={r} value={r}>
                  {r} km
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={retryLocation}
              disabled={locating || nearbyResource.isFetching}
              className="rounded-full p-2 transition-colors hover:bg-gray-100 disabled:opacity-60 dark:hover:bg-neutral-800"
              title="Update my location and refresh"
              aria-label="Update my location and refresh"
            >
              <RefreshCw
                className={`h-5 w-5 text-gray-600 dark:text-neutral-400 ${
                  locating || nearbyResource.isFetching ? 'animate-spin' : ''
                }`}
              />
            </button>
          </div>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, username, college, skills..."
            className="w-full rounded-lg bg-gray-100 py-2 pl-9 pr-9 text-sm text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800 dark:text-white"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 hover:bg-gray-200 dark:hover:bg-neutral-700"
            >
              <X className="h-4 w-4 text-gray-400" />
            </button>
          )}
        </div>
      </div>

      {/* Notices */}
      <div className="space-y-2 px-4 pt-3 empty:hidden">
        {geoProblem && !needsLocation && (
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-200">
            <p>
              {yourPlace ? `Showing people near your saved location (${yourPlace}). ` : 'Showing people near your saved location. '}
              {geoProblem.message}
            </p>
            <div className="mt-2 flex gap-3 font-medium">
              <button type="button" onClick={retryLocation} className="hover:underline">
                Try again
              </button>
              <button type="button" onClick={() => setShowManual((v) => !v)} className="hover:underline">
                Enter city
              </button>
            </div>
          </div>
        )}
        {saveError && (
          <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-300">
            {saveError}
          </p>
        )}
        {firstPage && firstPage.viewerSharing === false && !locationTurnedOff && !needsLocation && (
          <div className="flex items-center justify-between gap-3 rounded-lg bg-blue-50 p-3 text-sm text-blue-800 dark:bg-blue-900/20 dark:text-blue-200">
            <span>You&apos;re hidden from Nearby. Only people who opt in can see or be seen here.</span>
            <button
              type="button"
              disabled={updatingPrivacy}
              onClick={() => void updateSettings({ shareLocationPublic: true })}
              className="shrink-0 rounded-lg bg-blue-600 px-3 py-1.5 font-medium text-white hover:bg-blue-700 disabled:opacity-60"
            >
              Show me
            </button>
          </div>
        )}
        {showManual && <NearbyManualLocation onPick={pickPlace} saving={savingPlace} />}
      </div>

      {/* Body */}
      <div className="flex-1 p-4">
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="mb-4 h-8 w-8 animate-spin text-blue-500" />
            <p className="text-gray-500 dark:text-neutral-400">
              {locating ? 'Finding your location…' : 'Finding people near you…'}
            </p>
          </div>
        )}

        {!loading && needsLocation && (
          <div className="mx-auto max-w-md rounded-xl border border-gray-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
            <div className="mb-3 flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">We need your location</p>
                <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                  {geoProblem?.message ?? 'Share your location, or pick your city, to see people near you.'}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={retryLocation}
              className="mb-3 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              <LocateFixed className="h-4 w-4" /> Use my current location
            </button>
            <NearbyManualLocation onPick={pickPlace} saving={savingPlace} />
          </div>
        )}

        {!loading && locationTurnedOff && (
          <div className="mx-auto max-w-md rounded-xl border border-gray-200 bg-white p-5 text-center dark:border-neutral-800 dark:bg-neutral-900">
            <p className="font-medium text-gray-900 dark:text-white">Location is turned off for your account</p>
            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              Turn it on to find people near you. You can pick who sees you at any time.
            </p>
            <button
              type="button"
              disabled={updatingPrivacy}
              onClick={() => void updateSettings({ locationPermission: true })}
              className="mt-3 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-60"
            >
              Turn on location
            </button>
          </div>
        )}

        {!loading && fetchError && !needsLocation && (
          <div className="mx-auto max-w-md rounded-xl border border-red-200 bg-red-50 p-4 text-center dark:border-red-800 dark:bg-red-900/20">
            <p className="font-medium text-red-700 dark:text-red-300">Couldn&apos;t load people nearby</p>
            <button
              type="button"
              onClick={() => void refetch()}
              className="mt-2 text-sm font-medium text-red-700 hover:underline dark:text-red-300"
            >
              Try again
            </button>
          </div>
        )}

        {!loading && !needsLocation && !locationTurnedOff && !fetchError && nearbyUsers.length === 0 && (
          <div className="py-12 text-center">
            <Users className="mx-auto mb-3 h-12 w-12 text-gray-300 dark:text-neutral-700" />
            <h3 className="mb-1 font-medium text-gray-900 dark:text-white">
              {hasSearch ? 'No matches nearby' : `No one within ${radius} km`}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-400">
              {suggestedRadius
                ? `Someone is within ${suggestedRadius} km.`
                : radius < 200
                  ? 'Try a larger radius.'
                  : hasSearch
                    ? 'Try a different search.'
                    : 'Nobody has opted in to Nearby in your area yet.'}
            </p>
            {suggestedRadius && (
              <button
                type="button"
                onClick={() => setRadius(suggestedRadius)}
                className="mt-3 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Search within {suggestedRadius} km
              </button>
            )}
          </div>
        )}

        {!loading && nearbyUsers.length > 0 && (
          <>
            {firstPage?.yourPosition && (
              <div className="mb-4 h-64 overflow-hidden rounded-xl border border-gray-200 dark:border-neutral-800">
                <NearbyMap
                  center={firstPage.yourPosition}
                  radiusKm={radius}
                  users={nearbyUsers}
                  onUserClick={setSelectedUser}
                />
              </div>
            )}
            <ul className="grid gap-3 sm:grid-cols-2">
              {nearbyUsers.map((user) => (
                <li
                  key={user.id}
                  className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedUser(user)}
                    className="flex min-w-0 flex-1 items-center gap-3 text-left"
                  >
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-blue-400 to-purple-500">
                      {user.profileImage ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={user.profileImage} alt={user.name} className="h-full w-full object-cover" />
                      ) : (
                        <span className="flex h-full w-full items-center justify-center font-bold text-white">
                          {user.name?.charAt(0) || '?'}
                        </span>
                      )}
                      {user.isOnline && (
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{user.name}</p>
                      <p className="truncate text-xs text-gray-500 dark:text-neutral-400">
                        {user.headline || `@${user.username}`}
                      </p>
                      <p className="mt-0.5 text-xs font-medium text-blue-600 dark:text-blue-400">
                        {formatNearbyDistance(user.distance)}
                        {user.location?.city ? ` · ${user.location.city}` : ''}
                      </p>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => void handleConnect(user.id)}
                    disabled={connectingUserId === user.id || requestedIds.has(user.id)}
                    aria-label={requestedIds.has(user.id) ? 'Request sent' : `Connect with ${user.name}`}
                    className="shrink-0 rounded-full bg-blue-50 p-2 text-blue-600 hover:bg-blue-100 disabled:opacity-60 dark:bg-blue-900/30 dark:text-blue-300"
                  >
                    {connectingUserId === user.id ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : requestedIds.has(user.id) ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      <UserPlus className="h-4 w-4" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
            {hasNextPage && (
              <div className="mt-4 text-center">
                <button
                  ref={loadMoreRef}
                  type="button"
                  onClick={() => void loadMore()}
                  disabled={isFetchingNextPage}
                  className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-blue-600 disabled:opacity-60 dark:border-neutral-700 dark:text-blue-400"
                >
                  {isFetchingNextPage ? 'Loading…' : 'Show more'}
                </button>
              </div>
            )}
          </>
        )}
      </div>

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
