'use client';

import type { ReactNode } from 'react';
import { useChatViewport } from './useChatViewport';

export function ChatViewport({ children }: { children: ReactNode }) {
  const viewportRef = useChatViewport();
  return (
    <div
      ref={viewportRef}
      className="fixed inset-x-0 top-[var(--chat-viewport-top,0px)] h-[var(--chat-viewport-height,100dvh)] w-full max-w-full overflow-hidden bg-gray-50 pt-[env(safe-area-inset-top)] dark:bg-neutral-950"
    >
      {children}
    </div>
  );
}
