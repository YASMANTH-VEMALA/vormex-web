'use client';
import { formatDistanceToNow } from 'date-fns';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface usePostContentOptions {
  currentImageIndex: number;
  handlePollVote: (optionId: string) => Promise<void>;
  isMuted: boolean;
  isPlaying: boolean;
  pollOptions: import('@/types/post').PollOption[];
  post: import('@/types/post').Post;
  selectedPollOption: string | null;
  setCurrentImageIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsMuted: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setLightboxMediaType: React.Dispatch<React.SetStateAction<'image' | 'video'>>;
  setShowMediaLightbox: React.Dispatch<React.SetStateAction<boolean>>;
  videoRef: React.RefObject<HTMLVideoElement | null>;
}
export function usePostContent({
  currentImageIndex,
  handlePollVote,
  isMuted,
  isPlaying,
  pollOptions,
  post,
  selectedPollOption,
  setCurrentImageIndex,
  setIsMuted,
  setIsPlaying,
  setLightboxMediaType,
  setShowMediaLightbox,
  videoRef,
}: usePostContentOptions) {
  const renderContent = () => {
    switch (post.type) {
      case 'IMAGE':
        return renderImageContent();
      case 'VIDEO':
        return renderVideoContent();
      case 'LINK':
        return renderLinkContent();
      case 'POLL':
        return renderPollContent();
      case 'ARTICLE':
        return renderArticleContent();
      case 'CELEBRATION':
        return renderCelebrationContent();
      case 'DOCUMENT':
        return renderDocumentContent();
      default:
        return null;
    }
  };

  const renderImageContent = () => {
    const images = post.mediaUrls;
    if (!images || images.length === 0) return null;

    if (images.length === 1) {
      return (
        <div className="mt-3 rounded-lg overflow-hidden bg-gray-100 dark:bg-neutral-800">
          <button
            onClick={() => {
              setLightboxMediaType('image');
              setCurrentImageIndex(0);
              setShowMediaLightbox(true);
            }}
            className="w-full block cursor-zoom-in"
          >
            <img
              src={images[0]}
              alt=""
              className="w-full max-h-[600px] object-contain mx-auto"
              loading="lazy"
              style={{ display: 'block' }}
            />
          </button>
        </div>
      );
    }

    // LinkedIn-style grid: 1 big + remaining small
    const mainImage = images[currentImageIndex];
    const thumbnails = images.filter((_, i) => i !== currentImageIndex);

    return (
      <div className="mt-3 rounded-lg overflow-hidden">
        {/* Main Image */}
        <div className="relative bg-gray-100 dark:bg-neutral-800">
          <button
            onClick={() => {
              setLightboxMediaType('image');
              setShowMediaLightbox(true);
            }}
            className="w-full block cursor-zoom-in"
          >
            <img
              src={mainImage}
              alt=""
              className="w-full max-h-[500px] object-contain mx-auto"
              loading="lazy"
              style={{ display: 'block' }}
            />
          </button>

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={() =>
                  setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
                }
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() =>
                  setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
                }
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Image counter */}
          <div className="absolute bottom-2 right-2 px-2 py-1 rounded-full bg-black/50 text-white text-xs">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnails */}
        {thumbnails.length > 0 && (
          <div className="flex gap-1 mt-1 overflow-x-auto">
            {thumbnails.map((img, index) => {
              const actualIndex = index >= currentImageIndex ? index + 1 : index;
              return (
                <button
                  key={actualIndex}
                  onClick={() => setCurrentImageIndex(actualIndex)}
                  className="flex-shrink-0 w-16 h-16 rounded overflow-hidden opacity-70 hover:opacity-100 transition-opacity"
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  const renderVideoContent = () => {
    if (!post.videoUrl) return null;

    return (
      <div className="mt-3 rounded-lg overflow-hidden relative bg-black">
        <div
          role="button"
          tabIndex={0}
          onClick={() => {
            setLightboxMediaType('video');
            setShowMediaLightbox(true);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setLightboxMediaType('video');
              setShowMediaLightbox(true);
            }
          }}
          className="w-full block cursor-zoom-in relative"
        >
          <video
            ref={videoRef}
            src={post.videoUrl}
            poster={post.videoThumbnail || undefined}
            className="w-full max-h-[500px] object-contain"
            loop
            muted={isMuted}
            playsInline
          />
        </div>

        {/* Video controls overlay */}
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between pointer-events-auto">
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (videoRef.current) {
                if (isPlaying) {
                  videoRef.current.pause();
                } else {
                  videoRef.current.play();
                }
                setIsPlaying(!isPlaying);
              }
            }}
            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              if (videoRef.current) {
                videoRef.current.muted = !isMuted;
                setIsMuted(!isMuted);
              }
            }}
            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>

        {/* Duration badge */}
        {post.videoDuration && (
          <div className="absolute top-2 right-2 px-2 py-1 rounded bg-black/50 text-white text-xs">
            {Math.floor(post.videoDuration / 60)}:{String(post.videoDuration % 60).padStart(2, '0')}
          </div>
        )}
      </div>
    );
  };

  const renderLinkContent = () => {
    if (!post.linkUrl) return null;

    return (
      <a
        href={post.linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 block rounded-lg overflow-hidden border border-gray-200 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-700 transition-colors"
      >
        {post.linkImage && (
          <img src={post.linkImage} alt="" className="w-full h-48 object-cover" loading="lazy" />
        )}
        <div className="p-3 bg-gray-50 dark:bg-neutral-800/50">
          <p className="font-semibold text-gray-900 dark:text-white line-clamp-2">
            {post.linkTitle || post.linkUrl}
          </p>
          {post.linkDescription && (
            <p className="text-sm text-gray-500 dark:text-neutral-400 mt-1 line-clamp-2">
              {post.linkDescription}
            </p>
          )}
          <div className="flex items-center gap-1 mt-2 text-xs text-gray-400">
            <ExternalLink className="w-3 h-3" />
            <span>
              {post.linkDomain ||
                (post.linkUrl
                  ? (() => {
                      try {
                        return new URL(post.linkUrl).hostname;
                      } catch {
                        return 'Link';
                      }
                    })()
                  : 'Link')}
            </span>
          </div>
        </div>
      </a>
    );
  };

  const renderPollContent = () => {
    if (!pollOptions || pollOptions.length === 0) return null;

    const totalVotes = pollOptions.reduce((sum, opt) => sum + opt.votes, 0);
    const hasVoted = selectedPollOption !== null || pollOptions.some((opt) => opt.hasVoted);
    const showResults = hasVoted || post.showResultsBeforeVote || false;
    const isPollEnded = post.pollEndsAt ? new Date(post.pollEndsAt) < new Date() : false;

    return (
      <div className="mt-3 space-y-2">
        {pollOptions.map((option) => {
          const percentage = totalVotes > 0 ? Math.round((option.votes / totalVotes) * 100) : 0;
          const isSelected = selectedPollOption === option.id;

          return (
            <button
              key={option.id}
              onClick={() => !hasVoted && !isPollEnded && handlePollVote(option.id)}
              disabled={hasVoted || isPollEnded}
              className={`w-full p-3 rounded-lg text-left transition-all relative overflow-hidden ${
                hasVoted || isPollEnded
                  ? 'cursor-default'
                  : 'hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer'
              } ${
                isSelected
                  ? 'ring-2 ring-blue-500 dark:ring-blue-400'
                  : 'border border-gray-200 dark:border-neutral-700'
              }`}
            >
              {/* Progress bar */}
              {showResults && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-y-0 left-0 ${
                    isSelected
                      ? 'bg-blue-100 dark:bg-blue-900/30'
                      : 'bg-gray-100 dark:bg-neutral-800'
                  }`}
                />
              )}

              <div className="relative flex items-center justify-between">
                <span className="font-medium text-gray-900 dark:text-white">{option.text}</span>
                {showResults && (
                  <span className="text-sm text-gray-500 dark:text-neutral-400">{percentage}%</span>
                )}
              </div>
            </button>
          );
        })}

        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-neutral-400 pt-2">
          <span>
            {totalVotes} vote{totalVotes !== 1 ? 's' : ''}
          </span>
          {post.pollEndsAt && (
            <span>
              {isPollEnded
                ? 'Poll ended'
                : `Ends ${formatDistanceToNow(new Date(post.pollEndsAt), { addSuffix: true })}`}
            </span>
          )}
        </div>
      </div>
    );
  };

  const renderArticleContent = () => {
    return (
      <Link
        href={`/article/${post.id}`}
        className="mt-3 block rounded-lg overflow-hidden border border-gray-200 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-700 transition-colors"
      >
        {post.articleCoverImage && (
          <img
            src={post.articleCoverImage}
            alt=""
            className="w-full h-48 object-cover"
            loading="lazy"
          />
        )}
        <div className="p-4 bg-gray-50 dark:bg-neutral-800/50">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{post.articleTitle}</h3>
          {post.articleTags && post.articleTags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {post.articleTags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          {post.articleReadTime && (
            <p className="text-sm text-gray-500 dark:text-neutral-400 mt-2">
              {post.articleReadTime} min read
            </p>
          )}
        </div>
      </Link>
    );
  };

  const renderCelebrationContent = () => {
    const celebrationEmojis: Record<string, string> = {
      NEW_JOB: '🎉',
      PROMOTION: '🚀',
      GRADUATION: '🎓',
      CERTIFICATION: '📜',
      WORK_ANNIVERSARY: '🎊',
      BIRTHDAY: '🎂',
      JOB_CHANGE: '✨',
      NEW_POSITION: '🌟',
    };

    const emoji = post.celebrationType ? celebrationEmojis[post.celebrationType] || '🎉' : '🎉';

    return (
      <div className="mt-3 p-6 rounded-lg bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-700/50 text-center">
        <span className="text-5xl">{emoji}</span>
        <p className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">
          {post.celebrationType
            ?.replace(/_/g, ' ')
            .toLowerCase()
            .replace(/^\w/, (c) => c.toUpperCase())}
        </p>
      </div>
    );
  };

  const renderDocumentContent = () => {
    if (!post.documentUrl) return null;

    return (
      <a
        href={post.documentUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
      >
        <div className="p-3 rounded-lg bg-red-100 dark:bg-red-900/30">
          <FileText className="w-6 h-6 text-red-600 dark:text-red-400" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-medium text-gray-900 dark:text-white truncate">
            {post.documentName || 'Document'}
          </p>
          <p className="text-sm text-gray-500 dark:text-neutral-400">
            {post.documentType?.toUpperCase()} •{' '}
            {post.documentSize ? `${(post.documentSize / 1024 / 1024).toFixed(1)} MB` : ''}
            {post.documentPages ? ` • ${post.documentPages} pages` : ''}
          </p>
        </div>
        <ExternalLink className="w-5 h-5 text-gray-400" />
      </a>
    );
  };
  return { renderContent };
}
