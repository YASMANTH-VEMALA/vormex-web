'use client';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FileText,
  Image as ImageIcon,
  Loader2,
  Mic,
  Paperclip,
  Pencil,
  Send,
  Smile,
  Sparkles,
  Square,
  Trash2,
  Video,
  X,
  Zap,
} from 'lucide-react';
import React from 'react';

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
          className={cn(
            'rounded-full p-2 transition-colors',
            showAttachMenu
              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600'
              : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
          )}
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
              className="absolute bottom-full left-0 mb-2 w-48 bg-white dark:bg-gray-800 shadow-xl rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-20"
            >
              <div className="p-2 space-y-1">
                <button
                  onClick={() => openFilePicker('image/*')}
                  className="w-full flex items-center gap-3 px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <ImageIcon className="w-4 h-4 text-purple-600" />
                  </div>
                  <span>Photos</span>
                </button>

                <button
                  onClick={() => openFilePicker('video/*')}
                  className="w-full flex items-center gap-3 px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <Video className="w-4 h-4 text-red-600" />
                  </div>
                  <span>Videos</span>
                </button>

                <button
                  onClick={() => openFilePicker('.pdf,.doc,.docx')}
                  className="w-full flex items-center gap-3 px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-blue-600" />
                  </div>
                  <span>Documents</span>
                </button>

                <button
                  onClick={() => {
                    setShowAttachMenu(false);
                    startRecording();
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                    <Mic className="w-4 h-4 text-orange-600" />
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
            className={cn(
              'rounded-full p-2 transition-colors',
              showAIAssistant
                ? 'bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-600'
                : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            )}
            title="AI Assistant"
          >
            <Sparkles className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
          </button>
        )}

        {/* Message effect toggle (premium packs) */}
        {availableMessageEffects.length > 0 && (
          <button
            onClick={cycleMessageEffect}
            className={cn(
              'relative rounded-full p-2 transition-colors',
              selectedMessageEffect !== 'none'
                ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600'
                : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            )}
            title={
              selectedMessageEffect === 'none'
                ? 'Message effect: Off (tap to cycle)'
                : `Message effect: ${selectedMessageEffect} (tap to cycle)`
            }
          >
            <Zap className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
            {selectedMessageEffect !== 'none' && (
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-1 py-0.5 rounded bg-orange-600 text-white text-[9px] leading-none uppercase tracking-wide">
                {selectedMessageEffect === 'confetti' ? 'C' : 'F'}
              </span>
            )}
          </button>
        )}

        {/* Emoji button */}
        <div className="relative">
          <button
            onClick={() => setShowEmoji(!showEmoji)}
            className={cn(
              'rounded-full p-2 transition-colors',
              showEmoji
                ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600'
                : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            )}
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
                className="absolute bottom-full left-0 mb-2 p-3 bg-white dark:bg-gray-800 shadow-xl rounded-xl border border-gray-200 dark:border-gray-700 z-20"
              >
                <div className="grid grid-cols-5 gap-1 w-[200px]">
                  {commonEmojis.map((emoji) => (
                    <button
                      key={emoji}
                      onClick={() => handleEmojiClick(emoji)}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl transition-transform hover:scale-110"
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
            className="rounded-full p-2 text-purple-600 transition-colors hover:bg-purple-100 disabled:opacity-50 dark:hover:bg-purple-900/30"
            title="Fix grammar with AI"
          >
            {isFixingGrammar ? (
              <Loader2 className="h-[18px] w-[18px] animate-spin sm:h-5 sm:w-5" />
            ) : (
              <Pencil className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
            )}
          </button>
        )}
      </div>

      {/* Voice Recording UI */}
      {isRecording ? (
        <div className="col-start-2 row-start-1 flex min-w-0 flex-1 items-center gap-2 px-2 py-2.5 bg-red-50 dark:bg-red-900/20 rounded-2xl sm:gap-3 sm:px-4">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          <span className="text-red-600 dark:text-red-400 font-medium">
            {formatDuration(recordingDuration)}
          </span>
          <span className="hidden text-sm text-gray-500 flex-1 sm:inline">Recording...</span>
          <button
            onClick={cancelRecording}
            className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-full transition-colors"
            title="Cancel"
          >
            <Trash2 className="w-5 h-5" />
          </button>
          <button
            onClick={stopRecording}
            className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
            title="Stop recording"
          >
            <Square className="w-4 h-4" />
          </button>
        </div>
      ) : audioBlob ? (
        <div className="col-start-2 row-start-1 flex min-w-0 flex-1 items-center gap-2 px-2 py-2.5 bg-green-50 dark:bg-green-900/20 rounded-2xl sm:gap-3 sm:px-4">
          <Mic className="w-5 h-5 text-green-600" />
          <span className="min-w-0 flex-1 text-sm text-green-700 dark:text-green-400">
            Voice message ({formatDuration(recordingDuration)})
          </span>
          <button
            onClick={() => {
              setAudioBlob(null);
              setRecordingDuration(0);
            }}
            className="p-1.5 text-gray-500 hover:text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-full transition-colors"
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
              'bg-gray-100 dark:bg-gray-800',
              'border border-transparent focus:border-blue-500',
              'focus:outline-none focus:ring-2 focus:ring-blue-500/20',
              'text-gray-900 dark:text-white placeholder-gray-500',
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
            'bg-gray-200 dark:bg-gray-700 text-gray-500 hover:bg-gray-300 dark:hover:bg-gray-600',
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
                ? 'bg-blue-600 text-white hover:bg-blue-700 scale-100'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-400 scale-95',
              'disabled:opacity-50 disabled:cursor-not-allowed'
            )}
          >
            <Send className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
          </button>
        </>
      )}
    </div>
  );
}
