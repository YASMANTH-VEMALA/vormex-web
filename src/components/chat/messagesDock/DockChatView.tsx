'use client';

/* eslint-disable @next/next/no-img-element */

import {
  getMessages,
  markAsRead,
  sendMessage as sendMessageRest,
  type Conversation,
  type Message,
} from '@/lib/api/chat';
import {
  initializeSocket,
  getSocket,
  sendChatMessage,
  sendChatTyping,
  joinChatRoom,
} from '@/lib/socket';
import { cn } from '@/lib/utils';
import { resolveMediaUrl } from '@/lib/utils/media';
import { format, formatDistanceToNowStrict, isSameDay, isToday, isYesterday } from 'date-fns';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, Check, CheckCheck, Maximize2, Send, X } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Avatar } from './dockHelpers';

/* -------------------------------------------------------------------------- */
/*                                   Chat view                                 */
/* -------------------------------------------------------------------------- */

export function ChatView({
  conversation,
  meId,
  onBack,
  onClose,
  onExpand,
  onActivity,
}: {
  conversation: Conversation;
  meId: string;
  onBack: () => void;
  onClose: () => void;
  onExpand: () => void;
  onActivity: (conversationId: string, message: Message) => void;
}) {
  const other = conversation.otherParticipant;
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const typingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const typingSent = useRef(false);

  const scrollToBottom = useCallback((smooth = true) => {
    requestAnimationFrame(() => {
      const el = scrollRef.current;
      if (el) el.scrollTo({ top: el.scrollHeight, behavior: smooth ? 'smooth' : 'auto' });
    });
  }, []);

  // Load history + mark read
  useEffect(() => {
    let cancelled = false;
    joinChatRoom(conversation.id);
    getMessages(conversation.id, 40)
      .then((res) => {
        if (cancelled) return;
        const sorted = [...res.messages].sort(
          (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
        setMessages(sorted);
        scrollToBottom(false);
      })
      .catch(console.error)
      .finally(() => !cancelled && setLoading(false));
    markAsRead(conversation.id).catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, [conversation.id, scrollToBottom]);

  // Realtime
  useEffect(() => {
    const onNew = ({ conversationId, message }: { conversationId: string; message: Message }) => {
      if (conversationId !== conversation.id) return;
      setMessages((prev) => {
        if (prev.some((m) => m.id === message.id)) return prev;
        // Replace optimistic copy
        const idx = message.clientMessageId
          ? prev.findIndex((m) => m.clientMessageId === message.clientMessageId)
          : -1;
        if (idx >= 0) {
          const next = [...prev];
          next[idx] = message;
          return next;
        }
        return [...prev, message];
      });
      if (message.senderId !== meId) markAsRead(conversation.id).catch(() => undefined);
      scrollToBottom();
    };
    const onTyping = (d: { conversationId: string; userId: string; isTyping: boolean }) => {
      if (d.conversationId === conversation.id && d.userId !== meId) {
        setTyping(d.isTyping);
        if (d.isTyping) scrollToBottom();
      }
    };
    const onRead = (d: { conversationId: string; readBy: string }) => {
      if (d.conversationId !== conversation.id || d.readBy === meId) return;
      setMessages((prev) => prev.map((m) => (m.senderId === meId ? { ...m, status: 'READ' } : m)));
    };

    initializeSocket({
      onChatNewMessage: onNew,
      onChatUserTyping: onTyping,
      onChatMessagesRead: onRead,
    });
    return () => {
      const s = getSocket();
      s?.off('chat:new_message', onNew as never);
      s?.off('chat:user_typing', onTyping as never);
      s?.off('chat:messages_read', onRead as never);
    };
  }, [conversation.id, meId, scrollToBottom]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [conversation.id]);

  const stopTyping = () => {
    if (typingSent.current) {
      sendChatTyping(conversation.id, false);
      typingSent.current = false;
    }
  };

  const handleChange = (v: string) => {
    setText(v);
    if (!typingSent.current && v) {
      sendChatTyping(conversation.id, true);
      typingSent.current = true;
    }
    if (typingTimer.current) clearTimeout(typingTimer.current);
    typingTimer.current = setTimeout(stopTyping, 2000);
  };

  const send = async () => {
    const content = text.trim();
    if (!content) return;
    setText('');
    stopTyping();
    const clientMessageId = `dock-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const optimistic: Message = {
      id: clientMessageId,
      clientMessageId,
      conversationId: conversation.id,
      senderId: meId,
      receiverId: other.id,
      content,
      contentType: 'TEXT',
      status: 'SENT',
      isDeleted: false,
      sender: other,
      reactions: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, optimistic]);
    scrollToBottom();
    try {
      let saved: Message;
      try {
        saved = await sendChatMessage({
          conversationId: conversation.id,
          content,
          clientMessageId,
        });
      } catch {
        saved = await sendMessageRest(conversation.id, { content, clientMessageId });
      }
      setMessages((prev) => {
        const withoutDup = prev.filter((m) => m.id !== saved.id);
        return withoutDup.map((m) => (m.clientMessageId === clientMessageId ? saved : m));
      });
      onActivity(conversation.id, saved);
    } catch (e) {
      console.error(e);
      setMessages((prev) => prev.filter((m) => m.clientMessageId !== clientMessageId));
      setText(content);
    }
  };

  // Group by day
  const rows = useMemo(() => {
    const out: Array<
      | { kind: 'day'; label: string; key: string }
      | { kind: 'msg'; m: Message; first: boolean; last: boolean }
    > = [];
    messages.forEach((m, i) => {
      const prev = messages[i - 1];
      const next = messages[i + 1];
      const d = new Date(m.createdAt);
      if (!prev || !isSameDay(new Date(prev.createdAt), d)) {
        out.push({
          kind: 'day',
          key: `d-${m.id}`,
          label: isToday(d) ? 'Today' : isYesterday(d) ? 'Yesterday' : format(d, 'EEEE, d MMM'),
        });
      }
      const sameAsPrev =
        prev && prev.senderId === m.senderId && isSameDay(new Date(prev.createdAt), d);
      const sameAsNext =
        next && next.senderId === m.senderId && isSameDay(new Date(next.createdAt), d);
      out.push({ kind: 'msg', m, first: !sameAsPrev, last: !sameAsNext });
    });
    return out;
  }, [messages]);

  const lastMine = [...messages].reverse().find((m) => m.senderId === meId);

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2 border-b border-border px-3 py-2.5">
        <button
          onClick={onBack}
          aria-label="Back to messages"
          className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <ArrowLeft className="h-[18px] w-[18px]" />
        </button>
        <button onClick={onExpand} className="flex min-w-0 flex-1 items-center gap-2.5 text-left">
          <Avatar user={other} size="sm" />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold leading-tight">{other.name}</p>
            <p className="truncate text-xs leading-tight text-muted-foreground">
              {typing
                ? 'typing…'
                : other.isOnline
                  ? 'Active now'
                  : other.lastActiveAt
                    ? `Active ${formatDistanceToNowStrict(new Date(other.lastActiveAt), { addSuffix: true })}`
                    : `@${other.username}`}
            </p>
          </div>
        </button>
        <button
          onClick={onExpand}
          aria-label="Open full chat"
          className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <Maximize2 className="h-4 w-4" />
        </button>
        <button
          onClick={onClose}
          aria-label="Close"
          className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <X className="h-[18px] w-[18px]" />
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-3">
        {loading ? (
          <div className="space-y-3">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={cn('flex animate-pulse', i % 2 ? 'justify-end' : 'justify-start')}
              >
                <div className="h-9 w-40 rounded-2xl bg-muted" />
              </div>
            ))}
          </div>
        ) : messages.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
            <Avatar user={other} showStatus={false} />
            <p className="text-sm font-semibold">{other.name}</p>
            <p className="text-xs text-muted-foreground">Start the conversation with a hello 👋</p>
          </div>
        ) : (
          rows.map((r) =>
            r.kind === 'day' ? (
              <div
                key={r.key}
                className="my-3 text-center text-[11px] font-medium text-muted-foreground"
              >
                {r.label}
              </div>
            ) : (
              <MessageRow
                key={r.m.clientMessageId || r.m.id}
                m={r.m}
                mine={r.m.senderId === meId}
                first={r.first}
                last={r.last}
                showStatus={lastMine?.id === r.m.id}
              />
            )
          )
        )}
        <AnimatePresence>
          {typing && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-1 flex w-fit items-center gap-1 rounded-2xl bg-muted px-3 py-2.5"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground"
                  style={{ animationDelay: `${i * 120}ms` }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="border-t border-border p-3">
        <div className="flex items-end gap-2 rounded-3xl border border-border bg-background px-3.5 py-1.5 focus-within:ring-2 focus-within:ring-ring/30">
          <textarea
            ref={inputRef}
            value={text}
            rows={1}
            onChange={(e) => handleChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                void send();
              }
            }}
            placeholder="Message…"
            className="max-h-24 min-h-[28px] flex-1 resize-none bg-transparent py-1 text-sm outline-none placeholder:text-muted-foreground"
          />
          <button
            onClick={() => void send()}
            disabled={!text.trim()}
            aria-label="Send"
            className="mb-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white transition-all hover:bg-blue-700 disabled:scale-90 disabled:bg-muted disabled:text-muted-foreground"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function MessageRow({
  m,
  mine,
  first,
  last,
  showStatus,
}: {
  m: Message;
  mine: boolean;
  first: boolean;
  last: boolean;
  showStatus: boolean;
}) {
  const isText = !m.contentType || m.contentType.toUpperCase() === 'TEXT';
  const media = resolveMediaUrl(m.mediaUrl);
  const isImage =
    !!media && (m.mediaType?.startsWith('image') || m.contentType?.toUpperCase() === 'IMAGE');
  const pending = m.id === m.clientMessageId;

  return (
    <div
      className={cn('flex flex-col', mine ? 'items-end' : 'items-start', first ? 'mt-2' : 'mt-0.5')}
    >
      <div
        title={format(new Date(m.createdAt), 'PPp')}
        className={cn(
          'max-w-[78%] break-words text-sm leading-snug',
          isImage ? 'overflow-hidden rounded-2xl' : 'px-3.5 py-2',
          mine ? 'bg-blue-600 text-white' : 'bg-muted text-foreground',
          // bubble shape: tighter corners where bubbles stack
          'rounded-2xl',
          mine && !first && 'rounded-tr-md',
          mine && !last && 'rounded-br-md',
          !mine && !first && 'rounded-tl-md',
          !mine && !last && 'rounded-bl-md',
          pending && 'opacity-70'
        )}
      >
        {m.isDeleted ? (
          <span className="italic opacity-70">Message removed</span>
        ) : isImage ? (
          <img src={media!} alt="" className="max-h-60 w-full object-cover" />
        ) : isText ? (
          <span className="whitespace-pre-wrap">{m.content}</span>
        ) : (
          <span>📎 {m.fileName || 'Attachment'}</span>
        )}
      </div>
      {showStatus && mine && (
        <span className="mt-0.5 flex items-center gap-1 pr-1 text-[10px] text-muted-foreground">
          {pending ? (
            'Sending…'
          ) : m.status === 'READ' ? (
            <>
              <CheckCheck className="h-3 w-3 text-blue-500" /> Seen
            </>
          ) : m.status === 'DELIVERED' ? (
            <>
              <CheckCheck className="h-3 w-3" /> Delivered
            </>
          ) : (
            <>
              <Check className="h-3 w-3" /> Sent
            </>
          )}
        </span>
      )}
    </div>
  );
}
