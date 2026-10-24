'use client';
import { SelectedAudioCard } from '@/components/audio/AudioPickerDialog';
import { cn } from '@/lib/utils';
import {
  Calendar,
  ChevronDown,
  Code,
  Download,
  Eye,
  Hash,
  Loader2,
  MessageCircle,
  Music,
  Save,
  Share2,
  Users,
  X,
} from 'lucide-react';
import type * as React from 'react';

interface ReelCreateFieldsProps {
  allowComments: boolean;
  allowDownload: boolean;
  allowDuets: boolean;
  allowSharing: boolean;
  allowStitch: boolean;
  caption: string;
  codeFileName: string;
  codeLanguage: string;
  codeSnippet: string;
  error: string | null;
  handleAddHashtag: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleClose: () => void;
  handleRemoveHashtag: (tag: string) => void;
  handleThumbnailSelect: (e: React.ChangeEvent<HTMLInputElement, Element>) => void;
  handleUpload: () => Promise<void>;
  hashtagInput: string;
  hashtags: string[];
  isLoadingSelectedAudio: boolean;
  isUploading: boolean;
  repoUrl: string;
  saveAsDraft: boolean;
  scheduledAt: string;
  selectedMusic: import('@/types/music').MusicAttachment | null;
  selectedThumbnail: File | null;
  setAllowComments: React.Dispatch<React.SetStateAction<boolean>>;
  setAllowDownload: React.Dispatch<React.SetStateAction<boolean>>;
  setAllowDuets: React.Dispatch<React.SetStateAction<boolean>>;
  setAllowSharing: React.Dispatch<React.SetStateAction<boolean>>;
  setAllowStitch: React.Dispatch<React.SetStateAction<boolean>>;
  setAudioId: React.Dispatch<React.SetStateAction<string>>;
  setCaption: React.Dispatch<React.SetStateAction<string>>;
  setCodeFileName: React.Dispatch<React.SetStateAction<string>>;
  setCodeLanguage: React.Dispatch<React.SetStateAction<string>>;
  setCodeSnippet: React.Dispatch<React.SetStateAction<string>>;
  setHashtagInput: React.Dispatch<React.SetStateAction<string>>;
  setRepoUrl: React.Dispatch<React.SetStateAction<string>>;
  setSaveAsDraft: React.Dispatch<React.SetStateAction<boolean>>;
  setScheduledAt: React.Dispatch<React.SetStateAction<string>>;
  setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>;
  setSelectedMusic: React.Dispatch<
    React.SetStateAction<import('@/types/music').MusicAttachment | null>
  >;
  setSelectedThumbnail: React.Dispatch<React.SetStateAction<File | null>>;
  setShowAdvanced: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAudioPicker: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCodeSection: React.Dispatch<React.SetStateAction<boolean>>;
  setThumbnailPreviewUrl: React.Dispatch<React.SetStateAction<string | null>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setVideoPreviewUrl: React.Dispatch<React.SetStateAction<string | null>>;
  setVisibility: React.Dispatch<React.SetStateAction<'public' | 'connections' | 'private'>>;
  showAdvanced: boolean;
  showCodeSection: boolean;
  thumbnailInputRef: React.RefObject<HTMLInputElement | null>;
  thumbnailPreviewUrl: string | null;
  title: string;
  uploadProgress: number;
  videoPreviewUrl: string | null;
  visibility: 'public' | 'connections' | 'private';
}

