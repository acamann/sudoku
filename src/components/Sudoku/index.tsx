import React from 'react';

import styles from './sudoku.module.scss';

export interface SudokuProps {
  puzzle?: number[][];
}

const Sudoku: React.FC<SudokuProps> = (props: SudokuProps) => {
  const puzzle = props.puzzle ?? Array<number[]>(9).fill(Array(9).fill(0));
  
  return (
    <div className={styles.grid}>
      {puzzle.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((value, colIndex) => (
            <div
              data-row={rowIndex}
              data-col={colIndex}
              key={`${rowIndex}-${colIndex}`}
              className={styles.cell}
            >
              <div>{value}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Sudoku;