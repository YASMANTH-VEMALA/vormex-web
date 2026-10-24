'use client';
import { Image as ImageIcon, Pencil, Plus, Trash2, Video, X } from 'lucide-react';
import React from 'react';
import { ArticleEditor } from './ArticleEditor';

interface CreatePostFieldsProps {
  CELEBRATION_TYPES: {
    value: import('@/types/post').CelebrationType;
    label: string;
    emoji: string;
  }[];
  COLOR_PRESETS: { name: string; value: string }[];
  addPollOption: () => void;
  articleTags: string[];
  articleTitle: string;
  celebrationType: import('@/types/post').CelebrationType | null;
  colorPickerRef: React.RefObject<HTMLDivElement | null>;
  content: string;
  contentRef: React.RefObject<HTMLTextAreaElement | null>;
  error: string | null;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  handleAddTag: () => void;
  handleBold: () => void;
  handleCenter: () => void;
  handleCode: () => void;
  handleColorInsert: (colorValue: string) => void;
  handleContentChange: (e: React.ChangeEvent<HTMLTextAreaElement, Element>) => void;
  handleImageSelect: (e: React.ChangeEvent<HTMLInputElement, Element>) => void;
  handleItalic: () => void;
  handleList: () => void;
  handleMentionClick: () => void;
  handlePollOptionChange: (index: number, value: string) => void;
  handleVideoSelect: (e: React.ChangeEvent<HTMLInputElement, Element>) => void;
  imagePreviews: string[];
  images: File[];
  insertMention: (user: import('@/types/post').MentionUser) => void;
  linkPreview: import('@/components/feed/CreatePostModal.types').LinkPreview | null;
  linkUrl: string;
  mentionStatus: string;
  mentionResults: import('@/types/post').MentionUser[];
  pollDuration: number;
  pollOptions: string[];
  postType: import('@/types/post').PostType;
  removeImage: (index: number) => void;
  removePollOption: (index: number) => void;
  setArticleTags: React.Dispatch<React.SetStateAction<string[]>>;
  setArticleTitle: React.Dispatch<React.SetStateAction<string>>;
  setCelebrationType: React.Dispatch<
    React.SetStateAction<import('@/types/post').CelebrationType | null>
  >;
  setEditingImageIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setLinkUrl: React.Dispatch<React.SetStateAction<string>>;
  setPollDuration: React.Dispatch<React.SetStateAction<number>>;
  setShowColorPicker: React.Dispatch<React.SetStateAction<boolean>>;
  setShowResultsBeforeVote: React.Dispatch<React.SetStateAction<boolean>>;
  setTagInput: React.Dispatch<React.SetStateAction<string>>;
  setVideo: React.Dispatch<React.SetStateAction<File | null>>;
  setVideoPreview: React.Dispatch<React.SetStateAction<string | null>>;
  showColorPicker: boolean;
  showMentionDropdown: boolean;
  showResultsBeforeVote: boolean;
  tagInput: string;
  videoInputRef: React.RefObject<HTMLInputElement | null>;
  videoPreview: string | null;
}

