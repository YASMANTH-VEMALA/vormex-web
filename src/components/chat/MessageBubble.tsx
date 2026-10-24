'use client';
import { UserAvatar } from '@/components/ui/UserAvatar';
import { DEFAULT_CHAT_REACTIONS } from '@/lib/chat/customization';
import { deleteChatMessage, editChatMessage, reactToChatMessage } from '@/lib/socket';
import { cn } from '@/lib/utils';
import { format, isToday, isYesterday } from 'date-fns';
import { useEffect, useState } from 'react';
import { ChatMessageBubble } from './ChatMessageBubble';
import type { MessageBubbleProps } from './ChatMessages.types';
import MessageMenu, { MessageQuickActions } from './MessageMenu';

export function MessageBubble({
  message,
  isOwn,
  showAvatar,
  otherUser,
  conversationId,
  isHighlighted = false,
  onScrollToReply,
  registerRef,
  onReply,
  onViewImage,
  onViewVideo,
  availableReactions = DEFAULT_CHAT_REACTIONS,
  animatedBubbles = false,
}: MessageBubbleProps) {
  const [showActions, setShowActions] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showReactions, setShowReactions] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(message.content);
  const [copied, setCopied] = useState(false);
  const isStoryMessage =
    message.contentType === 'story_reply' || message.contentType === 'story_reaction';
  const [storyAvailable, setStoryAvailable] = useState(
    isStoryMessage && message.story?.available === true
  );
  const storyPreviewUrl =
    message.story?.thumbnailUrl ||
    (message.story?.mediaType === 'IMAGE' ? message.story.mediaUrl : null);

  useEffect(() => {
    if (!storyAvailable || !message.story?.expiresAt) return;
    const remainingTime = Math.max(0, Date.parse(message.story.expiresAt) - Date.now());
    const expiryTimer = window.setTimeout(() => setStoryAvailable(false), remainingTime);
    return () => window.clearTimeout(expiryTimer);
  }, [message.story?.expiresAt, storyAvailable]);

  const handleDelete = (forEveryone: boolean) => {
    deleteChatMessage(message.id, conversationId, forEveryone);
    setShowActions(false);
    setShowMenu(false);
  };

  const handleEdit = () => {
    if (editContent.trim() && editContent !== message.content) {
      editChatMessage(message.id, conversationId, editContent);
    }
    setIsEditing(false);
  };

  const handleReaction = (emoji: string) => {
    reactToChatMessage(message.id, conversationId, emoji);
    setShowReactions(false);
  };

  if (message.isDeleted) {
    return (
      <div
        ref={registerRef}
        className={cn(
          'flex w-full min-w-0 max-w-full items-center gap-2',
          isOwn ? 'justify-end' : 'justify-start'
        )}
      >
        <div className="bg-gray-100 dark:bg-gray-800 text-gray-500 italic px-4 py-2 rounded-lg text-sm">
          This message was deleted
        </div>
      </div>
    );
  }

  return (
    <div
      ref={registerRef}
      className={cn(
        'flex w-full min-w-0 max-w-full gap-2 group transition-all duration-300',
        isOwn ? 'justify-end' : 'justify-start',
        isHighlighted && 'bg-yellow-100/50 dark:bg-yellow-900/30 -mx-2 px-2 py-1 rounded-lg'
      )}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => {
        setShowActions(false);
        setShowReactions(false);
      }}
    >
      {/* Avatar for received messages */}
      {!isOwn && (
        <div className={cn('w-8 h-8 flex-shrink-0', !showAvatar && 'invisible')}>
          {showAvatar && (
            <UserAvatar
              imageSrc={otherUser.profileImage}
              name={otherUser.name}
              className="h-8 w-8 bg-gradient-to-br from-blue-400 to-purple-500 text-sm font-medium text-white"
              fallbackClassName="text-sm"
            />
          )}
        </div>
      )}

      <div className={cn('relative min-w-0 max-w-[85%] sm:max-w-[70%]', isOwn && 'order-first')}>
        {/* Reply preview - clickable to scroll to original message */}
        {message.replyTo && (
          <button
            onClick={() => onScrollToReply?.(message.replyTo!.id)}
            className={cn(
              'text-xs p-2 rounded-t-lg border-l-2 w-full text-left cursor-pointer hover:opacity-80 transition-opacity',
              isOwn
                ? 'bg-blue-600/20 border-blue-400'
                : 'bg-gray-100 dark:bg-gray-800 border-gray-400'
            )}
          >
            <span className="text-gray-500 text-[10px]">↩ Replying to</span>
            <p className="truncate text-gray-700 dark:text-gray-300">{message.replyTo.content}</p>
          </button>
        )}

        {/* Message content */}
        <ChatMessageBubble
          animatedBubbles={animatedBubbles}
          editContent={editContent}
          handleEdit={handleEdit}
          isEditing={isEditing}
          isOwn={isOwn}
          isStoryMessage={isStoryMessage}
          message={message}
          onViewImage={onViewImage}
          onViewVideo={onViewVideo}
          setEditContent={setEditContent}
          setIsEditing={setIsEditing}
          storyAvailable={storyAvailable}
          storyPreviewUrl={storyPreviewUrl}
        />

        {/* Reactions */}
        {message.reactions && message.reactions.length > 0 && (
          <div className={cn('flex flex-wrap gap-1 mt-1', isOwn ? 'justify-end' : 'justify-start')}>
            {Array.from(new Set(message.reactions.map((r) => r.emoji))).map((emoji) => {
              const count = message.reactions.filter((r) => r.emoji === emoji).length;
              return (
                <button
                  key={emoji}
                  onClick={() => handleReaction(emoji)}
                  className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full text-sm flex items-center gap-1 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <span>{emoji}</span>
                  <span className="text-xs text-gray-500">{count}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Time and status */}
        <div
          className={cn(
            'text-xs text-gray-500 mt-1 flex items-center gap-1',
            isOwn ? 'justify-end' : 'justify-start'
          )}
        >
          <span>{format(new Date(message.createdAt), 'HH:mm')}</span>
          {isOwn && (
            <span className={cn(message.status === 'READ' && 'text-blue-500')}>
              {message.status === 'READ' ? '✓✓' : message.status === 'DELIVERED' ? '✓✓' : '✓'}
            </span>
          )}
        </div>

        {/* Quick Action buttons (Discord-style) */}
        <MessageQuickActions
          isVisible={showActions && !isEditing && !showMenu}
          isOwn={isOwn}
          onReply={() => onReply?.()}
          onReact={() => setShowReactions(!showReactions)}
          onMore={() => setShowMenu(true)}
        />

        {/* Full Message Menu */}
        <MessageMenu
          isOpen={showMenu}
          onClose={() => setShowMenu(false)}
          isOwn={isOwn}
          messageContent={message.content}
          hasMedia={!!message.mediaUrl}
          mediaUrl={message.mediaUrl}
          onReply={() => onReply?.()}
          onEdit={() => setIsEditing(true)}
          onDelete={handleDelete}
          onReact={handleReaction}
          onCopy={() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          availableReactions={availableReactions}
          anchorPosition={isOwn ? 'right' : 'left'}
        />

        {/* Reaction picker */}
        {showReactions && !showMenu && (
          <div
            className={cn(
              'absolute -top-10 flex items-center gap-1 bg-white dark:bg-gray-900 shadow-lg rounded-full px-2 py-1',
              isOwn ? 'right-0' : 'left-0'
            )}
          >
            {availableReactions.map((emoji) => (
              <button
                key={emoji}
                onClick={() => handleReaction(emoji)}
                className="hover:scale-125 transition-transform p-1"
              >
                {emoji}
              </button>
            ))}
          </div>
        )}

        {/* Copied notification */}
        {copied && (
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded">
            Copied!
          </div>
        )}
      </div>
    </div>
  );
}

export function formatDateSeparator(date: Date): string {
  if (isToday(date)) return 'Today';
  if (isYesterday(date)) return 'Yesterday';
  return format(date, 'MMMM d, yyyy');
}
