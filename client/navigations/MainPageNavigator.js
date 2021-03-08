import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginView from "../components/pages/LoginView";
import ProfileView from "../components/pages/ProfileView";
import CreateStoreView from "../components/pages/CreateStoreView";
import PersonalInfoView from "../components/pages/ProfilePages/PersonalInfoView";
import OrderHistoryView from "../components/pages/ProfilePages/OrderHistoryView";
import ChangePasswordView from "../components/pages/ProfilePages/ChangePasswordView";
import ManageStoreView from "../components/pages/ProfilePages/ManageStoreView";
import MainPageContent from "../components/pages/StorePages/MainPageContent";
import StoreView from "../components/pages/StorePages/StoreView";
import ProductDetailView from "../components/pages/ProductDetailView";

const Menu = createStackNavigator();

function Profile(props) {
  return (
    <Menu.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Menu.Screen name="MainPageContent" component={MainPageContent} />
      <Menu.Screen name="StoreView" component={StoreView} />
      <Menu.Screen name="ProductDetailView" component={ProductDetailView} />
      <Menu.Screen name="LoginView" component={LoginView} />
    </Menu.Navigator>
  );
}

export default Profile;
