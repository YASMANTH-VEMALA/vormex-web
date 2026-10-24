import assert from 'node:assert/strict';
import test from 'node:test';
import { Upload } from 'tus-js-client';
import { reelsApi } from '../src/lib/api/reels';
import { uploadReelVideo } from '../src/lib/reels/upload';

test('reel uploads use signed TUS chunks and retry finalization without creating a second video', async (t) => {
  const file = new File(['video bytes'], 'clip.mp4', { type: 'video/mp4' });
  const issued = t.mock.method(
    reelsApi,
    'getUploadUrl',
    async (input: { mimeType: string; sizeBytes: number }) => {
      assert.deepEqual(input, { mimeType: 'video/mp4', sizeBytes: file.size });
      return {
        videoId: 'video-1',
        uploadUrl: 'https://video.bunnycdn.com/tusupload',
        expiresAt: Date.now() + 60000,
        uploadToken: 'app-token',
        uploadHeaders: {
          AuthorizationSignature: 'scoped-signature',
          AuthorizationExpire: '123',
          VideoId: 'video-1',
          LibraryId: 'library-1',
          'X-Vormex-Upload-Token': 'app-token',
        },
      } as never;
    }
  );
  const transfer = t.mock.method(Upload.prototype, 'start', function (this: Upload) {
    assert.equal(this.options.chunkSize, 5 * 1024 * 1024);
    assert.equal(this.options.storeFingerprintForResuming, false);
    assert.equal(this.options.headers?.['X-Vormex-Upload-Token'], undefined);
    assert.equal(this.options.metadata?.filetype, 'video/mp4');
    this.options.onProgress?.(file.size, file.size);
    this.options.onSuccess?.({} as never);
  });
  let tries = 0;
  t.mock.method(reelsApi, 'onUploadComplete', async (id: string, body: Record<string, unknown>) => {
    assert.equal(id, 'video-1');
    assert.equal(body.uploadToken, 'app-token');
    assert.equal(body.allowComments, false);
    assert.equal(body.saveAsDraft, true);
    if (++tries === 1) throw Error('Lost completion response');
    return { id: 'reel-1' } as never;
  });
  const metadata = { allowComments: false, saveAsDraft: true },
    progress: number[] = [];
  await assert.rejects(
    uploadReelVideo(file, metadata, (p) => progress.push(p)),
    /Lost completion/
  );
  assert.deepEqual(await uploadReelVideo(file, metadata, (p) => progress.push(p)), {
    id: 'reel-1',
  });
  assert.equal(issued.mock.callCount(), 1);
  assert.equal(transfer.mock.callCount(), 1);
  assert.equal(progress.at(-1), 100);
});

test('invalid reel files fail before issuing a provider credential', async (t) => {
  const issued = t.mock.method(reelsApi, 'getUploadUrl', async () => {
    throw Error('must not issue');
  });
  await assert.rejects(
    uploadReelVideo(new File(['text'], 'bad.txt', { type: 'text/plain' }), {}, () => {}),
    /MP4/
  );
  await assert.rejects(
    uploadReelVideo(new File([], 'empty.mp4', { type: 'video/mp4' }), {}, () => {}),
    /150 MB/
  );
  assert.equal(issued.mock.callCount(), 0);
});

test('manual retry resumes the same TUS resource after an interrupted transfer', async (t) => {
  const file = new File(['video bytes'], 'resume.mp4', { type: 'video/mp4' });
  const issued = t.mock.method(
    reelsApi,
    'getUploadUrl',
    async () =>
      ({
        videoId: 'resume-video',
        uploadUrl: 'https://video.bunnycdn.com/tusupload',
        expiresAt: Date.now() + 60000,
        uploadToken: 'token',
        uploadHeaders: {},
      }) as never
  );
  let attempt = 0;
  t.mock.method(Upload.prototype, 'start', function (this: Upload) {
    if (++attempt === 1) {
      this.url = 'https://video.bunnycdn.com/tusupload/resource';
      this.options.onUploadUrlAvailable?.();
      this.options.onError?.(new Error('connection lost') as never);
    } else {
      assert.equal(this.options.uploadUrl, 'https://video.bunnycdn.com/tusupload/resource');
      this.options.onSuccess?.({} as never);
    }
  });
  t.mock.method(reelsApi, 'onUploadComplete', async () => ({ id: 'resumed' }) as never);
  await assert.rejects(
    uploadReelVideo(file, {}, () => {}),
    /interrupted/
  );
  assert.deepEqual(await uploadReelVideo(file, {}, () => {}), { id: 'resumed' });
  assert.equal(issued.mock.callCount(), 1);
});