export function CreatePostFields({
  CELEBRATION_TYPES,
  COLOR_PRESETS,
  addPollOption,
  articleTags,
  articleTitle,
  celebrationType,
  colorPickerRef,
  content,
  contentRef,
  error,
  fileInputRef,
  handleAddTag,
  handleBold,
  handleCenter,
  handleCode,
  handleColorInsert,
  handleContentChange,
  handleImageSelect,
  handleItalic,
  handleList,
  handleMentionClick,
  handlePollOptionChange,
  handleVideoSelect,
  imagePreviews,
  images,
  insertMention,
  linkPreview,
  linkUrl,
  mentionStatus,
  mentionResults,
  pollDuration,
  pollOptions,
  postType,
  removeImage,
  removePollOption,
  setArticleTags,
  setArticleTitle,
  setCelebrationType,
  setEditingImageIndex,
  setLinkUrl,
  setPollDuration,
  setShowColorPicker,
  setShowResultsBeforeVote,
  setTagInput,
  setVideo,
  setVideoPreview,
  showColorPicker,
  showMentionDropdown,
  showResultsBeforeVote,
  tagInput,
  videoInputRef,
  videoPreview,
}: CreatePostFieldsProps) {
  return (
    <div className="min-h-0 flex-1 px-5 pb-2 overflow-y-auto">
      {/* Error Message */}
      {error && <div className="mb-4 p-3 rounded-lg bg-red-100 text-red-700 text-sm">{error}</div>}

      {/* Rich Text Editor Area */}
      <ArticleEditor
        COLOR_PRESETS={COLOR_PRESETS}
        colorPickerRef={colorPickerRef}
        content={content}
        contentRef={contentRef}
        handleBold={handleBold}
        handleCenter={handleCenter}
        handleCode={handleCode}
        handleColorInsert={handleColorInsert}
        handleContentChange={handleContentChange}
        handleItalic={handleItalic}
        handleList={handleList}
        handleMentionClick={handleMentionClick}
        insertMention={insertMention}
        mentionStatus={mentionStatus}
        mentionResults={mentionResults}
        setShowColorPicker={setShowColorPicker}
        showColorPicker={showColorPicker}
        showMentionDropdown={showMentionDropdown}
      />

      {/* Post Type Specific Content */}
      {postType === 'IMAGE' && (
        <div className="mt-4">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageSelect}
            className="hidden"
          />

          {imagePreviews.length > 0 ? (
            <div className="space-y-3">
              {imagePreviews.map((preview, index) => (
                <div key={index} className="relative rounded-xl overflow-hidden bg-[var(--muted)]">
                  <img
                    src={preview}
                    alt=""
                    className="w-full max-h-[400px] object-contain mx-auto"
                    style={{ display: 'block' }}
                  />
                  <div className="absolute top-2 right-2 flex gap-2">
                    <button
                      onClick={() => setEditingImageIndex(index)}
                      className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors shadow-lg"
                      title="Edit image"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => removeImage(index)}
                      className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors shadow-lg"
                      title="Remove image"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="absolute bottom-2 left-2 px-2 py-1 rounded-full bg-black/50 text-white text-xs">
                    {index + 1} / {imagePreviews.length}
                  </div>
                </div>
              ))}
              {images.length < 10 && (
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full py-8 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <Plus className="w-6 h-6 text-[var(--muted-foreground)]" />
                  <span className="text-[var(--muted-foreground)]">Add more images</span>
                </button>
              )}
            </div>
          ) : (
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full py-12 rounded-xl flex flex-col items-center justify-center gap-2 transition-all hover:scale-[1.01]"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
              }}
            >
              <ImageIcon className="w-12 h-12 text-[var(--muted-foreground)]" />
              <span className="text-[var(--muted-foreground)]">Click to add images (max 10)</span>
              <span className="text-xs text-[var(--muted-foreground)]">Up to 10MB each</span>
            </button>
          )}
        </div>
      )}

      {postType === 'VIDEO' && (
        <div className="mt-4">
          <input
            ref={videoInputRef}
            type="file"
            accept="video/*"
            onChange={handleVideoSelect}
            className="hidden"
          />

          {videoPreview ? (
            <div className="relative rounded-xl overflow-hidden">
              <video
                src={videoPreview}
                controls
                className="w-full max-h-64 object-contain bg-black"
              />
              <button
                onClick={() => {
                  setVideo(null);
                  setVideoPreview(null);
                }}
                className="absolute top-2 right-2 p-2 rounded-full bg-red-500 text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => videoInputRef.current?.click()}
              className="w-full py-12 rounded-xl flex flex-col items-center justify-center gap-2 transition-all hover:scale-[1.01]"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
              }}
            >
              <Video className="w-12 h-12 text-[var(--muted-foreground)]" />
              <span className="text-[var(--muted-foreground)]">Click to add video</span>
              <span className="text-xs text-[var(--muted-foreground)]">Up to 500MB</span>
            </button>
          )}
        </div>
      )}

      {postType === 'LINK' && (
        <div className="mt-4">
          <div
            className="rounded-xl p-3"
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
            }}
          >
            <input
              type="url"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              placeholder="https://example.com"
              className="w-full bg-transparent outline-none text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]"
            />
          </div>

          {linkPreview && (
            <div
              className="mt-4 rounded-xl overflow-hidden"
              style={{ border: '1px solid var(--border)' }}
            >
              {linkPreview.image && (
                <img src={linkPreview.image} alt="" className="w-full h-40 object-cover" />
              )}
              <div className="p-3 bg-[var(--muted)]">
                <p className="font-semibold text-[var(--foreground)]">{linkPreview.title}</p>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">
                  {linkPreview.description}
                </p>
                <p className="text-xs text-[var(--muted-foreground)] mt-2">{linkPreview.domain}</p>
              </div>
            </div>
          )}
        </div>
      )}

      {postType === 'POLL' && (
        <div className="mt-4 space-y-3">
          {pollOptions.map((option, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="flex-1 rounded-xl p-3"
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                }}
              >
                <input
                  type="text"
                  value={option}
                  onChange={(e) => handlePollOptionChange(index, e.target.value)}
                  placeholder={`Option ${index + 1}`}
                  className="w-full bg-transparent outline-none text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]"
                />
              </div>
              {pollOptions.length > 2 && (
                <button
                  onClick={() => removePollOption(index)}
                  className="p-2 rounded-full text-red-500 hover:bg-red-50 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}

          {pollOptions.length < 6 && (
            <button
              onClick={addPollOption}
              className="flex items-center gap-2 text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add option
            </button>
          )}

          <div
            className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4 border-t"
            style={{ borderColor: 'var(--border)' }}
          >
            <div className="flex-1">
              <label className="text-sm text-[var(--muted-foreground)]">Poll duration</label>
              <select
                value={pollDuration}
                onChange={(e) => setPollDuration(Number(e.target.value))}
                className="w-full mt-1 p-2 rounded-lg bg-transparent text-[var(--foreground)] outline-none"
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                }}
              >
                <option value={1}>1 hour</option>
                <option value={6}>6 hours</option>
                <option value={12}>12 hours</option>
                <option value={24}>1 day</option>
                <option value={72}>3 days</option>
                <option value={168}>1 week</option>
              </select>
            </div>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showResultsBeforeVote}
                onChange={(e) => setShowResultsBeforeVote(e.target.checked)}
                className="w-4 h-4 rounded"
              />
              <span className="text-sm text-[var(--muted-foreground)]">
                Show results before voting
              </span>
            </label>
          </div>
        </div>
      )}

      {postType === 'ARTICLE' && (
        <div className="mt-4 space-y-4">
          <div
            className="rounded-xl p-3"
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
            }}
          >
            <input
              type="text"
              value={articleTitle}
              onChange={(e) => setArticleTitle(e.target.value)}
              placeholder="Article title"
              className="w-full bg-transparent outline-none text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] text-lg font-semibold"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {articleTags.map((tag, index) => (
              <span
                key={index}
                className="flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700"
              >
                {tag}
                <button
                  onClick={() => setArticleTags((tags) => tags.filter((_, i) => i !== index))}
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {articleTags.length < 5 && (
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                  placeholder="Add tag"
                  className="px-3 py-1 rounded-full text-sm bg-transparent outline-none text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]"
                  style={{
                    border: '1px solid var(--border)',
                  }}
                />
              </div>
            )}
          </div>
        </div>
      )}

      {postType === 'CELEBRATION' && (
        <div className="mt-4 grid grid-cols-2 gap-3">
          {CELEBRATION_TYPES.map(({ value, label, emoji }) => (
            <button
              key={value}
              onClick={() => setCelebrationType(value)}
              className={`p-4 rounded-xl text-left transition-all ${
                celebrationType === value ? 'ring-2 ring-blue-500' : ''
              }`}
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
              }}
            >
              <span className="text-2xl">{emoji}</span>
              <p className="mt-2 text-sm font-medium text-[var(--foreground)]">{label}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
