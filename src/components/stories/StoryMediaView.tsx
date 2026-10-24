'use client';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronDown,
  ChevronUp,
  Eye,
  Heart,
  Link2,
  MoreHorizontal,
  Pause,
  Play,
  Send,
  Share2,
  Volume2,
  VolumeX,
  X,
} from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface StoryMediaViewProps {
  REACTIONS: string[];
  containerRef: React.RefObject<HTMLDivElement | null>;
  currentGroup: import('@/lib/api/stories').StoryGroup;
  currentStory: import('@/lib/api/stories').Story;
  currentStoryIndex: number;
  currentViewsCount: number;
  formatTimeAgo: (date: Date) => string;
  goToNextStory: () => Promise<void>;
  goToPreviousStory: () => Promise<void>;
  handleClose: () => Promise<void>;
  handleDragEnd: (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: import('framer-motion').PanInfo
  ) => void;
  handleOpenViewers: (event: React.MouseEvent<Element, MouseEvent>) => void;
  handleReaction: (reaction: string) => Promise<void>;
  handleSendReply: () => Promise<void>;
  isMuted: boolean;
  isOwnStory: boolean;
  isPaused: boolean;
  progress: number;
  replyText: string;
  selectedReaction: string | null;
  setIsMuted: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
  setReplyText: React.Dispatch<React.SetStateAction<string>>;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setShowReactions: React.Dispatch<React.SetStateAction<boolean>>;
  setShowReplyInput: React.Dispatch<React.SetStateAction<boolean>>;
  showReactions: boolean;
  showReplyInput: boolean;
  videoRef: React.RefObject<HTMLVideoElement | null>;
}

