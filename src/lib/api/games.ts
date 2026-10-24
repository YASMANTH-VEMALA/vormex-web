import apiClient from './client';
import type {
  ArcadeCatalogGame,
  ArcadeGameType,
  ArcadeLeaderboardEntry,
  ArcadeResult,
  ArcadeRoom,
  CodingProblem,
  CodingSubmission,
  GameStats,
  LeaderboardEntry,
  QuizBattle,
  TriviaQuestion,
  TriviaSession,
  TypingRace,
  TypingText,
  WordleGame,
  XPTransaction,
} from './games.types';
export type {
  ArcadeCatalogGame,
  ArcadeGameType,
  ArcadeLeaderboardEntry,
  ArcadePlayer,
  ArcadeResult,
  ArcadeRole,
  ArcadeRoom,
  ArcadeRoomStatus,
  CodingProblem,
  CodingSubmission,
  GameDifficulty,
  GameStats,
  LeaderboardEntry,
  QuestionCategory,
  QuizBattle,
  TriviaQuestion,
  TriviaSession,
  TypingRace,
  TypingText,
  WordleGame,
  XPTransaction,
} from './games.types';

// ============================================
// API Functions - Stats & Leaderboards
// ============================================

export const getMyGameStats = async (): Promise<{ stats: GameStats }> => {
  return apiClient.get('/games/stats');
};

export const getXPHistory = async (
  limit = 20,
  cursor?: string
): Promise<{
  transactions: XPTransaction[];
  nextCursor: string | null;
  hasMore: boolean;
}> => {
  return apiClient.get('/games/xp-history', { params: { limit, cursor } });
};

export const getLeaderboard = async (
  gameType?: string,
  period = 'alltime',
  limit = 20
): Promise<{
  leaderboard: LeaderboardEntry[];
}> => {
  return apiClient.get('/games/leaderboard', { params: { gameType, period, limit } });
};

// ============================================
// API Functions - Daily Trivia
// ============================================

export const getDailyTrivia = async (): Promise<{
  status: 'in_progress' | 'completed';
  session: TriviaSession;
  questions?: TriviaQuestion[];
  progress?: { answered: number; total: number; correct: number };
  message?: string;
}> => {
  return apiClient.get('/games/trivia/daily');
};

export const answerTriviaQuestion = async (
  questionId: string,
  selectedIndex: number,
  timeSpent: number
): Promise<{
  isCorrect: boolean;
  correctIndex: number;
  explanation?: string;
  xpEarned: number;
}> => {
  return apiClient.post('/games/trivia/answer', { questionId, selectedIndex, timeSpent });
};

export const getTriviaQuestions = async (
  category?: string,
  difficulty?: string,
  limit = 10
): Promise<{
  questions: TriviaQuestion[];
}> => {
  return apiClient.get('/games/trivia/questions', { params: { category, difficulty, limit } });
};

// ============================================
// API Functions - Coding Challenges
// ============================================

export const getCodingProblems = async (
  category?: string,
  difficulty?: string,
  limit = 20
): Promise<{
  problems: CodingProblem[];
}> => {
  return apiClient.get('/games/coding/problems', { params: { category, difficulty, limit } });
};

export const getCodingProblem = async (
  problemId: string
): Promise<{
  problem: CodingProblem;
  submissions: CodingSubmission[];
}> => {
  return apiClient.get(`/games/coding/problems/${problemId}`);
};

export const submitCodingSolution = async (
  problemId: string,
  code: string,
  language: string
): Promise<{
  submission: CodingSubmission;
  testResults: { testCase: number; passed: boolean; input: string; expectedOutput?: string }[];
  xpEarned: number;
}> => {
  return apiClient.post(`/games/coding/problems/${problemId}/submit`, { code, language });
};

// ============================================
// API Functions - Tech Wordle
// ============================================

export const getDailyWordle = async (): Promise<{
  game: WordleGame;
  hint?: string;
  wordLength: number;
}> => {
  return apiClient.get('/games/wordle/daily');
};

export const guessWordle = async (
  gameId: string,
  guess: string
): Promise<{
  result: { letter: string; status: 'correct' | 'present' | 'absent' }[];
  status: 'playing' | 'won' | 'lost';
  xpEarned: number;
  word?: string;
}> => {
  return apiClient.post('/games/wordle/guess', { gameId, guess });
};

// ============================================
// API Functions - Quiz Battle
// ============================================

export const createQuizBattle = async (
  category?: string,
  difficulty?: string
): Promise<{
  battle: { id: string; status: string; category?: string; difficulty?: string };
  message: string;
}> => {
  return apiClient.post('/games/battle/create', { category, difficulty });
};

