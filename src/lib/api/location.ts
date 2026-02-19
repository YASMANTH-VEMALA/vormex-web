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

export interface NearbyUser {
  id: string;
  name: string;
  username: string;
  profileImage: string | null;
  bannerImage: string | null;
  headline: string | null;
  skills: string[];
  interests: string[];
  distance: number; // in km
  isOnline: boolean;
  location: {
    lat: number;
    lng: number;
    city: string | null;
    state: string | null;
    country: string | null;
  };
}

export interface NearbyUsersResponse {
  users: NearbyUser[];
  locationRequired: boolean;
  message?: string;
  userLocation?: {
    lat: number;
    lng: number;
    city: string | null;
    state: string | null;
    country: string | null;
  };
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
  activity?: string
): Promise<LocationData> {
  return apiClient.post('/location/update', {
    lat,
    lng,
    accuracy,
    activity,
  });
}

/**
 * Get current user's location
 */
export async function getMyLocation(): Promise<LocationData> {
  return apiClient.get('/location/me');
}

/**
 * Get nearby users
 * @param radius - Search radius in km (default: 50)
 * @param limit - Max number of results (default: 20)
 */
export async function getNearbyUsers(
  radius: number = 50,
  limit: number = 20
): Promise<NearbyUsersResponse> {
  return apiClient.get('/location/nearby', {
    params: { radius, limit },
  });
}

/**
 * Update location settings
 */
export async function updateLocationSettings(
  settings: Partial<LocationSettings>
): Promise<{ message: string }> {
  return apiClient.put('/location/settings', settings);
}
