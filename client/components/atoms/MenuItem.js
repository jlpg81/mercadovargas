import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function MenuItem(props) {
  return (
    <View style={styles.menuItemContainer}>
      <TouchableOpacity>
        <Text>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menuItemContainer: {
    // backgroundColor: "dodgerblue",
    width: "80%",
    alignSelf: "center",
    color: "black",
    margin: 10,
  },
});

export default MenuItem;
