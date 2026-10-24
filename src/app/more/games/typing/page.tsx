'use client';
import { TypingGameView } from './TypingGameView';
import type { GameState, TypingStats } from './page.types';
export type { GameState, TypingStats } from './page.types';

import { invalidateGamificationQueries } from '@/hooks/useLiveGamification';
import { finishTypingRace, getTypingTexts, startTypingRace, TypingText } from '@/lib/api/games';
import { useQueryClient } from '@tanstack/react-query';
import confetti from 'canvas-confetti';
import { useCallback, useEffect, useRef, useState } from 'react';

export default function TypingPage() {
  const queryClient = useQueryClient();
  const [texts, setTexts] = useState<TypingText[]>([]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [gameState, setGameState] = useState<GameState>('loading');
  const [difficulty, setDifficulty] = useState<'EASY' | 'MEDIUM' | 'HARD'>('MEDIUM');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [stats, setStats] = useState<TypingStats | null>(null);
  const [xpEarned, setXpEarned] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [errors, setErrors] = useState<Set<number>>(new Set());
  const [currentRaceId, setCurrentRaceId] = useState<string | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentText = texts[currentTextIndex];

  const fetchTexts = useCallback(async () => {
    setGameState('loading');
    try {
      const data = await getTypingTexts(difficulty);
      setTexts(data.texts || []);
      setGameState('ready');
    } catch (error) {
      console.error('Failed to fetch typing texts:', error);
      setGameState('error');
    }
  }, [difficulty]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void fetchTexts();
    }, 0);

    return () => window.clearTimeout(timer);
  }, [fetchTexts]);

  const startGame = async () => {
    if (!currentText) return;

    setUserInput('');
    setCurrentCharIndex(0);
    setErrors(new Set());
    setStats(null);
    setElapsedSeconds(0);

    try {
      // Start a race on the backend
      const raceData = await startTypingRace(currentText.id);
      setCurrentRaceId(raceData.race.id);
      setStartTime(Date.now());
      setGameState('playing');

      // Focus the hidden input
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } catch (error) {
      console.error('Failed to start race:', error);
      // Fall back to local game if API fails
      setStartTime(Date.now());
      setGameState('playing');
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  const calculateStats = useCallback(
    (finalInput: string, textContent: string, timeTaken: number): TypingStats => {
      let correctChars = 0;
      let errorCount = 0;

      for (let i = 0; i < finalInput.length; i++) {
        if (finalInput[i] === textContent[i]) {
          correctChars++;
        } else {
          errorCount++;
        }
      }

      const words = correctChars / 5; // Standard: 5 chars = 1 word
      const minutes = timeTaken / 60000;
      const wpm = Math.round(words / minutes);
      const accuracy = Math.round((correctChars / finalInput.length) * 100);

      return {
        wpm,
        accuracy,
        correctChars,
        totalChars: finalInput.length,
        errors: errorCount,
        time: timeTaken,
      };
    },
    []
  );

  const submitResult = useCallback(
    async (typingStats: TypingStats) => {
      if (!currentText || !currentRaceId) return;

      try {
        const result = await finishTypingRace(currentRaceId, {
          wpm: typingStats.wpm,
          accuracy: typingStats.accuracy,
          rawWpm: typingStats.wpm, // Raw WPM without corrections
          timeSpent: Math.round(typingStats.time / 1000), // Convert to seconds
          mistakes: typingStats.errors,
          charsTyped: typingStats.totalChars,
        });
        setXpEarned(result.xpEarned);
        void invalidateGamificationQueries(queryClient);
      } catch (error) {
        console.error('Failed to submit result:', error);
      }
    },
    [currentRaceId, currentText, queryClient]
  );

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (gameState !== 'playing' || !currentText) return;

      const value = e.target.value;
      const textContent = currentText.content;

      // Check if user made an error
      if (value.length > userInput.length) {
        const newCharIndex = value.length - 1;
        if (value[newCharIndex] !== textContent[newCharIndex]) {
          setErrors((prev) => new Set([...prev, newCharIndex]));
        }
      }

      setUserInput(value);
      setCurrentCharIndex(value.length);

      // Check if completed
      if (value.length >= textContent.length) {
        const endTimeMs = Date.now();

        const timeTaken = endTimeMs - (startTime || endTimeMs);
        const calculatedStats = calculateStats(value, textContent, timeTaken);
        setStats(calculatedStats);

        // Submit result
        void submitResult(calculatedStats);

        setGameState('completed');

        if (calculatedStats.accuracy >= 90 && calculatedStats.wpm >= 40) {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
        }
      }
    },
    [calculateStats, currentText, gameState, startTime, submitResult, userInput.length]
  );

  useEffect(() => {
    if (gameState !== 'playing' || !startTime) return;

    const timer = window.setInterval(() => {
      setElapsedSeconds(Math.max(0, Math.floor((Date.now() - startTime) / 1000)));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [gameState, startTime]);

  const resetGame = () => {
    setUserInput('');
    setCurrentCharIndex(0);
    setErrors(new Set());
    setStartTime(null);
    setStats(null);
    setCurrentRaceId(null);
    setElapsedSeconds(0);
    setGameState('ready');
  };

  const nextText = () => {
    if (currentTextIndex < texts.length - 1) {
      setCurrentTextIndex((prev) => prev + 1);
    } else {
      setCurrentTextIndex(0);
    }
    resetGame();
  };

  // Handle keyboard focus
  const handleContainerClick = () => {
    if (gameState === 'playing') {
      inputRef.current?.focus();
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

  const getWpmRating = (wpm: number) => {
    if (wpm >= 80) return { label: 'Excellent!', color: 'text-green-500' };
    if (wpm >= 60) return { label: 'Great!', color: 'text-blue-500' };
    if (wpm >= 40) return { label: 'Good', color: 'text-amber-500' };
    return { label: 'Keep Practicing', color: 'text-gray-500' };
  };

  return (
    <TypingGameView
      containerRef={containerRef}
      currentCharIndex={currentCharIndex}
      currentText={currentText}
      currentTextIndex={currentTextIndex}
      difficulty={difficulty}
      elapsedSeconds={elapsedSeconds}
      errors={errors}
      fetchTexts={fetchTexts}
      gameState={gameState}
      getDifficultyColor={getDifficultyColor}
      getWpmRating={getWpmRating}
      handleContainerClick={handleContainerClick}
      handleInput={handleInput}
      inputRef={inputRef}
      nextText={nextText}
      resetGame={resetGame}
      setCurrentTextIndex={setCurrentTextIndex}
      setDifficulty={setDifficulty}
      startGame={startGame}
      stats={stats}
      texts={texts}
      userInput={userInput}
      xpEarned={xpEarned}
    />
  );
}
