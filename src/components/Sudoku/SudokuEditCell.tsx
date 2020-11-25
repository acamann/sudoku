import React, { useState } from 'react';
import { TextInput } from "react-native";

const SudokuEditCell: React.FC = () => {
  const [value, setValue] = useState<string>();

  return (
    <TextInput
      onChangeText={text => setValue(text)}
      value={value}
    />
  );
}

export default SudokuEditCell;

