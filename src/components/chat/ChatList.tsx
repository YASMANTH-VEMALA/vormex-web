'use client';
import { useDebouncedValue } from '@/hooks/useDebouncedValue';
import { ConversationItem, PersonSearchItem } from './ConversationListItems';

import { buildInstantConversationFromMessage } from './conversationPresentation';

import type { ChatListProps } from './ChatList.types';
import { useConversationSocketEvents } from './useConversationSocketEvents';
import { useConversationTyping } from './useConversationTyping';
export type {
  ChatListProps,
  ConversationItemProps,
  ConversationPreviewMessage,
  PreviewInfo,
} from './ChatList.types';

import {
  getConversations,
  getOrCreateConversation,
  type Conversation,
  type ConversationsResponse,
} from '@/lib/api/chat';
import { getStructuredApiError, isTerminalSafetyError } from '@/lib/api/errors';
import { searchUsersForMention, type MentionUser } from '@/lib/api/mentions';
import { readCachedConversations, writeCachedConversations } from '@/lib/chat/browserCache';
import { CHAT_STALE_TIME, queryKeys } from '@/lib/queryKeys';
import { removeUnavailableConversations } from '@/lib/safety/clientCleanup';
import { initializeSocket, SAFETY_STATE_CHANGED_EVENT } from '@/lib/socket';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Virtuoso } from 'react-virtuoso';

const TYPING_INDICATOR_TIMEOUT_MS = 4000;
const PEOPLE_SEARCH_DEBOUNCE_MS = 300;
const PEOPLE_SEARCH_MIN_LENGTH = 2;
const PEOPLE_SEARCH_LIMIT = 8;

