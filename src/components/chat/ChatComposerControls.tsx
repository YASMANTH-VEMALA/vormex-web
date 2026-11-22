'use client';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FileText,
  Image as ImageIcon,
  Loader2,
  Mic,
  Paperclip,
  Smile,
  Square,
  Trash2,
  Video,
  X,
  Zap,
} from 'lucide-react';
import React from 'react';
import { AssistantMark, FeatureIcon } from './aiAssistantIcons';

const TOOL_BUTTON =
  'rounded-full p-2 transition-colors text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-white';
const TOOL_BUTTON_ACTIVE =
  'rounded-full p-2 transition-colors bg-neutral-200 text-neutral-900 dark:bg-white/15 dark:text-white';
const MENU_SURFACE =
  'border border-neutral-200 bg-white/95 shadow-[0_18px_44px_-16px_rgba(0,0,0,0.35)] backdrop-blur-xl dark:border-white/10 dark:bg-neutral-900/90';
const MENU_ITEM =
  'flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-neutral-800 transition-colors hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-white/10';
const MENU_ICON =
  'flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 text-neutral-700 dark:bg-white/10 dark:text-neutral-200';

interface ChatComposerControlsProps {
  attachMenuRef: React.RefObject<HTMLDivElement | null>;
  audioBlob: Blob | null;
  availableMessageEffects: ('confetti' | 'fireworks')[];
  cancelRecording: () => void;
  commonEmojis: string[];
  cycleMessageEffect: () => void;
  disabled: boolean;
  formatDuration: (seconds: number) => string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement, Element>) => void;
  handleEmojiClick: (emoji: string) => void;
  handleKeyDown: (e: React.KeyboardEvent<Element>) => void;
  handleQuickGrammarFix: () => Promise<void>;
  handleSend: () => Promise<void>;
  inputRef: React.RefObject<HTMLTextAreaElement | null>;
  isFixingGrammar: boolean;
  isRecording: boolean;
  message: string;
  openFilePicker: (accept: string) => void;
  otherUserId: string | undefined;
  recordingDuration: number;
  selectedFiles: import('@/components/chat/ChatInput.types').FilePreview[];
  selectedMessageEffect: 'confetti' | 'fireworks' | 'none';
  setAudioBlob: React.Dispatch<React.SetStateAction<Blob | null>>;
  setRecordingDuration: React.Dispatch<React.SetStateAction<number>>;
  setShowAIAssistant: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAttachMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setShowEmoji: React.Dispatch<React.SetStateAction<boolean>>;
  showAIAssistant: boolean;
  showAttachMenu: boolean;
  showEmoji: boolean;
  startRecording: () => Promise<void>;
  stopRecording: () => void;
}

