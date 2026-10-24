'use client';
import {
  ConnectionLimitBanner,
  Leaderboard,
  PeopleFromYourCollege,
  ProgressNudges,
  RewardPopup,
  StreakCounter,
} from '@/components/engagement';
import { NudgeCard, StreakWidget, WeeklyGoalsWidget } from '@/components/engagement/FeedWidgets';
import { FeedLeftNav } from '@/components/feed/FeedLeftNav';
import { FeedModuleCard } from '@/components/feed/FeedModuleCard';
import { ManagedAdCard } from '@/components/feed/ManagedAdCard';
import { PeopleRail } from '@/components/feed/PeopleRail';
import { PostCard } from '@/components/feed/PostCard';
import { PostCardSkeleton } from '@/components/feed/PostCardSkeleton';
import { PostingStatusChip } from '@/components/feed/PostingStatusChip';
import { SetupStrip } from '@/components/feed/SetupStrip';
import { SidebarAdCard } from '@/components/feed/SidebarAdCard';
import { PANEL_SURFACE } from '@/components/feed/surface';
import { NotificationPrompt } from '@/components/notifications';
import { RewardCardRenderer } from '@/components/rewards';
import { StoryCarousel } from '@/components/stories/StoryCarousel';
import { UserAvatar } from '@/components/ui/UserAvatar';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { queryKeys } from '@/lib/queryKeys';
import type { PostType } from '@/types/post';
import { AnimatePresence, motion } from 'framer-motion';
import { FileText, Image as ImageIcon, Loader2, Users, Video } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface FeedTimelineViewProps {
  Comments: React.ComponentType<import('@/components/feed/Comments.types').CommentsProps>;
  ComposerAction: (props: {
    icon: React.ComponentType<{ className?: string | undefined }>;
    label: string;
    tone: string;
    onClick: () => void;
  }) => React.JSX.Element;
  CreatePostModal: React.ComponentType<
    import('@/components/feed/CreatePostModal.types').CreatePostModalProps
  >;
  StoryCreator: React.ComponentType<
    import('@/components/stories/StoryCreator.types').StoryCreatorProps
  >;
  StoryViewer: React.ComponentType<
    import('@/components/stories/StoryViewer.types').StoryViewerProps
  >;
  adSessionId: string;
  adsByPosition: Map<number, import('@/lib/api/managed-ads').ManagedAdCreative[]>;
  closeComments: () => void;
  dismissCard: (
    type: import('@/lib/api/variable-rewards').RewardCardType,
    itemIds?: string[]
  ) => Promise<void>;
  dismissReward: (id: string) => void;
  error: string | null;
  handleCommentClick: (postId: string) => void;
  handleLikeUpdate: (postId: string, liked: boolean, count: number) => void;
  handleOpenStory: (group: import('@/lib/api/stories').StoryGroup) => void;
  handlePollUpdate: (postId: string, options: import('@/types/post').PollOption[]) => void;
  handlePostCreated: (post?: import('@/types/post').Post | undefined) => void;
  handlePostDeleted: (postId: string) => void;
  handlePostEdited: (postId: string, updatedPost: import('@/types/post').Post) => void;
  hasMore: boolean;
  highlightCommentId: string | undefined;
  loadMoreRef: React.RefObject<HTMLDivElement | null>;
  loading: false;
  loadingMore: boolean;
  modulesByPosition: Map<number, import('@/types/post').FeedModulePlacement[]>;
  posts: import('@/types/post').Post[];
  queryClient: import('@tanstack/react-query').QueryClient;
  retryFeed: (
    options?: import('@tanstack/react-query').RefetchOptions | undefined
  ) => Promise<
    import('@tanstack/react-query').QueryObserverResult<
      import('@tanstack/react-query').InfiniteData<import('@/types/post').FeedResponse, unknown>,
      Error
    >
  >;
  rewards: import('@/components/engagement/RewardPopup').RewardData[];
  rewardsByPosition: Map<number, import('@/hooks/useVariableRewards').ActiveRewardCard[]>;
  selectedPostForComments: string | null;
  selectedStoryGroup: import('@/lib/api/stories').StoryGroup | null;
  setSelectedStoryGroup: React.Dispatch<
    React.SetStateAction<import('@/lib/api/stories').StoryGroup | null>
  >;
  setShowCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowStoryCreator: React.Dispatch<React.SetStateAction<boolean>>;
  setShowStoryViewer: React.Dispatch<React.SetStateAction<boolean>>;
  showCreateModal: boolean;
  showStoryCreator: boolean;
  showStoryViewer: boolean;
  updateFeedCache: (
    updater: (pages: import('@/types/post').FeedResponse[]) => import('@/types/post').FeedResponse[]
  ) => void;
  user: import('@/types/auth').User | null;
}