export function ReelCreateFields({
  allowComments,
  allowDownload,
  allowDuets,
  allowSharing,
  allowStitch,
  caption,
  codeFileName,
  codeLanguage,
  codeSnippet,
  error,
  handleAddHashtag,
  handleClose,
  handleRemoveHashtag,
  handleThumbnailSelect,
  handleUpload,
  hashtagInput,
  hashtags,
  isLoadingSelectedAudio,
  isUploading,
  repoUrl,
  saveAsDraft,
  scheduledAt,
  selectedMusic,
  selectedThumbnail,
  setAllowComments,
  setAllowDownload,
  setAllowDuets,
  setAllowSharing,
  setAllowStitch,
  setAudioId,
  setCaption,
  setCodeFileName,
  setCodeLanguage,
  setCodeSnippet,
  setHashtagInput,
  setRepoUrl,
  setSaveAsDraft,
  setScheduledAt,
  setSelectedFile,
  setSelectedMusic,
  setSelectedThumbnail,
  setShowAdvanced,
  setShowAudioPicker,
  setShowCodeSection,
  setThumbnailPreviewUrl,
  setTitle,
  setVideoPreviewUrl,
  setVisibility,
  showAdvanced,
  showCodeSection,
  thumbnailInputRef,
  thumbnailPreviewUrl,
  title,
  uploadProgress,
  videoPreviewUrl,
  visibility,
}: ReelCreateFieldsProps) {
  return (
    <div className="space-y-6">
      <div className="flex gap-6">
        <div className="w-48 flex-shrink-0 space-y-3">
          <div className="aspect-[9/16] bg-black rounded-xl overflow-hidden relative">
            <video
              src={videoPreviewUrl || undefined}
              className="w-full h-full object-cover"
              controls
              muted
            />
            <button
              onClick={() => {
                setSelectedFile(null);
                if (videoPreviewUrl) {
                  URL.revokeObjectURL(videoPreviewUrl);
                  setVideoPreviewUrl(null);
                }
              }}
              className="absolute top-2 right-2 p-1 bg-black/50 rounded-full"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Custom thumbnail (optional)</label>
            <div
              onClick={() => thumbnailInputRef.current?.click()}
              className="aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden border-2 border-dashed border-neutral-300 dark:border-neutral-600 cursor-pointer hover:border-blue-500 flex items-center justify-center"
            >
              {thumbnailPreviewUrl ? (
                <img
                  src={thumbnailPreviewUrl}
                  alt="Thumbnail"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-neutral-500 text-sm">Add thumbnail</span>
              )}
            </div>
            <input
              ref={thumbnailInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={handleThumbnailSelect}
              className="hidden"
            />
            {selectedThumbnail && (
              <button
                type="button"
                onClick={() => {
                  setSelectedThumbnail(null);
                  if (thumbnailPreviewUrl) URL.revokeObjectURL(thumbnailPreviewUrl);
                  setThumbnailPreviewUrl(null);
                }}
                className="mt-1 text-xs text-red-500 hover:underline"
              >
                Remove thumbnail
              </button>
            )}
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title (optional)</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Add a title..."
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Caption</label>
            <textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Write a caption... Use @mentions and #hashtags"
              rows={3}
              maxLength={2200}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            />
            <p className="text-right text-sm text-gray-500 mt-1">{caption.length}/2200</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              <Hash className="w-4 h-4 inline mr-1" />
              Hashtags
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {hashtags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm flex items-center gap-1"
                >
                  #{tag}
                  <button onClick={() => handleRemoveHashtag(tag)}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
            <input
              type="text"
              value={hashtagInput}
              onChange={(e) => setHashtagInput(e.target.value)}
              onKeyDown={handleAddHashtag}
              placeholder="Add hashtags (press Enter)"
              disabled={hashtags.length >= 10}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              <Music className="w-4 h-4 inline mr-1" />
              Song
            </label>

            {selectedMusic ? (
              <SelectedAudioCard
                music={selectedMusic}
                tone="light"
                onChange={() => setShowAudioPicker(true)}
                onRemove={() => {
                  setAudioId('');
                  setSelectedMusic(null);
                }}
              />
            ) : (
              <button
                type="button"
                onClick={() => setShowAudioPicker(true)}
                className="w-full rounded-xl border border-dashed border-gray-300 px-4 py-4 text-left text-sm text-gray-600 transition hover:border-blue-500 hover:text-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:text-white"
              >
                Choose a song from the audio library
              </button>
            )}

            {isLoadingSelectedAudio && (
              <p className="mt-2 text-xs text-gray-500">Loading selected audio...</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              <Eye className="w-4 h-4 inline mr-1" />
              Visibility
            </label>
            <select
              value={visibility}
              onChange={(e) => setVisibility(e.target.value as typeof visibility)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="public">Public - Anyone can view</option>
              <option value="connections">Connections - Only connections can view</option>
              <option value="private">Private - Only you can view</option>
            </select>
          </div>

          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={saveAsDraft}
                onChange={(e) => setSaveAsDraft(e.target.checked)}
                className="rounded"
              />
              <Save className="w-4 h-4" />
              <span>Save as draft</span>
            </label>
            {!saveAsDraft && (
              <div>
                <label className="flex items-center gap-2 text-sm mb-1">
                  <Calendar className="w-4 h-4" />
                  Schedule for later
                </label>
                <input
                  type="datetime-local"
                  value={scheduledAt}
                  onChange={(e) => setScheduledAt(e.target.value)}
                  min={new Date().toISOString().slice(0, 16)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowCodeSection(!showCodeSection)}
        className="flex items-center gap-2 text-sm text-blue-500 hover:text-blue-600"
      >
        <Code className="w-4 h-4" />
        {showCodeSection ? 'Hide code snippet' : 'Add code snippet (for dev reels)'}
        <ChevronDown
          className={cn('w-4 h-4 transition-transform', showCodeSection && 'rotate-180')}
        />
      </button>

      {showCodeSection && (
        <div className="space-y-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
          <div>
            <label className="block text-sm font-medium mb-1">Code</label>
            <textarea
              value={codeSnippet}
              onChange={(e) => setCodeSnippet(e.target.value)}
              placeholder="Paste your code here..."
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 font-mono text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Language</label>
              <input
                type="text"
                value={codeLanguage}
                onChange={(e) => setCodeLanguage(e.target.value)}
                placeholder="e.g., JavaScript"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">File name</label>
              <input
                type="text"
                value={codeFileName}
                onChange={(e) => setCodeFileName(e.target.value)}
                placeholder="e.g., app.js"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Repository URL (optional)</label>
            <input
              type="url"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              placeholder="https://github.com/..."
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>
      )}

      <button
        onClick={() => setShowAdvanced(!showAdvanced)}
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700"
      >
        Advanced settings
        <ChevronDown className={cn('w-4 h-4 transition-transform', showAdvanced && 'rotate-180')} />
      </button>

      {showAdvanced && (
        <div className="space-y-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
          <label className="flex items-center justify-between cursor-pointer">
            <span className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Allow comments
            </span>
            <input
              type="checkbox"
              checked={allowComments}
              onChange={(e) => setAllowComments(e.target.checked)}
              className="w-5 h-5 rounded"
            />
          </label>
          <label className="flex items-center justify-between cursor-pointer">
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Allow duets
            </span>
            <input
              type="checkbox"
              checked={allowDuets}
              onChange={(e) => setAllowDuets(e.target.checked)}
              className="w-5 h-5 rounded"
            />
          </label>
          <label className="flex items-center justify-between cursor-pointer">
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Allow stitch
            </span>
            <input
              type="checkbox"
              checked={allowStitch}
              onChange={(e) => setAllowStitch(e.target.checked)}
              className="w-5 h-5 rounded"
            />
          </label>
          <label className="flex items-center justify-between cursor-pointer">
            <span className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Allow download
            </span>
            <input
              type="checkbox"
              checked={allowDownload}
              onChange={(e) => setAllowDownload(e.target.checked)}
              className="w-5 h-5 rounded"
            />
          </label>
          <label className="flex items-center justify-between cursor-pointer">
            <span className="flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Allow sharing
            </span>
            <input
              type="checkbox"
              checked={allowSharing}
              onChange={(e) => setAllowSharing(e.target.checked)}
              className="w-5 h-5 rounded"
            />
          </label>
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl">
          {error}
        </div>
      )}

      <div className="flex gap-4">
        <button
          onClick={handleClose}
          className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleUpload}
          disabled={isUploading}
          className="flex-1 px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isUploading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Uploading... {uploadProgress}%
            </>
          ) : (
            'Post'
          )}
        </button>
      </div>
    </div>
  );
}
