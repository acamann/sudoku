import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, Button, ScrollView, StyleSheet, View } from "react-native";
import Header from "../../components/Layout/Header";
import Sudoku from "../../components/Sudoku";
import { fetchPuzzle } from "../../store/sudoku/actions";
import { RootState } from "../../store";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const puzzle = useSelector((store: RootState) => store.sudoku.puzzle);

  const handlePress = () => {
    dispatch(fetchPuzzle());
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