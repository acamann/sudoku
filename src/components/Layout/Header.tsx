import React from 'react';
import { View, Text, StyleSheet } from "react-native";

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>Sudoku</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#008877",
    boxShadow: "0 1px 0 rgba(0,0,0,.2)",
    height: 50,
  },
  logo: {
    color: "#fff",
    fontSize: 20,
    lineHeight: 50,
    paddingLeft: 20,
    textTransform: "capitalize",
  }
})

export default Header;