import React from 'react';

import { render, screen } from '@testing-library/react';
import Header from '..';

test('Header renders title', () => {
  render(<Header />);
  const logoElement = screen.getByText(/Sudoku/i);
  expect(logoElement).toBeInTheDocument();
});