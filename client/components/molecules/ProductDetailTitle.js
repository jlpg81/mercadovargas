import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../../helpers/colors";
import AddButton from "../atoms/AddButton";

function ProductDetailTitle(props) {
  return (
    <View style={styles.productDetailTitleContainer}>
      <Text style={styles.productDetailTitle}>Milk</Text>
      <Text style={styles.productDetailPrice}>2$ per 1 Liter</Text>
      <AddButton />
    </View>
  );
}

const styles = StyleSheet.create({
  productDetailTitleContainer: {
    justifyContent: "center",
    // backgroundColor: "dodgerblue",
    textAlign: "center",
  },
  productDetailTitle: { color: colors.green100, textAlign: "center" },
  productDetailPrice: { color: "black", textAlign: "center" },
});

export default ProductDetailTitle;
