'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { FileText, Loader2, Lock, MessageCircle, Mic, UserPlus, Video, X } from 'lucide-react';
import React from 'react';
import AIChatAssistant from './AIChatAssistant';
import { ChatComposerControls } from './ChatComposerControls';

interface ChatInputViewProps {
  attachMenuRef: React.RefObject<HTMLDivElement | null>;
  audioBlob: Blob | null;
  availableMessageEffects: ('confetti' | 'fireworks')[];
  cancelRecording: () => void;
  commonEmojis: string[];
  connectionRequestSent: boolean;
  conversationId: string;
  cycleMessageEffect: () => void;
  disabled: boolean;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  formatDuration: (seconds: number) => string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement, Element>) => void;
  handleEmojiClick: (emoji: string) => void;
  handleFileSelect: (e: React.ChangeEvent<HTMLInputElement, Element>) => Promise<void>;
  handleKeyDown: (e: React.KeyboardEvent<Element>) => void;
  handleQuickGrammarFix: () => Promise<void>;
  handleSend: () => Promise<void>;
  handleSendConnectionRequest: () => Promise<void>;
  hasPendingIncomingRequest: boolean;
  inputRef: React.RefObject<HTMLTextAreaElement | null>;
  isFixingGrammar: boolean;
  isRecording: boolean;
  isSendingConnectionRequest: boolean;
  lastReceivedMessage: string | undefined;
  message: string;
  messageLimitInfo: import('@/lib/api/chat').MessageLimitStatus | null;
  onCancelReply: (() => void) | undefined;
  openFilePicker: (accept: string) => void;
  otherUserId: string | undefined;
  otherUserName: string | undefined;
  recordingDuration: number;
  removeFile: (index: number) => void;
  replyTo: { id: string; content: string; senderName: string } | undefined;
  selectedFiles: import('@/components/chat/ChatInput.types').FilePreview[];
  selectedMessageEffect: 'confetti' | 'fireworks' | 'none';
  setAudioBlob: React.Dispatch<React.SetStateAction<Blob | null>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  setRecordingDuration: React.Dispatch<React.SetStateAction<number>>;
  setShowAIAssistant: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAttachMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setShowConnectionPrompt: React.Dispatch<React.SetStateAction<boolean>>;
  setShowEmoji: React.Dispatch<React.SetStateAction<boolean>>;
  showAIAssistant: boolean;
  showAttachMenu: boolean;
  showConnectionPrompt: boolean;
  showEmoji: boolean;
  startRecording: () => Promise<void>;
  stopRecording: () => void;
}

