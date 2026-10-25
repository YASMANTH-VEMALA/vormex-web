'use client';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Images,
  ArrowUpRight,
  Clapperboard,
  MessageSquareText,
  Clock3,
  Loader2,
  Send,
  Trash2,
  Upload,
  X,
} from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { StoryMusicPicker } from './StoryMusicPicker';
import { StoryDetailsPanel } from './StoryDetailsPanel';
import type { StoryMusic } from '@/lib/stories/music';

interface StoryCreatorViewProps {
  music: StoryMusic | null;
  setMusic: (music: StoryMusic | null) => void;
  STORY_CATEGORIES: {
    value: import('@/lib/api/stories').StoryCategory;
    label: string;
    icon: React.ReactNode;
  }[];
  TEXT_BACKGROUNDS: string[];
  VISIBILITY_OPTIONS: {
    value: import('@/lib/api/stories').StoryVisibility;
    label: string;
    icon: React.ReactNode;
    desc: string;
  }[];
  canProceed: () => boolean;
  category: import('@/lib/api/stories').StoryCategory;
  error: string | null;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  goBack: () => void;
  handleClose: () => void;
  handleFileSelect: (e: React.ChangeEvent<HTMLInputElement, Element>) => void;
  handleRemoveMedia: () => void;
  handleSubmit: () => Promise<void>;
  handleTypeSelect: (type: import('@/components/stories/StoryCreator.types').StoryType) => void;
  isUploading: boolean;
  linkTitle: string;
  linkUrl: string;
  mediaPreview: string | null;
  setCategory: React.Dispatch<React.SetStateAction<import('@/lib/api/stories').StoryCategory>>;
  setLinkTitle: React.Dispatch<React.SetStateAction<string>>;
  setLinkUrl: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<
    React.SetStateAction<import('@/components/stories/StoryCreator.types').CreatorStep>
  >;
  setTextBackground: React.Dispatch<React.SetStateAction<string>>;
  setTextContent: React.Dispatch<React.SetStateAction<string>>;
  setVisibility: React.Dispatch<React.SetStateAction<import('@/lib/api/stories').StoryVisibility>>;
  step: import('@/components/stories/StoryCreator.types').CreatorStep;
  storyType: import('@/components/stories/StoryCreator.types').StoryType | null;
  textBackground: string;
  textContent: string;
  visibility: import('@/lib/api/stories').StoryVisibility;
}

