import { Upload } from 'tus-js-client';
import { reelsApi, type UploadUrlResponse, type Reel } from '@/lib/api/reels';

type UploadState = { credential: UploadUrlResponse; url?: string; uploaded?: boolean };
// Keep the same video and TUS offset when the user retries in this composer.
const sessions = new WeakMap<File, UploadState>();
const active = new WeakMap<File, Promise<Reel>>();

export async function uploadReelVideo(
  file: File,
  metadata: Record<string, unknown>,
  onProgress: (progress: number) => void
): Promise<Reel> {
  const pending = active.get(file);
  if (pending) return pending;
  const task = (async () => {
    if (!file.size || file.size > 150 * 1024 * 1024)
      throw new Error('Video must be between 1 byte and 150 MB.');
    const mimeType = file.type.split(';')[0];
    if (!['video/mp4', 'video/webm', 'video/quicktime'].includes(mimeType))
      throw new Error('Choose an MP4, WebM, or MOV video.');
    let session = sessions.get(file);
    if (!session) {
      onProgress(0);
      const credential = (await reelsApi.getUploadUrl({
        mimeType,
        sizeBytes: file.size,
      })) as unknown as UploadUrlResponse;
      session = { credential };
      sessions.set(file, session);
    }
    const state = session;
    if (!state.uploaded) {
      const { credential } = state;
      if (credential.expiresAt <= Date.now())
        throw new Error('The upload session expired. Select the video again to restart.');
      const headers = Object.fromEntries(
        ['AuthorizationSignature', 'AuthorizationExpire', 'VideoId', 'LibraryId'].map((key) => [
          key,
          credential.uploadHeaders[key],
        ])
      );
      await new Promise<void>((resolve, reject) => {
        const upload = new Upload(file, {
          endpoint: credential.uploadUrl,
          uploadUrl: state.url,
          headers,
          metadata: { filetype: mimeType, title: file.name },
          chunkSize: 5 * 1024 * 1024,
          retryDelays: [0, 1000, 3000, 5000, 10_000],
          storeFingerprintForResuming: false,
          onBeforeRequest: (request) => {
            const transport = request.getUnderlyingObject();
            if (typeof XMLHttpRequest !== 'undefined' && transport instanceof XMLHttpRequest)
              transport.timeout = 120_000;
          },
          onUploadUrlAvailable: () => {
            if (upload.url) state.url = upload.url;
          },
          onProgress: (sent, total) => onProgress(Math.round((sent / total) * 95)),
          onError: () =>
            reject(
              new Error('Video upload interrupted. Check your connection and retry to resume.')
            ),
          onSuccess: () => {
            state.uploaded = true;
            resolve();
          },
        });
        upload.start();
      });
    }
    onProgress(95);
    const reel = (await reelsApi.onUploadComplete(state.credential.videoId, {
      ...metadata,
      uploadToken: state.credential.uploadToken,
      mimeType,
      sizeBytes: file.size,
    })) as unknown as Reel;
    onProgress(100);
    return reel;
  })();
  active.set(file, task);
  try {
    return await task;
  } finally {
    active.delete(file);
  }
}

/** Bound custom covers so finalizing metadata stays below API body limits. */
export async function prepareReelThumbnail(file: File) {
  const url = URL.createObjectURL(file);
  try {
    const image = new Image();
    image.src = url;
    await image.decode();
    const scale = Math.min(1, 1280 / Math.max(image.naturalWidth, image.naturalHeight));
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Could not prepare the cover image.');
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    const dataBase64 = canvas.toDataURL('image/jpeg', 0.8).split(',')[1];
    if (!dataBase64 || dataBase64.length > 1_398_104)
      throw new Error('Choose a smaller cover image.');
    return { mimeType: 'image/jpeg', dataBase64 };
  } finally {
    URL.revokeObjectURL(url);
  }
}
