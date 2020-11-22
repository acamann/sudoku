import React from "react";

import styles from './app.module.scss';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import Sudoku from "../../components/Sudoku";

function App() {
  return (
    <div className={styles.mainContainer}>
      <Header />

      <div className={styles.container}>
        <Sudoku />
      </div>

      <Footer />
    </div>
  );
}

export default App;
