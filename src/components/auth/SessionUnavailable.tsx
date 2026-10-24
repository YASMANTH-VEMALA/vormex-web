'use client';

export function SessionUnavailable({ onRetry }: { onRetry: () => void }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-6 dark:bg-neutral-950">
      <div role="alert" className="max-w-md text-center text-gray-900 dark:text-gray-100">
        <h1 className="text-2xl font-semibold">We couldn’t check your session</h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          We’re having trouble connecting. Your session has been kept. Please try again.
        </p>
        <button
          type="button"
          onClick={onRetry}
          className="mt-6 rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-4 dark:bg-white dark:text-gray-900"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
