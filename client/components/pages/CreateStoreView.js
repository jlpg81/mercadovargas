import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CircularLogoHeader2 from "../molecules/CircularLogoHeader2";

function CreateStoreView(props) {
  return (
    <View style={styles.createStoreContainer}>
      <CircularLogoHeader2 />
      <View style={styles.profileContent}>
        <Text>To create a store, contact us at: market@vargas.io</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  createStoreContainer: { backgroundColor: "white", flex: 1 },
  profileContent: {
    transform: [{ translateY: -180 }],
    marginLeft: 30,
  },
});

export default CreateStoreView;
