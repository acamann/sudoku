import React from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from '../../store';
import Home from './../Home';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <View style={styles.appContainer}>
        <Home />
      </View>
    </Provider>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

AppRegistry.registerComponent('App', () => App);

export default App;
