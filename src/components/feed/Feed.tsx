'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Plus } from 'lucide-react';
import { PostCard } from '@/components/feed/PostCard';
import { Comments } from '@/components/feed/Comments';
import { CreatePostModal } from '@/components/feed/CreatePostModal';
import { StoryCarousel, StoryViewer, StoryCreator } from '@/components/stories';
import { getFeed } from '@/lib/api/posts';
import { type StoryGroup } from '@/lib/api/stories';
import { 
  initializeSocket, 
  disconnectSocket, 
  getSocket,
  joinPostRoom,
  leavePostRoom,
  removeSocketHandlers,
} from '@/lib/socket';
import { useAuth } from '@/lib/auth/useAuth';
import { recordLogin } from '@/lib/api/engagement';
import { SocialProofBar, StreakCounter, ProgressNudges, DailyMatchCard, ConnectionLimitBanner, Leaderboard, TodayMatchesSection, RewardPopup } from '@/components/engagement';
import { StreakWidget, WeeklyGoalsWidget, NudgeCard } from '@/components/engagement/FeedWidgets';
import { useRewards } from '@/hooks/useRewards';
import { useVariableRewards } from '@/hooks/useVariableRewards';
import { RewardCardRenderer } from '@/components/rewards';
import { NotificationPrompt } from '@/components/notifications';
import type { Post, PollOption } from '@/types/post';