export function StoryMediaView({
  REACTIONS,
  containerRef,
  currentGroup,
  currentStory,
  currentStoryIndex,
  currentViewsCount,
  formatTimeAgo,
  goToNextStory,
  goToPreviousStory,
  handleClose,
  handleDragEnd,
  handleOpenViewers,
  handleReaction,
  handleSendReply,
  isMuted,
  isOwnStory,
  isPaused,
  progress,
  replyText,
  selectedReaction,
  setIsMuted,
  setIsPaused,
  setReplyText,
  setShowMenu,
  setShowReactions,
  setShowReplyInput,
  showReactions,
  showReplyInput,
  videoRef,
}: StoryMediaViewProps) {
  return (
    <motion.div
      ref={containerRef}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={0.2}
      onDragEnd={handleDragEnd}
      className="relative w-full h-full flex items-center justify-center"
      onClick={(e) => {
        // Tap left/right to navigate
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
          const clickX = e.clientX - rect.left;
          if (clickX < rect.width / 3) {
            goToPreviousStory();
          } else if (clickX > (rect.width * 2) / 3) {
            goToNextStory();
          } else {
            setIsPaused((prev) => !prev);
          }
        }
      }}
    >
      {/* Story Content */}
      <div className="relative w-full h-full max-w-lg mx-auto">
        {/* Background */}
        <div className="absolute inset-0">
          {currentStory.mediaType === 'VIDEO' ? (
            <video
              ref={videoRef}
              src={currentStory.mediaUrl}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted={isMuted}
              playsInline
            />
          ) : currentStory.mediaType === 'TEXT' ? (
            <div
              className="w-full h-full flex items-center justify-center p-8"
              style={{ backgroundColor: currentStory.backgroundColor || '#3B82F6' }}
            >
              <p
                className="text-white text-2xl font-bold text-center leading-relaxed"
                style={{
                  fontSize: currentStory.textStyle?.fontSize || 24,
                  fontWeight: currentStory.textStyle?.fontWeight || 'bold',
                  color: currentStory.textStyle?.color || 'white',
                }}
              >
                {currentStory.textContent}
              </p>
            </div>
          ) : (
            <img src={currentStory.mediaUrl} alt="Story" className="w-full h-full object-cover" />
          )}

          {/* Text Overlay */}
          {currentStory.mediaType !== 'TEXT' && currentStory.textContent && (
            <div
              className="absolute p-4"
              style={{
                left: currentStory.textPosition?.x || '50%',
                top: currentStory.textPosition?.y || '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <p
                className="text-white text-lg font-semibold drop-shadow-lg"
                style={currentStory.textStyle || {}}
              >
                {currentStory.textContent}
              </p>
            </div>
          )}

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
        </div>

        {/* Top Section - Progress & Header */}
        <div className="absolute top-0 left-0 right-0 p-4 z-10">
          {/* Progress Bars */}
          <div className="flex gap-1 mb-4">
            {currentGroup.stories.map((_, idx) => (
              <div key={idx} className="flex-1 h-[3px] bg-white/30 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white rounded-full"
                  style={{
                    width:
                      idx < currentStoryIndex
                        ? '100%'
                        : idx === currentStoryIndex
                          ? `${progress}%`
                          : '0%',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* User Avatar with gradient ring */}
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white">
                  {currentGroup.user.profileImage ? (
                    <Image
                      src={currentGroup.user.profileImage}
                      alt={currentGroup.user.name}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <span className="text-white font-bold">
                        {currentGroup.user.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <p className="text-white font-semibold text-sm">{currentGroup.user.name}</p>
                <p className="text-white/60 text-xs">
                  {formatTimeAgo(new Date(currentStory.createdAt))}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Pause/Play */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPaused((prev) => !prev);
                }}
                className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
              >
                {isPaused ? (
                  <Play className="w-4 h-4 text-white" fill="white" />
                ) : (
                  <Pause className="w-4 h-4 text-white" fill="white" />
                )}
              </button>

              {/* Mute (for video) */}
              {currentStory.mediaType === 'VIDEO' && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMuted((prev) => !prev);
                  }}
                  className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-white" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-white" />
                  )}
                </button>
              )}

              {/* More Options */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowMenu(true);
                }}
                className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
              >
                <MoreHorizontal className="w-4 h-4 text-white" />
              </button>

              {/* Close */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleClose();
                }}
                className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Indicators */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <ChevronUp className="w-6 h-6 text-white/40 animate-pulse" />
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <ChevronDown className="w-6 h-6 text-white/40 animate-pulse" />
        </div>

        {/* Link Preview */}
        {currentStory.linkUrl && (
          <div className="absolute bottom-32 left-4 right-4 z-10 space-y-2">
            {currentStory.linkUrl && (
              <a
                href={currentStory.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md"
              >
                <Link2 className="w-4 h-4 text-white" />
                <span className="truncate text-sm text-white">
                  {currentStory.linkTitle || currentStory.linkUrl}
                </span>
              </a>
            )}
          </div>
        )}

        {/* Bottom Section - Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          {/* View Count (for own stories) - updates live when others view */}
          {isOwnStory && (
            <div className="flex items-center gap-4 mb-4 text-white/80">
              <button
                type="button"
                onClick={handleOpenViewers}
                className="flex items-center gap-1 rounded-full bg-black/25 px-2.5 py-1.5 transition-colors hover:bg-black/40"
                aria-label={`See ${currentViewsCount} story viewers`}
              >
                <Eye className="w-4 h-4" />
                <span className="text-sm">{currentViewsCount} views</span>
              </button>
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                <span className="text-sm">{currentStory.reactionsCount} reactions</span>
              </div>
            </div>
          )}

          {/* Reply Input or Actions */}
          {!isOwnStory && (
            <div className="flex items-center gap-2">
              {showReplyInput ? (
                <div className="flex-1 flex items-center gap-2">
                  <input
                    type="text"
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Send a message..."
                    className="flex-1 bg-white/10 backdrop-blur-md text-white placeholder-white/50 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                    autoFocus
                    onClick={(e) => e.stopPropagation()}
                    onKeyDown={(e) => {
                      e.stopPropagation();
                      if (e.key === 'Enter') handleSendReply();
                      if (e.key === 'Escape') setShowReplyInput(false);
                    }}
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSendReply();
                    }}
                    className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 text-white" />
                  </button>
                </div>
              ) : (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowReplyInput(true);
                      setIsPaused(true);
                    }}
                    className="flex-1 bg-white/10 backdrop-blur-md text-white/70 rounded-full px-4 py-2 text-sm text-left"
                  >
                    Reply to {currentGroup.user.name.split(' ')[0]}...
                  </button>

                  {/* Reaction Button */}
                  <div className="relative">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowReactions(!showReactions);
                        setIsPaused(true);
                      }}
                      className={`w-10 h-10 rounded-full ${
                        selectedReaction ? 'bg-pink-500/30' : 'bg-white/10'
                      } backdrop-blur-md flex items-center justify-center`}
                    >
                      {selectedReaction ? (
                        <span className="text-xl">{selectedReaction}</span>
                      ) : (
                        <Heart className="w-5 h-5 text-white" />
                      )}
                    </button>

                    {/* Reaction Picker */}
                    <AnimatePresence>
                      {showReactions && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.8, y: 10 }}
                          className="absolute bottom-12 right-0 bg-white/10 backdrop-blur-xl rounded-2xl p-2 flex gap-1"
                        >
                          {REACTIONS.map((reaction) => (
                            <motion.button
                              key={reaction}
                              whileHover={{ scale: 1.3 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleReaction(reaction);
                              }}
                              className={`w-10 h-10 rounded-full flex items-center justify-center text-2xl ${
                                selectedReaction === reaction ? 'bg-white/20' : ''
                              }`}
                            >
                              {reaction}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Share Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle share
                    }}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center"
                  >
                    <Share2 className="w-5 h-5 text-white" />
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
