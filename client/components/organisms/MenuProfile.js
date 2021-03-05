import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MenuItem from "../atoms/MenuItem";

function MenuProfile(props) {
  return (
    <View style={styles.menuProfileContainer}>
      <MenuItem text="One" />
      <MenuItem text="Two" />
      <MenuItem text="Three" />
      <MenuItem text="Four" />
      <MenuItem text="Five" />
    </View>
  );
}

const styles = StyleSheet.create({
  // menuProfileContainer: { backgroundColor: "dodgerblue" },
});

export default MenuProfile;
