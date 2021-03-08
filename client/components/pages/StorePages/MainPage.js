import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CitySelector from "../../atoms/CitySelector";
import StoreItemHalfList from "../../organisms/StoreItemHalfList";
import StoreItemList from "../../organisms/StoreItemList";
import { gql, useQuery } from "@apollo/client";
import MainPageContent from "./MainPageContent";
// import ProfileNavigator from "../../../navigations/ProfileNavigator";
import MainPageNavigator from "../../../navigations/MainPageNavigator";

function MainPage(props) {
  return (
    <View style={styles.mainPageContainer}>
      {/* <MainPageContent /> */}
      <MainPageNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  mainPageContainer: {
    backgroundColor: "white",
    flex: 1,
  },
});

export default MainPage;