export function FeedTimelineView({
  Comments,
  ComposerAction,
  CreatePostModal,
  StoryCreator,
  StoryViewer,
  adSessionId,
  adsByPosition,
  closeComments,
  dismissCard,
  dismissReward,
  error,
  handleCommentClick,
  handleLikeUpdate,
  handleOpenStory,
  handlePollUpdate,
  handlePostCreated,
  handlePostDeleted,
  handlePostEdited,
  hasMore,
  highlightCommentId,
  loadMoreRef,
  loading,
  loadingMore,
  modulesByPosition,
  posts,
  queryClient,
  retryFeed,
  rewards,
  rewardsByPosition,
  selectedPostForComments,
  selectedStoryGroup,
  setSelectedStoryGroup,
  setShowCreateModal,
  setShowStoryCreator,
  setShowStoryViewer,
  showCreateModal,
  showStoryCreator,
  showStoryViewer,
  updateFeedCache,
  user,
}: FeedTimelineViewProps) {
  const [initialPostType, setInitialPostType] = React.useState<PostType>('TEXT');
  const openCreatePost = (type: PostType = 'TEXT') => {
    setInitialPostType(type);
    setShowCreateModal(true);
  };

  return (
    <>
      {/* Header — shares the shell's max width so the wordmark lines up with the nav rail */}
      <div className="sticky top-0 z-40 w-full border-b border-gray-200/70 bg-white/75 backdrop-blur-xl dark:border-neutral-800/80 dark:bg-neutral-950/75">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-2.5 sm:px-4 sm:py-3 xl:max-w-[1296px]">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Vormex"
                width={40}
                height={40}
                priority
                className="h-8 w-8 rounded-lg object-contain sm:h-10 sm:w-10 sm:rounded-xl"
              />
              <span className="text-base font-bold tracking-tight text-gray-950 dark:text-white sm:text-lg">
                Vormex
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <PostingStatusChip />
            {user && <StreakCounter />}
          </div>
        </div>
      </div>

      {/*
        Three columns from `xl`: nav rail · feed · sidebar. Below that it falls
        back to feed + sidebar at `lg`, then a single column. The nav rail is
        `hidden xl:block`, so the element count always matches the active
        column count.
      */}
      <div className="mx-auto w-full max-w-6xl pb-[calc(6rem+env(safe-area-inset-bottom,0px))] sm:pb-24 xl:max-w-[1296px] xl:pb-10">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_312px] lg:gap-5 lg:px-4 xl:grid-cols-[228px_minmax(0,1fr)_312px] xl:gap-6">
          {/* ── Left: navigation rail (desktop only) ── */}
          <div className="hidden xl:block xl:pt-3">
            <FeedLeftNav />
          </div>

          {/* ── Center: composer, discovery, posts ── */}
          <div className="min-w-0">
            <div className="flex items-center justify-between px-4 pb-1 pt-6 lg:px-0">
              <div>
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300">
                  Your community
                </p>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  A little closer, every day.
                </h1>
                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-400">
                  Ideas, updates, and people worth connecting with.
                </p>
              </div>
            </div>
            {user && (
              <>
                {/*
                  The composer leads. It used to sit below the story rail, three
                  onboarding banners and two people rails — roughly 700px down,
                  which put the app's primary action off-screen on load.
                */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22 }}
                  className="mt-2 px-3 sm:mt-4 sm:px-4 lg:px-0"
                >
                  <div className={PANEL_SURFACE}>
                    <button
                      onClick={() => openCreatePost()}
                      className="w-full p-3 text-left transition-colors hover:bg-gray-50/90 sm:p-4 dark:hover:bg-neutral-800/60"
                    >
                      <div className="flex items-center gap-3">
                        <UserAvatar
                          imageSrc={user.profileImage}
                          name={user.name}
                          className="h-10 w-10 flex-shrink-0 bg-gray-200 text-base font-bold text-gray-500 sm:h-11 sm:w-11 dark:bg-neutral-700"
                          fallbackClassName="text-base font-bold"
                        />
                        <div className="min-w-0 flex-1 rounded-full border border-gray-300 bg-gray-50 px-4 py-2.5 dark:border-neutral-700 dark:bg-neutral-800/50">
                          <span className="block truncate text-sm text-gray-500 dark:text-neutral-400">
                            What&apos;s on your mind, {user.name?.split(' ')[0]}?
                          </span>
                        </div>
                      </div>
                    </button>

                    <div className="flex items-center justify-around border-t border-gray-100 px-2 py-1.5 dark:border-neutral-800">
                      <ComposerAction
                        icon={ImageIcon}
                        label="Photo"
                        tone="text-blue-500"
                        onClick={() => openCreatePost('IMAGE')}
                      />
                      <ComposerAction
                        icon={Video}
                        label="Video"
                        tone="text-teal-600 dark:text-teal-400"
                        onClick={() => openCreatePost('VIDEO')}
                      />
                      <ComposerAction
                        icon={FileText}
                        label="Article"
                        tone="text-blue-600 dark:text-blue-300"
                        onClick={() => openCreatePost('ARTICLE')}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Stories */}
                <motion.section
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22, delay: 0.04 }}
                  className="mt-2.5 sm:mt-3.5 sm:px-4 lg:px-0"
                >
                  <div className="overflow-hidden border-y border-gray-200/80 bg-white py-1 dark:border-neutral-800/80 dark:bg-neutral-900 sm:rounded-[18px] sm:border sm:shadow-[0_18px_45px_-40px_rgba(15,23,42,0.55)]">
                    <StoryCarousel
                      onOpenStory={handleOpenStory}
                      onCreateStory={() => setShowStoryCreator(true)}
                    />
                  </div>
                </motion.section>

                <SetupStrip />
                {posts.length === 0 && <PeopleRail />}
              </>
            )}

            {/* Error State */}
            {error && (
              <div className="m-3 rounded-xl bg-red-50 p-4 text-center text-red-600 sm:m-4 lg:mx-0 dark:bg-red-900/20 dark:text-red-400">
                <p>{error}</p>
                <button
                  onClick={() => retryFeed()}
                  className="mt-2 text-sm font-semibold underline"
                >
                  Try again
                </button>
              </div>
            )}

            {/* Connection Limit Notice */}
            {user && (
              <div className="mb-3 px-3 sm:px-4 lg:px-0">
                <ConnectionLimitBanner />
              </div>
            )}

            {/* Skeleton Loading */}
            {loading && (
              <div className="space-y-3 px-0 sm:space-y-4 sm:px-4 lg:px-0">
                {Array.from({ length: 4 }).map((_, i) => (
                  <PostCardSkeleton key={i} />
                ))}
              </div>
            )}

            {/* Empty State */}
            {!loading && posts.length === 0 && !error && (
              <div className={`mx-3 my-4 px-5 py-8 text-center sm:mx-4 lg:mx-0 ${PANEL_SURFACE}`}>
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-950">
                  <Users className="h-7 w-7 text-blue-600 dark:text-blue-300" />
                </div>
                <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  Every connection starts with hello.
                </h2>
                <p className="mb-4 text-gray-500 dark:text-neutral-400">
                  Share something you&apos;re working on, or find people who share your interests.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => setShowCreateModal(true)}
                    className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                  >
                    Share your first post
                  </button>
                  <Link
                    href="/find-people"
                    className="rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
                  >
                    Find your people
                  </Link>
                </div>
              </div>
            )}

            {/* Posts with interleaved sponsored cards and server-ranked modules */}
            <div className="space-y-3 px-0 sm:space-y-4 sm:px-4 lg:px-0">
              <AnimatePresence>
                {posts.map((post, index) => {
                  const position = index + 1;
                  return (
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
                          <PeopleRail />
                        </>
                      )}

                      {modulesByPosition.get(position)?.map((placement) => (
                        <FeedModuleCard
                          key={`${placement.type ?? 'module'}-${placement.position}`}
                          placement={placement}
                        />
                      ))}

                      {adsByPosition.get(position)?.map((ad) => (
                        <ManagedAdCard
                          key={`${ad.campaignId}-${ad.slotKey}`}
                          ad={ad}
                          sessionId={adSessionId}
                        />
                      ))}

                      {rewardsByPosition.get(position)?.map((card) => (
                        <RewardCardRenderer key={card.type} card={card} onDismiss={dismissCard} />
                      ))}

                      {/* After 5th post: Nudge Card */}
                      {index === 4 && <NudgeCard />}
                    </React.Fragment>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Load More Trigger */}
            <div ref={loadMoreRef} className="flex h-20 items-center justify-center">
              {loadingMore && <Loader2 className="h-6 w-6 animate-spin text-gray-400" />}
              {!hasMore && posts.length > 0 && (
                <p className="text-sm text-gray-400 dark:text-neutral-500">
                  You&apos;ve reached the end
                </p>
              )}
            </div>

            {/* Mobile/tablet: the sidebar widgets move below the posts */}
            {user && (
              <div className="mb-4 space-y-3 px-3 sm:px-4 lg:hidden">
                <ProgressNudges compact />
                <SidebarAdCard sessionId={adSessionId} />
                <PeopleFromYourCollege />
              </div>
            )}
          </div>

          {/* ── Right: engagement widgets + sponsored rail (desktop only) ── */}
          {user && (
            <aside className="hidden lg:block">
              <div className="sticky top-[76px] space-y-4 pt-6">
                <ProgressNudges compact />
                <SidebarAdCard sessionId={adSessionId} />
                <PeopleFromYourCollege />
                <details className="group rounded-2xl border border-gray-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                  <summary className="cursor-pointer text-sm font-semibold text-gray-600 dark:text-neutral-300">
                    Community leaderboard
                  </summary>
                  <div className="pt-4">
                    <Leaderboard />
                  </div>
                </details>
                <p className="px-2 text-xs leading-relaxed text-gray-500 dark:text-neutral-400">
                  Make a connection. Share an idea. Grow together.
                </p>
              </div>
            </aside>
          )}
        </div>

        {/* Create Post Modal */}
        {showCreateModal && (
          <CreatePostModal
            isOpen={showCreateModal}
            initialPostType={initialPostType}
            onClose={() => setShowCreateModal(false)}
            onPostCreated={handlePostCreated}
          />
        )}

        {/* Comments Panel */}
        {selectedPostForComments && (
          <Comments
            postId={selectedPostForComments}
            isOpen={!!selectedPostForComments}
            onClose={closeComments}
            highlightCommentId={highlightCommentId}
            onCommentCountChange={(count) => {
              if (!selectedPostForComments) return;
              updateFeedCache((pages) =>
                pages.map((page) => ({
                  ...page,
                  posts: page.posts.map((post) =>
                    post.id === selectedPostForComments ? { ...post, commentsCount: count } : post
                  ),
                }))
              );
            }}
          />
        )}

        {/* Story Creator Modal */}
        {showStoryCreator && (
          <StoryCreator
            isOpen={showStoryCreator}
            onClose={() => setShowStoryCreator(false)}
            onStoryCreated={() => {
              setShowStoryCreator(false);
              queryClient.invalidateQueries({ queryKey: queryKeys.stories(user?.id) });
            }}
          />
        )}

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
        {rewards.length > 0 && <RewardPopup rewards={rewards} onDismiss={dismissReward} />}

        {/* Push Notification Permission Prompt */}
        <NotificationPrompt userId={user?.id} />
      </div>
    </>
  );
}
