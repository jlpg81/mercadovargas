import React from "react";
import { StyleSheet, View } from "react-native";
import CircularLogoHeader2 from "../molecules/CircularLogoHeader2";
import MenuProfile from "../organisms/MenuProfile";

function ProfileView(props) {
  return (
    <View style={styles.ProfileViewContainer}>
      <CircularLogoHeader2 />
      <View style={styles.profileMenu}>
        <MenuProfile />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ProfileViewContainer: {
    backgroundColor: "white",
    flex: 1,
  },
  profileMenu: {
    transform: [{ translateY: -180 }],
  },
});

export default ProfileView;
