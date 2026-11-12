// Location API - Find nearby users and location features

import apiClient from './client';

// ============================================
// Types
// ============================================

export interface LocationData {
  latitude: number | null;
  longitude: number | null;
  city: string | null;
  state: string | null;
  country: string | null;
  timezone: string | null;
  lastUpdated: string | null;
}

export interface NearbyLocation {
  city: string | null;
  region: string | null;
  country: string | null;
  distanceBucket?: string | null;
}

/** Exact coordinates are never sent by the server; distance is rounded up to whole km. */
export interface NearbyUser {
  id: string;
  name: string;
  username: string;
  profileImage: string | null;
  bannerImage: string | null;
  headline: string | null;
  skills: string[];
  interests: string[];
  distance: number | null; // whole km, rounded up
  isOnline: boolean;
  isVerified?: boolean;
  /** Approximate map position (grid-snapped and offset by the server); not real coordinates. */
  approxPosition?: { lat: number; lng: number } | null;
  location: NearbyLocation | null;
}

export interface NearbyUsersResponse {
  users: NearbyUser[];
  total?: number;
  page?: number;
  hasMore?: boolean;
  radiusKm?: number;
  /** No saved location yet: the client must send one first. */
  locationRequired?: boolean;
  /** The viewer turned location off in settings. */
  locationPermissionDenied?: boolean;
  /** Whether the viewer appears in other people's Nearby results. */
  viewerSharing?: boolean;
  /** Smallest larger radius that would return someone (only on empty first pages). */
  suggestedRadiusKm?: number | null;
  yourLocation?: NearbyLocation | null;
  yourPosition?: { lat: number; lng: number };
}

export interface LocationSettings {
  locationPermission: boolean;
  shareLocationPublic: boolean;
}

// ============================================
// API Functions
// ============================================

/**
 * Update current user's location
 */
export async function updateLocation(
  lat: number,
  lng: number,
  accuracy?: number,
  place?: { city: string; state?: string | null; country?: string | null; countryCode?: string | null }
): Promise<LocationData> {
  return apiClient.post('/location/update', {
    lat,
    lng,
    accuracy,
    ...(place ? { city: place.city, state: place.state, country: place.country, countryCode: place.countryCode } : {}),
  });
}

/**
 * Get current user's location
 */
export async function getMyLocation(): Promise<LocationData> {
  return apiClient.get('/location/me');
}

/** Radius choices (km); the server accepts 1-200. */
export const NEARBY_RADIUS_OPTIONS = [5, 10, 25, 50, 100, 200] as const;

/**
 * Get nearby users, measured from the viewer's last saved location.
 * @param radius - Search radius in km (1-200)
 * @param limit - Page size (max 50)
 * @param search - Optional: filter by name, username, college, skills
 */
export async function getNearbyUsers(
  radius: number = 50,
  limit: number = 50,
  search?: string,
  page: number = 1
): Promise<NearbyUsersResponse> {
  const params: Record<string, string | number> = { radius, limit, page };
  if (search?.trim()) params.search = search.trim();
  return apiClient.get('/location/nearby', { params });
}

/**
 * Update location settings
 */
export async function updateLocationSettings(
  settings: Partial<LocationSettings>
): Promise<{ message: string }> {
  return apiClient.put('/location/settings', settings);
}
