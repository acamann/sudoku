import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ScrollView, StyleSheet, View } from "react-native";
import Header from "../../components/Layout/Header";
import Sudoku from "../../components/Sudoku";
import { getPuzzle } from "../../store/sudoku/actions";
import { Store } from "../../store";
import { Puzzle } from "../../store/sudoku/types";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const puzzle: Puzzle = useSelector((store: Store) => store.sudoku.puzzle);

  const handlePress = () => {
    dispatch(getPuzzle());
  }

  return (
    <ScrollView
      style={styles.container}
    >
      <Header />
      <View style={styles.main}>
        <Button title="Get Puzzle" onPress={handlePress} />
        <Sudoku puzzle={puzzle} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "whitesmoke",
  },
  centering: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    height: '100vh',
  },
  main: {
    padding: 16,
  },
});

export default Home;