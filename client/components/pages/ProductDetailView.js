import React from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ProductDetailDescription from "../molecules/ProductDetailDescription";
import ProductDetailTitle from "../molecules/ProductDetailTitle";
import ProductImageRoller from "../molecules/ProductImageRoller";

function ProductDetailView(props) {
  return (
    <View style={styles.ProductDetailView}>
      <ScrollView>
        <ProductImageRoller />
        <ProductDetailTitle />
        <ProductDetailDescription />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ProductDetailView: { backgroundColor: "white" },
});

export default ProductDetailView;
