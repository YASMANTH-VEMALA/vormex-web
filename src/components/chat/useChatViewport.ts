'use client';

import { useEffect, useRef } from 'react';

/** Keep the conversation inside the visible area above a mobile keyboard. */
export function useChatViewport() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const viewport = window.visualViewport;
    if (!container || !viewport) return;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        // Let users pinch-zoom normally; keyboard fitting applies at page scale.
        if (Math.abs(viewport.scale - 1) > 0.05) return;
        container.style.setProperty('--chat-viewport-height', `${viewport.height}px`);
        container.style.setProperty('--chat-viewport-top', `${viewport.offsetTop}px`);
        const keyboardOpen = window.innerHeight - viewport.height > 120;
        container.style.setProperty(
          '--chat-safe-bottom',
          keyboardOpen ? '0px' : 'env(safe-area-inset-bottom)'
        );
      });
    };
    update();
    viewport.addEventListener('resize', update);
    viewport.addEventListener('scroll', update);
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(frame);
      viewport.removeEventListener('resize', update);
      viewport.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return containerRef;
}
