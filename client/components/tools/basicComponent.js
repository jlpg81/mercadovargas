import React from "react";
import { StyleSheet, Text, View } from "react-native";

function BasicComponent(props) {
  return (
    <View style={styles.basicComponentContainer}>
      <Text>Hello from BasicComponent</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  basicComponentContainer: { backgroundColor: "dodgerblue" },
});

export default BasicComponent;
