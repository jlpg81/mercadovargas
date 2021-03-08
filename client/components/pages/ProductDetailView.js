import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ProductDetailDescription from "../molecules/ProductDetailDescription";
import ProductDetailTitle from "../molecules/ProductDetailTitle";
import ProductImageRoller from "../molecules/ProductImageRoller";
import { gql, useQuery } from "@apollo/client";

function ProductDetailView(props) {
  const PRODUCT_QUERY = gql`
    {
      product(id: "${props.route.params.productId}") {
        id
        productTitle
        productPrice
        productImage
        productFormat
        productDescription
      }
    }
  `;
  const { loading, error, data } = useQuery(PRODUCT_QUERY);
  if (loading) {
    return <></>;
  }
  if (error) {
    console.log("query error", error);
  }
  return (
    <View style={styles.ProductDetailView}>
      <ScrollView>
        <ProductImageRoller data={data} />
        <ProductDetailTitle data={data} />
        <ProductDetailDescription data={data} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ProductDetailView: { backgroundColor: "white" },
});

export default ProductDetailView;
