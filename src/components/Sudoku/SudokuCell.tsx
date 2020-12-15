import React, { useState } from 'react';
import { Text, TextInput, Dimensions } from "react-native";

interface SudokuCellProps {
  initial: number;
  correct: number;
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const minimumDimension = Math.min(width, height);

const styles = {
  value: {
    fontSize: height / 20,
  }
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
        style={[{
          flex: 1,
          textAlign: "center",
          color: !current ? "black" : correct === current ? "green" : "red",
        }, styles.value]}
        selectTextOnFocus
        keyboardType="numeric"
        caretHidden
        onChangeText={text => isValid(text.slice(-1)) ? setCurrent(+text.slice(-1)) : setCurrent(undefined) }
        value={current ? current.toString() : ""}
      />
    )
  }
}

export default SudokuCell;