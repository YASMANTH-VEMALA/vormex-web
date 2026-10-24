'use client';
import { TriviaGameView } from './TriviaGameView';
import type { GameState } from './page.types';
export type { GameState } from './page.types';

import { invalidateGamificationQueries } from '@/hooks/useLiveGamification';
import { answerTriviaQuestion, getDailyTrivia, TriviaQuestion } from '@/lib/api/games';
import { useQueryClient } from '@tanstack/react-query';
import confetti from 'canvas-confetti';
import { useCallback, useEffect, useState } from 'react';

export default function TriviaPage() {
  const queryClient = useQueryClient();
  const [questions, setQuestions] = useState<TriviaQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState<number | null>(null);
  const [explanation, setExplanation] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [totalXpEarned, setTotalXpEarned] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameState, setGameState] = useState<GameState>('loading');
  const [streak, setStreak] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchQuestions();
  }, []);

  async function fetchQuestions() {
    setGameState('loading');
    try {
      const data = await getDailyTrivia();
      if (data.questions && data.questions.length > 0) {
        setQuestions(data.questions);
        setGameState('playing');
        setTimeLeft(30);
      } else {
        setGameState('completed');
      }
    } catch (error) {
      console.error('Failed to fetch trivia:', error);
      setGameState('error');
    }
  }

  const handleTimeout = useCallback(() => {
    if (selectedAnswerIndex === null) {
      setSelectedAnswerIndex(-1); // -1 indicates timeout
      setIsCorrect(false);
      setStreak(0);
      setGameState('answered');
    }
  }, [selectedAnswerIndex]);

  // Timer effect
  useEffect(() => {
    if (gameState !== 'playing' || selectedAnswerIndex !== null) return;

    const timer = setInterval(() => {
      if (timeLeft <= 1) {
        handleTimeout();
        setTimeLeft(0);
      } else {
        setTimeLeft((previous) => previous - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, selectedAnswerIndex, currentIndex, timeLeft, handleTimeout]);

  const handleAnswer = async (answerIndex: number) => {
    if (selectedAnswerIndex !== null || isSubmitting) return;

    setSelectedAnswerIndex(answerIndex);
    setIsSubmitting(true);

    try {
      const currentQuestion = questions[currentIndex];
      const result = await answerTriviaQuestion(currentQuestion.id, answerIndex, 30 - timeLeft);

      setIsCorrect(result.isCorrect);
      setCorrectAnswerIndex(result.correctIndex);
      setExplanation(result.explanation || null);

      if (result.isCorrect) {
        setScore((prev) => prev + 1);
        setTotalXpEarned((prev) => prev + result.xpEarned);
        setStreak((prev) => prev + 1);
        void invalidateGamificationQueries(queryClient);

        // Trigger confetti for correct answer
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
        });
      } else {
        setStreak(0);
      }

      setGameState('answered');
    } catch (error) {
      console.error('Failed to submit answer:', error);
      // If API fails, mark as incorrect
      setIsCorrect(false);
      setStreak(0);
      setGameState('answered');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswerIndex(null);
      setCorrectAnswerIndex(null);
      setExplanation(null);
      setIsCorrect(null);
      setTimeLeft(30);
      setGameState('playing');
    } else {
      setGameState('completed');
      if (score > questions.length / 2) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      }
    }
  };

  const restartGame = () => {
    setCurrentIndex(0);
    setSelectedAnswerIndex(null);
    setCorrectAnswerIndex(null);
    setExplanation(null);
    setIsCorrect(null);
    setScore(0);
    setTotalXpEarned(0);
    setStreak(0);
    fetchQuestions();
  };

  const currentQuestion = questions[currentIndex];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'EASY':
        return 'text-green-600 bg-green-100 dark:bg-green-900/30';
      case 'MEDIUM':
        return 'text-amber-600 bg-amber-100 dark:bg-amber-900/30';
      case 'HARD':
        return 'text-red-600 bg-red-100 dark:bg-red-900/30';
      default:
        return 'text-gray-600 bg-gray-100 dark:bg-gray-700';
    }
  };

  return (
    <TriviaGameView
      correctAnswerIndex={correctAnswerIndex}
      currentIndex={currentIndex}
      currentQuestion={currentQuestion}
      explanation={explanation}
      fetchQuestions={fetchQuestions}
      gameState={gameState}
      getDifficultyColor={getDifficultyColor}
      handleAnswer={handleAnswer}
      handleNext={handleNext}
      isCorrect={isCorrect}
      isSubmitting={isSubmitting}
      questions={questions}
      restartGame={restartGame}
      score={score}
      selectedAnswerIndex={selectedAnswerIndex}
      streak={streak}
      timeLeft={timeLeft}
      totalXpEarned={totalXpEarned}
    />
  );
}
