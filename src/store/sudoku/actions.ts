import { Square, FETCH_PUZZLE, UPDATE_CELL, SudokuActionTypes } from './types'

// TypeScript infers that this function is returning SendMessageAction
export function fetchPuzzle(difficulty: 0 | 1 | 2 = 1): SudokuActionTypes {
  return {
    type: FETCH_PUZZLE,
    payload: difficulty
  }
}

// TypeScript infers that this function is returning DeleteMessageAction
export function updateCell(data: Square): SudokuActionTypes {
  return {
    type: UPDATE_CELL,
    payload: data
  }
}