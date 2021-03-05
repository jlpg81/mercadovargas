import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Screen from "./components/tools/Screen";
import MenuNavigator from "./navigations/MenuNavigator";

export default function App() {
  return (
    <Screen>
      <NavigationContainer>
        <MenuNavigator />
      </NavigationContainer>
    </Screen>
  );
}
