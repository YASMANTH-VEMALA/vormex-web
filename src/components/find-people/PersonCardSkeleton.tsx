'use client';

export function PersonCardSkeleton() {
  return (
    <div className="relative flex h-full min-h-[18rem] animate-pulse flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      <div className="h-16 shrink-0 bg-gray-200 dark:bg-neutral-800" />
      <div className="flex min-h-0 flex-1 flex-col px-4 pb-4">
        <div className="-mt-8 h-16 w-16 rounded-full bg-gray-300 ring-4 ring-white dark:bg-neutral-700 dark:ring-neutral-900" />
        <div className="mt-3 h-4 w-3/5 rounded bg-gray-200 dark:bg-neutral-700" />
        <div className="mt-2 h-3 w-2/5 rounded bg-gray-200 dark:bg-neutral-700" />
        <div className="mt-4 h-3.5 w-4/5 rounded bg-gray-200 dark:bg-neutral-700" />
        <div className="mt-2 h-3.5 w-3/5 rounded bg-gray-200 dark:bg-neutral-700" />
        <div className="mt-3 flex gap-2">
          <div className="h-5 w-14 rounded-md bg-gray-200 dark:bg-neutral-700" />
          <div className="h-5 w-14 rounded-md bg-gray-200 dark:bg-neutral-700" />
        </div>
        <div className="mt-auto h-10 w-full rounded-full bg-gray-200 dark:bg-neutral-700" />
      </div>
    </div>
  );
}
