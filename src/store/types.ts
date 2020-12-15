// Suoku MODELS
export type Puzzle = {
  board: number[][];
  solution: number[][];
}

export const FETCH_PUZZLE = 'sudoku/fetchPuzzle';
export const PUZZLE_FETCHED = 'sudoku/puzzleFetched';

interface FetchSudokuAction { type: typeof FETCH_PUZZLE; difficulty: "easy" | "medium" | "hard"; }
interface SudokuFetchedAction { type: typeof PUZZLE_FETCHED; puzzle: Puzzle; }

export type SudokuActionTypes = FetchSudokuAction | SudokuFetchedAction;