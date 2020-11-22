import React from 'react';

import styles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <header>
      <a href="/" className={styles.logo}>Sudoku</a>
    </header>
  );
}

export default Header;