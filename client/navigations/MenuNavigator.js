import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import colors from "../helpers/colors";
import iconHelper from "../helpers/iconHelper";
import ProductDisplayList from "../components/organisms/ProductDisplayList";
import ProductDetailView from "../components/pages/ProductDetailView";
import Profile from "./ProfileNavigator";
import MainPage from "../components/pages/StorePages/MainPage";
import MainPageContent from "../components/pages/StorePages/MainPageContent";
import StoreView from "../components/pages/StorePages/StoreView";

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
        // component={ProductDisplayList}
        options={{
          tabBarIcon: () => iconHelper("Entypo", "home", 20, "white"),
        }}
      />
      <Menu.Screen
        name="Search"
        component={StoreView}
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
      {/* <Menu.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => iconHelper("Ionicons", "person", 20, "white"),
        }}
      /> */}
    </Menu.Navigator>
  );
}

export default MenuNavigator;
