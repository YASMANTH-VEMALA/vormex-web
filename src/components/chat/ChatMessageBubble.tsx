'use client';
import { UserAvatar } from '@/components/ui/UserAvatar';
import { cn } from '@/lib/utils';
import { ImageOff, Play } from 'lucide-react';
import React from 'react';

interface ChatMessageBubbleProps {
  animatedBubbles: boolean;
  editContent: string;
  handleEdit: () => void;
  isEditing: boolean;
  isOwn: boolean;
  isStoryMessage: boolean;
  message: import('@/lib/api/chat').Message;
  onViewImage: ((url: string) => void) | undefined;
  onViewVideo: ((url: string) => void) | undefined;
  setEditContent: React.Dispatch<React.SetStateAction<string>>;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  storyAvailable: boolean;
  storyPreviewUrl: string | null;
}

export function ChatMessageBubble({
  animatedBubbles,
  editContent,
  handleEdit,
  isEditing,
  isOwn,
  isStoryMessage,
  message,
  onViewImage,
  onViewVideo,
  setEditContent,
  setIsEditing,
  storyAvailable,
  storyPreviewUrl,
}: ChatMessageBubbleProps) {
  return (
    <div
      className={cn(
        'relative rounded-2xl px-3 py-2 text-sm leading-5 sm:px-4 sm:text-base sm:leading-6',
        animatedBubbles &&
          'shadow-sm shadow-blue-400/15 transition-transform duration-150 hover:scale-[1.01]',
        isOwn
          ? 'bg-blue-600 text-white rounded-br-sm'
          : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-bl-sm',
        message.replyTo && 'rounded-t-none'
      )}
    >
      {isStoryMessage && (
        <div
          className={cn(
            'mb-2 overflow-hidden rounded-xl border',
            isOwn
              ? 'border-white/20 bg-blue-700/45'
              : 'border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5'
          )}
        >
          <div className="px-2.5 py-1.5 text-[11px] font-semibold opacity-75">
            {message.contentType === 'story_reaction'
              ? 'Reacted to this story'
              : 'Replied to this story'}
          </div>

          {storyAvailable ? (
            <div className="relative h-28 overflow-hidden bg-black/20">
              {storyPreviewUrl ? (
                <img
                  src={storyPreviewUrl}
                  alt="Referenced story"
                  className="h-full w-full object-cover"
                />
              ) : message.story?.mediaType === 'VIDEO' ? (
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-950">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-900">
                    <Play className="ml-0.5 h-4 w-4 fill-current" />
                  </div>
                </div>
              ) : (
                <div
                  className="flex h-full items-center justify-center px-4 text-center text-sm font-semibold text-white"
                  style={{ backgroundColor: message.story?.backgroundColor || '#3b82f6' }}
                >
                  {message.story?.textContent || 'Story'}
                </div>
              )}
            </div>
          ) : (
            <div className="flex min-h-20 items-center gap-3 border-t border-current/10 px-3 py-3">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-current/10">
                <ImageOff className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold">Story not available</p>
                <p className="text-[11px] leading-4 opacity-65">
                  This story has expired after 24 hours.
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Image content */}
      {message.mediaUrl && message.contentType === 'image' && (
        <button onClick={() => onViewImage?.(message.mediaUrl!)} className="block w-full text-left">
          <img
            src={message.mediaUrl}
            alt="Shared image"
            className="rounded-lg max-w-full mb-2 cursor-pointer hover:opacity-90 transition-opacity"
            style={{ maxHeight: '300px' }}
          />
        </button>
      )}

      {/* Video content */}
      {message.mediaUrl && message.contentType === 'video' && (
        <div
          className="relative group cursor-pointer mb-2"
          onClick={() => onViewVideo?.(message.mediaUrl!)}
        >
          <video
            src={message.mediaUrl}
            className="rounded-lg max-w-full"
            style={{ maxHeight: '300px' }}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors rounded-lg">
            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-900 ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Audio content */}
      {message.mediaUrl && message.contentType === 'audio' && (
        <div
          className={cn(
            'flex items-center gap-3 p-2 rounded-lg mb-2',
            isOwn ? 'bg-blue-700/50' : 'bg-gray-200 dark:bg-gray-700'
          )}
        >
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
            <span className="text-white text-lg">🎤</span>
          </div>
          <audio
            src={message.mediaUrl}
            controls
            className="flex-1 h-8"
            style={{ maxWidth: '200px' }}
          />
        </div>
      )}

      {/* Document content */}
      {message.mediaUrl && message.contentType === 'document' && (
        <a
          href={message.mediaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'flex items-center gap-3 p-3 rounded-lg mb-2 transition-colors',
            isOwn
              ? 'bg-blue-700/50 hover:bg-blue-700/70'
              : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
          )}
        >
          <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center">
            <span className="text-white text-lg">📄</span>
          </div>
          <div className="flex-1 min-w-0">
            <p
              className={cn(
                'font-medium truncate text-sm',
                isOwn ? 'text-white' : 'text-gray-900 dark:text-white'
              )}
            >
              {message.fileName || 'Document'}
            </p>
            {message.fileSize && (
              <p className={cn('text-xs', isOwn ? 'text-blue-200' : 'text-gray-500')}>
                {(message.fileSize / 1024).toFixed(1)} KB
              </p>
            )}
          </div>
        </a>
      )}

      {/* Generic file content */}
      {message.mediaUrl && message.contentType === 'file' && (
        <a
          href={message.mediaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white/10 p-2 rounded mb-2 hover:bg-white/20"
        >
          <span>📎</span>
          <span className="truncate">{message.fileName || 'File'}</span>
        </a>
      )}

      {/* Shared Reel content - thumbnail only, click to open reel */}
      {message.contentType === 'reel' &&
        (() => {
          let reelId: string | null = null;
          try {
            const data = JSON.parse(message.content);
            reelId = data.reelId || null;
          } catch {
            // Legacy: content might be plain text, try to extract reel ID from URL if any
            const match = message.content?.match(/\/reels\/([a-f0-9-]+)/i);
            reelId = match?.[1] || null;
          }
          const thumbnailUrl = message.mediaUrl;
          const reelUrl = reelId ? `/reels/${reelId}` : '/reels';
          // Show thumbnail card even for legacy messages without reelId (links to reels feed)
          return (
            <a
              href={reelUrl}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = reelUrl;
              }}
              className={cn(
                'block relative rounded-xl overflow-hidden w-24 h-36 flex-shrink-0 cursor-pointer hover:opacity-90 transition-opacity',
                isOwn ? 'ring-2 ring-white/30' : 'ring-2 ring-gray-300 dark:ring-gray-600'
              )}
            >
              {thumbnailUrl ? (
                <img src={thumbnailUrl} alt="Reel" className="w-full h-full object-cover" />
              ) : (
                <div
                  className={cn(
                    'w-full h-full flex items-center justify-center',
                    isOwn ? 'bg-blue-700/50' : 'bg-gray-200 dark:bg-gray-700'
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 opacity-70"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M7 3v18" />
                    <path d="M17 3v18" />
                    <path d="M3 12h18" />
                  </svg>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </a>
          );
        })()}

      {/* Shared Post content */}
      {(message.contentType === 'post' || message.contentType === 'application/x-shared-post') &&
        (() => {
          try {
            const postData = JSON.parse(message.content);
            const postId = postData.postId;
            const postUrl = postData.postUrl || (postId ? `/post/${postId}` : null);

            return (
              <a
                href={postUrl || '#'}
                onClick={(e) => {
                  if (postUrl) {
                    e.preventDefault();
                    window.location.href = postUrl;
                  }
                }}
                className={cn(
                  'block rounded-lg p-3 mb-2 cursor-pointer transition-colors',
                  isOwn
                    ? 'bg-blue-700/50 hover:bg-blue-700/70'
                    : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                )}
              >
                <div className="flex items-center gap-2 mb-2 text-xs opacity-70">
                  <span>📄</span>
                  <span>Shared Post</span>
                </div>
                {postData.mediaUrl && (
                  <img
                    src={postData.mediaUrl}
                    alt="Post media"
                    className="rounded-md w-full h-24 object-cover mb-2"
                  />
                )}
                {postData.author && (
                  <>
                    <div className="flex items-center gap-2 mb-1">
                      <UserAvatar
                        imageSrc={postData.author.profileImage}
                        name={postData.author.name}
                        className="h-6 w-6 text-[10px]"
                        fallbackClassName="text-[10px]"
                      />
                      <p
                        className={cn(
                          'font-medium text-sm',
                          isOwn ? 'text-white' : 'text-gray-900 dark:text-white'
                        )}
                      >
                        {postData.author.name}
                      </p>
                    </div>
                    {postData.author.username && (
                      <p
                        className={cn(
                          'text-xs opacity-60',
                          isOwn ? 'text-blue-200' : 'text-gray-500'
                        )}
                      >
                        @{postData.author.username}
                      </p>
                    )}
                  </>
                )}
                {/* Legacy format support */}
                {!postData.author && postData.authorName && (
                  <>
                    <p
                      className={cn(
                        'font-medium text-sm',
                        isOwn ? 'text-white' : 'text-gray-900 dark:text-white'
                      )}
                    >
                      {postData.authorName}
                    </p>
                    {postData.authorUsername && (
                      <p
                        className={cn(
                          'text-xs opacity-60',
                          isOwn ? 'text-blue-200' : 'text-gray-500'
                        )}
                      >
                        @{postData.authorUsername}
                      </p>
                    )}
                  </>
                )}
                {(postData.preview || postData.contentPreview) && (
                  <p
                    className={cn(
                      'text-sm mt-1 line-clamp-2',
                      isOwn ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'
                    )}
                  >
                    {postData.preview || postData.contentPreview}
                  </p>
                )}
                <p className="text-xs opacity-50 mt-2 italic">Tap to view post →</p>
              </a>
            );
          } catch {
            return <p className="break-words whitespace-pre-wrap">{message.content}</p>;
          }
        })()}

      {/* Text content - hide for reel (thumbnail only) and shared posts */}
      {message.contentType !== 'post' &&
        message.contentType !== 'application/x-shared-post' &&
        message.contentType !== 'reel' &&
        (isEditing ? (
          <div className="flex gap-2">
            <input
              type="text"
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              className="flex-1 bg-white/20 rounded px-2 py-1 text-sm"
              autoFocus
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleEdit();
                if (e.key === 'Escape') setIsEditing(false);
              }}
            />
            <button onClick={handleEdit} className="text-xs">
              Save
            </button>
          </div>
        ) : (
          <p className="min-w-0 whitespace-pre-wrap [overflow-wrap:anywhere]">{message.content}</p>
        ))}

      {/* Edited indicator - only show if message was explicitly edited */}
      {!message.isDeleted && message.isEdited && (
        <span className="text-xs opacity-60 ml-1">(edited)</span>
      )}
    </div>
  );
}
