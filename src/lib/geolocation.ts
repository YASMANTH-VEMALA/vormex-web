// Browser geolocation helpers with specific, user-friendly failure reasons.

export type GeoIssueKind = 'unsupported' | 'insecure' | 'denied' | 'unavailable' | 'timeout';

export interface GeoIssue {
  kind: GeoIssueKind;
  message: string;
}

export interface DevicePosition {
  lat: number;
  lng: number;
  accuracy?: number;
}

const GEO_MESSAGES: Record<GeoIssueKind, string> = {
  unsupported: "This browser can't share its location. Enter your city instead.",
  insecure: 'Location only works on secure (HTTPS) pages. Open Vormex over HTTPS, or enter your city instead.',
  denied:
    'Location is blocked for this site. Click the lock/location icon in the address bar, set Location to "Allow", then try again.',
  unavailable:
    "Your device couldn't determine its location. Check that Location Services are on, or enter your city instead.",
  timeout: 'Finding your location took too long. Try again, or enter your city instead.',
};

export function geoIssue(kind: GeoIssueKind): GeoIssue {
  return { kind, message: GEO_MESSAGES[kind] };
}

/** Returns an issue if geolocation can't even be attempted in this context. */
export function checkGeolocationSupport(): GeoIssue | null {
  if (typeof window === 'undefined' || !('geolocation' in navigator)) return geoIssue('unsupported');
  if (!window.isSecureContext) return geoIssue('insecure');
  return null;
}

/** Current permission state when the Permissions API is available, otherwise null. */
export async function getGeolocationPermission(): Promise<PermissionState | null> {
  try {
    if (!navigator.permissions?.query) return null;
    return (await navigator.permissions.query({ name: 'geolocation' })).state;
  } catch {
    return null;
  }
}

function toIssue(error: GeolocationPositionError): GeoIssue {
  // Keep the real browser reason visible for debugging (1 denied, 2 unavailable, 3 timeout).
  console.warn('[geolocation] failed', { code: error.code, message: error.message });
  if (error.code === error.PERMISSION_DENIED) return geoIssue('denied');
  if (error.code === error.TIMEOUT) return geoIssue('timeout');
  return geoIssue('unavailable');
}

function readPosition(options: PositionOptions): Promise<DevicePosition> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => resolve({ lat: coords.latitude, lng: coords.longitude, accuracy: coords.accuracy }),
      (error) => reject(toIssue(error)),
      options
    );
  });
}

/**
 * Requests the device position. Uses network/Wi-Fi accuracy first (fast and reliable on
 * desktops) and only retries once on timeout/unavailable. Rejects with a GeoIssue.
 */
export async function requestDevicePosition(): Promise<DevicePosition> {
  const unsupported = checkGeolocationSupport();
  if (unsupported) throw unsupported;
  try {
    return await readPosition({ enableHighAccuracy: false, timeout: 10_000, maximumAge: 5 * 60_000 });
  } catch (error) {
    const issue = error as GeoIssue;
    if (issue.kind === 'denied') throw issue;
    return readPosition({ enableHighAccuracy: true, timeout: 15_000, maximumAge: 0 });
  }
}

export interface GeocodedPlace {
  name: string;
  region: string | null;
  country: string | null;
  countryCode: string | null;
  lat: number;
  lng: number;
}

/** Looks up a city by name (Open-Meteo geocoding, no key). Only the typed text is sent. */
export async function searchPlaces(query: string, signal?: AbortSignal): Promise<GeocodedPlace[]> {
  const text = query.trim();
  if (text.length < 2) return [];
  const url = `https://geocoding-api.open-meteo.com/v1/search?count=5&language=en&format=json&name=${encodeURIComponent(text)}`;
  const response = await fetch(url, { signal });
  if (!response.ok) throw new Error('City search failed');
  const data = (await response.json()) as {
    results?: Array<{
      name: string;
      latitude: number;
      longitude: number;
      admin1?: string;
      country?: string;
      country_code?: string;
    }>;
  };
  return (data.results ?? []).map((r) => ({
    name: r.name,
    region: r.admin1 ?? null,
    country: r.country ?? null,
    countryCode: r.country_code ?? null,
    lat: r.latitude,
    lng: r.longitude,
  }));
}
