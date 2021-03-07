import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CircularLogoHeader2 from "../../molecules/CircularLogoHeader2";

function ManageStoreView(props) {
  return (
    <View style={styles.manageStoreViewContainer}>
      <CircularLogoHeader2 />
      <View style={styles.profileContent}>
        <Text>ManageStoreView</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  manageStoreViewContainer: { backgroundColor: "white", flex: 1 },
  profileContent: {
    transform: [{ translateY: -180 }],
    marginLeft: 30,
  },
});

export default ManageStoreView;
