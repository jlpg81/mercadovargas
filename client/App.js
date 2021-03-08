import React from "react";
import { Platform, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createHttpLink,
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri:
    Platform.OS === "android"
      ? "http://192.168.1.215:4000/graphql"
      : "http://127.0.0.1:4000/graphql",
  cache: new InMemoryCache(),
});

import Screen from "./components/tools/Screen";
import MenuNavigator from "./navigations/MenuNavigator";

export default function App() {
  return (
    <Screen>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <MenuNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </Screen>
  );
}
