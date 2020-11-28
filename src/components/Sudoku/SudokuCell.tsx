import React, { useState } from 'react';
import { Text, TextInput } from "react-native";

interface SudokuCellProps {
  initial: number;
  correct: number;
}

const SudokuCell: React.FC<SudokuCellProps> = (props: SudokuCellProps) => {
  const initial = props.initial;
  const correct = props.correct;

  const [current, setCurrent] = useState<number>();
  
  const isValid = (text: string): boolean => {
    const num = +text
    return (!isNaN(num) && num > 0 && num < 10);
  }

  if (initial > 0) {
    return (
      <Text style={styles.value}>{initial}</Text>
    )
  } else {
    return (
      <TextInput
        style={{ flex: 1, textAlign: "center", color: !current ? "black" : correct === current ? "green" : "red" }}
        selectTextOnFocus
        onChangeText={text => isValid(text.slice(-1)) ? setCurrent(+text.slice(-1)) : setCurrent(undefined) }
        value={current ? current.toString() : ""}
      />
    )
  }
}

const styles = {
  value: {
    fontSize: 16,
  }
}

export default SudokuCell;

