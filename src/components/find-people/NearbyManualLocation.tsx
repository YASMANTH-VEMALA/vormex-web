'use client';
import { searchPlaces, type GeocodedPlace } from '@/lib/geolocation';
import { Loader2, MapPin, Search } from 'lucide-react';
import { useEffect, useState } from 'react';

/** Lets people pick their city when GPS is blocked or unavailable. */
export function NearbyManualLocation({
  onPick,
  saving,
}: {
  onPick: (place: GeocodedPlace) => void;
  saving: boolean;
}) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<GeocodedPlace[]>([]);
  const [searching, setSearching] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const text = query.trim();
    if (text.length < 2) return;
    const controller = new AbortController();
    const timer = setTimeout(async () => {
      setSearching(true);
      setFailed(false);
      try {
        setResults(await searchPlaces(text, controller.signal));
      } catch (error) {
        if ((error as Error).name !== 'AbortError') setFailed(true);
      } finally {
        if (!controller.signal.aborted) setSearching(false);
      }
    }, 350);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  const visible = query.trim().length >= 2 ? results : [];

  return (
    <div className="space-y-2">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search your city…"
          aria-label="Search your city"
          className="w-full rounded-lg bg-white py-2 pl-9 pr-9 text-sm text-gray-900 outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 dark:bg-neutral-900 dark:text-white dark:ring-neutral-700"
        />
        {(searching || saving) && (
          <Loader2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin text-blue-500" />
        )}
      </div>
      {failed && <p className="text-xs text-red-600">City search failed. Check your connection and try again.</p>}
      {visible.length > 0 && (
        <ul className="overflow-hidden rounded-lg bg-white ring-1 ring-gray-200 dark:bg-neutral-900 dark:ring-neutral-700">
          {visible.map((place) => (
            <li key={`${place.name}-${place.lat}-${place.lng}`}>
              <button
                type="button"
                disabled={saving}
                onClick={() => onPick(place)}
                className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-gray-800 hover:bg-gray-50 disabled:opacity-60 dark:text-neutral-200 dark:hover:bg-neutral-800"
              >
                <MapPin className="h-4 w-4 shrink-0 text-blue-500" />
                <span className="truncate">
                  {[place.name, place.region, place.country].filter(Boolean).join(', ')}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
      {!searching && !failed && query.trim().length >= 2 && results.length === 0 && (
        <p className="text-xs text-gray-500">No matching city found.</p>
      )}
    </div>
  );
}
