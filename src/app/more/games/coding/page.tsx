'use client';
import { useSyncedState } from '@/hooks/useSyncedState';
import { useAuth } from '@/lib/auth/useAuth';
import { useQuery } from '@tanstack/react-query';
import { CodingChallengeView } from './CodingChallengeView';
import type { GameState } from './page.types';
export type { GameState } from './page.types';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { invalidateGamificationQueries } from '@/hooks/useLiveGamification';
import { CodingProblem, getCodingProblems, submitCodingSolution } from '@/lib/api/games';
import { useQueryClient } from '@tanstack/react-query';
import confetti from 'canvas-confetti';
import { ArrowLeft, Code, Zap } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function CodingPage() {
  const queryClient = useQueryClient();

  const [selectedPuzzle, setSelectedPuzzle] = useState<CodingProblem | null>(null);
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [output, setOutput] = useState('');
  const [, setTestResults] = useState<
    { testCase: number; passed: boolean; input: string; expectedOutput?: string }[]
  >([]);

  const [difficulty, setDifficulty] = useState<'EASY' | 'MEDIUM' | 'HARD'>('EASY');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [xpEarned, setXpEarned] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [copied, setCopied] = useState(false);
  const [, setStartTime] = useState<number | null>(null);

  const viewerId = useAuth().user?.id;
  const puzzlesResource = useQuery({
    queryKey: ['coding-problems', viewerId, difficulty],
    queryFn: () => getCodingProblems(undefined, difficulty),
    enabled: !!viewerId,
  });
  const puzzles = puzzlesResource.data?.problems ?? [];
  const [gameState, setGameState] = useSyncedState<GameState>(
    puzzlesResource.isPending ? 'loading' : puzzlesResource.isError ? 'error' : 'selecting',
    difficulty + ':' + puzzlesResource.dataUpdatedAt + ':' + puzzlesResource.status
  );
  const fetchPuzzles = async () => {
    await puzzlesResource.refetch();
  };

  const selectPuzzle = (puzzle: CodingProblem) => {
    setSelectedPuzzle(puzzle);
    // Get starter code for the selected language
    const starterCode = puzzle.starterCode?.[language] || puzzle.starterCode?.javascript || '';
    setCode(starterCode);
    setOutput('');
    setTestResults([]);
    setIsCorrect(null);
    setShowHint(false);
    setStartTime(Date.now());
    setGameState('solving');
  };

  const runCode = async () => {
    if (!selectedPuzzle || !code.trim()) return;

    setIsSubmitting(true);
    setOutput('Running...');
    setTestResults([]);

    try {
      const result = await submitCodingSolution(selectedPuzzle.id, code, language);

      setTestResults(result.testResults || []);
      const allPassed = result.submission.passedTests === result.submission.totalTests;
      setIsCorrect(allPassed);
      setOutput(
        allPassed
          ? `All ${result.submission.totalTests} test cases passed!`
          : `${result.submission.passedTests}/${result.submission.totalTests} test cases passed.`
      );

      if (allPassed) {
        setXpEarned(result.xpEarned);
        setGameState('result');
        void invalidateGamificationQueries(queryClient);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      }
    } catch (error: unknown) {
      const errorMessage = (error as { response?: { data?: { message?: string } } })?.response?.data
        ?.message;
      setOutput(errorMessage || 'Error running code. Please try again.');
      setIsCorrect(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyStarterCode = () => {
    if (selectedPuzzle?.starterCode) {
      const starterCode =
        selectedPuzzle.starterCode[language] || selectedPuzzle.starterCode.javascript || '';
      navigator.clipboard.writeText(starterCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'EASY':
        return 'bg-green-100 text-green-600 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800';
      case 'MEDIUM':
        return 'bg-amber-100 text-amber-600 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800';
      case 'HARD':
        return 'bg-red-100 text-red-600 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  const getXpReward = (diff: string) => {
    switch (diff) {
      case 'EASY':
        return '50 XP';
      case 'MEDIUM':
        return '100 XP';
      case 'HARD':
        return '200 XP';
      default:
        return '50 XP';
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <div className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link
                  href={gameState === 'solving' || gameState === 'result' ? '#' : '/more/games'}
                  onClick={(e) => {
                    if (gameState === 'solving' || gameState === 'result') {
                      e.preventDefault();
                      setGameState('selecting');
                      setSelectedPuzzle(null);
                    }
                  }}
                  className="p-2 -ml-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </Link>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Code className="w-6 h-6 text-orange-500" />
                  {gameState === 'solving' || gameState === 'result'
                    ? selectedPuzzle?.title
                    : 'Coding Puzzles'}
                </h1>
              </div>

              {xpEarned > 0 && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                  <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                    +{xpEarned} XP
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        <CodingChallengeView
          code={code}
          copied={copied}
          copyStarterCode={copyStarterCode}
          difficulty={difficulty}
          fetchPuzzles={fetchPuzzles}
          gameState={gameState}
          getDifficultyColor={getDifficultyColor}
          getXpReward={getXpReward}
          isCorrect={isCorrect}
          isSubmitting={isSubmitting}
          language={language}
          output={output}
          puzzles={puzzles}
          runCode={runCode}
          selectPuzzle={selectPuzzle}
          selectedPuzzle={selectedPuzzle}
          setCode={setCode}
          setDifficulty={setDifficulty}
          setGameState={setGameState}
          setLanguage={setLanguage}
          setSelectedPuzzle={setSelectedPuzzle}
          setShowHint={setShowHint}
          setXpEarned={setXpEarned}
          showHint={showHint}
          xpEarned={xpEarned}
        />
      </div>
    </ProtectedRoute>
  );
}
