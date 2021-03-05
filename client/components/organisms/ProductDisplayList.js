import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ProductShowcase from "../molecules/ProductShowcase";

function ProductDisplayList(props) {
  return (
    <ScrollView>
      <View style={styles.productDisplayListContainer}>
        <ProductShowcase />
        <ProductShowcase />
        <ProductShowcase />
        <ProductShowcase />
        <ProductShowcase />
        <ProductShowcase />
        <ProductShowcase />
        <ProductShowcase />
        <ProductShowcase />
        <ProductShowcase />
        <ProductShowcase />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  productDisplayListContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    backgroundColor: "white",
  },
});

export default ProductDisplayList;
