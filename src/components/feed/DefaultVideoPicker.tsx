'use client';
import { DEFAULT_POST_VIDEOS, findDefaultPostVideo } from '@/lib/defaultVideos';
import { Check, ChevronDown, X } from 'lucide-react';
import React from 'react';
import { DefaultVideoPlayer } from './DefaultVideoPlayer';

interface DefaultVideoPickerProps {
  defaultVideoId: string | null;
  setDefaultVideoId: React.Dispatch<React.SetStateAction<string | null>>;
}

/** "Default Videos" composer section — list-with-previews, as on Android. */
export function DefaultVideoPicker({ defaultVideoId, setDefaultVideoId }: DefaultVideoPickerProps) {
  const [expanded, setExpanded] = React.useState(false);
  const selected = findDefaultPostVideo(defaultVideoId);

  return (
    <div
      className="mt-4 rounded-xl p-3"
      style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
    >
      <p className="text-sm font-semibold text-[var(--foreground)]">Default Videos</p>
      <p className="mt-0.5 text-sm text-[var(--muted-foreground)]">
        Add a built-in Vormex motion video to this post.
      </p>
      <button
        type="button"
        onClick={() => setExpanded((open) => !open)}
        aria-expanded={expanded}
        className="mt-2 flex w-full items-center justify-between gap-3 py-2 text-left"
      >
        <span className="min-w-0">
          <span className="block text-[15px] font-semibold text-[var(--foreground)]">
            Default Video
          </span>
          <span
            className={`block truncate text-xs ${selected ? 'font-semibold text-blue-600 dark:text-blue-400' : 'text-[var(--muted-foreground)]'}`}
          >
            {selected ? selected.title : 'Tap to pick an animation'}
          </span>
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[var(--muted-foreground)] transition-transform ${expanded ? 'rotate-180' : ''}`}
        />
      </button>

      {expanded && (
        <ul className="max-h-[360px] divide-y divide-[var(--border)] overflow-y-auto">
          {DEFAULT_POST_VIDEOS.map((video) => {
            const isSelected = defaultVideoId === video.id;
            return (
              <li key={video.id}>
                <button
                  type="button"
                  onClick={() => {
                    setDefaultVideoId(isSelected ? null : video.id);
                    setExpanded(false);
                  }}
                  aria-pressed={isSelected}
                  className="flex w-full items-center gap-3 py-2.5 text-left"
                >
                  <span className="h-[58px] w-[82px] shrink-0 overflow-hidden rounded-xl bg-[var(--muted)]">
                    <DefaultVideoPlayer
                      video={video}
                      mode="preview"
                      className="h-full w-full overflow-hidden"
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={`block truncate text-sm font-semibold ${isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-[var(--foreground)]'}`}
                    >
                      {video.title}
                    </span>
                    <span className="block text-xs text-[var(--muted-foreground)]">
                      {video.description}
                    </span>
                  </span>
                  {isSelected && (
                    <Check className="h-[18px] w-[18px] shrink-0 text-blue-600 dark:text-blue-400" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {selected && (
        <button
          type="button"
          onClick={() => {
            setDefaultVideoId(null);
            setExpanded(false);
          }}
          className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)] hover:bg-[var(--accent)]"
        >
          <X className="h-3.5 w-3.5" />
          Remove default video
        </button>
      )}
    </div>
  );
}
