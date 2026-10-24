'use client';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

interface PrivateProfileStateProps {
  error: string | null;
  isAuthenticated: boolean;
}

export function PrivateProfileState({ error, isAuthenticated }: PrivateProfileStateProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md mx-auto px-4"
      >
        <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 dark:bg-gray-100 dark:bg-neutral-800 rounded-full flex items-center justify-center">
          <Lock className="w-10 h-10 text-gray-500 dark:text-gray-500 dark:text-neutral-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-900 dark:text-white mb-2">
          Private Profile
        </h2>
        <p className="text-gray-600 dark:text-gray-600 dark:text-neutral-400 mb-6">{error}</p>
        {!isAuthenticated && (
          <Button
            onClick={() => (window.location.href = '/login')}
            className="bg-blue-600 hover:bg-blue-700 text-gray-900 dark:text-white"
          >
            Sign in to view
          </Button>
        )}
      </motion.div>
    </div>
  );
}
