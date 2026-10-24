import React from 'react';

export interface AIChatAssistantProps {
  conversationId: string;
  otherUserId: string;
  otherUserName: string;
  currentMessage: string;
  lastReceivedMessage?: string;
  onSuggestionSelect: (text: string) => void;
  onClose?: () => void;
}

export type AIFeature =
  'starters' | 'revival' | 'grammar' | 'smart-reply' | 'tone' | 'translate' | 'expand';

export interface FeatureOption {
  id: AIFeature;
  label: string;
  icon: React.ReactNode;
  description: string;
  requiresMessage?: boolean;
  requiresReceivedMessage?: boolean;
}
