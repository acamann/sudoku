import {
  FETCH_PUZZLE,
  Puzzle,
  PUZZLE_FETCHED,
  SudokuActionTypes,
} from './types'

interface SudokuStore {
  puzzle: Puzzle;
  difficulty?: string;
  loading: boolean;
}

const initialState: SudokuStore = {
  puzzle: { board: [] },
  loading: false,
}

const sudokuReducer = (state = initialState, action: SudokuActionTypes): SudokuStore => {
  switch (action.type) {
    case FETCH_PUZZLE:
      return {
        ...state,
        difficulty: action.difficulty,
        loading: true,
      };
    case PUZZLE_FETCHED:
      return {
        ...state,
        puzzle: action.puzzle,
        loading: false,
      }
    default:
      return state;
   }
};
export default sudokuReducer;