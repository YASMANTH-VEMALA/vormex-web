'use client';

import { getPendingMentions, respondToMention } from '@/lib/api/mentions';
import { useAuth } from '@/lib/auth/useAuth';
import { useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { formatDistanceToNow } from 'date-fns';
import { AtSign, Loader2 } from 'lucide-react';
import Link from 'next/link';

/** A mention is resolved by accepting or rejecting it on the server. */
export function MentionsDashboard() {
  const userId = useAuth().user?.id;
  const queryClient = useQueryClient();
  const queryKey = ['mentions', userId] as const;
  const mentions = useInfiniteQuery({
    queryKey,
    initialPageParam: undefined as string | undefined,
    queryFn: ({ pageParam }) => getPendingMentions(20, pageParam),
    getNextPageParam: (last) => (last.hasMore ? (last.nextCursor ?? undefined) : undefined),
    enabled: !!userId,
  });
  const response = useMutation({
    mutationFn: ({ id, action }: { id: string; action: 'accept' | 'reject' }) =>
      respondToMention(id, action, action === 'accept'),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey }),
        queryClient.invalidateQueries({ queryKey: ['mention-count'] }),
      ]);
    },
  });
  const pending = mentions.data?.pages.flatMap((page) => page.mentions) ?? [];
  const failed = mentions.isError || response.isError;

  return (
    <section className="rounded-xl border border-gray-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex items-center gap-3 border-b border-gray-200 p-4 dark:border-neutral-800">
        <AtSign className="h-5 w-5 text-blue-500" />
        <div>
          <h3 className="font-semibold">Mentions</h3>
          <p className="text-sm text-gray-500 dark:text-neutral-400">
            Choose which mentions appear on your profile.
          </p>
        </div>
      </div>
      {failed && (
        <div role="alert" className="p-4 text-sm text-red-600">
          Could not {response.isError ? 'update' : 'load'} mentions. Please try again.
          {mentions.isError && (
            <button className="ml-2 underline" onClick={() => void mentions.refetch()}>
              Retry
            </button>
          )}
        </div>
      )}
      {mentions.isPending ? (
        <div className="flex justify-center p-8">
          <Loader2 className="h-6 w-6 animate-spin" />
        </div>
      ) : pending.length === 0 && !mentions.isError ? (
        <p className="p-8 text-center text-sm text-gray-500">No pending mentions.</p>
      ) : (
        <ul className="divide-y divide-gray-200 dark:divide-neutral-800">
          {pending.map((mention) => (
            <li key={mention.id} className="p-4">
              <Link
                href={`/post/${encodeURIComponent(mention.postId)}`}
                className="block hover:underline"
              >
                <p className="text-sm">
                  <strong>{mention.mentioner?.name ?? 'Someone'}</strong> mentioned you in a post
                </p>
                <p className="mt-1 line-clamp-2 text-sm text-gray-500">{mention.post?.content}</p>
              </Link>
              <p className="mt-1 text-xs text-gray-500">
                {formatDistanceToNow(new Date(mention.createdAt), { addSuffix: true })}
              </p>
              <div className="mt-3 flex gap-3">
                <button
                  disabled={response.isPending}
                  onClick={() => response.mutate({ id: mention.id, action: 'accept' })}
                  className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm text-white disabled:opacity-50"
                >
                  Show on profile
                </button>
                <button
                  disabled={response.isPending}
                  onClick={() => response.mutate({ id: mention.id, action: 'reject' })}
                  className="px-3 py-1.5 text-sm text-gray-500 disabled:opacity-50"
                >
                  Dismiss
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {mentions.hasNextPage && (
        <button
          disabled={mentions.isFetchingNextPage}
          onClick={() => void mentions.fetchNextPage()}
          className="w-full p-3 text-sm text-blue-500 disabled:opacity-50"
        >
          {mentions.isFetchingNextPage ? 'Loading…' : 'Load more'}
        </button>
      )}
    </section>
  );
}
