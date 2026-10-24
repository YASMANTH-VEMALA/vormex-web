import apiClient from '@/lib/api/client';

export type AttachmentResult = {
  mediaUrl: string;
  fileName: string;
  fileSize: number;
  mediaType: string;
};
const extensionMime: Record<string, string> = {
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp',
  gif: 'image/gif',
  mp4: 'video/mp4',
  mov: 'video/quicktime',
  webm: 'video/webm',
  mp3: 'audio/mpeg',
  m4a: 'audio/mp4',
  wav: 'audio/wav',
  ogg: 'audio/ogg',
  pdf: 'application/pdf',
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  txt: 'text/plain',
};
export function attachmentMime(file: Pick<File, 'name' | 'type'>): string {
  const mime = file.type.split(';')[0].trim().toLowerCase();
  if (mime && mime !== 'application/octet-stream')
    return mime === 'audio/x-m4a' ? 'audio/mp4' : mime;
  return extensionMime[file.name.split('.').pop()?.toLowerCase() || ''] || mime;
}

export async function uploadAttachment(
  file: File,
  onProgress?: (progress: number) => void,
  uploadId: string = crypto.randomUUID()
): Promise<AttachmentResult> {
  const session = (await apiClient.post('/chat/uploads', {
    uploadId,
    fileName: file.name,
    mimeType: attachmentMime(file),
    sizeBytes: file.size,
  })) as unknown as {
    id: string;
    chunkSize: number;
    chunks: number;
    uploadedParts: string[];
    result?: AttachmentResult;
  };
  if (session.result) {
    onProgress?.(100);
    return session.result;
  }
  const done = new Set(session.uploadedParts.map(Number));
  const progress = new Map<number, number>();
  for (const index of done)
    progress.set(index, Math.min(session.chunkSize, file.size - index * session.chunkSize));
  const report = () =>
    onProgress?.(
      Math.min(
        95,
        Math.round(([...progress.values()].reduce((sum, n) => sum + n, 0) / file.size) * 95)
      )
    );
  report();
  const pending = Array.from({ length: session.chunks }, (_, i) => i).filter((i) => !done.has(i));
  // Keep memory and simultaneous requests bounded on mobile connections.
  for (let start = 0; start < pending.length; start += 3) {
    await Promise.all(
      pending.slice(start, start + 3).map(async (index) => {
        const part = file.slice(
          index * session.chunkSize,
          Math.min(file.size, (index + 1) * session.chunkSize)
        );
        await apiClient.put(`/chat/uploads/${session.id}/parts/${index}`, part, {
          headers: { 'Content-Type': 'application/octet-stream' },
          timeout: 120_000,
          onUploadProgress: (event) => {
            progress.set(index, event.loaded);
            report();
          },
        });
        progress.set(index, part.size);
        report();
      })
    );
  }
  const result = (await apiClient.post(
    `/chat/uploads/${session.id}/complete`,
    {},
    { timeout: 180_000 }
  )) as unknown as AttachmentResult;
  onProgress?.(100);
  return result;
}

export function voiceRecordingMime(): string | undefined {
  return ['audio/mp4', 'audio/webm;codecs=opus', 'audio/webm', 'audio/ogg;codecs=opus'].find(
    (type) => MediaRecorder.isTypeSupported(type)
  );
}
export function voiceRecordingFile(blob: Blob): File {
  const mime = blob.type.split(';')[0] || 'audio/webm';
  const extension =
    mime === 'audio/mp4'
      ? 'm4a'
      : mime === 'audio/ogg'
        ? 'ogg'
        : mime === 'audio/mpeg'
          ? 'mp3'
          : 'webm';
  return new File([blob], `voice-${Date.now()}.${extension}`, { type: mime });
}
