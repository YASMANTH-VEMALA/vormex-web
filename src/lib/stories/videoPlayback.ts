/** Reapply playback intent when a newly selected video becomes playable. */
export function attachStoryVideoPlayback(video: HTMLVideoElement, paused: boolean): () => void {
  let disposed = false;
  const apply = () => {
    if (disposed) return;
    if (paused) video.pause();
    else if (video.paused)
      void video.play().catch(() => {
        // Source changes can abort play(). loadeddata/canplay will retry for this video only.
      });
  };
  video.addEventListener('loadeddata', apply);
  video.addEventListener('canplay', apply);
  video.addEventListener('playing', apply);
  apply();
  return () => {
    disposed = true;
    video.removeEventListener('loadeddata', apply);
    video.removeEventListener('canplay', apply);
    video.removeEventListener('playing', apply);
    video.pause();
  };
}
