export interface StoryMusic {
  songId: string;
  title: string;
  artist: string;
  thumbnail: string;
  startOffset: number;
  duration: number;
}

export interface MusicSearchResult {
  id: string;
  title: string;
  artist: string;
  thumbnail: string;
  duration: string;
}

export function isStoryMusic(music: unknown): music is StoryMusic {
  return !!music && typeof music === 'object' && 'songId' in music;
}

export function songDurationSeconds(value: string): number {
  const parts = value.split(':').map(Number);
  if (!parts.length || parts.some((part) => !Number.isFinite(part) || part < 0)) return 0;
  return parts.reduce((total, part) => total * 60 + part, 0);
}

export function musicSearchResults(value: unknown): MusicSearchResult[] {
  if (!Array.isArray(value)) return [];
  const songs = new Map<string, MusicSearchResult>();
  for (const song of value) {
    if (
      !song ||
      typeof song !== 'object' ||
      typeof song.id !== 'string' ||
      !/^[\w-]{11}$/.test(song.id) ||
      typeof song.title !== 'string' ||
      !song.title.trim() ||
      typeof song.artist !== 'string' ||
      !song.artist.trim() ||
      typeof song.thumbnail !== 'string' ||
      typeof song.duration !== 'string' ||
      songDurationSeconds(song.duration) < 15
    )
      continue;
    if (!songs.has(song.id)) songs.set(song.id, song);
  }
  return [...songs.values()];
}

export function clipTime(seconds: number): string {
  return `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;
}
