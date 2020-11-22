import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Header from "../../components/Layout/Header";
import Sudoku from "../../components/Sudoku";

const Home: React.FC = () => {
  return (
    <ScrollView
      style={styles.container}
    >
      <Header />
      <Sudoku />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "whitesmoke"
  },
  centering: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    height: '100vh'
  },
});

export default Home;