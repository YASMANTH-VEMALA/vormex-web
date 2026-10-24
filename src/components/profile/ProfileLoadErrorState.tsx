'use client';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ProfileLoadErrorStateProps {
  error: string | null;
  fetchProfile: ({ background }?: { background?: boolean | undefined }) => Promise<void>;
}

export function ProfileLoadErrorState({ error, fetchProfile }: ProfileLoadErrorStateProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md mx-auto px-4"
      >
        <div className="w-20 h-20 mx-auto mb-6 bg-red-100 dark:bg-red-500/10 rounded-full flex items-center justify-center">
          <AlertCircle className="w-10 h-10 text-red-600 dark:text-red-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-900 dark:text-white mb-2">
          Error
        </h2>
        <p className="text-gray-600 dark:text-gray-600 dark:text-neutral-400 mb-6">
          {error || 'Something went wrong.'}
        </p>
        <Button
          onClick={() => {
            void fetchProfile();
          }}
          className="bg-gray-800 hover:bg-gray-700 dark:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-gray-200 dark:hover:bg-neutral-700 text-gray-900 dark:text-white"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Try Again
        </Button>
      </motion.div>
    </div>
  );
}
