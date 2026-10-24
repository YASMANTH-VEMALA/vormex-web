'use client';

import { GOOGLE_CLIENT_ID } from '@/lib/utils/constants';
import { GoogleOAuthProvider } from '@react-oauth/google';
import type { ReactNode } from 'react';

export function GoogleAuthProvider({ children }: { children: ReactNode }) {
  if (!GOOGLE_CLIENT_ID) {
    return <>{children}</>;
  }

  return <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>{children}</GoogleOAuthProvider>;
}
