import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CitySelector from "../atoms/CitySelector";
import StoreItemHalfList from "../organisms/StoreItemHalfList";
import StoreItemList from "../organisms/StoreItemList";
import { gql, useQuery } from "@apollo/client";

const STORE_QUERY = gql`
  {
    stores {
      id
      storeTitle
      state
      city
      rating
      logo
      votes
    }
  }
`;

function MainPage(props) {
  const { loading, error, data } = useQuery(STORE_QUERY);

  if (error) {
    console.log("query error", error);
  }
  return (
    <View style={styles.mainPageContainer}>
      <ScrollView>
        <CitySelector />
        <View style={styles.mainPageBannerContainer}>
          <Image
            style={styles.mainPageBanner}
            source={require("../../assets/dummy/mainBanner.jpg")}
          />
        </View>
        {/* <Text style={styles.mainPageTitle}>Current Promotions</Text>
        <StoreItemHalfList /> */}
        <Text style={styles.mainPageTitle}>Popular now!</Text>
        <StoreItemHalfList stores={data} />
        <Text style={styles.mainPageTitle}>Near you</Text>
        <StoreItemList stores={data} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainPageContainer: {
    backgroundColor: "white",
    flex: 1,
  },
  mainPageBannerContainer: {
    width: "100%",
    marginBottom: 10,
  },
  mainPageBanner: {
    height: 150,
    width: "80%",
    alignSelf: "center",
    resizeMode: "contain",
  },
  mainPageTitle: { marginLeft: 30, fontSize: 20 },
});

export default MainPage;
