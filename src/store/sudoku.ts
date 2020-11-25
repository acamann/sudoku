import { put, takeLatest } from 'redux-saga/effects';
import {
  Puzzle,
  FETCH_PUZZLE,
  PUZZLE_FETCHED,
  SudokuActionTypes,
} from './types'

//STORE
interface SudokuStore {
  puzzle: Puzzle;
  difficulty?: string;
  loading: boolean;
}

const initialState: SudokuStore = {
  puzzle: { board: [] },
  loading: false,
}

//ACTIONS
export const getPuzzle = (difficulty: "easy" | "medium" | "hard" = "medium") => ({
  type: FETCH_PUZZLE,
  payload: { difficulty },
});

//REDUCERS
export const sudokuReducer = (state = initialState, action: SudokuActionTypes): SudokuStore => {
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

//SAGAS
function* fetchPuzzleSaga({ payload }: ReturnType<any>) {
  const difficulty = payload.difficulty;
  const json = yield fetch(`https://sugoku2.herokuapp.com/board?difficulty=${difficulty}`)
    .then(resp => resp.json());
  yield put({ type: PUZZLE_FETCHED, puzzle: json });
}

export function* sudokuActionWatcher() {
  yield takeLatest(FETCH_PUZZLE, fetchPuzzleSaga)
}