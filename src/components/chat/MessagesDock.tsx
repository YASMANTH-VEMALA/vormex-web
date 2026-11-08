'use client';

/* eslint-disable @next/next/no-img-element */

import { UserAvatar } from '@/components/ui/UserAvatar';
import {
  getConversations,
  getMessages,
  markAsRead,
  sendMessage as sendMessageRest,
  type Conversation,
  type Message,
} from '@/lib/api/chat';
import { useAuth } from '@/lib/auth/useAuth';
import { initializeSocket, getSocket, sendChatMessage, sendChatTyping, joinChatRoom } from '@/lib/socket';
import { cn } from '@/lib/utils';
import { resolveMediaUrl } from '@/lib/utils/media';
import { format, formatDistanceToNowStrict, isSameDay, isToday, isYesterday } from 'date-fns';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeft,
  Check,
  CheckCheck,
  Maximize2,
  MessageSquarePlus,
  Search,
  Send,
  X,
  ChevronDown,
} from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type View = 'closed' | 'list' | 'chat';
type Filter = 'all' | 'unread' | 'online';

const HIDDEN_PREFIXES = [
  '/login',
  '/forgot-password',
  '/reset-password',
  '/verify-email',
  '/onboarding',
  '/messages',
  '/vormex-delete-account',
  '/privacy',
  '/terms',
  '/support',
  '/reels',
];

function shortTime(iso?: string | null) {
  if (!iso) return '';
  const d = new Date(iso);
  if (isToday(d)) return format(d, 'h:mm a');
  if (isYesterday(d)) return 'Yesterday';
  const diff = Date.now() - d.getTime();
  if (diff < 7 * 864e5) return format(d, 'EEE');
  return format(d, 'd MMM');
}

function previewOf(c: Conversation, meId?: string) {
  const m = c.lastMessage;
  if (!m) return 'Say hi 👋';
  const mine = m.senderId === meId;
  const text =
    m.contentType && m.contentType.toUpperCase() !== 'TEXT'
      ? mine
        ? 'You sent an attachment'
        : 'Sent an attachment'
      : m.content;
  return mine && (!m.contentType || m.contentType.toUpperCase() === 'TEXT') ? `You: ${text}` : text;
}

function sortConversations(list: Conversation[]) {
  return [...list].sort(
    (a, b) =>
      new Date(b.lastMessageAt || b.updatedAt).getTime() -
      new Date(a.lastMessageAt || a.updatedAt).getTime()
  );
}

