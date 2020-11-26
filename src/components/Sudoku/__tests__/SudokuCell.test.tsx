import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SudokuCell from '../SudokuCell';

const setup = (initial: number, correct: number) => {
  render(<SudokuCell initial={initial} correct={correct} />);
  const valueElement = initial > 0 ? screen.getByText(initial) : screen.getByRole('textbox');
  return {
    valueElement,
  }
}

test('Screen debug default', () => {
  render(<SudokuCell initial={0} correct={4} />);
  screen.debug();
})

test('Sudoku Cell should render initial value as text in div if > 0', () => {
  const { valueElement } = setup(5, 5);
  expect(valueElement).toBeInTheDocument();
});

test('Sudoku Cell should renders empty input if initial value = 0', () => {
  const { valueElement } = setup(0, 5);
  expect(valueElement).toBeInTheDocument();
  //expect(input.value).toBe('');
});

test('Sudoku Cell should allow input of valid value', () => {
  const { valueElement } = setup(0, 5);
  userEvent.type(valueElement, '3');
  //const inputElement: HTMLInputElement = valueElement;
  //expect(inputElement.value).toBe('3');
});