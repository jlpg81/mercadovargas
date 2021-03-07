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
import StoreItemHalf from "../components/molecules/StoreItemHalf";
import StoreItemList from "../components/organisms/StoreItemList";
import StoreItemHalfList from "../components/organisms/StoreItemHalfList";
import MenuItem from "../components/atoms/MenuItem";
import MenuProfile from "../components/organisms/MenuProfile";
import CircularLogoHeader from "../components/molecules/CircularLogoHeader";
import CircularLogoHeader2 from "../components/molecules/CircularLogoHeader2";
import ProfileView from "../components/pages/ProfileView";
import Profile from "./ProfileNavigator";
import MainPage from "../components/pages/MainPage";
import CitySelector from "../components/atoms/CitySelector";

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
        // component={CitySelector}
        component={MainPage}
        options={{
          tabBarIcon: () => iconHelper("Entypo", "home", 20, "white"),
        }}
      />
      <Menu.Screen
        name="Search"
        component={ProductDisplayList}
        options={{
          tabBarIcon: () => iconHelper("AntDesign", "search1", 20, "white"),
        }}
      />
      <Menu.Screen
        name="Cart"
        component={ProductDetailView}
        options={{
          tabBarIcon: () => iconHelper("Feather", "shopping-cart", 20, "white"),
        }}
      />
      <Menu.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => iconHelper("Ionicons", "person", 20, "white"),
        }}
      />
    </Menu.Navigator>
  );
}

export default MenuNavigator;
