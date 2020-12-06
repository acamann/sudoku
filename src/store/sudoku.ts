import { put, takeLatest } from 'redux-saga/effects';
import { encodeParams } from '../utils/common';
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
  puzzle: {
    board: [], //Array<number[]>(9).fill(Array(9).fill(0)),
    solution: [], //Array<number[]>(9).fill(Array(9).fill(0)),
  },
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

  const puzzleJson = yield fetch(`https://sugoku2.herokuapp.com/board?difficulty=${difficulty}`)
    .then(resp => resp.json())
    .catch(console.warn);

  const solution = yield fetch('https://sugoku2.herokuapp.com/solve', {
    method: 'POST',
    body: encodeParams(puzzleJson),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  })
    .then(response => response.json())
    .catch(console.warn);

  const puzzle: Puzzle = { board: puzzleJson.board, solution: solution.solution };
  console.log(puzzle);
  yield put({ type: PUZZLE_FETCHED, puzzle: puzzle });
}

export function* sudokuActionWatcher() {
  yield takeLatest(FETCH_PUZZLE, fetchPuzzleSaga)
}