'use client';

import { ProfilePage, ProfileSkeleton } from '@/components/profile';
import { useParams } from 'next/navigation';
import { Suspense } from 'react';

function ProfileContent() {
  const params = useParams();
  const userId = params.id as string;

  return <ProfilePage userId={userId} />;
}

export default function UserProfilePage() {
  return (
    <Suspense fallback={<ProfileSkeleton />}>
      <ProfileContent />
    </Suspense>
  );
}