function ChatListSession({
  selectedConversationId,
  onSelectConversation,
  currentUserId,
  searchQuery,
}: ChatListProps) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const conversationsQueryKey = queryKeys.chatConversations(currentUserId);
  const cachedConversations = currentUserId
    ? (queryClient.getQueryData<ConversationsResponse>(conversationsQueryKey) ??
      readCachedConversations(currentUserId)?.value)
    : undefined;
  const [conversations, setConversations] = useState<Conversation[]>(
    () => cachedConversations?.conversations ?? []
  );
  const [loading, setLoading] = useState(() => Boolean(currentUserId) && !cachedConversations);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(() => cachedConversations?.hasMore ?? false);
  const [nextCursor, setNextCursor] = useState<string | undefined>(
    () => cachedConversations?.nextCursor
  );
  const [typingConversationIds, setTypingConversationIds] = useState<Set<string>>(() => new Set());
  // Server-backed people search: conversations filter instantly client-side,
  // then the rest of the app's users are searched with a debounce so we make
  // at most ~3 requests/second while typing. Results are cached by query text
  // (React Query here, Redis on the server).
  const debouncedTerm = useDebouncedValue(searchQuery?.trim() ?? '', PEOPLE_SEARCH_DEBOUNCE_MS);
  const debouncedSearch = debouncedTerm.length >= PEOPLE_SEARCH_MIN_LENGTH ? debouncedTerm : '';
  const [startingChatUserId, setStartingChatUserId] = useState<string | null>(null);
  const conversationCountRef = useRef(conversations.length);
  const hasMoreRef = useRef(hasMore);
  const nextCursorRef = useRef(nextCursor);
  const typingTimeoutsRef = useRef(new Map<string, ReturnType<typeof setTimeout>>());

  useEffect(() => {
    conversationCountRef.current = conversations.length;
  }, [conversations.length]);

  useEffect(() => {
    hasMoreRef.current = hasMore;
  }, [hasMore]);

  useEffect(() => {
    nextCursorRef.current = nextCursor;
  }, [nextCursor]);

  const writeConversationCache = useCallback(
    (
      nextConversations: Conversation[],
      overrides?: Pick<ConversationsResponse, 'hasMore' | 'nextCursor'>
    ) => {
      if (!currentUserId) return;

      const nextResponse = {
        conversations: nextConversations,
        hasMore: overrides?.hasMore ?? hasMoreRef.current,
        nextCursor: overrides?.nextCursor ?? nextCursorRef.current,
      };

      queryClient.setQueryData(queryKeys.chatConversations(currentUserId), nextResponse);
      writeCachedConversations(currentUserId, nextResponse);
    },
    [currentUserId, queryClient]
  );

  const setConversationState = useCallback(
    (
      updater: Conversation[] | ((previousConversations: Conversation[]) => Conversation[]),
      overrides?: Pick<ConversationsResponse, 'hasMore' | 'nextCursor'>
    ) => {
      setConversations((previousConversations) => {
        const nextConversations =
          typeof updater === 'function' ? updater(previousConversations) : updater;

        writeConversationCache(nextConversations, overrides);
        return nextConversations;
      });
    },
    [writeConversationCache]
  );

  const applyConversations = useCallback(
    async (result: ConversationsResponse, cursor?: string) => {
      if (!currentUserId) return;
      if (result.unavailableConversationIds?.length) {
        await removeUnavailableConversations({
          queryClient,
          ownerId: currentUserId,
          conversationIds: result.unavailableConversationIds,
        });
      }

      if (cursor) {
        setConversationState(
          (previousConversations) => {
            const seen = new Set(previousConversations.map((conversation) => conversation.id));
            const appendedConversations = result.conversations.filter(
              (conversation) => !seen.has(conversation.id)
            );
            return [...previousConversations, ...appendedConversations];
          },
          {
            hasMore: result.hasMore,
            nextCursor: result.nextCursor,
          }
        );
      } else {
        setConversationState(result.conversations, {
          hasMore: result.hasMore,
          nextCursor: result.nextCursor,
        });
      }

      setHasMore(result.hasMore);
      setNextCursor(result.nextCursor);
    },
    [currentUserId, queryClient, setConversationState]
  );
  const handleConversationsError = useCallback((err: unknown) => {
    const error = err as { message?: string };
    setError(error.message || 'Failed to load conversations');
  }, []);
  const finishConversations = useCallback(() => {
    setLoading(false);
    setLoadingMore(false);
  }, []);
  const fetchConversations = useCallback(
    async (cursor?: string, background = false) => {
      if (!currentUserId) return;

      try {
        setError(null);

        // Only show loading if we don't have any conversations yet
        if (!cursor && !background && conversationCountRef.current === 0) {
          setLoading(true);
        } else if (cursor) {
          setLoadingMore(true);
        }

        const result = await getConversations(30, cursor);
        await applyConversations(result, cursor);
      } catch (err: unknown) {
        handleConversationsError(err);
      } finally {
        finishConversations();
      }
    },
    [currentUserId, applyConversations, handleConversationsError, finishConversations]
  );

  useEffect(() => {
    if (!currentUserId) return;

    const queryKey = queryKeys.chatConversations(currentUserId);
    let shouldFetch = true;
    let cachedData = queryClient.getQueryData<ConversationsResponse>(queryKey);

    if (cachedData) {
      const updatedAt = queryClient.getQueryState(queryKey)?.dataUpdatedAt ?? 0;
      shouldFetch = Date.now() - updatedAt > CHAT_STALE_TIME;
    } else {
      const browserCache = readCachedConversations(currentUserId);
      if (browserCache) {
        cachedData = browserCache.value;
        queryClient.setQueryData(queryKey, cachedData, {
          updatedAt: browserCache.savedAt,
        });
        shouldFetch = !browserCache.isFresh;
      }
    }

    let active = true;
    initializeSocket();
    if (shouldFetch) {
      void getConversations(30)
        .then(async (result) => {
          if (active) await applyConversations(result);
        })
        .catch((err) => {
          if (active) handleConversationsError(err);
        })
        .finally(() => {
          if (active) finishConversations();
        });
    }
    return () => {
      active = false;
    };
  }, [
    currentUserId,
    applyConversations,
    handleConversationsError,
    finishConversations,
    queryClient,
  ]);

  // Listen for new messages to update conversation list
  useConversationSocketEvents({
    buildInstantConversationFromMessage,
    currentUserId,
    fetchConversations,
    selectedConversationId,
    setConversationState,
    setTypingConversationIds,
  });

  useEffect(() => {
    const handleSafetyStateChanged = () => {
      void fetchConversations(undefined, true);
    };
    window.addEventListener(SAFETY_STATE_CHANGED_EVENT, handleSafetyStateChanged);
    return () => window.removeEventListener(SAFETY_STATE_CHANGED_EVENT, handleSafetyStateChanged);
  }, [fetchConversations]);

  // Listen for typing indicators and live presence to keep conversation rows fresh
  useConversationTyping({
    TYPING_INDICATOR_TIMEOUT_MS,
    currentUserId,
    setConversationState,
    setTypingConversationIds,
    typingTimeoutsRef,
  });

  const handleSelectConversation = (conversation: Conversation) => {
    setConversationState((previousConversations) =>
      previousConversations.map((existingConversation) =>
        existingConversation.id === conversation.id
          ? { ...existingConversation, unreadCount: 0 }
          : existingConversation
      )
    );

    if (onSelectConversation) {
      onSelectConversation(conversation);
    } else {
      router.push(`/messages/${conversation.id}`);
    }
  };

  const loadMore = () => {
    if (hasMore && nextCursor && !loadingMore) {
      void fetchConversations(nextCursor);
    }
  };

  const { data: peopleSearchData, isFetching: peopleSearchLoading } = useQuery({
    queryKey: ['chat', currentUserId, 'people-search', debouncedSearch.toLowerCase()],
    queryFn: () => searchUsersForMention(debouncedSearch, PEOPLE_SEARCH_LIMIT),
    enabled: debouncedSearch.length >= PEOPLE_SEARCH_MIN_LENGTH,
    staleTime: 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });

  const handleStartConversation = async (person: MentionUser) => {
    if (startingChatUserId) return;
    setStartingChatUserId(person.id);
    try {
      const conversation = await getOrCreateConversation(person.id);
      handleSelectConversation(conversation);
    } catch (startError) {
      const terminal = isTerminalSafetyError(startError);
      setError(
        terminal
          ? 'This conversation is unavailable.'
          : getStructuredApiError(startError).message || 'Unable to start this conversation.'
      );
      if (terminal) {
        queryClient.removeQueries({ queryKey: ['chat', 'people-search'] });
        window.dispatchEvent(
          new CustomEvent(SAFETY_STATE_CHANGED_EVENT, {
            detail: { reason: 'interaction_policy_changed' },
          })
        );
      }
    } finally {
      setStartingChatUserId(null);
    }
  };

  const normalizedSearch = searchQuery?.trim().toLowerCase() ?? '';
  const visibleConversations = normalizedSearch
    ? conversations.filter((conversation) => {
        const other = conversation.otherParticipant;
        return (
          other?.name?.toLowerCase().includes(normalizedSearch) ||
          other?.username?.toLowerCase().includes(normalizedSearch)
        );
      })
    : conversations;

  // People already in the visible chat list shouldn't repeat below it.
  const conversationPeerIds = new Set(
    conversations.map((conversation) => conversation.otherParticipant?.id).filter(Boolean)
  );
  const peopleResults =
    normalizedSearch.length >= PEOPLE_SEARCH_MIN_LENGTH && debouncedSearch
      ? (peopleSearchData?.users ?? []).filter(
          (person) => person.id !== currentUserId && !conversationPeerIds.has(person.id)
        )
      : [];
  const showPeopleSection = normalizedSearch.length >= PEOPLE_SEARCH_MIN_LENGTH;

  if (loading && conversations.length === 0) {
    return (
      <div className="px-2 py-2 space-y-1">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3 px-3 py-2.5 animate-pulse">
            <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-neutral-800 shrink-0" />
            <div className="flex-1 min-w-0 space-y-2">
              <div className="h-3.5 w-1/2 bg-gray-200 dark:bg-neutral-800 rounded" />
              <div className="h-3 w-3/4 bg-gray-200 dark:bg-neutral-800 rounded" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-center">
        <p className="text-sm text-red-500">{error}</p>
        <button
          onClick={() => fetchConversations()}
          className="mt-3 px-5 py-1.5 rounded-full border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 text-sm font-semibold hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  if (conversations.length === 0 && !normalizedSearch) {
    return (
      <div className="p-8 text-center">
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center">
          <MessageCircle className="w-7 h-7 text-gray-400 dark:text-neutral-500" />
        </div>
        <p className="font-semibold text-gray-900 dark:text-white">No conversations yet</p>
        <p className="text-sm mt-1 text-gray-500 dark:text-neutral-400">
          Connect with people to start messaging.
        </p>
        <Link
          href="/find-people"
          className="mt-4 inline-flex px-5 py-1.5 rounded-full border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 text-sm font-semibold hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors"
        >
          Find people
        </Link>
      </div>
    );
  }

  const noSearchResults =
    normalizedSearch &&
    visibleConversations.length === 0 &&
    peopleResults.length === 0 &&
    !peopleSearchLoading;

  return (
    <div className="flex flex-col h-full">
      <Virtuoso
        className="flex-1 min-h-0 overscroll-contain"
        data={visibleConversations}
        computeItemKey={(_, conversation) => conversation.id}
        endReached={() => {
          if (!normalizedSearch) loadMore();
        }}
        components={{
          Header: () =>
            normalizedSearch && visibleConversations.length > 0 ? (
              <p className="px-5 pt-3 pb-1.5 text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-neutral-500">
                Chats
              </p>
            ) : null,
          Footer: () => (
            <div className="px-2 pb-24 md:pb-4">
              {noSearchResults && (
                <p className="p-6 text-center text-sm text-gray-500 dark:text-neutral-400">
                  No results for &ldquo;{searchQuery?.trim()}&rdquo;
                </p>
              )}
              {showPeopleSection && (peopleResults.length > 0 || peopleSearchLoading) && (
                <div className={visibleConversations.length > 0 ? 'mt-2' : undefined}>
                  <p className="px-3 pt-1 pb-1.5 text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-neutral-500">
                    People on Vormex
                  </p>
                  {peopleSearchLoading && peopleResults.length === 0 ? (
                    <div className="px-3 py-2.5 space-y-2">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-3 animate-pulse">
                          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-neutral-800 shrink-0" />
                          <div className="flex-1 min-w-0 space-y-1.5">
                            <div className="h-3 w-1/3 bg-gray-200 dark:bg-neutral-800 rounded" />
                            <div className="h-2.5 w-1/2 bg-gray-200 dark:bg-neutral-800 rounded" />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    peopleResults.map((person) => (
                      <PersonSearchItem
                        key={person.id}
                        person={person}
                        isStarting={startingChatUserId === person.id}
                        onClick={() => void handleStartConversation(person)}
                      />
                    ))
                  )}
                </div>
              )}
              {loadingMore && (
                <div className="flex justify-center py-3">
                  <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-blue-600" />
                </div>
              )}
            </div>
          ),
        }}
        itemContent={(_, conversation) => (
          <div className="px-2">
            <ConversationItem
              conversation={conversation}
              isSelected={selectedConversationId === conversation.id}
              currentUserId={currentUserId}
              isTyping={typingConversationIds.has(conversation.id)}
              onClick={() => handleSelectConversation(conversation)}
            />
          </div>
        )}
      />
    </div>
  );
}

export default function ChatList(props: ChatListProps) {
  return <ChatListSession key={props.currentUserId ?? 'anonymous'} {...props} />;
}
