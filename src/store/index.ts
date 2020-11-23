import { combineReducers, createStore } from "redux";
import sudokuReducer from './sudoku/reducers';

const rootReducer = combineReducers({
  sudoku: sudokuReducer
})

const store = createStore(rootReducer);
export default store;

// How to export store type ?!  Not like this...
export type RootState = ReturnType<typeof rootReducer>;