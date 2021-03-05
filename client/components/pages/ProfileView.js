import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CircularLogoHeader2 from "../molecules/CircularLogoHeader2";
import MenuProfile from "../organisms/MenuProfile";
import LoginView from "./LoginView";

function ProfileView(props) {
  return (
    <View>
      <CircularLogoHeader2 style={styles.header} />
      <View style={styles.profileMenu}>
        <MenuProfile />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "dodgerblue",
  },
  profileMenu: {
    // backgroundColor: "green",
    transform: [{ translateY: -180 }],
    // flex: 1,
  },
});

export default ProfileView;
