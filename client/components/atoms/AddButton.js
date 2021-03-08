import React, { useState } from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";
import colors from "../../helpers/colors";

function AddButton(props) {
  let [number, setNumber] = useState(0);

  if (number > 0) {
    return (
      <View style={styles.button2}>
        <TouchableOpacity
          style={styles.addButton2}
          onPress={() => {
            setNumber(number - 1);
          }}
        >
          <Text style={styles.addWord}>-</Text>
        </TouchableOpacity>
        <Text>{number}</Text>
        <TouchableOpacity
          style={styles.addButton2}
          onPress={() => {
            setNumber(number + 1);
          }}
        >
          <Text style={styles.addWord}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          setNumber(number + 1);
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
    fontSize: 20,
  },
  button2: {
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  addButton2: {
    margin: 5,
    color: "white",
    borderRadius: 5,
    width: "30%",
    backgroundColor: "orange",
    height: 30,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddButton;
