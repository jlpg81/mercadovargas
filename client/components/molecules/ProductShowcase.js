import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import colors from "../../helpers/colors";
import AddButton from "../atoms/AddButton";

function ProductShowcase(props) {
  return (
    <View style={styles.productContainer}>
      <View style={styles.productImageContainer}>
        <Image
          style={styles.productImage}
          source={require("../../assets/milk2.jpg")}
        />
      </View>
      <View style={styles.productTextContainer}>
        <Text style={styles.productTitle}>Great Value Whole Milk</Text>
        <Text style={styles.productFormat}>2$ per 1 Liter</Text>
        {/* <Text style={styles.productPrice}>2$</Text> */}
        <AddButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: "white",
    width: "50%",
    marginTop: 5,
    marginBottom: 5,
    alignItems: "center",
    padding: 10,
  },
  productImageContainer: {
    height: 100,
    width: 100,
    backgroundColor: "blue",
  },
  productImage: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
    backgroundColor: "white",
  },
  productTextContainer: {
    width: "100%",
  },
  productTitle: {
    textAlign: "center",
    color: colors.green100,
  },
  productFormat: {
    textAlign: "center",
    color: "black",
  },
  productPrice: {
    textAlign: "center",
    color: "black",
  },
});

export default ProductShowcase;
