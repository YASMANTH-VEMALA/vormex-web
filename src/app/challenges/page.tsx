'use client';
import { useSyncedState } from '@/hooks/useSyncedState';
import { useAuth as useResourceAuth } from '@/lib/auth/useAuth';
import { useQuery } from '@tanstack/react-query';
import { ChallengeDetailDialog } from './ChallengeDetailDialog';
import { ChallengeListings } from './ChallengeListings';
import type { Challenge, LeaderboardEntry, Submission } from './page.types';
export type { Challenge, LeaderboardEntry, Submission, TestCase, TestResult } from './page.types';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import * as challengesAPI from '@/lib/api/challenges';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, ChevronLeft, Code2, Target, Trophy } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const difficulties = ['All', 'EASY', 'MEDIUM', 'HARD', 'EXPERT'];
const categories = ['All', 'ARRAYS', 'STRINGS', 'TREES', 'GRAPHS', 'DP', 'MATH', 'ALGORITHMS'];
const languages = ['javascript', 'python', 'java', 'cpp', 'typescript'];

function ChallengesPage() {
  const [initialChallenges] = useState<Challenge[]>([]);
  const [initialSubmissions] = useState<Submission[]>([]);
  const [initialLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [activeTab, setActiveTab] = useState<'challenges' | 'submissions' | 'leaderboard'>(
    'challenges'
  );
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useSyncedState(
    selectedChallenge?.starterCode?.[selectedLanguage] || '// Start coding here',
    `${selectedChallenge?.id ?? ''}:${selectedLanguage}`
  );

  const [submitting, setSubmitting] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [currentHint, setCurrentHint] = useState(0);
  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'error' }>(
    {
      show: false,
      message: '',
      type: 'success',
    }
  );

  const resourceViewer = useResourceAuth().user;
  const loadDataResource = useQuery({
    queryKey: ['web-resource', 'challenges', resourceViewer?.id ?? 'anonymous'],
    queryFn: async () => {
      const [challenges, submissions, leaderboard] = await Promise.all([
        challengesAPI.getChallenges(),
        challengesAPI.getMySubmissions(),
        challengesAPI.getChallengeLeaderboard(),
      ]);
      return {
        challenges: challenges || [],
        submissions: (submissions || []) as Submission[],
        leaderboard: leaderboard || [],
      };
    },
    retry: false,
  });
  const challenges = loadDataResource.data?.challenges ?? initialChallenges;
  const submissions = loadDataResource.data?.submissions ?? initialSubmissions;
  const leaderboard = loadDataResource.data?.leaderboard ?? initialLeaderboard;
  const loading = loadDataResource.isPending;
  const loadData = () => loadDataResource.refetch();

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
  };

  const handleSubmit = async () => {
    if (!selectedChallenge || !code.trim()) return;

    try {
      setSubmitting(true);
      const result = await challengesAPI.submitSolution(selectedChallenge.id, {
        code,
        language: selectedLanguage,
      });
      showToast(
        result.status === 'ACCEPTED'
          ? `Solved! +${selectedChallenge.points} points`
          : 'Some tests failed. Try again!',
        result.status === 'ACCEPTED' ? 'success' : 'error'
      );
      loadData();
    } catch (error) {
      console.error('Error submitting:', error);
      showToast('Failed to submit solution', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const filteredChallenges = challenges.filter((challenge) => {
    const matchesDifficulty =
      selectedDifficulty === 'All' || challenge.difficulty === selectedDifficulty;
    const matchesCategory = selectedCategory === 'All' || challenge.category === selectedCategory;
    return matchesDifficulty && matchesCategory;
  });

  const getSolvedChallenges = () => {
    return submissions.filter((s) => s.status === 'ACCEPTED').map((s) => s.challengeId);
  };

  const isSolved = (challengeId: string) => getSolvedChallenges().includes(challengeId);

  const getDifficultyStyles = (difficulty: string) => {
    switch (difficulty) {
      case 'EASY':
        return 'text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30';
      case 'MEDIUM':
        return 'text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30';
      case 'HARD':
        return 'text-orange-700 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30';
      case 'EXPERT':
        return 'text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-900/30';
      default:
        return 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-neutral-800';
    }
  };

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'ACCEPTED':
        return 'text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30';
      case 'WRONG_ANSWER':
        return 'text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-900/30';
      case 'TIME_LIMIT':
        return 'text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30';
      case 'RUNTIME_ERROR':
        return 'text-orange-700 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30';
      case 'COMPILE_ERROR':
        return 'text-purple-700 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30';
      default:
        return 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-neutral-800';
    }
  };

  const getTotalPoints = () => {
    return submissions
      .filter((s) => s.status === 'ACCEPTED')
      .reduce((total, s) => total + (s.score || s.challenge?.points || 0), 0);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-neutral-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-neutral-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-950 pb-20">
      {/* Toast */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-lg text-sm font-medium ${
              toast.type === 'success'
                ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400'
                : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400'
            }`}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Challenge Detail Modal */}
      <ChallengeDetailDialog
        code={code}
        currentHint={currentHint}
        getDifficultyStyles={getDifficultyStyles}
        handleSubmit={handleSubmit}
        languages={languages}
        selectedChallenge={selectedChallenge}
        selectedLanguage={selectedLanguage}
        setCode={setCode}
        setCurrentHint={setCurrentHint}
        setSelectedChallenge={setSelectedChallenge}
        setSelectedLanguage={setSelectedLanguage}
        setShowHints={setShowHints}
        showHints={showHints}
        submitting={submitting}
      />

      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-neutral-800">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <Link
                href="/more"
                className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </Link>
              <div>
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Coding Challenges
                </h1>
                <p className="text-xs text-gray-500">{challenges.length} challenges available</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium">
                <CheckCircle className="w-3.5 h-3.5" />
                {getSolvedChallenges().length}
              </div>
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 text-xs font-medium">
                <Trophy className="w-3.5 h-3.5" />
                {getTotalPoints()}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex px-4 gap-2 pb-3">
            {[
              { id: 'challenges', label: 'Challenges', icon: <Code2 className="w-4 h-4" /> },
              { id: 'submissions', label: 'My Submissions', icon: <Target className="w-4 h-4" /> },
              { id: 'leaderboard', label: 'Leaderboard', icon: <Trophy className="w-4 h-4" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === tab.id
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                    : 'bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-neutral-700'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <ChallengeListings
        activeTab={activeTab}
        categories={categories}
        difficulties={difficulties}
        filteredChallenges={filteredChallenges}
        getDifficultyStyles={getDifficultyStyles}
        getStatusStyles={getStatusStyles}
        isSolved={isSolved}
        leaderboard={leaderboard}
        selectedCategory={selectedCategory}
        selectedDifficulty={selectedDifficulty}
        setActiveTab={setActiveTab}
        setSelectedCategory={setSelectedCategory}
        setSelectedChallenge={setSelectedChallenge}
        setSelectedDifficulty={setSelectedDifficulty}
        setShowFilters={setShowFilters}
        showFilters={showFilters}
        submissions={submissions}
      />
    </div>
  );
}

export default function ChallengesPageWrapper() {
  return (
    <ProtectedRoute>
      <ChallengesPage />
    </ProtectedRoute>
  );
}
