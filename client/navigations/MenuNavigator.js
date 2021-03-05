import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import StoreProductsView from "../components/pages/StoreProductsView";
import LoginView from "../components/pages/LoginView";
import colors from "../helpers/colors";
import iconHelper from "../helpers/iconHelper";
import productShowcase from "../components/molecules/ProductShowcase";
import ProductDisplayList from "../components/organisms/ProductDisplayList";
import ProductImageRoller from "../components/molecules/ProductImageRoller";
import ProductDetailTitle from "../components/molecules/ProductDetailTitle";
import ProductDetailDescription from "../components/molecules/ProductDetailDescription";
import ProductDetailView from "../components/pages/ProductDetailView";
import StoreItem from "../components/molecules/StoreItem";
import StoreItemList from "../components/organisms/StoreItemList";
import MenuItem from "../components/atoms/MenuItem";
import MenuProfile from "../components/organisms/MenuProfile";
import CircularLogoHeader from "../components/molecules/CircularLogoHeader";
import CircularLogoHeader2 from "../components/molecules/CircularLogoHeader2";
import ProfileView from "../components/pages/ProfileView";

const Menu = createBottomTabNavigator();

function MenuNavigator(props) {
  return (
    <Menu.Navigator
      tabBarOptions={{
        activeBackgroundColor: colors.green200,
        inactiveBackgroundColor: colors.green100,
        activeTintColor: "white",
        inactiveTintColor: "white",
      }}
    >
      <Menu.Screen
        name="Home"
        component={ProfileView}
        options={{
          tabBarIcon: () => iconHelper("Entypo", "home", 20, "white"),
        }}
      />
      <Menu.Screen
        name="Search"
        component={MenuProfile}
        options={{
          tabBarIcon: () => iconHelper("AntDesign", "search1", 20, "white"),
        }}
      />
      <Menu.Screen
        name="Cart"
        component={productShowcase}
        options={{
          tabBarIcon: () => iconHelper("Feather", "shopping-cart", 20, "white"),
        }}
      />
      <Menu.Screen
        name="Profile"
        component={LoginView}
        options={{
          tabBarIcon: () => iconHelper("Ionicons", "person", 20, "white"),
        }}
      />
    </Menu.Navigator>
  );
}

export default MenuNavigator;
