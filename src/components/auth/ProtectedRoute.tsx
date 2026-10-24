'use client';

import { useAuth } from '@/lib/auth/useAuth';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { SessionUnavailable } from './SessionUnavailable';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, loading, sessionError, retrySession } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!loading && !isAuthenticated && !sessionError) {
      router.replace('/');
    }
  }, [isAuthenticated, loading, sessionError, router]);

  if (!loading && !isAuthenticated && sessionError) {
    return <SessionUnavailable onRetry={retrySession} />;
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-neutral-950">
        <div className="text-center">
          <Image
            src="/logo.png"
            alt="Vormex"
            width={72}
            height={72}
            priority
            className="mx-auto h-18 w-18 rounded-2xl object-contain"
          />
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mt-6"></div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
