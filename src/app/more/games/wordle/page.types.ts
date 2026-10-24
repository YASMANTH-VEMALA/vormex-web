export type LetterStatus = 'correct' | 'present' | 'absent' | 'empty' | 'pending';

export type GameState = 'loading' | 'playing' | 'won' | 'lost' | 'error' | 'already-played';

export interface GuessResult {
  guess: string;
  result: LetterStatus[];
}
