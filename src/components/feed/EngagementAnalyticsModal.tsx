'use client';
import { X } from 'lucide-react';
interface EngagementAnalyticsModalProps {
  isOpen: boolean;
  onClose: () => void;
  postId: string;
}
export function EngagementAnalyticsModal({ isOpen, onClose }: EngagementAnalyticsModalProps) {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      role="presentation"
      onClick={onClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="analytics-title"
        className="relative w-full max-w-md rounded-2xl bg-white p-6 dark:bg-neutral-900"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close analytics"
          onClick={onClose}
          className="absolute right-4 top-4"
        >
          <X />
        </button>
        <h2 id="analytics-title" className="text-lg font-semibold">
          Post analytics
        </h2>
        <p className="mt-3 text-sm text-gray-500">
          Analytics are currently unavailable for this post.
        </p>
      </section>
    </div>
  );
}
