import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../../helpers/colors";
import AddButton from "../atoms/AddButton";

function ProductDetailTitle(props) {
  console.log(`props`, props);
  return (
    <View style={styles.productDetailTitleContainer}>
      <Text style={styles.productDetailTitle}>
        {props.data.product.productTitle}
      </Text>
      <Text style={styles.productDetailPrice}>
        {props.data.product.productPrice}$ per{" "}
        {props.data.product.productFormat}
      </Text>
      <AddButton />
    </View>
  );
}

const styles = StyleSheet.create({
  productDetailTitleContainer: {
    justifyContent: "center",
    textAlign: "center",
  },
  productDetailTitle: { color: colors.green100, textAlign: "center" },
  productDetailPrice: { color: "black", textAlign: "center" },
});

export default ProductDetailTitle;
