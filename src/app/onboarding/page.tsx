'use client';

import OnboardingWizard from '@/components/onboarding/OnboardingWizard';
import { useAuthContext } from '@/lib/auth/authContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function OnboardingPage() {
  const { user, loading } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.replace('/login');
      } else if (user.onboardingCompleted) {
        router.replace('/');
      }
    }
  }, [user, loading, router]);

  if (loading || !user || user.onboardingCompleted) {
    return (
      <div className="onboarding-shell min-h-dvh flex items-center justify-center bg-gray-50 dark:bg-neutral-950">
        <div className="w-8 h-8 border-2 border-gray-700 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return <OnboardingWizard />;
}
