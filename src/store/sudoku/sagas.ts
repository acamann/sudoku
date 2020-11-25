import { put, takeLatest, all } from 'redux-saga/effects';
import { FETCH_PUZZLE, PUZZLE_FETCHED } from './types';

function* fetchPuzzleSaga({ payload }: ReturnType<any>) {
  const difficulty = payload.difficulty;
  const json = yield fetch(`https://sugoku2.herokuapp.com/board?difficulty=${difficulty}`)
    .then(resp => resp.json());
  yield put({ type: PUZZLE_FETCHED, puzzle: json });
}

function* actionWatcher() {
  yield takeLatest(FETCH_PUZZLE, fetchPuzzleSaga)
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}