export function Feed() {
  const { user, loading: authLoading } = useAuth();
  const { rewards, dismissReward } = useRewards(user?.id);
  const { activeCards, dismissCard } = useVariableRewards(user?.id);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [cursor, setCursor] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Modal states
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedPostForComments, setSelectedPostForComments] = useState<string | null>(null);
  const [highlightCommentId, setHighlightCommentId] = useState<string | undefined>(undefined);
  
  // Stories states
  const [showStoryCreator, setShowStoryCreator] = useState(false);
  const [showStoryViewer, setShowStoryViewer] = useState(false);
  const [selectedStoryGroup, setSelectedStoryGroup] = useState<StoryGroup | null>(null);
  const [storyRefreshKey, setStoryRefreshKey] = useState(0);
  
  // Refs for infinite scroll
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Initialize Socket.IO
  useEffect(() => {
    if (!user) return;
    
    // Define handlers
    const handlePostCreated = ({ post }: { post: Post }) => {
      console.log('Feed: New post received via socket:', post.id);
      // Add new post to the top of the feed in real-time
      setPosts(prev => {
        // Check if post already exists to avoid duplicates
        if (prev.some(p => p.id === post.id)) return prev;
        return [post, ...prev];
      });
    };
    
    const handlePostLiked = ({ postId, userId: likerUserId, liked, likesCount, reactionType, reactionSummary }: any) => {
      setPosts(prev => prev.map(post => {
        if (post.id !== postId) return post;
        // Only update isLiked/reactionType if the current user performed the action
        const isCurrentUser = likerUserId === user.id;
        return {
          ...post,
          likesCount,
          isLiked: isCurrentUser ? liked : post.isLiked,
          userReactionType: isCurrentUser ? reactionType : post.userReactionType,
          reactionSummary: reactionSummary || post.reactionSummary,
        };
      }));
    };
    
    const handlePostReacted = ({ postId, userId: reactorUserId, liked, reactionType, likesCount, reactionSummary }: any) => {
      setPosts(prev => prev.map(post => {
        if (post.id !== postId) return post;
        // Only update isLiked/reactionType if the current user performed the action
        const isCurrentUser = reactorUserId === user.id;
        return {
          ...post,
          likesCount,
          isLiked: isCurrentUser ? liked : post.isLiked,
          userReactionType: isCurrentUser ? reactionType : post.userReactionType,
          reactionSummary: reactionSummary || post.reactionSummary,
        };
      }));
    };
    
    const handleCommentCreated = ({ postId, commentsCount }: { postId: string; commentsCount: number }) => {
      setPosts(prev => prev.map(post => 
        post.id === postId ? { ...post, commentsCount } : post
      ));
    };
    
    const handlePollUpdated = ({ postId, pollOptions }: { postId: string; pollOptions: any[] }) => {
      setPosts(prev => prev.map(post => 
        post.id === postId ? { ...post, pollOptions } : post
      ));
    };
    
    const handlePostShared = ({ postId, sharesCount }: { postId: string; sharesCount: number }) => {
      setPosts(prev => prev.map(post => 
        post.id === postId ? { ...post, sharesCount } : post
      ));
    };
    
    // Initialize socket connection
    initializeSocket({
      onConnect: () => {
        console.log('Feed: Socket connected');
      },
    });
    
    // Directly attach handlers to the socket
    const sock = getSocket();
    if (sock) {
      sock.on('post:created', handlePostCreated);
      sock.on('post:liked', handlePostLiked);
      sock.on('post:reacted', handlePostReacted);
      sock.on('comment:created', handleCommentCreated);
      sock.on('poll:updated', handlePollUpdated);
      sock.on('post:shared', handlePostShared);
    }
    
    return () => {
      // Clean up handlers on unmount
      const sock = getSocket();
      if (sock) {
        sock.off('post:created', handlePostCreated);
        sock.off('post:liked', handlePostLiked);
        sock.off('post:reacted', handlePostReacted);
        sock.off('comment:created', handleCommentCreated);
        sock.off('poll:updated', handlePollUpdated);
        sock.off('post:shared', handlePostShared);
      }
    };
  }, [user]);

  // Fetch initial feed
  useEffect(() => {
    if (authLoading) return;
    
    const fetchFeed = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await getFeed(undefined, 20);
        setPosts(response.posts);
        setCursor(response.nextCursor);
        setHasMore(response.hasMore ?? response.nextCursor !== null);
      } catch (err: any) {
        console.error('Error fetching feed:', err);
        setError(err.response?.data?.error || 'Failed to load feed');
      } finally {
        setLoading(false);
      }
    };
    
    fetchFeed();
  }, [authLoading]);

  // Handle opening a story group
  const handleOpenStory = (group: StoryGroup) => {
    setSelectedStoryGroup(group);
    setShowStoryViewer(true);
  };

  // Load more posts
  const loadMore = useCallback(async () => {
    if (loadingMore || !hasMore || !cursor) return;
    
    setLoadingMore(true);
    
    try {
      const response = await getFeed(cursor, 20);
      setPosts(prev => [...prev, ...response.posts]);
      setCursor(response.nextCursor);
      setHasMore(response.hasMore ?? response.nextCursor !== null);
    } catch (err: any) {
      console.error('Error loading more posts:', err);
    } finally {
      setLoadingMore(false);
    }
  }, [cursor, hasMore, loadingMore]);

  // Infinite scroll observer
  useEffect(() => {
    if (loading) return;
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loadingMore) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );
    
    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }
    
    return () => {
      observerRef.current?.disconnect();
    };
  }, [loading, hasMore, loadingMore, loadMore]);

  // Retry loading feed on error
  const retryFeed = async () => {
    setLoading(true);
    setError(null);
    setCursor(null);
    
    try {
      const response = await getFeed(undefined, 20);
      setPosts(response.posts);
      setCursor(response.nextCursor);
      setHasMore(response.hasMore ?? response.nextCursor !== null);
    } catch (err: any) {
      console.error('Error loading feed:', err);
      setError(err.response?.data?.error || 'Failed to load feed');
    } finally {
      setLoading(false);
    }
  };

  // Handle post created - add instantly (optimistic) or via WebSocket
  const handlePostCreated = (post?: Post) => {
    if (post) {
      setPosts(prev => {
        if (prev.some(p => p.id === post.id)) return prev;
        return [post, ...prev];
      });
    }
  };

  // Handle post deleted
  const handlePostDeleted = (postId: string) => {
    setPosts(prev => prev.filter(post => post.id !== postId));
  };

  // Handle post edited
  const handlePostEdited = (postId: string, updatedPost: Post) => {
    setPosts(prev => prev.map(post => 
      post.id === postId ? { ...post, ...updatedPost } : post
    ));
  };

  // Handle like update
  const handleLikeUpdate = (postId: string, liked: boolean, count: number) => {
    setPosts(prev => prev.map(post => 
      post.id === postId ? { ...post, isLiked: liked, likesCount: count } : post
    ));
  };

  // Handle poll update
  const handlePollUpdate = (postId: string, options: PollOption[]) => {
    setPosts(prev => prev.map(post => 
      post.id === postId ? { ...post, pollOptions: options } : post
    ));
  };

  // Handle comment click
  const handleCommentClick = (postId: string) => {
    setSelectedPostForComments(postId);
    setHighlightCommentId(undefined);
    joinPostRoom(postId);
  };

  // Close comments
  const closeComments = () => {
    if (selectedPostForComments) {
      leavePostRoom(selectedPostForComments);
    }
    setSelectedPostForComments(null);
    setHighlightCommentId(undefined);
  };

  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm border-b border-gray-200 dark:border-neutral-800">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Feed</h1>
            {user && <SocialProofBar />}
          </div>
          {user && <StreakCounter />}
        </div>
      </div>

      {/* Stories Carousel */}
      {user && (
        <StoryCarousel
          key={storyRefreshKey}
          onOpenStory={handleOpenStory}
          onCreateStory={() => setShowStoryCreator(true)}
        />
      )}

      {/* Today's Matches — horizontal scrollable section */}
      {user && !loading && (
        <div className="px-4 lg:px-4">
          <TodayMatchesSection />
        </div>
      )}

      {/* Create Post Card */}
      {user && (
        <div className="m-4">
          <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 overflow-hidden">
            {/* Main input area */}
            <button
              onClick={() => setShowCreateModal(true)}
              className="w-full p-5 hover:bg-gray-50 dark:hover:bg-neutral-800/50 transition-colors text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 dark:bg-neutral-700 flex-shrink-0">
                  {user.profileImage ? (
                    <img src={user.profileImage} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xl font-bold text-gray-500">
                      {user.name?.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
                <div className="flex-1 py-3 px-5 rounded-full border border-gray-300 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800/50">
                  <span className="text-gray-500 dark:text-neutral-400 text-base">What's on your mind, {user.name?.split(' ')[0]}?</span>
                </div>
              </div>
            </button>
            
            {/* Action buttons */}
            <div className="flex items-center justify-around border-t border-gray-100 dark:border-neutral-800 px-4 py-3">
              <button
                onClick={() => setShowCreateModal(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors text-gray-600 dark:text-neutral-400"
              >
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium">Photo</span>
              </button>
              <button
                onClick={() => setShowCreateModal(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors text-gray-600 dark:text-neutral-400"
              >
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium">Video</span>
              </button>
              <button
                onClick={() => setShowCreateModal(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors text-gray-600 dark:text-neutral-400"
              >
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-sm font-medium">Article</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Two-column layout: Feed + Sidebar */}
      <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-6 lg:px-4">
        {/* ── Left Column: Posts ── */}
        <div className="min-w-0">
          {/* Error State */}
          {error && (
            <div className="m-4 lg:mx-0 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl text-red-600 dark:text-red-400 text-center">
              <p>{error}</p>
              <button
                onClick={retryFeed}
                className="mt-2 text-sm font-semibold underline"
              >
                Try again
              </button>
            </div>
          )}

          {/* Connection Limit Notice */}
          {user && !loading && (
            <div className="px-4 lg:px-0 mb-3">
              <ConnectionLimitBanner />
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
            </div>
          )}

          {/* Empty State */}
          {!loading && posts.length === 0 && !error && (
            <div className="text-center py-12 px-4">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center">
                <Plus className="w-10 h-10 text-gray-400" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Your feed is empty
              </h2>
              <p className="text-gray-500 dark:text-neutral-400 mb-4">
                Start by creating your first post or follow some people!
              </p>
              <button
                onClick={() => setShowCreateModal(true)}
                className="px-6 py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors"
              >
                Create Post
              </button>
            </div>
          )}

          {/* Posts List with Interleaved Widgets */}
          <div className="space-y-4 px-4 lg:px-0">
            <AnimatePresence>
              {posts.map((post, index) => (
                <React.Fragment key={post.id}>
                  <PostCard
                    post={post}
                    onLikeUpdate={handleLikeUpdate}
                    onPollUpdate={handlePollUpdate}
                    onDelete={handlePostDeleted}
                    onEdit={handlePostEdited}
                    onCommentClick={() => handleCommentClick(post.id)}
                  />
                  {/* After 2nd post: Streak Widget + Weekly Goals */}
                  {index === 1 && (
                    <>
                      <StreakWidget />
                      <WeeklyGoalsWidget />
                    </>
                  )}
                  {/* Variable Reward Cards — injected at dynamic positions */}
                  {activeCards.filter(c => c.position === index + 1).map(card => (
                    <RewardCardRenderer
                      key={card.type}
                      card={card}
                      onDismiss={dismissCard}
                    />
                  ))}
                  {/* After 5th post: Nudge Card */}
                  {index === 4 && <NudgeCard />}
                </React.Fragment>
              ))}
            </AnimatePresence>
          </div>

          {/* Load More Trigger */}
          <div ref={loadMoreRef} className="h-20 flex items-center justify-center">
            {loadingMore && (
              <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
            )}
            {!hasMore && posts.length > 0 && (
              <p className="text-sm text-gray-400 dark:text-neutral-500">
                You've reached the end
              </p>
            )}
          </div>

          {/* Mobile-only: Show widgets below posts on small screens */}
          {user && !loading && (
            <div className="px-4 space-y-3 mb-4 lg:hidden">
              <ProgressNudges />
              <DailyMatchCard />
              <Leaderboard />
            </div>
          )}
        </div>

        {/* ── Right Sidebar: Engagement Widgets (desktop only) ── */}
        {user && !loading && (
          <aside className="hidden lg:block">
            <div className="sticky top-14 space-y-4 pt-3">
              <ProgressNudges />
              <DailyMatchCard />
              <Leaderboard />
            </div>
          </aside>
        )}
      </div>

      {/* Floating Create Button (mobile) */}
      <button
        onClick={() => setShowCreateModal(true)}
        className="fixed bottom-24 right-4 lg:hidden p-3.5 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-colors z-40"
      >
        <Plus className="w-5 h-5" />
      </button>

      {/* Create Post Modal */}
      <CreatePostModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onPostCreated={handlePostCreated}
      />

      {/* Comments Panel */}
      {selectedPostForComments && (
        <Comments
          postId={selectedPostForComments}
          isOpen={!!selectedPostForComments}
          onClose={closeComments}
          highlightCommentId={highlightCommentId}
          onCommentCountChange={(count) => {
            setPosts(prev => prev.map(post => 
              post.id === selectedPostForComments ? { ...post, commentsCount: count } : post
            ));
          }}
        />
      )}

      {/* Story Creator Modal */}
      <StoryCreator
        isOpen={showStoryCreator}
        onClose={() => setShowStoryCreator(false)}
        onStoryCreated={() => {
          setShowStoryCreator(false);
          setStoryRefreshKey((k) => k + 1); // Refetch stories so own story appears
        }}
      />

      {/* Story Viewer */}
      {showStoryViewer && selectedStoryGroup && (
        <StoryViewer
          storyGroups={[selectedStoryGroup]}
          initialGroupIndex={0}
          onClose={() => {
            setShowStoryViewer(false);
            setSelectedStoryGroup(null);
          }}
          onStoryEnd={() => {
            setShowStoryViewer(false);
            setSelectedStoryGroup(null);
          }}
        />
      )}

      {/* Reward/Milestone Popups */}
      {rewards.length > 0 && (
        <RewardPopup rewards={rewards} onDismiss={dismissReward} />
      )}

      {/* Push Notification Permission Prompt */}
      <NotificationPrompt userId={user?.id} />
    </div>
  );
}

export default Feed;
