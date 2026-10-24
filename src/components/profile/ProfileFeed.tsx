'use client';
import { useSyncedState } from '@/hooks/useSyncedState';
import { useAuth as useResourceAuth } from '@/lib/auth/useAuth';
import { useQuery } from '@tanstack/react-query';

import { EditPostModal } from '@/components/feed/EditPostModal';
import { FormattedContent } from '@/components/feed/FormattedContent';
import Link from 'next/link';
import { isTerminalSafetyError } from '@/lib/api/errors';
import { deletePost, getPost } from '@/lib/api/posts';
import { getUserFeed } from '@/lib/api/profile';
import { reelsApi } from '@/lib/api/reels';
import { useAuth } from '@/lib/auth/useAuth';
import { SAFETY_STATE_CHANGED_EVENT } from '@/lib/socket';
import { handleApiError } from '@/lib/utils/errorHandler';
import type { Post } from '@/types/post'; // Added Post type
import type { FeedItem, RecentActivity } from '@/types/profile';
import * as Tabs from '@radix-ui/react-tabs';
import {
  Eye,
  ArrowUpRight,
  FileText,
  Heart,
  Loader2,
  MessageSquare,
  MoreHorizontal,
  Newspaper,
  Pencil,
  Trash2,
  Video,
} from 'lucide-react';
import { useCallback, useState } from 'react';

interface ProfileFeedProps {
  userId: string;
  initialFeed?: RecentActivity;
}

type FilterType = 'all' | 'posts' | 'articles' | 'forum' | 'videos';

const TABS: { value: FilterType; label: string; icon: React.ReactNode }[] = [
  { value: 'all', label: 'All', icon: <FileText className="w-4 h-4" /> },
  { value: 'posts', label: 'Posts', icon: <MessageSquare className="w-4 h-4" /> },
  { value: 'articles', label: 'Articles', icon: <Newspaper className="w-4 h-4" /> },
  { value: 'videos', label: 'Reels', icon: <Video className="w-4 h-4" /> },
];