export const getAvailableBattles = async (): Promise<{ battles: QuizBattle[] }> => {
  return apiClient.get('/games/battle/available');
};

export const joinQuizBattle = async (
  battleId: string
): Promise<{ message: string; battleId: string }> => {
  return apiClient.post(`/games/battle/${battleId}/join`);
};

export const getQuizBattle = async (
  battleId: string
): Promise<{
  battle: QuizBattle;
  questions: TriviaQuestion[];
  isPlayer1: boolean;
  isPlayer2: boolean;
}> => {
  return apiClient.get(`/games/battle/${battleId}`);
};

export const answerQuizBattle = async (
  battleId: string,
  questionId: string,
  selectedIndex: number,
  timeSpent: number
): Promise<{
  isCorrect: boolean;
  correctIndex: number;
}> => {
  return apiClient.post(`/games/battle/${battleId}/answer`, {
    questionId,
    selectedIndex,
    timeSpent,
  });
};

// ============================================
// API Functions - Typing Race
// ============================================

export const getTypingTexts = async (
  category?: string,
  difficulty?: string,
  limit = 10
): Promise<{
  texts: TypingText[];
}> => {
  return apiClient.get('/games/typing/texts', { params: { category, difficulty, limit } });
};

export const startTypingRace = async (
  textId: string
): Promise<{
  race: TypingRace;
  text: TypingText;
}> => {
  return apiClient.post('/games/typing/start', { textId });
};

export const finishTypingRace = async (
  raceId: string,
  data: {
    wpm: number;
    accuracy: number;
    rawWpm: number;
    timeSpent: number;
    mistakes: number;
    charsTyped: number;
  }
): Promise<{
  wpm: number;
  accuracy: number;
  xpEarned: number;
  isPersonalBest: boolean;
}> => {
  return apiClient.post(`/games/typing/${raceId}/finish`, data);
};

export const getTypingHistory = async (limit = 20): Promise<{ races: TypingRace[] }> => {
  return apiClient.get('/games/typing/history', { params: { limit } });
};

// ============================================
// Social Arcade API Functions
// ============================================

export const getArcadeCatalog = async (): Promise<{ games: ArcadeCatalogGame[] }> => {
  return apiClient.get('/games/arcade/catalog');
};

export const getArcadeRooms = async (
  gameType?: ArcadeGameType | 'all',
  limit = 20
): Promise<{ rooms: ArcadeRoom[] }> => {
  return apiClient.get('/games/arcade/rooms', {
    params: { gameType: gameType === 'all' ? undefined : gameType, limit },
  });
};

export const createArcadeRoom = async (gameType: ArcadeGameType): Promise<{ room: ArcadeRoom }> => {
  return apiClient.post('/games/arcade/rooms', { gameType });
};

export const getArcadeRoom = async (roomId: string): Promise<{ room: ArcadeRoom }> => {
  return apiClient.get(`/games/arcade/rooms/${roomId}`);
};

export const getArcadeInvite = async (inviteCode: string): Promise<{ room: ArcadeRoom }> => {
  return apiClient.get(`/games/arcade/invite/${inviteCode}`);
};

export const joinArcadeRoom = async (roomId: string): Promise<{ room: ArcadeRoom }> => {
  return apiClient.post(`/games/arcade/rooms/${roomId}/join`);
};

export const joinArcadeInvite = async (inviteCode: string): Promise<{ room: ArcadeRoom }> => {
  return apiClient.post(`/games/arcade/invite/${inviteCode}/join`);
};

export const setArcadeReady = async (
  roomId: string,
  ready: boolean
): Promise<{ room: ArcadeRoom }> => {
  return apiClient.post(`/games/arcade/rooms/${roomId}/ready`, { ready });
};

export const finishArcadeRoom = async (
  roomId: string,
  data: {
    hostScore: number;
    guestScore: number;
    durationSeconds: number;
    metadata?: Record<string, unknown>;
  }
): Promise<{ room: ArcadeRoom }> => {
  return apiClient.post(`/games/arcade/rooms/${roomId}/finish`, data);
};

export const abandonArcadeRoom = async (roomId: string): Promise<{ room: ArcadeRoom }> => {
  return apiClient.post(`/games/arcade/rooms/${roomId}/abandon`);
};

export const getArcadeHistory = async (limit = 20): Promise<{ results: ArcadeResult[] }> => {
  return apiClient.get('/games/arcade/history', { params: { limit } });
};

export const getArcadeLeaderboard = async (
  gameType?: ArcadeGameType | 'all',
  limit = 20
): Promise<{ leaderboard: ArcadeLeaderboardEntry[] }> => {
  return apiClient.get('/games/arcade/leaderboard', {
    params: { gameType: gameType === 'all' ? undefined : gameType, limit },
  });
};
