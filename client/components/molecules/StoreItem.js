import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function StoreItem(props) {
  return (
    <TouchableOpacity
      style={styles.storeItemContainer}
      onPress={() => {
        console.log("going to store...");
      }}
    >
      <View style={styles.storeItemImageContainer}>
        <Image
          style={styles.storeItemImage}
          source={require("../../assets/dummy/brand.jpg")}
        />
      </View>
      <View style={styles.storeItemText}>
        <Text>Makro Valencia</Text>
        <Text>Ciudad: Valencia, Carabobo</Text>
        <Text>⭐ 4.3 (506)</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  storeItemContainer: {
    flexDirection: "row",
    margin: 5,
  },
  storeItemImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  storeItemImage: {
    width: "100%",
    height: "100%",
    margin: 5,
  },
  storeItemText: { margin: 5 },
});

export default StoreItem;
