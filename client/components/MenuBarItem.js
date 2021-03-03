import React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import iconHelper from "../helpers/iconHelper";

import colors from "../helpers/colors";

function MenuBarItem(props) {
  const menu = props.menuToOpen;
  return (
    <TouchableHighlight
      style={styles.menuBarItem}
      onPress={() => {
        // props.menuHandler(props.title);
        props.menuHandler(menu);
        // props.menuHandler(
        //   "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem"
        // );
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
