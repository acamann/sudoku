// MODELS
export type Puzzle = {
  squares: Square[],
}

export type Square = {
  x: number,
  y: number,
  value: number,
}

export interface SudokuState {
  puzzle: Puzzle;
}

export const FETCH_PUZZLE = 'FETCH_PUZZLE'
export const UPDATE_CELL = 'UPDATE_CELL'

interface FetchSudokuAction {
  type: typeof FETCH_PUZZLE;
  payload: number;
}

interface UpdateCellAction {
  type: typeof UPDATE_CELL;
  payload: Square;
}

export type SudokuActionTypes = FetchSudokuAction | UpdateCellAction