import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import sudokuReducer from './sudoku/store';
import rootSaga from './sudoku/sagas';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  sudoku: sudokuReducer,
})
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export type Store = ReturnType<typeof rootReducer>;
export default store;