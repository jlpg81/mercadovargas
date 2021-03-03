import { StyleSheet, Platform, StatusBar, SafeAreaView } from "react-native";
import React from "react";

function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Screen;
