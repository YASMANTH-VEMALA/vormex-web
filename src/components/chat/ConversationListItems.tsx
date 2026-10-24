'use client';
import { UserAvatar } from '@/components/ui/UserAvatar';
import { VerificationBadge } from '@/components/ui/VerificationBadge';
import { type MentionUser } from '@/lib/api/mentions';
import { cn } from '@/lib/utils';
import { Check, CheckCheck } from 'lucide-react';
import type { ConversationItemProps } from './ChatList.types';
import { formatConversationTime, getMessagePreview } from './conversationPresentation';

export function PersonSearchItem({
  person,
  isStarting,
  onClick,
}: {
  person: MentionUser;
  isStarting: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={isStarting}
      className={cn(
        'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-left transition-colors',
        'hover:bg-gray-100 dark:hover:bg-neutral-800/70',
        isStarting && 'opacity-60 cursor-wait'
      )}
    >
      <UserAvatar
        imageSrc={person.profileImage ?? person.avatar}
        name={person.name}
        className="h-10 w-10 flex-shrink-0 bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300"
      />
      <div className="flex-1 min-w-0">
        <span className="flex min-w-0 items-center gap-1.5 text-sm font-semibold text-gray-900 dark:text-white">
          <span className="truncate">{person.name}</span>
          <VerificationBadge
            profileBadgeStyle={person.profileBadgeStyle}
            isPremium={person.isPremium}
            size="small"
          />
        </span>
        <p className="text-sm truncate text-gray-500 dark:text-neutral-400">
          {person.username ? `@${person.username}` : person.headline || ''}
        </p>
      </div>
      <span className="flex-shrink-0 text-xs font-semibold text-blue-600 dark:text-blue-400">
        {isStarting ? 'Opening…' : 'Message'}
      </span>
    </button>
  );
}

export function ConversationItem({
  conversation,
  isSelected,
  currentUserId,
  isTyping,
  onClick,
}: ConversationItemProps) {
  const other = conversation.otherParticipant;
  const lastMessage = conversation.lastMessage;
  const isUnread = conversation.unreadCount > 0;
  const isSentByMe = lastMessage?.senderId === currentUserId;
  const preview = lastMessage ? getMessagePreview(lastMessage) : null;

  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-left transition-colors',
        isSelected
          ? 'bg-blue-50 dark:bg-blue-950/40'
          : 'hover:bg-gray-100 dark:hover:bg-neutral-800/70'
      )}
    >
      {/* Avatar */}
      <div className="relative flex-shrink-0">
        <UserAvatar
          imageSrc={other.profileImage}
          name={other.name}
          className="h-12 w-12 bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300"
        />
        {/* Online indicator */}
        {other.isOnline && (
          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full ring-2 ring-white dark:ring-neutral-900"></div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-2">
          <span
            className={cn(
              'flex min-w-0 items-center gap-1.5 text-sm text-gray-900 dark:text-white',
              isUnread ? 'font-bold' : 'font-semibold'
            )}
          >
            <span className="truncate">{other.name}</span>
            <VerificationBadge
              profileBadgeStyle={other.profileBadgeStyle}
              isPremium={other.isPremium}
              size="small"
            />
          </span>
          {lastMessage && (
            <span
              className={cn(
                'text-xs flex-shrink-0',
                isUnread
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-gray-400 dark:text-neutral-500'
              )}
            >
              {formatConversationTime(lastMessage.createdAt)}
            </span>
          )}
        </div>

        <div className="mt-0.5 flex items-center gap-1.5">
          {isTyping ? (
            <p className="text-sm truncate italic font-medium text-green-600 dark:text-green-400 animate-pulse">
              typing…
            </p>
          ) : lastMessage && preview ? (
            <>
              {isSentByMe &&
                (lastMessage.status === 'READ' ? (
                  <CheckCheck className="w-3.5 h-3.5 shrink-0 text-blue-500" />
                ) : lastMessage.status === 'DELIVERED' ? (
                  <CheckCheck className="w-3.5 h-3.5 shrink-0 text-gray-400" />
                ) : (
                  <Check className="w-3.5 h-3.5 shrink-0 text-gray-400" />
                ))}
              {preview.Icon && (
                <preview.Icon className="w-3.5 h-3.5 shrink-0 text-gray-400 dark:text-neutral-500" />
              )}
              <p
                className={cn(
                  'text-sm truncate',
                  isUnread
                    ? 'text-gray-900 dark:text-white font-medium'
                    : 'text-gray-500 dark:text-neutral-400'
                )}
              >
                {isSentByMe && 'You: '}
                {preview.text}
              </p>
            </>
          ) : (
            <p className="text-sm text-gray-400 dark:text-neutral-500 italic">No messages yet</p>
          )}
        </div>
      </div>

      {/* Unread badge */}
      {isUnread && (
        <div className="flex-shrink-0 min-w-[20px] h-5 px-1.5 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-[11px] text-white font-bold">
            {conversation.unreadCount > 9 ? '9+' : conversation.unreadCount}
          </span>
        </div>
      )}
    </button>
  );
}
