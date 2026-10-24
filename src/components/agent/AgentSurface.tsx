'use client';

import { useAgent } from './AgentContext';
import { AgentModeOverlay } from './AgentModeOverlay';

export function AgentSurface() {
  const { isOpen, closeAgent } = useAgent();

  return <AgentModeOverlay isOpen={isOpen} onClose={closeAgent} />;
}
