import React from "react";
import { Image, Text, View, StyleSheet, TextInput } from "react-native";
import colors from "../../helpers/colors";
import iconHelper from "../../helpers/iconHelper";
import StoreProductsView from "../StoreProductsView";

const dummyStores = {
  id: 1,
  storeTitle: "Central Madeirense",
  logo: "cm.png",
};

const dummyProducts = [
  { id: 1, title: "Naranjas", format: "1 Kilo", price: "2.00", sold: 35 },
  { id: 1, title: "Manzanas", format: "1 Kilo", price: "2.30", sold: 15 },
  { id: 1, title: "Carne de res", format: "1 Kilo", price: "10.00", sold: 8 },
  { id: 1, title: "Agua", format: "1 Litro", price: "0.50", sold: 124 },
];

function StoreView(props) {
  return (
    <View>
      <View style={styles.superMarketTopContainer}>
        <Image
          style={styles.superMarketLogo}
          source={require("../../assets/cm.png")}
        />
        <TextInput style={styles.superMarketSearchInput}></TextInput>
        {iconHelper("AntDesign", "search1", 20, "green")}
      </View>
      <StoreProductsView />
    </View>
  );
}

const styles = StyleSheet.create({
  superMarketLogo: {
    width: 100,
    height: 100,
    marginLeft: 10,
    resizeMode: "contain",
  },
  superMarketTopContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "green",
    borderBottomWidth: 2,
  },
  superMarketSearchInput: {
    borderColor: colors.lightgray,
    borderBottomWidth: 1,
    height: 20,
    marginLeft: 10,
    marginRight: 10,
    width: "50%",
  },
});

export default StoreView;
