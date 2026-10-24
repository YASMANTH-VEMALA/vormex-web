export type GameDifficulty = 'EASY' | 'MEDIUM' | 'HARD' | 'EXPERT';

export type QuestionCategory =
  | 'PROGRAMMING'
  | 'WEB_DEVELOPMENT'
  | 'DATA_STRUCTURES'
  | 'ALGORITHMS'
  | 'DATABASES'
  | 'DEVOPS'
  | 'SYSTEM_DESIGN'
  | 'GENERAL_TECH'
  | 'STARTUP'
  | 'CAREER';

export interface GameStats {
  id: string;
  userId: string;
  totalGamesPlayed: number;
  totalXpEarned: number;
  currentStreak: number;
  longestStreak: number;
  lastPlayedAt: string | null;
  triviaGamesPlayed: number;
  triviaCorrectAnswers: number;
  triviaTotalQuestions: number;
  triviaHighScore: number;
  codingProblemsAttempted: number;
  codingProblemsSolved: number;
  codingTotalSubmissions: number;
  wordleGamesPlayed: number;
  wordleGamesWon: number;
  wordleCurrentStreak: number;
  wordleBestStreak: number;
  wordleAverageAttempts: number;
  quizBattlesPlayed: number;
  quizBattlesWon: number;
  quizBattleWinRate: number;
  typingRacesCompleted: number;
  typingBestWpm: number;
  typingAverageWpm: number;
  typingBestAccuracy: number;
  currentXpBalance: number;
}

export interface XPTransaction {
  id: string;
  userId: string;
  amount: number;
  type: string;
  source: string;
  sourceId?: string;
  description?: string;
  createdAt: string;
}

export interface LeaderboardEntry {
  rank: number;
  user: {
    id: string;
    name: string;
    username: string;
    profileImage: string | null;
  };
  xp: number;
  gamesPlayed: number;
  streak: number;
}

export interface TriviaQuestion {
  id: string;
  question: string;
  options: string[];
  category: QuestionCategory;
  difficulty: GameDifficulty;
  xpReward: number;
  timeLimit: number;
  imageUrl?: string;
  isAnswered?: boolean;
}

export interface TriviaSession {
  id: string;
  date: string;
  correctCount: number;
  totalQuestions: number;
  totalXpEarned: number;
  completedAt?: string;
}

export interface CodingProblem {
  id: string;
  title: string;
  description: string;
  difficulty: GameDifficulty;
  category: QuestionCategory;
  starterCode: { [language: string]: string };
  testCases: { input: string; expectedOutput: string; isHidden?: boolean }[];
  hints?: string[];
  xpReward: number;
  timeLimit: number;
  timesAttempted: number;
  timesSolved: number;
  isSolved?: boolean;
  successRate?: number;
}

export interface CodingSubmission {
  id: string;
  code: string;
  language: string;
  status: string;
  testResults?: { testCase: number; passed: boolean; input: string; expectedOutput?: string }[];
  passedTests: number;
  totalTests: number;
  runtime?: number;
  memory?: number;
  xpEarned: number;
  submittedAt: string;
}

export interface WordleGame {
  id: string;
  status: 'playing' | 'won' | 'lost';
  guesses: {
    guess: string;
    result: { letter: string; status: 'correct' | 'present' | 'absent' }[];
  }[];
  attempts: number;
  maxAttempts: number;
  xpEarned: number;
  startedAt: string;
  completedAt?: string;
  word?: string;
}

export interface QuizBattle {
  id: string;
  player1: { id: string; name: string; username: string; profileImage: string | null };
  player2?: { id: string; name: string; username: string; profileImage: string | null };
  category?: QuestionCategory;
  difficulty?: GameDifficulty;
  status: 'waiting' | 'in_progress' | 'completed' | 'cancelled';
  player1Score: number;
  player2Score: number;
  winnerId?: string;
  startedAt?: string;
  completedAt?: string;
  createdAt: string;
}

export interface TypingText {
  id: string;
  content: string;
  title?: string;
  category: string;
  difficulty: GameDifficulty;
  wordCount: number;
  charCount: number;
  xpReward: number;
}

export interface TypingRace {
  id: string;
  textId: string;
  wpm: number;
  accuracy: number;
  rawWpm: number;
  timeSpent: number;
  mistakes: number;
  charsTyped: number;
  status: 'playing' | 'completed' | 'abandoned';
  xpEarned: number;
  startedAt: string;
  completedAt?: string;
  text?: { title?: string; category: string; difficulty: GameDifficulty };
}

export type ArcadeGameType = 'memory_match' | 'snake_duel' | 'paddle_volley' | 'maze_race_3d';

export type ArcadeRoomStatus = 'waiting' | 'in_progress' | 'completed' | 'abandoned';

export type ArcadeRole = 'host' | 'guest' | null;

export interface ArcadePlayer {
  id: string;
  name: string;
  username: string;
  profileImage: string | null;
  headline?: string | null;
  college?: string | null;
}

export interface ArcadeCatalogGame {
  type: ArcadeGameType;
  title: string;
  description: string;
  minPlayers: number;
  maxPlayers: number;
  xpLabel: string;
  mode: 'turn_based' | 'arcade' | '3d';
}

export interface ArcadeResult {
  id: string;
  roomId: string;
  gameType: ArcadeGameType;
  userId: string;
  opponentId: string | null;
  result: 'win' | 'loss' | 'draw';
  score: number;
  opponentScore: number;
  xpEarned: number;
  coinsEarned: number;
  durationSeconds: number;
  createdAt: string;
  opponent?: ArcadePlayer | null;
}

export interface ArcadeRoom {
  id: string;
  gameType: ArcadeGameType;
  inviteCode: string;
  status: ArcadeRoomStatus;
  seed: number;
  hostReady: boolean;
  guestReady: boolean;
  hostScore: number;
  guestScore: number;
  winnerId: string | null;
  metadata: Record<string, unknown> | null;
  createdAt: string;
  updatedAt: string;
  startedAt: string | null;
  completedAt: string | null;
  expiresAt: string | null;
  currentUserRole: ArcadeRole;
  canJoin: boolean;
  playerCount: number;
  players: {
    host: ArcadePlayer | null;
    guest: ArcadePlayer | null;
    winner: ArcadePlayer | null;
  };
  results: ArcadeResult[];
}

export interface ArcadeLeaderboardEntry {
  rank: number;
  user: ArcadePlayer;
  xp: number;
  score: number;
  gamesPlayed: number;
}
