import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CircularLogoHeader2 from "../../molecules/CircularLogoHeader2";

function PersonalInfoView(props) {
  return (
    <View style={styles.personalInfoViewContainer}>
      <CircularLogoHeader2 />
      <View style={styles.profileContent}>
        <Text>PersonalInfoView</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  personalInfoViewContainer: { backgroundColor: "white", flex: 1 },
  profileContent: {
    transform: [{ translateY: -180 }],
    marginLeft: 30,
  },
});

export default PersonalInfoView;
