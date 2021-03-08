import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import colors from "../../helpers/colors";

function ProductShowcase({ store, navigation }) {
  // console.log(`navigation`, navigation);
  return (
    <View style={styles.productContainer}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          {
            navigation.navigate("StoreView");
          }
        }}
      >
        <View style={styles.productImageContainer}>
          <Image style={styles.productImage} source={{ uri: store.logo }} />
        </View>
        <View style={styles.productTextContainer}>
          <Text style={styles.productFormat}>{store.storeTitle}</Text>
          <Text style={styles.productFormat}>
            {store.city}, {store.state}
          </Text>
          <Text style={styles.productFormat}>
            ⭐ {store.rating} ({store.votes})
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  productContainer: {
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
