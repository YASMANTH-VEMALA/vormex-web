import assert from 'node:assert/strict';
import test from 'node:test';
import apiClient from '../src/lib/api/client';
import {
  attachmentMime,
  uploadAttachment,
  voiceRecordingFile,
  voiceRecordingMime,
} from '../src/lib/chat/attachmentUpload';

test('attachment retries resume received parts and keep every request below the gateway limit', async (t) => {
  const partSize = 2 * 1024 * 1024;
  const file = new File([new Uint8Array(partSize * 2 + 25)], 'photo.png', { type: 'image/png' });
  const uploaded: { url: string; size: number }[] = [];
  const result = {
    mediaUrl: 'https://cdn.example.com/file.png',
    fileName: 'photo.png',
    fileSize: file.size,
    mediaType: 'image',
  };
  t.mock.method(apiClient, 'post', async (url: unknown) => {
    if (url === '/chat/uploads')
      return { id: 'upload', chunkSize: partSize, chunks: 3, uploadedParts: ['0'] } as never;
    assert.equal(url, '/chat/uploads/upload/complete');
    return result as never;
  });
  t.mock.method(apiClient, 'put', async (url: unknown, body: unknown) => {
    assert.ok(body instanceof Blob);
    uploaded.push({ url: String(url), size: body.size });
    return {} as never;
  });
  const progress: number[] = [];
  assert.deepEqual(
    await uploadAttachment(file, (p) => progress.push(p), 'stable-message-id'),
    result
  );
  assert.deepEqual(
    uploaded.map((p) => p.url),
    ['/chat/uploads/upload/parts/1', '/chat/uploads/upload/parts/2']
  );
  assert.ok(uploaded.every((p) => p.size <= partSize));
  assert.equal(progress.at(-1), 100);
});

test('completed uploads recover a lost response without uploading the file again', async (t) => {
  const result = {
    mediaUrl: 'https://cdn.example.com/doc.pdf',
    fileName: 'doc.pdf',
    fileSize: 10,
    mediaType: 'document',
  };
  t.mock.method(apiClient, 'post', async () => ({ result }) as never);
  const put = t.mock.method(apiClient, 'put', async () => ({}) as never);
  assert.deepEqual(
    await uploadAttachment(new File(['document'], 'doc.pdf', { type: 'application/pdf' })),
    result
  );
  assert.equal(put.mock.callCount(), 0);
});

test('Safari voice recording chooses supported MP4 and keeps the M4A file type', (t) => {
  const original = Object.getOwnPropertyDescriptor(globalThis, 'MediaRecorder');
  Object.defineProperty(globalThis, 'MediaRecorder', {
    configurable: true,
    value: { isTypeSupported: (mime: string) => mime === 'audio/mp4' },
  });
  t.after(() => {
    if (original) Object.defineProperty(globalThis, 'MediaRecorder', original);
    else Reflect.deleteProperty(globalThis, 'MediaRecorder');
  });
  assert.equal(voiceRecordingMime(), 'audio/mp4');
  const file = voiceRecordingFile(new Blob(['sample'], { type: 'audio/mp4;codecs=mp4a.40.2' }));
  assert.equal(file.type, 'audio/mp4');
  assert.match(file.name, /\.m4a$/);
  assert.equal(
    attachmentMime({ name: 'document.docx', type: '' }),
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  );
});
