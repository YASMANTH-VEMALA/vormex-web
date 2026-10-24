'use client';
import { cn } from '@/lib/utils';
import React from 'react';
import { Virtuoso } from 'react-virtuoso';

interface VirtualChatTimelineProps {
  activeFetchKeyRef: React.RefObject<string | null>;
  autoScrollEnabledRef: React.RefObject<boolean>;
  conversationId: string;
  fetchMessages: (cursor?: string | undefined) => Promise<void>;
  firstItemIndex: number;
  hasMore: boolean;
  loadingMore: boolean;
  nextCursor: string | undefined;
  renderVirtualItem: (
    _index: number,
    item: import('@/components/chat/ChatMessages.types').VirtualMessageItem
  ) => React.JSX.Element;
  setViewingImage: React.Dispatch<React.SetStateAction<string | null>>;
  setViewingVideo: React.Dispatch<React.SetStateAction<string | null>>;
  syncReadState: () => Promise<void>;
  viewingImage: string | null;
  viewingVideo: string | null;
  virtualItems: import('@/components/chat/ChatMessages.types').VirtualMessageItem[];
  virtuosoRef: React.RefObject<import('react-virtuoso').VirtuosoHandle | null>;
  wallpaperClasses: string;
}

export function VirtualChatTimeline({
  activeFetchKeyRef,
  autoScrollEnabledRef,
  conversationId,
  fetchMessages,
  firstItemIndex,
  hasMore,
  loadingMore,
  nextCursor,
  renderVirtualItem,
  setViewingImage,
  setViewingVideo,
  syncReadState,
  viewingImage,
  viewingVideo,
  virtualItems,
  virtuosoRef,
  wallpaperClasses,
}: VirtualChatTimelineProps) {
  return (
    <>
      <Virtuoso
        ref={virtuosoRef}
        className={cn(
          'flex-1 min-h-0 min-w-0 w-full max-w-full overflow-x-hidden overscroll-contain',
          wallpaperClasses
        )}
        style={{ overflowAnchor: 'none', overflowX: 'hidden' }}
        data={virtualItems}
        firstItemIndex={firstItemIndex}
        increaseViewportBy={{ top: 96, bottom: 200 }}
        computeItemKey={(index, item) => {
          if (item.kind === 'message') return item.message.id;
          if (item.kind === 'optimistic' || item.kind === 'uploading') return item.message.id;
          if (item.kind === 'date') return `date-${item.dateKey}-${index}`;
          return `typing-${conversationId}`;
        }}
        startReached={() => {
          if (hasMore && !loadingMore && nextCursor && !activeFetchKeyRef.current) {
            void fetchMessages(nextCursor);
          }
        }}
        atBottomStateChange={(atBottom) => {
          autoScrollEnabledRef.current = atBottom;
          if (atBottom) void syncReadState();
        }}
        followOutput={() => (autoScrollEnabledRef.current ? 'smooth' : false)}
        components={{
          Header: () =>
            loadingMore ? (
              <div className="flex justify-center py-2">
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-blue-600" />
              </div>
            ) : null,
        }}
        itemContent={(index, item) => (
          <div className="box-border w-full min-w-0 max-w-full px-4">
            {renderVirtualItem(index, item)}
          </div>
        )}
      />
      {/* Image Viewer Modal */}
      {viewingImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setViewingImage(null)}
        >
          <button
            onClick={() => setViewingImage(null)}
            className="absolute top-4 right-4 text-white hover:bg-white/10 p-2 rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <img
            src={viewingImage}
            alt="Full size image"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <a
            href={viewingImage}
            download
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-4 right-4 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download
          </a>
        </div>
      )}

      {/* Video Viewer Modal */}
      {viewingVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setViewingVideo(null)}
        >
          <button
            onClick={() => setViewingVideo(null)}
            className="absolute top-4 right-4 text-white hover:bg-white/10 p-2 rounded-full transition-colors z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <video
            src={viewingVideo}
            controls
            autoPlay
            className="max-w-full max-h-full rounded-lg"
            style={{ maxHeight: '90vh', maxWidth: '90vw' }}
            onClick={(e) => e.stopPropagation()}
          />
          <a
            href={viewingVideo}
            download
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-4 right-4 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download
          </a>
        </div>
      )}
    </>
  );
}
