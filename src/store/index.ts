import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects';
import { sudokuReducer, sudokuActionWatcher } from './sudoku';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  sudoku: sudokuReducer,
})

function* rootSaga() {
  yield all([
    sudokuActionWatcher(),
  ]);
}

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export type Store = ReturnType<typeof rootReducer>;
export default store;