'use client';
import { useSyncedState } from '@/hooks/useSyncedState';
import { useAuth as useResourceAuth } from '@/lib/auth/useAuth';
import { useQuery } from '@tanstack/react-query';

import type { ReelCreateProps } from './ReelCreate.types';
import { ReelCreateFields } from './ReelCreateFields';
export type { ReelCreateProps } from './ReelCreate.types';

import { AudioPickerDialog } from '@/components/audio/AudioPickerDialog';
import { asApiError } from '@/lib/api/errors';
import { audioApi, reelsApi, type Audio } from '@/lib/api/reels';
import { toMusicAttachment, type MusicAttachment } from '@/types/music';
import { Upload, X } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useRef, useState } from 'react';

export function ReelCreate({
  onClose,
  initialOriginalReelId,
  initialResponseType,
  initialAudioId,
}: ReelCreateProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const thumbnailInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [videoPreviewUrl, setVideoPreviewUrl] = useState<string | null>(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState<File | null>(null);
  const [thumbnailPreviewUrl, setThumbnailPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [hashtagInput, setHashtagInput] = useState('');
  const [visibility, setVisibility] = useState<'public' | 'connections' | 'private'>('public');
  const [allowComments, setAllowComments] = useState(true);
  const [allowDuets, setAllowDuets] = useState(true);
  const [allowStitch, setAllowStitch] = useState(true);
  const [allowDownload, setAllowDownload] = useState(true);
  const [allowSharing, setAllowSharing] = useState(true);

  const [saveAsDraft, setSaveAsDraft] = useState(false);
  const [scheduledAt, setScheduledAt] = useState('');
  const originalReelId =
    searchParams.get('stitch') || searchParams.get('duet') || initialOriginalReelId || '';
  const responseType = searchParams.get('stitch')
    ? 'stitch'
    : searchParams.get('duet')
      ? 'duet'
      : initialResponseType || '';
  const [audioId, setAudioId] = useSyncedState(searchParams.get('audio') || initialAudioId || '');
  const resourceViewer = useResourceAuth().user;
  const audioResource = useQuery({
    queryKey: ['reel-audio', resourceViewer?.id, audioId],
    queryFn: async () => toMusicAttachment((await audioApi.getAudio(audioId)) as unknown as Audio),
    enabled: !!audioId,
  });
  const [selectedMusic, setSelectedMusic] = useSyncedState<MusicAttachment | null>(
    audioResource.data ?? null,
    `${audioId}:${audioResource.dataUpdatedAt}`
  );
  const [showAudioPicker, setShowAudioPicker] = useState(false);
  const isLoadingSelectedAudio = !!audioId && audioResource.isPending;

  const [codeSnippet, setCodeSnippet] = useState('');
  const [codeLanguage, setCodeLanguage] = useState('');
  const [codeFileName, setCodeFileName] = useState('');
  const [repoUrl, setRepoUrl] = useState('');
  const [showCodeSection, setShowCodeSection] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('video/')) {
      setError('Please select a video file');
      return;
    }

    if (file.size > 150 * 1024 * 1024) {
      setError('Video must be less than 150MB');
      return;
    }

    setSelectedFile(file);
    setVideoPreviewUrl(URL.createObjectURL(file));
    setError(null);
    setSelectedThumbnail(null);
    setThumbnailPreviewUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
  }, []);

  const handleThumbnailSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      if (!file.type.startsWith('image/')) {
        setError('Thumbnail must be an image (JPEG, PNG, WebP)');
        return;
      }
      if (thumbnailPreviewUrl) URL.revokeObjectURL(thumbnailPreviewUrl);
      setSelectedThumbnail(file);
      setThumbnailPreviewUrl(URL.createObjectURL(file));
      setError(null);
    },
    [thumbnailPreviewUrl]
  );

  const handleAddHashtag = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' || e.key === ',') {
        e.preventDefault();
        const tag = hashtagInput.trim().replace(/^#/, '');
        if (tag && !hashtags.includes(tag) && hashtags.length < 10) {
          setHashtags([...hashtags, tag]);
          setHashtagInput('');
        }
      }
    },
    [hashtagInput, hashtags]
  );

  const handleRemoveHashtag = useCallback(
    (tag: string) => {
      setHashtags(hashtags.filter((t) => t !== tag));
    },
    [hashtags]
  );

  const handleUpload = useCallback(async () => {
    if (!selectedFile) return;

    try {
      setIsUploading(true);
      setUploadProgress(10);

      const formData = new FormData();
      formData.append('video', selectedFile);
      if (selectedThumbnail) formData.append('thumbnail', selectedThumbnail);
      formData.append('title', title);
      formData.append('caption', caption);
      formData.append('hashtags', JSON.stringify(hashtags));
      formData.append('visibility', visibility);
      formData.append('allowComments', String(allowComments));
      formData.append('allowDuets', String(allowDuets));
      formData.append('allowStitch', String(allowStitch));
      formData.append('allowDownload', String(allowDownload));
      formData.append('allowSharing', String(allowSharing));
      formData.append('saveAsDraft', String(saveAsDraft));
      if (scheduledAt) formData.append('scheduledAt', scheduledAt);
      if (originalReelId) formData.append('originalReelId', originalReelId);
      if (responseType) formData.append('responseType', responseType);
      if (audioId) formData.append('audioId', audioId);

      if (codeSnippet) {
        formData.append('codeSnippet', codeSnippet);
        formData.append('codeLanguage', codeLanguage);
        formData.append('codeFileName', codeFileName);
        formData.append('repoUrl', repoUrl);
      }

      setUploadProgress(30);

      const reel = await reelsApi.createReel(formData);

      setUploadProgress(100);

      if (saveAsDraft) {
        router.push('/reels/drafts');
      } else {
        router.push(`/reels/${(reel as unknown as { id: string }).id}`);
      }
    } catch (err: unknown) {
      console.error('Upload failed:', err);
      const apiError = asApiError(err);
      const msg =
        apiError.response?.data?.message || apiError.response?.data?.error || apiError.message;
      setError(msg || 'Failed to upload video. Please try again.');
    } finally {
      setIsUploading(false);
    }
  }, [
    selectedFile,
    selectedThumbnail,
    title,
    caption,
    hashtags,
    visibility,
    allowComments,
    allowDuets,
    allowStitch,
    allowDownload,
    allowSharing,
    codeSnippet,
    codeLanguage,
    codeFileName,
    repoUrl,
    audioId,
    saveAsDraft,
    scheduledAt,
    originalReelId,
    responseType,
    router,
  ]);

  const handleClose = useCallback(() => {
    if (videoPreviewUrl) {
      URL.revokeObjectURL(videoPreviewUrl);
    }
    onClose?.();
  }, [videoPreviewUrl, onClose]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-2xl mx-auto p-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Create Reel</h1>
          {onClose && (
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          )}
        </div>

        {!selectedFile ? (
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-2xl p-12 text-center cursor-pointer hover:border-blue-500 transition-colors"
          >
            <Upload className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <p className="text-lg font-medium mb-2">Upload a video</p>
            <p className="text-gray-500 text-sm mb-4">
              MP4, WebM, or MOV. Max 150MB. Recommended 9:16 aspect ratio.
            </p>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors">
              Select file
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="video/*"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>
        ) : (
          <ReelCreateFields
            allowComments={allowComments}
            allowDownload={allowDownload}
            allowDuets={allowDuets}
            allowSharing={allowSharing}
            allowStitch={allowStitch}
            caption={caption}
            codeFileName={codeFileName}
            codeLanguage={codeLanguage}
            codeSnippet={codeSnippet}
            error={error}
            handleAddHashtag={handleAddHashtag}
            handleClose={handleClose}
            handleRemoveHashtag={handleRemoveHashtag}
            handleThumbnailSelect={handleThumbnailSelect}
            handleUpload={handleUpload}
            hashtagInput={hashtagInput}
            hashtags={hashtags}
            isLoadingSelectedAudio={isLoadingSelectedAudio}
            isUploading={isUploading}
            repoUrl={repoUrl}
            saveAsDraft={saveAsDraft}
            scheduledAt={scheduledAt}
            selectedMusic={selectedMusic}
            selectedThumbnail={selectedThumbnail}
            setAllowComments={setAllowComments}
            setAllowDownload={setAllowDownload}
            setAllowDuets={setAllowDuets}
            setAllowSharing={setAllowSharing}
            setAllowStitch={setAllowStitch}
            setAudioId={setAudioId}
            setCaption={setCaption}
            setCodeFileName={setCodeFileName}
            setCodeLanguage={setCodeLanguage}
            setCodeSnippet={setCodeSnippet}
            setHashtagInput={setHashtagInput}
            setRepoUrl={setRepoUrl}
            setSaveAsDraft={setSaveAsDraft}
            setScheduledAt={setScheduledAt}
            setSelectedFile={setSelectedFile}
            setSelectedMusic={setSelectedMusic}
            setSelectedThumbnail={setSelectedThumbnail}
            setShowAdvanced={setShowAdvanced}
            setShowAudioPicker={setShowAudioPicker}
            setShowCodeSection={setShowCodeSection}
            setThumbnailPreviewUrl={setThumbnailPreviewUrl}
            setTitle={setTitle}
            setVideoPreviewUrl={setVideoPreviewUrl}
            setVisibility={setVisibility}
            showAdvanced={showAdvanced}
            showCodeSection={showCodeSection}
            thumbnailInputRef={thumbnailInputRef}
            thumbnailPreviewUrl={thumbnailPreviewUrl}
            title={title}
            uploadProgress={uploadProgress}
            videoPreviewUrl={videoPreviewUrl}
            visibility={visibility}
          />
        )}
      </div>

      <AudioPickerDialog
        isOpen={showAudioPicker}
        onClose={() => setShowAudioPicker(false)}
        onSelect={(audio) => {
          setAudioId(audio.id);
          setSelectedMusic(toMusicAttachment(audio));
          setShowAudioPicker(false);
        }}
        selectedAudioId={audioId || null}
        title="Pick reel audio"
        description="Choose the track this reel should use."
      />
    </div>
  );
}
