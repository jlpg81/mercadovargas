import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

function ProductImageRoller(props) {
  // console.log(props);
  return (
    <View style={styles.productDetailImageContainer}>
      <Image
        style={styles.productDetailImage}
        source={{ uri: props.data.product.productImage }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  productDetailImage: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
    backgroundColor: "white",
  },
  productDetailImageContainer: {
    height: 250,
    width: "100%",
    backgroundColor: "blue",
    justifyContent: "center",
  },
});

export default ProductImageRoller;
