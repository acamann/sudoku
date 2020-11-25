import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Puzzle } from '../../store/sudoku/types';
import SudokuEditCell from './SudokuEditCell';

export interface SudokuProps {
  puzzle: Puzzle;
}

const Sudoku: React.FC<SudokuProps> = (props: SudokuProps) => {
  const puzzle = props.puzzle
  
  const board = puzzle.board ?? Array<number[]>(9).fill(Array(9).fill(0));

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
              {value > 0 ? <Text style={styles.value}>{value}</Text> : <SudokuEditCell /> }
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
    height: "100vh",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    maxHeight: "50px",
    flexGrow: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  cell: {
    flexGrow: 1,
    maxWidth: "50px",
    padding: "4px",
    border: "solid 1px lightgray",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  value: {
    fontSize: 16,
  }
});

export default Sudoku;