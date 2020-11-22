import React from 'react';
import { View, Text, StyleSheet } from "react-native";

export interface SudokuProps {
  puzzle?: number[][];
}

const Sudoku: React.FC<SudokuProps> = (props: SudokuProps) => {
  const puzzle = props.puzzle ?? Array<number[]>(9).fill(Array(9).fill(0));
  
  return (
    <View style={styles.grid}>
      {puzzle.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((value, colIndex) => (
            <View
              data-row={rowIndex}
              data-col={colIndex}
              key={`${rowIndex}-${colIndex}`}
              style={styles.cell}
            >
              <Text style={styles.value}>{value}</Text>
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