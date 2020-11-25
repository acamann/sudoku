import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, ScrollView, StyleSheet, View } from "react-native";

import { Store } from "../../store";
import { Puzzle } from "../../store/types";
import { getPuzzle } from "../../store/sudoku";

import Header from "../../components/Layout/Header";
import Sudoku from "../../components/Sudoku";
import Footer from "../../components/Layout/Footer";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const puzzle: Puzzle = useSelector((store: Store) => store.sudoku.puzzle);

  const handleGetPuzzle = (): void => { dispatch(getPuzzle()); }
  const handleCheckPuzzle = (): void => { return; }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
    >
      <Header />
      <View style={styles.main}>
        <Button title="Get Puzzle" onPress={handleGetPuzzle} />
        <Sudoku puzzle={puzzle} />
        <Button title="Check Puzzle" onPress={handleCheckPuzzle} />
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "whitesmoke",
    height: "100vh",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column"
  },
  main: {
    padding: 16,
  },
});

export default Home;