import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginView from "../components/pages/LoginView";
import ProfileView from "../components/pages/ProfileView";
import CreateStoreView from "../components/pages/CreateStoreView";
import PersonalInfoView from "../components/pages/ProfilePages/PersonalInfoView";
import OrderHistoryView from "../components/pages/ProfilePages/OrderHistoryView";
import ChangePasswordView from "../components/pages/ProfilePages/ChangePasswordView";
import ManageStoreView from "../components/pages/ProfilePages/ManageStoreView";

const Menu = createStackNavigator();

function Profile(props) {
  return (
    <Menu.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Menu.Screen name="LoginView" component={LoginView} />
      <Menu.Screen name="ProfileView" component={ProfileView} />
      <Menu.Screen name="PersonalInfoView" component={PersonalInfoView} />
      <Menu.Screen name="ChangePasswordView" component={ChangePasswordView} />
      <Menu.Screen name="OrderHistoryView" component={OrderHistoryView} />
      {/* Stores */}
      <Menu.Screen name="CreateStoreView" component={CreateStoreView} />
      <Menu.Screen name="ManageStoreView" component={ManageStoreView} />
    </Menu.Navigator>
  );
}

export default Profile;