export function ChatInputView({
  attachMenuRef,
  audioBlob,
  availableMessageEffects,
  cancelRecording,
  commonEmojis,
  connectionRequestSent,
  conversationId,
  cycleMessageEffect,
  disabled,
  fileInputRef,
  formatDuration,
  handleChange,
  handleEmojiClick,
  handleFileSelect,
  handleKeyDown,
  handleQuickGrammarFix,
  handleSend,
  handleSendConnectionRequest,
  hasPendingIncomingRequest,
  inputRef,
  isFixingGrammar,
  isRecording,
  isSendingConnectionRequest,
  lastReceivedMessage,
  message,
  messageLimitInfo,
  onCancelReply,
  openFilePicker,
  otherUserId,
  otherUserName,
  recordingDuration,
  removeFile,
  replyTo,
  selectedFiles,
  selectedMessageEffect,
  setAudioBlob,
  setMessage,
  setRecordingDuration,
  setShowAIAssistant,
  setShowAttachMenu,
  setShowConnectionPrompt,
  setShowEmoji,
  showAIAssistant,
  showAttachMenu,
  showConnectionPrompt,
  showEmoji,
  startRecording,
  stopRecording,
}: ChatInputViewProps) {
  return (
    <div className="relative w-full min-w-0 shrink-0 border-t border-gray-200 bg-white px-2 py-2 pb-[calc(0.5rem+var(--chat-safe-bottom,env(safe-area-inset-bottom)))] dark:border-gray-700 dark:bg-gray-900 sm:p-4 sm:pb-[calc(1rem+var(--chat-safe-bottom,env(safe-area-inset-bottom)))]">
      {/* AI Assistant Panel - positioned at container level for proper width */}
      <AnimatePresence>
        {showAIAssistant && otherUserId && (
          <AIChatAssistant
            conversationId={conversationId}
            otherUserId={otherUserId}
            otherUserName={otherUserName || 'User'}
            currentMessage={message}
            lastReceivedMessage={lastReceivedMessage}
            onSuggestionSelect={(text) => {
              setMessage(text);
              setShowAIAssistant(false);
              inputRef.current?.focus();
            }}
            onClose={() => setShowAIAssistant(false)}
          />
        )}
      </AnimatePresence>

      {/* Connection Required Prompt - Shows when message limit reached */}
      <AnimatePresence>
        {showConnectionPrompt &&
          messageLimitInfo &&
          !messageLimitInfo.isConnected &&
          !messageLimitInfo.canSend && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="absolute bottom-full left-0 right-0 mb-2 mx-4"
            >
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-200 dark:border-blue-700 rounded-xl p-4 shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                      Connect to Continue Messaging
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                      You&apos;ve sent {messageLimitInfo.messagesSent} of {messageLimitInfo.limit}{' '}
                      messages. Connect with{' '}
                      <span className="font-medium">{otherUserName || 'this user'}</span> to send
                      unlimited messages.
                    </p>

                    <div className="flex items-center gap-2">
                      {connectionRequestSent ? (
                        <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                          <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="font-medium">Connection request sent!</span>
                        </div>
                      ) : hasPendingIncomingRequest ? (
                        <div className="text-sm text-blue-600 dark:text-blue-400">
                          <span className="font-medium">Connection request pending.</span> Check
                          your Connections page to accept it and continue messaging.
                        </div>
                      ) : (
                        <button
                          onClick={handleSendConnectionRequest}
                          disabled={isSendingConnectionRequest}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg transition-colors"
                        >
                          {isSendingConnectionRequest ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <UserPlus className="w-4 h-4" />
                              Send Connection Request
                            </>
                          )}
                        </button>
                      )}

                      <button
                        onClick={() => setShowConnectionPrompt(false)}
                        className="px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowConnectionPrompt(false)}
                    className="flex-shrink-0 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
      </AnimatePresence>

      {/* Message Limit Warning Banner - Shows when approaching limit */}
      <AnimatePresence>
        {messageLimitInfo &&
          !messageLimitInfo.isConnected &&
          messageLimitInfo.canSend &&
          messageLimitInfo.messagesRemaining === 1 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-3 overflow-hidden"
            >
              <div className="flex items-center gap-2 px-3 py-2 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg">
                <MessageCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                <p className="text-xs text-amber-700 dark:text-amber-300">
                  <span className="font-medium">Last message!</span> Connect with{' '}
                  {otherUserName || 'this user'} to continue the conversation.
                </p>
                <button
                  onClick={handleSendConnectionRequest}
                  disabled={
                    isSendingConnectionRequest || connectionRequestSent || hasPendingIncomingRequest
                  }
                  className="ml-auto text-xs font-medium text-amber-700 dark:text-amber-300 hover:text-amber-800 dark:hover:text-amber-200 underline disabled:opacity-50"
                >
                  {connectionRequestSent
                    ? 'Request Sent'
                    : hasPendingIncomingRequest
                      ? 'Request Pending'
                      : 'Connect'}
                </button>
              </div>
            </motion.div>
          )}
      </AnimatePresence>

      {/* File input (hidden) */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* File previews */}
      <AnimatePresence>
        {selectedFiles.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mb-3 overflow-hidden"
          >
            <div className="flex gap-2 overflow-x-auto py-2">
              {selectedFiles.map((file, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                >
                  {file.type === 'image' ? (
                    <img
                      src={file.preview}
                      alt={file.file.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-1">
                      {file.type === 'video' && <Video className="w-6 h-6 text-gray-500" />}
                      {file.type === 'document' && <FileText className="w-6 h-6 text-gray-500" />}
                      {file.type === 'audio' && <Mic className="w-6 h-6 text-gray-500" />}
                      <span className="text-[10px] text-gray-500 truncate w-full text-center mt-1">
                        {file.file.name.slice(0, 10)}...
                      </span>
                    </div>
                  )}
                  <button
                    onClick={() => removeFile(index)}
                    className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reply preview */}
      {replyTo && (
        <div className="flex items-center justify-between mb-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-1 h-8 bg-blue-500 rounded-full" />
            <div className="min-w-0">
              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                Replying to {replyTo.senderName}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{replyTo.content}</p>
            </div>
          </div>
          <button
            onClick={onCancelReply}
            className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Input area */}
      <ChatComposerControls
        attachMenuRef={attachMenuRef}
        audioBlob={audioBlob}
        availableMessageEffects={availableMessageEffects}
        cancelRecording={cancelRecording}
        commonEmojis={commonEmojis}
        cycleMessageEffect={cycleMessageEffect}
        disabled={disabled}
        formatDuration={formatDuration}
        handleChange={handleChange}
        handleEmojiClick={handleEmojiClick}
        handleKeyDown={handleKeyDown}
        handleQuickGrammarFix={handleQuickGrammarFix}
        handleSend={handleSend}
        inputRef={inputRef}
        isFixingGrammar={isFixingGrammar}
        isRecording={isRecording}
        message={message}
        openFilePicker={openFilePicker}
        otherUserId={otherUserId}
        recordingDuration={recordingDuration}
        selectedFiles={selectedFiles}
        selectedMessageEffect={selectedMessageEffect}
        setAudioBlob={setAudioBlob}
        setRecordingDuration={setRecordingDuration}
        setShowAIAssistant={setShowAIAssistant}
        setShowAttachMenu={setShowAttachMenu}
        setShowEmoji={setShowEmoji}
        showAIAssistant={showAIAssistant}
        showAttachMenu={showAttachMenu}
        showEmoji={showEmoji}
        startRecording={startRecording}
        stopRecording={stopRecording}
      />
    </div>
  );
}
