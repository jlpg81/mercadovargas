import React from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";
import colors from "../../helpers/colors";

function AddButton(props) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          console.log("adding item to cart...");
        }}
      >
        <Text style={styles.addWord}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    width: "100%",
  },
  addButton: {
    margin: 5,
    color: "white",
    borderRadius: 5,
    width: "70%",
    backgroundColor: "orange",
    height: 30,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  addWord: {
    color: "white",
  },
});

export default AddButton;
