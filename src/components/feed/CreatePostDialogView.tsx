'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Globe, Loader2, X } from 'lucide-react';
import React from 'react';
import { UserAvatar } from '@/components/ui/UserAvatar';
import { CreatePostFields } from './CreatePostFields';
import { ImageEditor } from './ImageEditor';

interface CreatePostDialogViewProps {
  CELEBRATION_TYPES: {
    value: import('@/types/post').CelebrationType;
    label: string;
    emoji: string;
  }[];
  COLOR_PRESETS: { name: string; value: string }[];
  POST_TYPES: {
    type: import('@/types/post').PostType;
    icon: React.ForwardRefExoticComponent<
      Omit<import('lucide-react/dist/lucide-react').LucideProps, 'ref'> &
        React.RefAttributes<SVGSVGElement>
    >;
    label: string;
  }[];
  VISIBILITY_OPTIONS: {
    value: import('@/types/post').PostVisibility;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
  addPollOption: () => void;
  articleTags: string[];
  articleTitle: string;
  celebrationType: import('@/types/post').CelebrationType | null;
  colorPickerRef: React.RefObject<HTMLDivElement | null>;
  content: string;
  contentRef: React.RefObject<HTMLTextAreaElement | null>;
  editingImageIndex: number | null;
  error: string | null;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  handleAddTag: () => void;
  handleBold: () => void;
  handleCenter: () => void;
  handleCode: () => void;
  handleColorInsert: (colorValue: string) => void;
  handleContentChange: (e: React.ChangeEvent<HTMLTextAreaElement, Element>) => void;
  handleEditedImageSave: (blob: Blob) => void;
  handleImageSelect: (e: React.ChangeEvent<HTMLInputElement, Element>) => void;
  handleItalic: () => void;
  handleList: () => void;
  handleMentionClick: () => void;
  handlePollOptionChange: (index: number, value: string) => void;
  handleSubmit: () => Promise<void>;
  handleVideoSelect: (e: React.ChangeEvent<HTMLInputElement, Element>) => void;
  imagePreviews: string[];
  images: File[];
  insertMention: (user: import('@/types/post').MentionUser) => void;
  isSubmitting: boolean;
  linkPreview: import('@/components/feed/CreatePostModal.types').LinkPreview | null;
  linkUrl: string;
  mentionStatus: string;
  mentionResults: import('@/types/post').MentionUser[];
  onClose: () => void;
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
  setPostType: React.Dispatch<React.SetStateAction<import('@/types/post').PostType>>;
  setShowColorPicker: React.Dispatch<React.SetStateAction<boolean>>;
  setShowResultsBeforeVote: React.Dispatch<React.SetStateAction<boolean>>;
  setShowVisibilityDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  setTagInput: React.Dispatch<React.SetStateAction<string>>;
  setVideo: React.Dispatch<React.SetStateAction<File | null>>;
  setVideoPreview: React.Dispatch<React.SetStateAction<string | null>>;
  setVisibility: React.Dispatch<React.SetStateAction<import('@/types/post').PostVisibility>>;
  showColorPicker: boolean;
  showMentionDropdown: boolean;
  showResultsBeforeVote: boolean;
  showVisibilityDropdown: boolean;
  tagInput: string;
  user: import('@/types/auth').User | null;
  videoInputRef: React.RefObject<HTMLInputElement | null>;
  videoPreview: string | null;
  visibility: import('@/types/post').PostVisibility;
}

export function CreatePostDialogView({
  CELEBRATION_TYPES,
  COLOR_PRESETS,
  POST_TYPES,
  VISIBILITY_OPTIONS,
  addPollOption,
  articleTags,
  articleTitle,
  celebrationType,
  colorPickerRef,
  content,
  contentRef,
  editingImageIndex,
  error,
  fileInputRef,
  handleAddTag,
  handleBold,
  handleCenter,
  handleCode,
  handleColorInsert,
  handleContentChange,
  handleEditedImageSave,
  handleImageSelect,
  handleItalic,
  handleList,
  handleMentionClick,
  handlePollOptionChange,
  handleSubmit,
  handleVideoSelect,
  imagePreviews,
  images,
  insertMention,
  isSubmitting,
  linkPreview,
  linkUrl,
  mentionStatus,
  mentionResults,
  onClose,
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
  setPostType,
  setShowColorPicker,
  setShowResultsBeforeVote,
  setShowVisibilityDropdown,
  setTagInput,
  setVideo,
  setVideoPreview,
  setVisibility,
  showColorPicker,
  showMentionDropdown,
  showResultsBeforeVote,
  showVisibilityDropdown,
  tagInput,
  user,
  videoInputRef,
  videoPreview,
  visibility,
}: CreatePostDialogViewProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        {/* Modal */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="create-post-title"
          className="relative w-full max-w-xl max-h-[90dvh] flex flex-col shadow-2xl text-[var(--foreground)]"
          style={{
            background: 'var(--card)',
            borderRadius: '20px',
            border: '1px solid var(--border)',
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-5 py-3 border-b flex-shrink-0"
            style={{ borderColor: 'var(--border)' }}
          >
            <h2 id="create-post-title" className="text-base font-semibold text-[var(--foreground)]">
              Create Post
            </h2>
            <button
              onClick={onClose}
              aria-label="Close create post"
              className="p-2 rounded-full transition-colors hover:bg-[var(--accent)]"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
              }}
            >
              <X className="w-5 h-5 text-[var(--muted-foreground)]" />
            </button>
          </div>

          {/* User Info */}
          <div className="flex items-center gap-3 px-5 py-4 flex-shrink-0">
            <UserAvatar
              imageSrc={user?.profileImage}
              name={user?.name}
              className="h-11 w-11 shrink-0"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold text-[var(--foreground)]">{user?.name}</p>
              {/* Visibility Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowVisibilityDropdown(!showVisibilityDropdown)}
                  aria-expanded={showVisibilityDropdown}
                  className="flex items-center gap-1 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  {(() => {
                    const opt = VISIBILITY_OPTIONS.find((o) => o.value === visibility);
                    const Icon = opt?.icon || Globe;
                    return (
                      <>
                        <Icon className="w-4 h-4" />
                        <span>{opt?.label}</span>
                        <ChevronDown className="w-3 h-3" />
                      </>
                    );
                  })()}
                </button>

                {showVisibilityDropdown && (
                  <div
                    className="absolute top-full left-0 mt-1 py-1 rounded-lg z-10"
                    style={{
                      background: 'var(--card)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    {VISIBILITY_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => {
                          setVisibility(opt.value);
                          setShowVisibilityDropdown(false);
                        }}
                        className="flex items-center gap-2 w-full px-4 py-2 text-sm text-[var(--foreground)] hover:bg-[var(--accent)] transition-colors"
                      >
                        <opt.icon className="w-4 h-4" />
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <label className="flex shrink-0 flex-col gap-1 text-[10px] font-medium uppercase tracking-wide text-[var(--muted-foreground)]">
              Post type
              <select
                aria-label="Post type"
                value={postType}
                onChange={(event) =>
                  setPostType(event.target.value as import('@/types/post').PostType)
                }
                className="max-w-32 rounded-lg border border-[var(--border)] bg-[var(--card)] px-2 py-1.5 text-sm font-medium normal-case tracking-normal text-[var(--foreground)] outline-none focus:ring-2 focus:ring-[var(--ring)]"
              >
                {POST_TYPES.map(({ type, label }) => (
                  <option key={type} value={type}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* Content Area */}
          <CreatePostFields
            CELEBRATION_TYPES={CELEBRATION_TYPES}
            COLOR_PRESETS={COLOR_PRESETS}
            addPollOption={addPollOption}
            articleTags={articleTags}
            articleTitle={articleTitle}
            celebrationType={celebrationType}
            colorPickerRef={colorPickerRef}
            content={content}
            contentRef={contentRef}
            error={error}
            fileInputRef={fileInputRef}
            handleAddTag={handleAddTag}
            handleBold={handleBold}
            handleCenter={handleCenter}
            handleCode={handleCode}
            handleColorInsert={handleColorInsert}
            handleContentChange={handleContentChange}
            handleImageSelect={handleImageSelect}
            handleItalic={handleItalic}
            handleList={handleList}
            handleMentionClick={handleMentionClick}
            handlePollOptionChange={handlePollOptionChange}
            handleVideoSelect={handleVideoSelect}
            imagePreviews={imagePreviews}
            images={images}
            insertMention={insertMention}
            linkPreview={linkPreview}
            linkUrl={linkUrl}
            mentionStatus={mentionStatus}
            mentionResults={mentionResults}
            pollDuration={pollDuration}
            pollOptions={pollOptions}
            postType={postType}
            removeImage={removeImage}
            removePollOption={removePollOption}
            setArticleTags={setArticleTags}
            setArticleTitle={setArticleTitle}
            setCelebrationType={setCelebrationType}
            setEditingImageIndex={setEditingImageIndex}
            setLinkUrl={setLinkUrl}
            setPollDuration={setPollDuration}
            setShowColorPicker={setShowColorPicker}
            setShowResultsBeforeVote={setShowResultsBeforeVote}
            setTagInput={setTagInput}
            setVideo={setVideo}
            setVideoPreview={setVideoPreview}
            showColorPicker={showColorPicker}
            showMentionDropdown={showMentionDropdown}
            showResultsBeforeVote={showResultsBeforeVote}
            tagInput={tagInput}
            videoInputRef={videoInputRef}
            videoPreview={videoPreview}
          />

          {/* Footer */}
          <div
            className="flex items-center justify-between px-5 py-3 border-t flex-shrink-0"
            style={{ borderColor: 'var(--border)' }}
          >
            <p className="text-xs text-[var(--muted-foreground)]">Use @ to mention someone</p>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="px-8 py-2.5 rounded-lg font-semibold text-white transition-colors hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-base"
              style={{
                background: 'var(--primary)',
                border: '1px solid var(--border)',
              }}
            >
              {isSubmitting ? (
                <Loader2 aria-label="Posting" className="w-5 h-5 animate-spin" />
              ) : (
                'Post'
              )}
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Image Editor Modal */}
      {editingImageIndex !== null && (
        <ImageEditor
          isOpen={editingImageIndex !== null}
          imageUrl={imagePreviews[editingImageIndex]}
          onClose={() => setEditingImageIndex(null)}
          onSave={handleEditedImageSave}
        />
      )}
    </AnimatePresence>
  );
}
