import { AuthPage } from '@/components/auth/AuthPage';
import { AuthRedirect } from '@/components/auth/AuthRedirect';
import { SITE_URL } from '@/lib/seo';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Vormex — Find Your People',
  description: 'Join Vormex to meet people who share your skills, interests, and ambitions.',
  alternates: { canonical: '/' },
  openGraph: {
    url: SITE_URL,
    title: 'Vormex — Find Your People',
    description: 'Join Vormex to meet people who share your skills, interests, and ambitions.',
  },
};

export default async function Home() {
  const cookieStore = await cookies();
  if (cookieStore.get('vx_auth_present')?.value === 'true') redirect('/feed');

  return (
    <Suspense fallback={<p role="status">Loading…</p>}>
      <AuthRedirect redirectTo="/feed">
        <AuthPage />
      </AuthRedirect>
    </Suspense>
  );
}
