'use client';

import { AIChatPage } from '@/components/ai-chat';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

export default function AIAssistantPage() {
  return (
    <ProtectedRoute>
      <AIChatPage />
    </ProtectedRoute>
  );
}