export function StoryCreatorView({
  music,
  setMusic,
  STORY_CATEGORIES,
  TEXT_BACKGROUNDS,
  VISIBILITY_OPTIONS,
  canProceed,
  category,
  error,
  fileInputRef,
  goBack,
  handleClose,
  handleFileSelect,
  handleRemoveMedia,
  handleSubmit,
  handleTypeSelect,
  isUploading,
  linkTitle,
  linkUrl,
  mediaPreview,
  setCategory,
  setLinkTitle,
  setLinkUrl,
  setStep,
  setTextBackground,
  setTextContent,
  setVisibility,
  step,
  storyType,
  textBackground,
  textContent,
  visibility,
}: StoryCreatorViewProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
        onClick={handleClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="story-creator-title"
          className={`relative w-full max-w-lg max-h-[90dvh] bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden flex flex-col ${step === 'select-type' || step === 'details' ? '' : 'h-[min(700px,90dvh)]'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="shrink-0 flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center gap-2">
              {step !== 'select-type' && (
                <button
                  onClick={goBack}
                  aria-label="Go back"
                  className="w-8 h-8 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center justify-center"
                >
                  <ChevronLeft className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
                </button>
              )}
              <h2
                id="story-creator-title"
                className="text-lg font-semibold text-neutral-900 dark:text-white"
              >
                {step === 'select-type' && 'Create Story'}
                {step === 'upload-media' && 'Upload Media'}
                {step === 'edit' && 'Edit Story'}
                {step === 'details' && 'Story Details'}
              </h2>
            </div>
            <button
              onClick={handleClose}
              aria-label="Close story creator"
              className="w-8 h-8 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center justify-center"
            >
              <X className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
            </button>
          </div>

          {/* Content */}
          <div className="min-h-0 flex-1 overflow-y-auto">
            {/* Step 1: Select Type */}
            {step === 'select-type' && (
              <div className="p-5 sm:p-7">
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">
                    Your next update
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                    What would you like to share?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                    A moment, a milestone, or something on your mind.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      type: 'image' as const,
                      title: 'Photo',
                      description: 'Let a picture tell your story',
                      Icon: Images,
                    },
                    {
                      type: 'video' as const,
                      title: 'Video',
                      description: 'Bring your moment to life',
                      Icon: Clapperboard,
                    },
                  ].map(({ type, title, description, Icon }) => (
                    <motion.button
                      key={type}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleTypeSelect(type)}
                      className="group relative flex min-h-44 flex-col items-start rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-left transition-colors hover:border-blue-400 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:border-neutral-800 dark:bg-neutral-800/40 dark:hover:border-blue-500 dark:hover:bg-blue-500/10 sm:p-5"
                    >
                      <Icon
                        strokeWidth={1.5}
                        className="mb-6 h-8 w-8 text-blue-600 dark:text-blue-400"
                      />
                      <ArrowUpRight className="absolute right-4 top-4 h-4 w-4 text-neutral-500 dark:text-neutral-400 group-hover:text-blue-600" />
                      <span className="font-semibold text-neutral-900 dark:text-white">
                        {title}
                      </span>
                      <span className="mt-1 text-xs leading-5 text-neutral-500 dark:text-neutral-400">
                        {description}
                      </span>
                    </motion.button>
                  ))}
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleTypeSelect('text')}
                    className="group col-span-2 flex items-center gap-4 rounded-2xl border border-neutral-200 p-4 text-left hover:border-blue-400 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:border-neutral-800 dark:hover:border-blue-500 dark:hover:bg-blue-500/10 sm:p-5"
                  >
                    <MessageSquareText
                      strokeWidth={1.5}
                      className="h-7 w-7 shrink-0 text-blue-600 dark:text-blue-400"
                    />
                    <span className="flex-1">
                      <span className="block font-semibold text-neutral-900 dark:text-white">
                        Write a story
                      </span>
                      <span className="mt-1 block text-xs text-neutral-500 dark:text-neutral-400">
                        Share an idea, thought, or quick update
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-neutral-500 dark:text-neutral-400 group-hover:text-blue-600" />
                  </motion.button>
                </div>
                <div className="mt-6 flex items-center gap-2 border-t border-neutral-200 pt-4 text-xs text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
                  <Clock3 className="h-4 w-4 shrink-0" />
                  Stories stay visible for 24 hours.
                </div>
              </div>
            )}

            {/* Step 2: Upload Media */}
            {step === 'upload-media' && (
              <div className="p-6">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept={storyType === 'video' ? 'video/*' : 'image/*'}
                  onChange={handleFileSelect}
                  className="hidden"
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full aspect-[9/16] max-h-[400px] rounded-2xl border-2 border-dashed border-neutral-200 dark:border-neutral-700 hover:border-blue-500 transition-colors flex flex-col items-center justify-center gap-4 bg-neutral-50 dark:bg-neutral-800/30"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-neutral-800 flex items-center justify-center">
                    <Upload className="w-8 h-8 text-neutral-500 dark:text-neutral-400" />
                  </div>
                  <div className="text-center">
                    <p className="text-neutral-900 dark:text-white font-medium">
                      Tap to upload {storyType === 'video' ? 'video' : 'image'}
                    </p>
                    <p className="text-neutral-500 text-sm mt-1">
                      {storyType === 'video' ? 'MP4, MOV up to 50MB' : 'JPG, PNG up to 10MB'}
                    </p>
                  </div>
                </motion.button>

                {error && <p className="mt-4 text-red-400 text-sm text-center">{error}</p>}
              </div>
            )}

            {/* Step 3: Edit */}
            {step === 'edit' && (
              <div className="flex flex-col h-full">
                {/* Preview */}
                <div className="relative flex-1 min-h-[300px]">
                  {storyType === 'text' ? (
                    <div
                      className="absolute inset-0 flex items-center justify-center p-8"
                      style={{ background: textBackground }}
                    >
                      <textarea
                        value={textContent}
                        onChange={(e) => setTextContent(e.target.value)}
                        placeholder="Type your story..."
                        className="w-full h-full bg-transparent text-white text-2xl font-bold text-center resize-none focus:outline-none placeholder-white/50"
                        maxLength={280}
                      />
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-black flex items-center justify-center">
                      {storyType === 'video' && mediaPreview ? (
                        <video
                          src={mediaPreview}
                          className="max-w-full max-h-full object-contain"
                          controls
                        />
                      ) : mediaPreview ? (
                        <Image src={mediaPreview} alt="Preview" fill className="object-contain" />
                      ) : null}

                      {/* Remove button */}
                      <button
                        onClick={handleRemoveMedia}
                        aria-label="Remove media"
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center"
                      >
                        <Trash2 aria-hidden="true" className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Text Background Picker (for text stories) */}
                {storyType === 'text' && (
                  <div className="shrink-0 p-4 border-t border-neutral-200 dark:border-neutral-800">
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-3">
                      Background
                    </p>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {TEXT_BACKGROUNDS.map((bg, idx) => (
                        <button
                          key={idx}
                          aria-label={`Background ${idx + 1}`}
                          aria-pressed={textBackground === bg}
                          onClick={() => setTextBackground(bg)}
                          className={`w-10 h-10 rounded-xl flex-shrink-0 ${
                            textBackground === bg
                              ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-white dark:ring-offset-neutral-900'
                              : ''
                          }`}
                          style={{ background: bg }}
                        />
                      ))}
                    </div>
                    <p className="text-neutral-500 text-xs mt-2">
                      {textContent.length}/280 characters
                    </p>
                  </div>
                )}
              </div>
            )}

            {step === 'edit' && (
              <div className="px-6 py-4">
                <StoryMusicPicker music={music} onChange={setMusic} />
              </div>
            )}
            {step === 'details' && (
              <StoryDetailsPanel
                STORY_CATEGORIES={STORY_CATEGORIES}
                VISIBILITY_OPTIONS={VISIBILITY_OPTIONS}
                category={category}
                setCategory={setCategory}
                visibility={visibility}
                setVisibility={setVisibility}
                music={music}
                setMusic={setMusic}
                linkUrl={linkUrl}
                setLinkUrl={setLinkUrl}
                linkTitle={linkTitle}
                setLinkTitle={setLinkTitle}
                error={error}
              />
            )}
          </div>

          {/* Footer */}
          {(step === 'edit' || step === 'details') && (
            <div className="shrink-0 p-4 border-t border-neutral-200 dark:border-neutral-800">
              {step === 'edit' ? (
                <button
                  onClick={() => setStep('details')}
                  disabled={!canProceed()}
                  className="w-full py-3 bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-900 font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Continue
                  <ChevronRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isUploading}
                  className="w-full py-3 bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-900 font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isUploading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sharing...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Share Story
                    </>
                  )}
                </button>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
