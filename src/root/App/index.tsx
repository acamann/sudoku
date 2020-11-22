import React from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import Home from './../Home';

const App: React.FC = () => {
  return (
    <View style={styles.appContainer}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

AppRegistry.registerComponent('App', () => App);

export default App;
