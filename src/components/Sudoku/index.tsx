import React, { useEffect } from 'react';
import { View, StyleSheet } from "react-native";
import { Puzzle } from '../../store/types';
import useArrowFocus from '../useArrowFocus';
import SudokuCell from './SudokuCell';

export interface SudokuProps {
  puzzle: Puzzle;
}

const Sudoku: React.FC<SudokuProps> = (props: SudokuProps) => {
  const puzzle = props.puzzle
  
  const board = puzzle.board;
  const solution = puzzle.solution;

  // const [currentFocusRow, setCurrentFocusRow, currentFocusCol, setCurrentFocusCol] = useArrowFocus(8, 8);

  // useEffect((): void => {
  //   console.log(currentFocusRow);
  //   console.log(currentFocusCol);
  // }, [currentFocusCol, currentFocusRow]);

  return (
    <View style={styles.grid}>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((value, colIndex) => (
            <View
              data-row={rowIndex}
              data-col={colIndex}
              key={`${rowIndex}-${colIndex}`}
              style={[styles.cell, styleCell(rowIndex, colIndex)]}
            >
              <SudokuCell
                initial={value}
                correct={solution[rowIndex][colIndex]}
              />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

const styleCell = (row: number, column: number): {} => {
  return {
    borderBottom: row === 2 || row === 5 ? 'solid 1px black' : 'solid 1px lightgray',
    borderRight: column === 2 || column === 5 ? 'solid 1px black' : 'solid 1px lightgray',
  }
} 

const styles = StyleSheet.create({
  grid: {
    display: "flex",
    flexDirection: "column",
    padding: 16,
    flex: 1
  },
  row: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  cell: {
    flex: 1,
    border: "solid 1px lightgray",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default Sudoku;