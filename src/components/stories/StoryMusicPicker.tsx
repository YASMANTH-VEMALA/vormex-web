'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { Music2, Pause, Play, RefreshCw, Search, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cachedMusicSearch, searchStoryMusic } from '@/lib/api/music';
import { loadYouTubeMusicAPI } from '@/lib/stories/youtubeMusic';
import { useYouTubeMusic } from './useYouTubeMusic';
import {
  clipTime,
  songDurationSeconds,
  type MusicSearchResult,
  type StoryMusic,
} from '@/lib/stories/music';

const CATEGORIES = [
  'Trending',
  'Global Top 50',
  'Viral Hits',
  'Hip-Hop',
  'Pop',
  'Rock',
  'EDM',
  'Lo-Fi',
  'Bollywood',
];

export function StoryMusicPicker({
  music,
  onChange,
}: {
  music: StoryMusic | null;
  onChange: (music: StoryMusic | null) => void;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [retryAttempt, setRetryAttempt] = useState(0);
  const [category, setCategory] = useState('Trending');
  const [results, setResults] = useState<MusicSearchResult[]>([]);
  const [selected, setSelected] = useState<MusicSearchResult | null>(null);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [previewPaused, setPreviewPaused] = useState(true);
  const previewClip =
    open && selected
      ? {
          songId: selected.id,
          title: selected.title,
          artist: selected.artist,
          thumbnail: selected.thumbnail,
          startOffset: offset,
          duration: 15,
        }
      : null;
  const previewMusic = useYouTubeMusic(previewClip, 'story-preview', previewPaused, false);
  const previewing = previewMusic.status === 'playing';
  const previewError =
    previewMusic.status === 'error'
      ? 'This video cannot be played. Try another song.'
      : previewMusic.status === 'blocked'
        ? 'Tap Preview to allow playback.'
        : '';

  useEffect(() => {
    if (!open) return;
    const controller = new AbortController();
    const timeout = window.setTimeout(
      async () => {
        setLoading(true);
        setError('');
        try {
          const q = query.trim() || `${category} songs`;
          const songs = cachedMusicSearch(q) ?? (await searchStoryMusic(q, controller.signal));
          if (!controller.signal.aborted) setResults(songs);
        } catch {
          if (!controller.signal.aborted) setError('Could not load music. Try searching again.');
        } finally {
          if (!controller.signal.aborted) setLoading(false);
        }
      },
      cachedMusicSearch(query.trim() || `${category} songs`) ? 0 : query.trim() ? 200 : 0
    );
    return () => {
      controller.abort();
      window.clearTimeout(timeout);
    };
  }, [open, query, category, retryAttempt]);

  const preview = () => {
    if (previewing) {
      setPreviewPaused(true);
      previewMusic.playerRef.current?.pause();
    } else {
      setPreviewPaused(false);
      previewMusic.retry();
    }
  };

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(value) => {
        setOpen(value);
        if (value) {
          void loadYouTubeMusicAPI().catch(() => {});
          setLoading(true);
          setError('');
          setSelected(null);
          setPreviewPaused(true);
          setOffset(0);
        }
      }}
    >
      <div className="flex items-center gap-2">
        <Dialog.Trigger
          onPointerEnter={() => {
            void loadYouTubeMusicAPI().catch(() => {});
          }}
          onFocus={() => {
            void loadYouTubeMusicAPI().catch(() => {});
          }}
          className="flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-neutral-200 bg-neutral-50/60 p-3 text-left transition-colors hover:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-800/40 dark:hover:border-neutral-500"
        >
          <Music2 className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
          <span className="min-w-0">
            <span className="block truncate font-medium">{music?.title || 'Add music'}</span>
            <span className="block text-xs text-neutral-500">
              {music
                ? `${music.artist} · ${clipTime(music.startOffset)}–${clipTime(music.startOffset + 15)}`
                : 'Pick a 15-second soundtrack'}
            </span>
          </span>
        </Dialog.Trigger>
        {music && (
          <button aria-label="Remove music" onClick={() => onChange(null)} className="p-2">
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[150] bg-black/60 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[151] flex max-h-[85dvh] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 flex-col rounded-2xl bg-white p-5 text-neutral-900 shadow-2xl dark:bg-neutral-900 dark:text-white">
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-lg font-semibold">Add music</Dialog.Title>
            <Dialog.Close aria-label="Close music picker" className="p-2">
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>
          <Dialog.Description className="mb-4 text-sm text-neutral-500">
            Find a song and choose your favorite 15 seconds.
          </Dialog.Description>
          <label className="flex items-center gap-2 rounded-xl bg-neutral-100 px-3 dark:bg-neutral-800">
            <Search className="h-4 w-4" />
            <input
              autoComplete="off"
              aria-label="Search songs or artists"
              placeholder="Search songs or artists"
              value={query}
              maxLength={200}
              onChange={(event) => {
                setQuery(event.target.value);
                setLoading(true);
                setError('');
                setSelected(null);
              }}
              className="w-full bg-transparent py-3 outline-none"
            />
          </label>
          <div className="my-4 flex shrink-0 flex-wrap gap-1.5">
            {CATEGORIES.map((item) => (
              <button
                key={item}
                aria-pressed={!query && category === item}
                onClick={() => {
                  setCategory(item);
                  setRetryAttempt((value) => value + 1);
                  setLoading(true);
                  setError('');
                  setQuery('');
                  setSelected(null);
                }}
                className={`shrink-0 rounded-full px-3 py-1.5 text-xs ${!query && category === item ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900' : 'bg-neutral-100 dark:bg-neutral-800'}`}
              >
                {item}
              </button>
            ))}
          </div>
          <div aria-live="polite" className="min-h-48 flex-1 overflow-y-auto">
            {loading ? (
              <div role="status" aria-label="Searching music" className="space-y-3 py-3">
                {[0, 1, 2].map((row) => (
                  <div key={row} className="flex animate-pulse items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-neutral-100 dark:bg-neutral-800" />
                    <div className="flex-1 space-y-2">
                      <div className="h-3 w-2/3 rounded bg-neutral-100 dark:bg-neutral-800" />
                      <div className="h-2.5 w-1/3 rounded bg-neutral-100 dark:bg-neutral-800" />
                    </div>
                  </div>
                ))}
                <p className="pt-1 text-center text-xs text-neutral-500">
                  Finding your soundtrack…
                </p>
              </div>
            ) : error ? (
              <div className="flex min-h-44 flex-col items-center justify-center px-4 py-6 text-center">
                <Music2 className="mb-3 h-6 w-6 text-neutral-400" />
                <p role="alert" className="text-sm font-medium">
                  Music couldn’t load
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  The catalog may be waking up. Give it another try.
                </p>
                <button
                  onClick={() => {
                    setLoading(true);
                    setError('');
                    setRetryAttempt((value) => value + 1);
                  }}
                  className="mt-4 flex items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2 text-xs font-semibold hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  Try again
                </button>
              </div>
            ) : !results.length ? (
              <p className="py-6 text-center text-sm text-neutral-500">
                No songs found. Try another search.
              </p>
            ) : (
              results.map((song) => (
                <button
                  key={song.id}
                  onClick={() => {
                    setSelected(song);
                    setPreviewPaused(true);
                    setOffset(0);
                  }}
                  aria-pressed={selected?.id === song.id}
                  className={`flex w-full items-center gap-3 rounded-xl p-2 text-left ${selected?.id === song.id ? 'bg-neutral-100 dark:bg-neutral-800' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'}`}
                >
                  {/* Catalog artwork is external and changes independently of the application. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={song.thumbnail} alt="" className="h-12 w-12 rounded-lg object-cover" />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold">{song.title}</span>
                    <span className="block truncate text-xs text-neutral-500">{song.artist}</span>
                  </span>
                  <span className="text-xs text-neutral-500">{song.duration}</span>
                </button>
              ))
            )}
          </div>
          {selected && (
            <div className="mt-4 shrink-0 border-t border-neutral-200 pt-4 dark:border-neutral-700">
              <p className="truncate text-sm font-semibold">{selected.title}</p>
              <label htmlFor="story-music-offset" className="mt-2 flex justify-between text-xs">
                <span>15-second clip</span>
                <span>
                  {clipTime(offset)}–{clipTime(offset + 15)}
                </span>
              </label>
              <input
                id="story-music-offset"
                type="range"
                min={0}
                max={Math.max(0, songDurationSeconds(selected.duration) - 15)}
                step={1}
                value={offset}
                onChange={(event) => {
                  previewMusic.playerRef.current?.pause();
                  setPreviewPaused(true);
                  setOffset(Number(event.target.value));
                }}
                className="my-3 w-full accent-neutral-800 dark:accent-neutral-200"
              />
              {previewError && (
                <p role="status" className="mb-2 text-xs text-amber-600">
                  {previewError}
                </p>
              )}
              <div className="flex gap-2">
                <button
                  onClick={preview}
                  className="flex items-center gap-2 rounded-xl border px-4 py-2 text-sm"
                >
                  {previewing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}{' '}
                  {previewing ? 'Pause preview' : 'Preview'}
                </button>
                <button
                  onClick={() => {
                    onChange({
                      songId: selected.id,
                      title: selected.title,
                      artist: selected.artist,
                      thumbnail: selected.thumbnail,
                      startOffset: offset,
                      duration: 15,
                    });
                    setOpen(false);
                  }}
                  className="flex-1 rounded-xl bg-neutral-900 py-2.5 text-sm font-semibold text-white dark:bg-white dark:text-neutral-900"
                >
                  Use this clip
                </button>
              </div>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
