import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CircularLogoHeader2 from "../../molecules/CircularLogoHeader2";

function ChangePasswordView(props) {
  return (
    <View style={styles.changePasswordViewContainer}>
      <CircularLogoHeader2 />
      <View style={styles.profileContent}>
        <Text>ChangePasswordView</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  changePasswordViewContainer: { backgroundColor: "white", flex: 1 },
  profileContent: {
    transform: [{ translateY: -180 }],
    marginLeft: 30,
  },
});

export default ChangePasswordView;
