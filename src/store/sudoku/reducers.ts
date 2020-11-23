import {
  Puzzle,
  SudokuActionTypes,
  FETCH_PUZZLE,
  UPDATE_CELL
} from './types'

interface Store {
  puzzle: Puzzle;
}

const initialState: Store = {
  puzzle: { squares: [] },
} 

const sudokuReducer = (state = initialState, action: SudokuActionTypes) => {
  switch (action.type) {
    case FETCH_PUZZLE:
      return { ...state, puzzle: { squares: [{x: 4, y: 2, value: 3}]}};
    case UPDATE_CELL:
      return { ...state, puzzle: undefined };
    default:
      return state; 
  }
}

export default sudokuReducer

// //STORE
// const initialState: SudokuState = {
//   puzzle: { squares: [{x: 1, y: 2, value: 5}] },
// }

// //REDUCER
// export const sudokuReducer = (
//   state = initialState,
//   action: SudokuActionTypes
// ): SudokuState => {
//   console.log("ENTERED REDUCER");
//   console.log(state);
//   console.log(action);
//   switch (action.type) {
//     case FETCH_PUZZLE:
//       const newSquares = [...state.puzzle.squares];
//       console.log(newSquares);
//       newSquares.push({x: 4, y: 2, value: 3});
//       return {
//         ...state,
//         puzzle: { ...state.puzzle, squares: newSquares }
//       }
//     case UPDATE_CELL:
//       return {
//         ...state,
//         puzzle: { squares: state.puzzle.squares.map(square => {
//           if (square.x === action.payload.x && square.y === action.payload.y) {
//             return action.payload;
//           } else {
//             return square;
//           }
//         })}
//       }
//     default:
//       return { ...state };
//   }
// }