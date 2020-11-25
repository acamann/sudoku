// MODELS
// export type Puzzle = {
//   squares: Square[],
// }

// export type Square = {
//   x: number,
//   y: number,
//   value: number,
// }

export type Puzzle = {
  board: number[][];
}

export interface SudokuState {
  puzzle: Puzzle;
}

export const FETCH_PUZZLE = 'FETCH_PUZZLE'
export const PUZZLE_FETCHED = 'PUZZLE_FETCHED'

interface FetchSudokuAction {
  type: typeof FETCH_PUZZLE;
  difficulty: "easy" | "medium" | "hard";
}

interface SudokuFetchedAction {
  type: typeof PUZZLE_FETCHED;
  puzzle: Puzzle;
}

export type SudokuActionTypes = FetchSudokuAction | SudokuFetchedAction