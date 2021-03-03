import React from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../helpers/colors";
import MenuBarItem from "./MenuBarItem";

function MenuBar({ menuHandler }) {
  return (
    <View style={styles.menuBar}>
      <MenuBarItem
        menuHandler={menuHandler}
        icon={["Entypo", "home", 20, "white"]}
        title="Home"
      />
      <MenuBarItem
        menuHandler={menuHandler}
        icon={["AntDesign", "search1", 20, "white"]}
        title="Search"
      />
      <MenuBarItem
        menuHandler={menuHandler}
        icon={["Feather", "shopping-cart", 20, "white"]}
        title="Cart"
      />
      <MenuBarItem
        menuHandler={menuHandler}
        icon={["Ionicons", "person", 20, "white"]}
        title="Profile"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  menuBar: {
    backgroundColor: colors.green100,
    height: "10%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default MenuBar;