export function ProfileFeed({ userId, initialFeed }: ProfileFeedProps) {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<FilterType>('all');
  const [initialItems] = useState<FeedItem[]>(initialFeed?.items || []);
  const [initialHasMore] = useState(initialFeed?.hasMore || false);

  const [loadingMore, setLoadingMore] = useState(false);
  const [actionError, setError] = useState<string | null>(null);

  // Edit/Delete State
  const [menuOpenId, setMenuOpenId] = useState<string | null>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [postToEdit, setPostToEdit] = useState<Post | null>(null);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  // Check ownership
  const isOwner = user?.id === userId;

  const resourceViewer = useResourceAuth().user;
  const fetchFeedResource = useQuery({
    queryKey: [
      'web-resource',
      'profile-feed',
      resourceViewer?.id ?? 'anonymous',
      userId,
      activeTab,
    ],
    queryFn: async () => {
      return getUserFeed(userId, 1, 20, activeTab);
    },
    retry: false,
  });
  const [items, setItems] = useSyncedState(fetchFeedResource.data?.items ?? initialItems);
  const [hasMore, setHasMore] = useSyncedState(fetchFeedResource.data?.hasMore ?? initialHasMore);
  const [page, setPage] = useSyncedState(1, fetchFeedResource.data);
  const loading = fetchFeedResource.isPending;
  const error = fetchFeedResource.isError
    ? isTerminalSafetyError(fetchFeedResource.error)
      ? 'This profile is unavailable.'
      : handleApiError(fetchFeedResource.error)
    : actionError;
  const fetchFeed = () => fetchFeedResource.refetch();

  const handleFeedError = useCallback(
    (requestError: unknown) => {
      const terminal = isTerminalSafetyError(requestError);
      if (terminal) {
        setItems([]);
        window.dispatchEvent(
          new CustomEvent(SAFETY_STATE_CHANGED_EVENT, {
            detail: { reason: 'interaction_policy_changed' },
          })
        );
      }
      setHasMore(false);
      setError(terminal ? 'This profile is unavailable.' : handleApiError(requestError));
    },
    [setHasMore, setItems]
  );

  // Load more
  const loadMore = useCallback(async () => {
    if (loadingMore || !hasMore) return;

    setLoadingMore(true);
    setError(null);
    try {
      const nextPage = page + 1;
      const response = await getUserFeed(userId, nextPage, 20, activeTab);
      setItems((prev) => [...prev, ...response.items]);
      setHasMore(response.hasMore);
      setPage(nextPage);
    } catch (requestError) {
      // A failed page remains user-retryable without re-triggering on scroll.
      handleFeedError(requestError);
    } finally {
      setLoadingMore(false);
    }
  }, [
    loadingMore,
    hasMore,
    page,
    userId,
    activeTab,
    setItems,
    setHasMore,
    setPage,
    handleFeedError,
  ]);

  const handleDelete = async (itemId: string, contentType: string) => {
    if (!window.confirm('Are you sure you want to delete this?')) return;

    setIsDeleting(itemId);
    try {
      if (contentType === 'short_video') {
        await reelsApi.deleteReel(itemId);
      } else {
        await deletePost(itemId);
      }
      setItems(items.filter((item) => item.id !== itemId));
    } catch (err) {
      console.error('Failed to delete:', err);
      alert('Failed to delete');
    } finally {
      setIsDeleting(null);
      setMenuOpenId(null);
    }
  };

  const handleEditClick = async (itemId: string, contentType: string) => {
    setMenuOpenId(null);
    if (contentType === 'short_video') {
      window.location.assign(`/reels/${itemId}/edit`);
      return;
    }
    try {
      const post = await getPost(itemId);
      setPostToEdit(post);
      setEditModalOpen(true);
    } catch (err) {
      console.error('Failed to load post for editing:', err);
      alert('Failed to load post for editing');
    }
  };

  const handlePostUpdated = (updatedPost: Post) => {
    // Update the item in the list
    // Note: FeedItem is a subset/different shape, so we assume updatedPost content reflects there
    setItems(
      items.map((item) => {
        if (item.id === updatedPost.id) {
          return {
            ...item,
            content: updatedPost.content || '',
            // Update other fields if available in FeedItem
          };
        }
        return item;
      })
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();

    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const getContentTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      post: 'Post',
      article: 'Article',
      short_video: 'Reel',
      forum_question: 'Question',
      forum_answer: 'Answer',
    };
    return labels[type] || type;
  };

  return (
    <div className="min-w-0 text-[var(--foreground)]">
      <Tabs.Root
        value={activeTab}
        onValueChange={(value) => {
          setActiveTab(value as FilterType);
          setMenuOpenId(null);
        }}
      >
        <Tabs.List
          aria-label="Filter profile activity"
          className="mb-5 grid grid-cols-4 gap-1 rounded-xl bg-[var(--muted)] p-1"
        >
          {TABS.map((tab) => (
            <Tabs.Trigger
              key={tab.value}
              value={tab.value}
              className="flex min-w-0 items-center justify-center gap-1.5 rounded-lg px-2 py-2.5 text-xs sm:text-sm font-medium text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)] data-[state=active]:bg-[var(--card)] data-[state=active]:text-[var(--foreground)] data-[state=active]:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
            >
              <span className="hidden sm:block">{tab.icon}</span>
              {tab.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <Tabs.Content value={activeTab} className="outline-none">
          {error ? (
            <div className="rounded-xl border border-[var(--border)] p-8 text-center">
              <p role="alert" className="text-sm text-red-600 dark:text-red-400">
                {error}
              </p>
              <button
                type="button"
                onClick={() => void fetchFeed()}
                className="mt-4 rounded-lg border border-[var(--border)] px-4 py-2 text-sm font-medium hover:bg-[var(--accent)]"
              >
                Try again
              </button>
            </div>
          ) : loading ? (
            <div
              role="status"
              className="flex items-center justify-center gap-2 py-12 text-sm text-[var(--muted-foreground)]"
            >
              <Loader2 className="h-5 w-5 animate-spin" />
              Loading activity...
            </div>
          ) : items.length === 0 ? (
            <div className="rounded-xl border border-dashed border-[var(--border)] px-4 py-12 text-center">
              <FileText className="mx-auto mb-3 h-7 w-7 text-[var(--muted-foreground)]" />
              <p className="font-medium">
                No {activeTab === 'all' ? 'activity' : activeTab === 'videos' ? 'reels' : activeTab}{' '}
                yet
              </p>
              <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                Shared updates will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => {
                const href =
                  item.contentType === 'short_video'
                    ? `/reels/${item.id}`
                    : ['post', 'article'].includes(item.contentType)
                      ? `/post/${item.id}`
                      : null;
                const images = item.images ?? [];
                return (
                  <article
                    key={item.id}
                    aria-label={`${getContentTypeLabel(item.contentType)} activity`}
                    className="relative min-w-0 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 sm:p-5"
                  >
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span className="rounded-md bg-[var(--muted)] px-2 py-1 font-medium">
                          {getContentTypeLabel(item.contentType)}
                        </span>
                        <time dateTime={item.createdAt} className="text-[var(--muted-foreground)]">
                          {formatDate(item.createdAt)}
                        </time>
                      </div>
                      {isOwner && (
                        <div className="relative">
                          <button
                            type="button"
                            aria-label="Activity options"
                            aria-expanded={menuOpenId === item.id}
                            onClick={() => setMenuOpenId(menuOpenId === item.id ? null : item.id)}
                            className="rounded-lg p-2 text-[var(--muted-foreground)] hover:bg-[var(--accent)]"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </button>
                          {menuOpenId === item.id && (
                            <>
                              <button
                                type="button"
                                aria-label="Close activity options"
                                className="fixed inset-0 z-10 cursor-default"
                                onClick={() => setMenuOpenId(null)}
                              />
                              <div className="absolute right-0 top-full z-20 mt-1 w-36 rounded-xl border border-[var(--border)] bg-[var(--popover)] p-1 shadow-lg">
                                <button
                                  type="button"
                                  onClick={() => void handleEditClick(item.id, item.contentType)}
                                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-[var(--accent)]"
                                >
                                  <Pencil className="h-4 w-4" />
                                  Edit{item.contentType === 'short_video' ? ' reel' : ''}
                                </button>
                                <button
                                  type="button"
                                  onClick={() => void handleDelete(item.id, item.contentType)}
                                  disabled={isDeleting === item.id}
                                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950 disabled:opacity-50"
                                >
                                  <Trash2 className="h-4 w-4" />
                                  {isDeleting === item.id ? 'Deleting...' : 'Delete'}
                                </button>
                              </div>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                    {item.title && (
                      <h3 className="mb-2 break-words text-base font-semibold">{item.title}</h3>
                    )}
                    {item.content && (
                      <FormattedContent
                        content={
                          item.content.length > 500
                            ? `${item.content.slice(0, 500)}...`
                            : item.content
                        }
                        className="mb-4 text-sm leading-relaxed [overflow-wrap:anywhere]"
                      />
                    )}
                    {item.tags && item.tags.length > 0 && (
                      <div className="mb-4 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className="text-xs text-[var(--muted-foreground)]">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                    {images.length > 0 && (
                      <div
                        className={`mb-4 grid w-full aspect-video max-h-80 overflow-hidden rounded-lg bg-[var(--muted)] ${images.length > 1 ? 'grid-cols-2 gap-1' : 'grid-cols-1'}`}
                      >
                        {images.slice(0, 4).map((image, index) => {
                          const picture = (
                            <>
                              <img
                                src={image}
                                alt={`Shared image ${index + 1}`}
                                loading="lazy"
                                className="h-full w-full object-cover"
                              />
                              {index === 3 && images.length > 4 && (
                                <span className="absolute inset-0 flex items-center justify-center bg-black/50 text-2xl font-semibold text-white">
                                  +{images.length - 4}
                                </span>
                              )}
                            </>
                          );
                          const classes = `relative min-h-0 overflow-hidden ${images.length === 3 && index === 0 ? 'row-span-2' : ''}`;
                          return href ? (
                            <Link
                              key={index}
                              href={href}
                              aria-label={`Open ${getContentTypeLabel(item.contentType).toLowerCase()}, image ${index + 1} of ${images.length}`}
                              className={classes}
                            >
                              {picture}
                            </Link>
                          ) : (
                            <div key={index} className={classes}>
                              {picture}
                            </div>
                          );
                        })}
                      </div>
                    )}
                    {item.questionTitle && (
                      <div className="mb-4 rounded-lg bg-[var(--muted)] p-3 text-sm">
                        <p className="mb-1 text-xs text-[var(--muted-foreground)]">Answered</p>
                        {item.questionTitle}
                      </div>
                    )}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[var(--border)] pt-3 text-xs text-[var(--muted-foreground)]">
                      <span
                        aria-label={`${item.likesCount || 0} likes`}
                        className="flex items-center gap-1.5"
                      >
                        <Heart className="h-4 w-4" />
                        {item.likesCount || 0}
                      </span>
                      <span
                        aria-label={`${item.commentsCount || 0} comments`}
                        className="flex items-center gap-1.5"
                      >
                        <MessageSquare className="h-4 w-4" />
                        {item.commentsCount || 0}
                      </span>
                      <span
                        aria-label={`${item.viewsCount || 0} views`}
                        className="flex items-center gap-1.5"
                      >
                        <Eye className="h-4 w-4" />
                        {item.viewsCount || 0}
                      </span>
                      {href && (
                        <Link
                          href={href}
                          className="ml-auto flex items-center gap-1 font-medium text-[var(--foreground)] hover:underline"
                        >
                          {item.contentType === 'short_video'
                            ? 'Watch reel'
                            : item.contentType === 'article'
                              ? 'Read article'
                              : 'View post'}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          )}
          {hasMore && !loading && !error && (
            <button
              type="button"
              onClick={() => void loadMore()}
              disabled={loadingMore}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--border)] py-3 text-sm font-medium hover:bg-[var(--accent)] disabled:opacity-50"
            >
              {loadingMore && <Loader2 className="h-4 w-4 animate-spin" />}
              {loadingMore ? 'Loading...' : 'Show more activity'}
            </button>
          )}
        </Tabs.Content>
      </Tabs.Root>
      {postToEdit && (
        <EditPostModal
          isOpen={editModalOpen}
          onClose={() => {
            setEditModalOpen(false);
            setPostToEdit(null);
          }}
          post={postToEdit}
          onPostUpdated={handlePostUpdated}
        />
      )}
    </div>
  );
}
