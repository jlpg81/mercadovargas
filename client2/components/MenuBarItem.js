import React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
// import Fonticon from "../helpers/fontIcons";
import iconHelper from "../helpers/iconHelper";

import colors from "../helpers/colors";

function MenuBarItem(props) {
  return (
    <TouchableHighlight
      style={styles.menuBarItem}
      onPress={() => {
        props.menuHandler(props.title);
      }}
    >
      <View style={styles.menuBarItemContainer}>
        {iconHelper(...props.icon)}
        <Text style={styles.menuBarItemText}>{props.title}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  menuBarItem: {
    width: "25%",
  },
  menuBarItemContainer: {
    // backgroundColor: colors.secondary,
    margin: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  menuBarItemText: {
    color: colors.white,
  },
});

export default MenuBarItem;
