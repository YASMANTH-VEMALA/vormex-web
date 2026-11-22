'use client';

import { UserAvatar } from '@/components/ui/UserAvatar';
import { getConversations, type Conversation, type Message } from '@/lib/api/chat';
import { useAuth } from '@/lib/auth/useAuth';
import { initializeSocket, getSocket } from '@/lib/socket';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Maximize2, MessageSquarePlus, Search, Send, X, ChevronDown } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ChatView } from './messagesDock/DockChatView';
import {
  Avatar,
  HIDDEN_PREFIXES,
  previewOf,
  shortTime,
  sortConversations,
  type Filter,
  type View,
} from './messagesDock/dockHelpers';

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
      if (q && !o.name.toLowerCase().includes(q) && !o.username.toLowerCase().includes(q))
        return false;
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
                                  className={cn(
                                    'truncate text-sm',
                                    unread ? 'font-bold' : 'font-medium'
                                  )}
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
                                    unread
                                      ? 'font-semibold text-foreground'
                                      : 'text-muted-foreground'
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
