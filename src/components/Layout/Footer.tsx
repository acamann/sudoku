import React from 'react';
import { View, StyleSheet } from 'react-native';

const Footer: React.FC = () => {
  return (
    <View style={styles.footer}>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#008877",
    boxShadow: "0 1px 0 rgba(0,0,0,.2)",
    height: 50,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    lineHeight: 50,
    paddingLeft: 20,
    textTransform: "capitalize",
  }
})

export default Footer;