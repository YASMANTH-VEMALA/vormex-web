export type GameState = 'loading' | 'ready' | 'playing' | 'completed' | 'error';

export interface TypingStats {
  wpm: number;
  accuracy: number;
  correctChars: number;
  totalChars: number;
  errors: number;
  time: number;
}
