'use client';

import type { Message } from '@/lib/api/chat';
import { mergeMessages } from '@/lib/chat/messageCache';
import { format } from 'date-fns';
import { useCallback, useState, type SetStateAction } from 'react';

function rowCount(messages: Message[]): number {
  let previousDay = '';
  let count = messages.length;
  for (const message of messages) {
    const day = format(new Date(message.createdAt), 'yyyy-MM-dd');
    if (day !== previousDay) count++;
    previousDay = day;
  }
  return count;
}

/** Messages and the virtual offset commit together. Updates stay pure when
 * React replays a state updater in development or concurrent rendering. */
export function useMessageTimeline(initial: Message[], confirmed: Message[], initialIndex: number) {
  const [timeline, setTimeline] = useState(() => ({
    messages: mergeMessages(initial, confirmed),
    firstItemIndex: initialIndex,
  }));
  const [seenConfirmed, setSeenConfirmed] = useState(confirmed);
  if (confirmed.length > 0 && confirmed !== seenConfirmed) {
    setSeenConfirmed(confirmed);
    setTimeline((previous) => ({
      ...previous,
      messages: mergeMessages(previous.messages, confirmed),
    }));
  }
  const setMessages = useCallback((action: SetStateAction<Message[]>) => {
    setTimeline((previous) => ({
      ...previous,
      messages: typeof action === 'function' ? action(previous.messages) : action,
    }));
  }, []);
  const prependMessages = useCallback((incoming: Message[]) => {
    setTimeline((previous) => {
      const messages = mergeMessages(previous.messages, incoming);
      return {
        messages,
        firstItemIndex:
          previous.firstItemIndex - Math.max(0, rowCount(messages) - rowCount(previous.messages)),
      };
    });
  }, []);
  return { ...timeline, setMessages, prependMessages };
}
