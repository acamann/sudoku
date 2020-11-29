import React from 'react';
import { View, StyleSheet } from "react-native";
import { Puzzle } from '../../store/types';
import SudokuCell from './SudokuCell';

export interface SudokuProps {
  puzzle: Puzzle;
}

const Sudoku: React.FC<SudokuProps> = (props: SudokuProps) => {
  const puzzle = props.puzzle
  
  const board = puzzle.board;
  const solution = puzzle.solution;

  return (
    <View style={styles.grid}>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((value, colIndex) => (
            <View
              data-row={rowIndex}
              data-col={colIndex}
              key={`${rowIndex}-${colIndex}`}
              style={styles.cell}
            >
              <SudokuCell initial={value} correct={solution[rowIndex][colIndex]} />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
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