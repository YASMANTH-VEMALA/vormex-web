'use client';

import { useRouter } from 'next/navigation';
import { ReelCreate } from '@/components/reels';

export default function CreateReelPage() {
  const router = useRouter();

  return (
    <ReelCreate onClose={() => router.push('/reels')} />
  );
}