export function ChatComposerControls({
  attachMenuRef,
  audioBlob,
  availableMessageEffects,
  cancelRecording,
  commonEmojis,
  cycleMessageEffect,
  disabled,
  formatDuration,
  handleChange,
  handleEmojiClick,
  handleKeyDown,
  handleQuickGrammarFix,
  handleSend,
  inputRef,
  isFixingGrammar,
  isRecording,
  message,
  openFilePicker,
  otherUserId,
  recordingDuration,
  selectedFiles,
  selectedMessageEffect,
  setAudioBlob,
  setRecordingDuration,
  setShowAIAssistant,
  setShowAttachMenu,
  setShowEmoji,
  showAIAssistant,
  showAttachMenu,
  showEmoji,
  startRecording,
  stopRecording,
}: ChatComposerControlsProps) {
  return (
    <div className="grid w-full min-w-0 grid-cols-[2.5rem_minmax(0,1fr)_2.5rem] items-end gap-x-1.5 gap-y-1 sm:flex sm:gap-2">
      {/* Attachment button with menu */}
      <div className="relative col-start-1 row-start-1 shrink-0" ref={attachMenuRef}>
        <button
          onClick={() => setShowAttachMenu(!showAttachMenu)}
          className={showAttachMenu ? TOOL_BUTTON_ACTIVE : TOOL_BUTTON}
          title="Attach file"
        >
          <Paperclip className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
        </button>

        {/* Attachment menu */}
        <AnimatePresence>
          {showAttachMenu && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 460, damping: 34 }}
              style={{ transformOrigin: 'bottom left' }}
              className={cn('absolute bottom-full left-0 z-20 mb-2 w-52 overflow-hidden rounded-2xl', MENU_SURFACE)}
            >
              <div className="p-2 space-y-1">
                <button
                  onClick={() => openFilePicker('image/*')}
                  className={MENU_ITEM}
                >
                  <div className={MENU_ICON}>
                    <ImageIcon className="h-4 w-4" />
                  </div>
                  <span>Photos</span>
                </button>

                <button
                  onClick={() => openFilePicker('video/*')}
                  className={MENU_ITEM}
                >
                  <div className={MENU_ICON}>
                    <Video className="h-4 w-4" />
                  </div>
                  <span>Videos</span>
                </button>

                <button
                  onClick={() => openFilePicker('.pdf,.doc,.docx,.txt')}
                  className={MENU_ITEM}
                >
                  <div className={MENU_ICON}>
                    <FileText className="h-4 w-4" />
                  </div>
                  <span>Documents</span>
                </button>

                <button
                  onClick={() => {
                    setShowAttachMenu(false);
                    startRecording();
                  }}
                  className={MENU_ITEM}
                >
                  <div className={MENU_ICON}>
                    <Mic className="h-4 w-4" />
                  </div>
                  <span>Voice Mail</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="col-span-2 col-start-2 row-start-2 flex min-w-0 items-center gap-1 sm:contents">
        {/* AI Assistant button */}
        {otherUserId && (
          <button
            onClick={() => {
              setShowAIAssistant(!showAIAssistant);
              setShowEmoji(false);
              setShowAttachMenu(false);
            }}
            className={showAIAssistant ? TOOL_BUTTON_ACTIVE : TOOL_BUTTON}
            title="Message assistant"
            aria-label="Message assistant"
            aria-expanded={showAIAssistant}
          >
            <AssistantMark className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
          </button>
        )}

        {/* Message effect toggle (premium packs) */}
        {availableMessageEffects.length > 0 && (
          <button
            onClick={cycleMessageEffect}
            className={cn(
              'relative',
              selectedMessageEffect !== 'none' ? TOOL_BUTTON_ACTIVE : TOOL_BUTTON
            )}
            title={
              selectedMessageEffect === 'none'
                ? 'Message effect: Off (tap to cycle)'
                : `Message effect: ${selectedMessageEffect} (tap to cycle)`
            }
          >
            <Zap className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
            {selectedMessageEffect !== 'none' && (
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 rounded bg-neutral-900 px-1 py-0.5 text-[9px] uppercase leading-none tracking-wide text-white dark:bg-white dark:text-neutral-900">
                {selectedMessageEffect === 'confetti' ? 'C' : 'F'}
              </span>
            )}
          </button>
        )}

        {/* Emoji button */}
        <div className="relative">
          <button
            onClick={() => setShowEmoji(!showEmoji)}
            className={showEmoji ? TOOL_BUTTON_ACTIVE : TOOL_BUTTON}
            title="Add emoji"
          >
            <Smile className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
          </button>

          {/* Emoji picker */}
          <AnimatePresence>
            {showEmoji && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                style={{ transformOrigin: 'bottom left' }}
                className={cn('absolute bottom-full left-0 z-20 mb-2 rounded-2xl p-3', MENU_SURFACE)}
              >
                <div className="grid grid-cols-5 gap-1 w-[200px]">
                  {commonEmojis.map((emoji) => (
                    <button
                      key={emoji}
                      onClick={() => handleEmojiClick(emoji)}
                      className="rounded-lg p-2 text-xl transition-transform hover:scale-110 hover:bg-neutral-100 dark:hover:bg-white/10"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Grammar Fix button */}
        {message.trim() && otherUserId && !isRecording && (
          <button
            onClick={handleQuickGrammarFix}
            disabled={isFixingGrammar || disabled}
            className={cn(TOOL_BUTTON, 'disabled:opacity-50')}
            title="Fix grammar"
          >
            {isFixingGrammar ? (
              <Loader2 className="h-[18px] w-[18px] animate-spin sm:h-5 sm:w-5" />
            ) : (
              <FeatureIcon feature="grammar" className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
            )}
          </button>
        )}
      </div>

      {/* Voice Recording UI */}
      {isRecording ? (
        <div className="col-start-2 row-start-1 flex min-w-0 flex-1 items-center gap-2 px-2 py-2.5 bg-neutral-100 dark:bg-white/[0.07] rounded-2xl sm:gap-3 sm:px-4">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          <span className="font-medium tabular-nums text-neutral-900 dark:text-white">
            {formatDuration(recordingDuration)}
          </span>
          <span className="hidden flex-1 text-sm text-neutral-500 dark:text-neutral-400 sm:inline">Recording…</span>
          <button
            onClick={cancelRecording}
            className="rounded-full p-2 text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-white"
            title="Cancel"
          >
            <Trash2 className="w-5 h-5" />
          </button>
          <button
            onClick={stopRecording}
            className="rounded-full bg-red-500 p-2 text-white transition-colors hover:bg-red-600"
            title="Stop recording"
          >
            <Square className="w-4 h-4" />
          </button>
        </div>
      ) : audioBlob ? (
        <div className="col-start-2 row-start-1 flex min-w-0 flex-1 items-center gap-2 px-2 py-2.5 bg-neutral-100 dark:bg-white/[0.07] rounded-2xl sm:gap-3 sm:px-4">
          <Mic className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
          <span className="min-w-0 flex-1 text-sm text-neutral-700 dark:text-neutral-200">
            Voice message ({formatDuration(recordingDuration)})
          </span>
          <button
            onClick={() => {
              setAudioBlob(null);
              setRecordingDuration(0);
            }}
            className="rounded-full p-1.5 text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-white"
            title="Delete recording"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        /* Text input */
        <div className="relative col-start-2 row-start-1 min-w-0 flex-1">
          <textarea
            ref={inputRef}
            value={message}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            disabled={disabled}
            rows={1}
            className={cn(
              'block min-h-11 w-full resize-none overflow-y-auto rounded-2xl px-3.5 py-2.5 text-base leading-6 sm:px-4',
              'bg-neutral-100 dark:bg-white/[0.07]',
              'border border-transparent focus:border-neutral-400 dark:focus:border-white/30',
              'focus:outline-none focus:ring-2 focus:ring-neutral-900/10 dark:focus:ring-white/10',
              'text-neutral-900 dark:text-white placeholder:text-neutral-500',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              'max-h-24 sm:max-h-32'
            )}
          />
        </div>
      )}

      {/* Mic button (show when no text/files) or Grammar Fix + Send buttons */}
      {!message.trim() && selectedFiles.length === 0 && !audioBlob && !isRecording ? (
        <button
          onClick={startRecording}
          disabled={disabled}
          className={cn(
            'col-start-3 row-start-1 shrink-0 rounded-full p-2.5 transition-all sm:p-3',
            'bg-neutral-200 text-neutral-600 hover:bg-neutral-300 dark:bg-white/10 dark:text-neutral-300 dark:hover:bg-white/15',
            'disabled:opacity-50 disabled:cursor-not-allowed'
          )}
          title="Record voice message"
        >
          <Mic className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
        </button>
      ) : (
        <>
          {/* Send button */}
          <button
            onClick={handleSend}
            aria-label="Send message"
            disabled={
              (!message.trim() && selectedFiles.length === 0 && !audioBlob) ||
              disabled ||
              isRecording
            }
            className={cn(
              'col-start-3 row-start-1 shrink-0 rounded-full p-2.5 transition-all sm:p-3',
              message.trim() || selectedFiles.length > 0 || audioBlob
                ? 'group bg-neutral-900 text-white hover:bg-neutral-700 active:scale-90 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200'
                : 'scale-95 bg-neutral-200 text-neutral-400 dark:bg-white/10 dark:text-neutral-500',
              'disabled:cursor-not-allowed disabled:opacity-50'
            )}
          >
            {/* Paper plane: lifts off on hover, so "send" feels like it travels. */}
            <svg
              viewBox="0 0 24 24"
              className="h-[18px] w-[18px] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:h-5 sm:w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 3 10.5 13.5" />
              <path d="m21 3-6.5 18-4-7.5L3 9.500z" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