function Avatar({
  user,
  size = 'md',
  showStatus = true,
}: {
  user: Conversation['otherParticipant'];
  size?: 'sm' | 'md';
  showStatus?: boolean;
}) {
  const dim = size === 'sm' ? 'h-9 w-9' : 'h-12 w-12';
  return (
    <div className={cn('relative flex-shrink-0', dim)}>
      <UserAvatar
        imageSrc={user.profileImage}
        name={user.name}
        className={cn(dim, 'text-sm')}
      />
      {showStatus && user.isOnline && (
        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-card" />
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   Chat view                                 */
/* -------------------------------------------------------------------------- */

function ChatView({
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
        saved = await sendChatMessage({ conversationId: conversation.id, content, clientMessageId });
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
    const out: Array<{ kind: 'day'; label: string; key: string } | { kind: 'msg'; m: Message; first: boolean; last: boolean }> = [];
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
      const sameAsPrev = prev && prev.senderId === m.senderId && isSameDay(new Date(prev.createdAt), d);
      const sameAsNext = next && next.senderId === m.senderId && isSameDay(new Date(next.createdAt), d);
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
              <div key={r.key} className="my-3 text-center text-[11px] font-medium text-muted-foreground">
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

function MessageRow({
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
  const isImage = !!media && (m.mediaType?.startsWith('image') || m.contentType?.toUpperCase() === 'IMAGE');
  const pending = m.id === m.clientMessageId;

  return (
    <div className={cn('flex flex-col', mine ? 'items-end' : 'items-start', first ? 'mt-2' : 'mt-0.5')}>
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

/* -------------------------------------------------------------------------- */
/*                                  Main dock                                  */
/* -------------------------------------------------------------------------- */

export function MessagesDock() {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useAuth();
  const [view, setView] = useState<View>('closed');
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Filter>('all');
  const panelRef = useRef<HTMLDivElement>(null);

  const activeIdRef = useRef<string | null>(null);
  const viewRef = useRef<View>('closed');
  useEffect(() => {
    activeIdRef.current = activeId;
    viewRef.current = view;
  }, [activeId, view]);

  const meId = user?.id;
  const hidden = !meId || pathname === '/' || HIDDEN_PREFIXES.some((p) => pathname.startsWith(p));

  const load = useCallback(async () => {
    try {
      const res = await getConversations(30);
      setConversations(sortConversations(res.conversations));
    } catch (e) {
      console.error('Messages dock: failed to load conversations', e);
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!meId || hidden) return;
    let cancelled = false;
    getConversations(30)
      .then((res) => {
        if (!cancelled) setConversations(sortConversations(res.conversations));
      })
      .catch((e) => console.error('Messages dock: failed to load conversations', e))
      .finally(() => {
        if (!cancelled) setLoaded(true);
      });
    return () => {
      cancelled = true;
    };
  }, [meId, hidden]);

  // Realtime list updates
  useEffect(() => {
    if (!meId || hidden) return;
    const onNew = ({ conversationId, message }: { conversationId: string; message: Message }) => {
      setConversations((prev) => {
        const idx = prev.findIndex((c) => c.id === conversationId);
        if (idx < 0) {
          void load();
          return prev;
        }
        const c = prev[idx];
        const incoming = message.senderId !== meId;
        const viewing = activeIdRef.current === conversationId && viewRef.current === 'chat';
        const updated: Conversation = {
          ...c,
          lastMessage: {
            id: message.id,
            content: message.content,
            contentType: message.contentType,
            senderId: message.senderId,
            status: message.status,
            createdAt: message.createdAt,
          },
          lastMessageAt: message.createdAt,
          unreadCount: incoming && !viewing ? c.unreadCount + 1 : c.unreadCount,
        };
        return sortConversations([updated, ...prev.filter((_, i) => i !== idx)]);
      });
    };
    initializeSocket({ onChatNewMessage: onNew });
    return () => {
      getSocket()?.off('chat:new_message', onNew as never);
    };
  }, [meId, hidden, load]);

  // Esc closes
  useEffect(() => {
    if (view === 'closed') return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setView('closed');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [view]);

  const totalUnread = useMemo(
    () => conversations.reduce((n, c) => n + (c.unreadCount || 0), 0),
    [conversations]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return conversations.filter((c) => {
      const o = c.otherParticipant;
      if (q && !o.name.toLowerCase().includes(q) && !o.username.toLowerCase().includes(q)) return false;
      if (filter === 'unread') return c.unreadCount > 0;
      if (filter === 'online') return o.isOnline;
      return true;
    });
  }, [conversations, query, filter]);

  const onlineStrip = useMemo(
    () => conversations.filter((c) => c.otherParticipant.isOnline).slice(0, 10),
    [conversations]
  );

  const pillAvatars = useMemo(() => {
    const unread = conversations.filter((c) => c.unreadCount > 0);
    return (unread.length ? unread : conversations).slice(0, 3);
  }, [conversations]);

  const active = conversations.find((c) => c.id === activeId) || null;

  const openChat = (c: Conversation) => {
    setActiveId(c.id);
    setView('chat');
    if (c.unreadCount > 0) {
      setConversations((prev) => prev.map((x) => (x.id === c.id ? { ...x, unreadCount: 0 } : x)));
    }
  };

  const onActivity = (conversationId: string, message: Message) => {
    setConversations((prev) => {
      const c = prev.find((x) => x.id === conversationId);
      if (!c) return prev;
      return sortConversations([
        {
          ...c,
          lastMessage: {
            id: message.id,
            content: message.content,
            contentType: message.contentType,
            senderId: message.senderId,
            status: message.status,
            createdAt: message.createdAt,
          },
          lastMessageAt: message.createdAt,
        },
        ...prev.filter((x) => x.id !== conversationId),
      ]);
    });
  };

  if (hidden) return null;

  return (
    <div className="pointer-events-none fixed bottom-4 right-5 z-[60] hidden lg:block">
      <AnimatePresence mode="wait" initial={false}>
        {view === 'closed' ? (
          <motion.button
            key="pill"
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.16 }}
            onClick={() => setView('list')}
            className="pointer-events-auto flex items-center gap-3 rounded-full border border-border bg-card py-2.5 pl-4 pr-3 text-card-foreground shadow-xl transition-shadow hover:shadow-2xl"
            aria-label={`Messages${totalUnread ? `, ${totalUnread} unread` : ''}`}
          >
            <span className="relative">
              <Send className="h-5 w-5 -rotate-12" />
              {totalUnread > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold leading-none text-white ring-2 ring-card">
                  {totalUnread > 9 ? '9+' : totalUnread}
                </span>
              )}
            </span>
            <span className="text-sm font-semibold">Messages</span>
            {pillAvatars.length > 0 && (
              <span className="flex -space-x-2">
                {pillAvatars.map((c) => (
                  <UserAvatar
                    key={c.id}
                    imageSrc={c.otherParticipant.profileImage}
                    name={c.otherParticipant.name}
                    className="h-7 w-7 text-[11px] ring-2 ring-card"
                  />
                ))}
              </span>
            )}
          </motion.button>
        ) : (
          <motion.div
            key="panel"
            ref={panelRef}
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="pointer-events-auto flex h-[min(600px,calc(100vh-2rem))] w-[372px] flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-2xl"
          >
            {view === 'chat' && active && meId ? (
              <ChatView
                key={active.id}
                conversation={active}
                meId={meId}
                onBack={() => setView('list')}
                onClose={() => setView('closed')}
                onExpand={() => {
                  setView('closed');
                  router.push(`/messages/${active.id}`);
                }}
                onActivity={onActivity}
              />
            ) : (
              <>
                {/* Header */}
                <div className="flex items-center justify-between px-4 pb-2 pt-3.5">
                  <h2 className="text-base font-bold tracking-tight">Messages</h2>
                  <div className="flex items-center gap-0.5">
                    <button
                      onClick={() => {
                        setView('closed');
                        router.push('/messages');
                      }}
                      aria-label="New message"
                      title="New message"
                      className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    >
                      <MessageSquarePlus className="h-[18px] w-[18px]" />
                    </button>
                    <button
                      onClick={() => {
                        setView('closed');
                        router.push('/messages');
                      }}
                      aria-label="Open full messages"
                      title="Open full messages"
                      className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    >
                      <Maximize2 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setView('closed')}
                      aria-label="Minimize"
                      title="Minimize"
                      className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    >
                      <ChevronDown className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Search */}
                <div className="px-4 pb-2">
                  <div className="flex items-center gap-2 rounded-full bg-muted px-3.5 py-2">
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search messages"
                      className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                    />
                    {query && (
                      <button onClick={() => setQuery('')} aria-label="Clear search">
                        <X className="h-3.5 w-3.5 text-muted-foreground" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Filters */}
                <div className="flex gap-1.5 px-4 pb-2">
                  {(
                    [
                      ['all', 'All'],
                      ['unread', `Unread${totalUnread ? ` ${totalUnread}` : ''}`],
                      ['online', 'Online'],
                    ] as Array<[Filter, string]>
                  ).map(([v, label]) => (
                    <button
                      key={v}
                      onClick={() => setFilter(v)}
                      className={cn(
                        'rounded-full px-3 py-1 text-xs font-medium transition-colors',
                        filter === v
                          ? 'bg-foreground text-background'
                          : 'bg-muted text-muted-foreground hover:text-foreground'
                      )}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                {/* Active now strip */}
                {filter === 'all' && !query && onlineStrip.length > 0 && (
                  <div className="flex gap-3 overflow-x-auto px-4 pb-2 pt-1 [scrollbar-width:none]">
                    {onlineStrip.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => openChat(c)}
                        className="flex w-14 flex-shrink-0 flex-col items-center gap-1"
                      >
                        <Avatar user={c.otherParticipant} />
                        <span className="w-full truncate text-center text-[11px] text-muted-foreground">
                          {c.otherParticipant.name.split(' ')[0]}
                        </span>
                      </button>
                    ))}
                  </div>
                )}

                {/* List */}
                <div className="flex-1 overflow-y-auto pb-2">
                  {!loaded ? (
                    <div className="space-y-1 px-2">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="flex animate-pulse items-center gap-3 px-2 py-2.5">
                          <div className="h-12 w-12 rounded-full bg-muted" />
                          <div className="flex-1 space-y-2">
                            <div className="h-3.5 w-1/2 rounded bg-muted" />
                            <div className="h-3 w-3/4 rounded bg-muted/70" />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : filtered.length === 0 ? (
                    <div className="px-6 py-14 text-center">
                      <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-muted">
                        <Send className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <p className="text-sm font-semibold">
                        {query || filter !== 'all' ? 'No conversations found' : 'No messages yet'}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {query || filter !== 'all'
                          ? 'Try a different search or filter'
                          : 'Connect with people to start chatting'}
                      </p>
                    </div>
                  ) : (
                    <div className="px-2">
                      {filtered.map((c) => {
                        const unread = c.unreadCount > 0;
                        return (
                          <button
                            key={c.id}
                            onClick={() => openChat(c)}
                            className="flex w-full items-center gap-3 rounded-xl px-2 py-2.5 text-left transition-colors hover:bg-accent"
                          >
                            <Avatar user={c.otherParticipant} />
                            <div className="min-w-0 flex-1">
                              <div className="flex items-baseline justify-between gap-2">
                                <p
                                  className={cn('truncate text-sm', unread ? 'font-bold' : 'font-medium')}
                                >
                                  {c.otherParticipant.name}
                                </p>
                                <span
                                  className={cn(
                                    'flex-shrink-0 text-[11px]',
                                    unread ? 'font-semibold text-blue-500' : 'text-muted-foreground'
                                  )}
                                >
                                  {shortTime(c.lastMessageAt || c.updatedAt)}
                                </span>
                              </div>
                              <div className="flex items-center justify-between gap-2">
                                <p
                                  className={cn(
                                    'truncate text-[13px]',
                                    unread ? 'font-semibold text-foreground' : 'text-muted-foreground'
                                  )}
                                >
                                  {previewOf(c, meId)}
                                </p>
                                {unread && (
                                  <span className="flex h-5 min-w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 px-1.5 text-[11px] font-bold text-white">
                                    {c.unreadCount > 99 ? '99+' : c.unreadCount}
                                  </span>
                                )}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MessagesDock;
