import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import colors from "../../helpers/colors";
import AddButton from "../atoms/AddButton";

function ProductShowcase(props) {
  return (
    <View style={styles.productContainer}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          console.log("going to store...");
        }}
      >
        <View style={styles.productImageContainer}>
          <Image
            style={styles.productImage}
            source={require("../../assets/dummy/brand.jpg")}
          />
        </View>
        <View style={styles.productTextContainer}>
          <Text style={styles.productFormat}>Makro Valencia</Text>
          <Text style={styles.productFormat}>Valencia, Carabobo</Text>
          <Text style={styles.productFormat}>⭐ 4.3 (506)</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    // backgroundColor: "red",
    // width: "24%",
    marginTop: 5,
    marginBottom: 5,
    alignItems: "center",
    padding: 10,
    height: 170,
  },
  touchable: { alignItems: "center" },
  productImageContainer: {
    height: 100,
    width: 100,
    // backgroundColor: "blue",
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
