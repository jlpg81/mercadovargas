import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import colors from "../../helpers/colors";
import AddButton from "../atoms/AddButton";
import { useNavigation } from "@react-navigation/native";

function ProductShowcase(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.productContainer}>
      <TouchableOpacity
        onPress={() => {
          {
            navigation.navigate("ProductDetailView", {
              productId: props.product.id,
            });
          }
        }}
      >
        <View style={styles.productImageContainer}>
          <Image
            style={styles.productImage}
            source={{ uri: props.product.productImage }}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.productTextContainer}>
        <Text style={styles.productTitle}>{props.product.productTitle}</Text>
        <Text style={styles.productFormat}>
          {props.product.productPrice}$ for {props.product.productFormat}
        </Text>
        <AddButton productId={props.product.productId} />
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
});

export default ProductShowcase;
