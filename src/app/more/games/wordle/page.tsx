'use client';
import { WordleGameView } from './WordleGameView';
import type { GameState, GuessResult, LetterStatus } from './page.types';
export type { GameState, GuessResult, LetterStatus } from './page.types';

import { invalidateGamificationQueries } from '@/hooks/useLiveGamification';
import { getDailyWordle, guessWordle, WordleGame } from '@/lib/api/games';
import { useQueryClient } from '@tanstack/react-query';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';

const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DELETE'],
];

export default function WordlePage() {
  const queryClient = useQueryClient();
  const [game, setGame] = useState<WordleGame | null>(null);
  const [wordLength, setWordLength] = useState(5);
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState<GuessResult[]>([]);
  const [gameState, setGameState] = useState<GameState>('loading');
  const [showHelp, setShowHelp] = useState(false);
  const [xpEarned, setXpEarned] = useState(0);
  const [letterStatuses, setLetterStatuses] = useState<Record<string, LetterStatus>>({});
  const [shakeRow, setShakeRow] = useState(false);
  const [message, setMessage] = useState('');
  const [revealedWord, setRevealedWord] = useState<string | null>(null);

  const maxAttempts = game?.maxAttempts || 6;

  const updateLetterStatuses = useCallback((guess: string, result: LetterStatus[]) => {
    setLetterStatuses((prev) => {
      const newStatuses = { ...prev };
      for (let i = 0; i < guess.length; i++) {
        const letter = guess[i].toUpperCase();
        const status = result[i];

        // Only upgrade status, never downgrade
        if (status === 'correct') {
          newStatuses[letter] = 'correct';
        } else if (status === 'present' && newStatuses[letter] !== 'correct') {
          newStatuses[letter] = 'present';
        } else if (status === 'absent' && !newStatuses[letter]) {
          newStatuses[letter] = 'absent';
        }
      }
      return newStatuses;
    });
  }, []);

  const fetchWordle = useCallback(async () => {
    setGameState('loading');
    try {
      const data = await getDailyWordle();
      setGame(data.game);
      setWordLength(data.wordLength || 5);

      if (data.game.status === 'won' || data.game.status === 'lost') {
        setGameState('already-played');
        if (data.game.guesses && data.game.guesses.length > 0) {
          const loadedGuesses: GuessResult[] = data.game.guesses.map((guess) => ({
            guess: guess.guess,
            result: guess.result.map((result) => result.status),
          }));
          setGuesses(loadedGuesses);
          loadedGuesses.forEach((guess) => {
            updateLetterStatuses(guess.guess, guess.result);
          });
        }
        if (data.game.word) {
          setRevealedWord(data.game.word);
        }
        setXpEarned(data.game.xpEarned || 0);
      } else {
        if (data.game.guesses && data.game.guesses.length > 0) {
          const loadedGuesses: GuessResult[] = data.game.guesses.map((guess) => ({
            guess: guess.guess,
            result: guess.result.map((result) => result.status),
          }));
          setGuesses(loadedGuesses);
          loadedGuesses.forEach((guess) => {
            updateLetterStatuses(guess.guess, guess.result);
          });
        }
        setGameState('playing');
      }
    } catch (error) {
      console.error('Failed to fetch wordle:', error);
      setGameState('error');
    }
  }, [updateLetterStatuses]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void fetchWordle();
    }, 0);

    return () => window.clearTimeout(timer);
  }, [fetchWordle]);

  const submitGuess = useCallback(async () => {
    if (currentGuess.length !== wordLength || !game) {
      setShakeRow(true);
      setMessage('Not enough letters');
      setTimeout(() => {
        setShakeRow(false);
        setMessage('');
      }, 600);
      return;
    }

    try {
      const data = await guessWordle(game.id, currentGuess.toLowerCase());

      const newGuess: GuessResult = {
        guess: currentGuess,
        result: data.result.map((result) => result.status),
      };

      setGuesses((prev) => [...prev, newGuess]);
      updateLetterStatuses(
        currentGuess,
        data.result.map((result) => result.status)
      );
      setCurrentGuess('');

      if (data.status === 'won') {
        setXpEarned(data.xpEarned);
        setGameState('won');
        void invalidateGamificationQueries(queryClient);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } else if (data.status === 'lost') {
        setGameState('lost');
        if (data.word) {
          setRevealedWord(data.word);
        }
      }
    } catch (error: unknown) {
      const errorMessage = (error as { response?: { data?: { message?: string } } })?.response?.data
        ?.message;

      setShakeRow(true);
      setMessage(errorMessage || 'Invalid word');
      setTimeout(() => {
        setShakeRow(false);
        setMessage('');
      }, 600);
    }
  }, [currentGuess, game, queryClient, updateLetterStatuses, wordLength]);

  const handleKeyPress = useCallback(
    (key: string) => {
      if (gameState !== 'playing') return;

      if (key === 'ENTER') {
        void submitGuess();
      } else if (key === 'DELETE' || key === 'BACKSPACE') {
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (/^[A-Z]$/i.test(key) && currentGuess.length < wordLength) {
        setCurrentGuess((prev) => prev + key.toUpperCase());
      }
    },
    [currentGuess.length, gameState, submitGuess, wordLength]
  );

  // Keyboard event listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      handleKeyPress(e.key.toUpperCase());
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyPress]);

  const getLetterClass = (status: LetterStatus) => {
    switch (status) {
      case 'correct':
        return 'bg-green-500 border-green-500 text-white';
      case 'present':
        return 'bg-amber-500 border-amber-500 text-white';
      case 'absent':
        return 'bg-gray-500 border-gray-500 text-white dark:bg-gray-600';
      case 'pending':
        return 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white';
      default:
        return 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700';
    }
  };

  const getKeyClass = (key: string) => {
    const status = letterStatuses[key];
    const baseClass = 'rounded-lg font-semibold transition-all active:scale-95';

    if (key === 'ENTER' || key === 'DELETE') {
      return `${baseClass} bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 px-3 py-4 text-xs`;
    }

    switch (status) {
      case 'correct':
        return `${baseClass} bg-green-500 text-white`;
      case 'present':
        return `${baseClass} bg-amber-500 text-white`;
      case 'absent':
        return `${baseClass} bg-gray-500 text-white dark:bg-gray-600`;
      default:
        return `${baseClass} bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600`;
    }
  };

  const shareResult = () => {
    const emojiGrid = guesses
      .map((g) =>
        g.result.map((r) => (r === 'correct' ? '🟩' : r === 'present' ? '🟨' : '⬛')).join('')
      )
      .join('\n');

    const text = `Vormex Tech Wordle ${guesses.length}/${maxAttempts}\n\n${emojiGrid}`;

    if (navigator.share) {
      navigator.share({ text });
    } else {
      navigator.clipboard.writeText(text);
      setMessage('Copied to clipboard!');
      setTimeout(() => setMessage(''), 2000);
    }
  };

  const renderGrid = () => {
    const rows = [];

    for (let i = 0; i < maxAttempts; i++) {
      const guess = guesses[i];
      const isCurrentRow = i === guesses.length && gameState === 'playing';

      rows.push(
        <motion.div
          key={i}
          className={`flex gap-1.5 justify-center ${shakeRow && isCurrentRow ? 'animate-shake' : ''}`}
        >
          {Array.from({ length: wordLength }).map((_, j) => {
            let letter = '';
            let status: LetterStatus = 'empty';

            if (guess) {
              letter = guess.guess[j];
              status = guess.result[j];
            } else if (isCurrentRow) {
              letter = currentGuess[j] || '';
              status = letter ? 'pending' : 'empty';
            }

            return (
              <motion.div
                key={j}
                initial={guess ? { rotateX: 0 } : false}
                animate={guess ? { rotateX: 360 } : {}}
                transition={{ delay: j * 0.15, duration: 0.5 }}
                className={`w-12 h-12 sm:w-14 sm:h-14 border-2 flex items-center justify-center text-xl font-bold uppercase ${getLetterClass(status)}`}
              >
                {letter}
              </motion.div>
            );
          })}
        </motion.div>
      );
    }

    return rows;
  };

  return (
    <WordleGameView
      KEYBOARD_ROWS={KEYBOARD_ROWS}
      fetchWordle={fetchWordle}
      gameState={gameState}
      getKeyClass={getKeyClass}
      guesses={guesses}
      handleKeyPress={handleKeyPress}
      maxAttempts={maxAttempts}
      message={message}
      renderGrid={renderGrid}
      revealedWord={revealedWord}
      setShowHelp={setShowHelp}
      shareResult={shareResult}
      showHelp={showHelp}
      xpEarned={xpEarned}
    />
  );
}
