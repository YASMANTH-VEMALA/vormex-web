import apiClient from './client';
import { musicSearchResults, type MusicSearchResult } from '@/lib/stories/music';

const cache = new Map<string, { expires: number; songs: MusicSearchResult[] }>();
const MAX_QUERIES = 40;
const TTL_MS = 5 * 60 * 1000;

export function cachedMusicSearch(query: string): MusicSearchResult[] | undefined {
  const key = query.trim().toLowerCase();
  const entry = cache.get(key);
  if (!entry) return undefined;
  if (entry.expires <= Date.now()) {
    cache.delete(key);
    return undefined;
  }
  cache.delete(key);
  cache.set(key, entry);
  return entry.songs;
}

export async function searchStoryMusic(
  query: string,
  signal?: AbortSignal
): Promise<MusicSearchResult[]> {
  const cached = cachedMusicSearch(query);
  if (cached) return cached;
  const response = await apiClient.get('/music/search', {
    params: { q: query },
    signal,
    timeout: 55000,
  });
  const data = response.data || response;
  const songs = musicSearchResults(data.results);
  const key = query.trim().toLowerCase();
  cache.delete(key);
  cache.set(key, { expires: Date.now() + TTL_MS, songs });
  while (cache.size > MAX_QUERIES) cache.delete(cache.keys().next().value!);
  return songs;
}
