import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import ProfileNavigator from "../navigations/ProfileNavigator";

function Profile(props) {
  return (
    <View>
      <NavigationContainer>
        <ProfileNavigator />
      </NavigationContainer>
    </View>
  );
}

export default Profile;
