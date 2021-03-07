import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MenuItem from "../atoms/MenuItem";

function MenuProfile(props) {
  return (
    <View>
      <View style={styles.profileContainer}>
        <Text style={styles.profileTitle}>Personal Menu</Text>
        <MenuItem text="View personal information" goTo="PersonalInfoView" />
        <MenuItem text="Change password" goTo="ChangePasswordView" />
        <MenuItem text="View order history" goTo="OrderHistoryView" />
        <MenuItem text="Log Out" goTo="LoginView" />
      </View>
      <View style={styles.profileContainer}>
        <Text style={styles.profileTitle}>Store Management</Text>
        <MenuItem text="Open a store" goTo="CreateStoreView" />
        <MenuItem text="Manage a store" goTo="ManageStoreView" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: { marginLeft: 30 },
  profileTitle: { margin: 10 },
});

export default MenuProfile;
