import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function StoreItem({ store }) {
  const logo = "require(`../../assets/dummy/" + store.logo;

  return (
    <TouchableOpacity
      style={styles.storeItemContainer}
      onPress={() => {
        console.log("going to store...");
      }}
    >
      <View style={styles.storeItemImageContainer}>
        <Image style={styles.storeItemImage} source={{ uri: store.logo }} />
      </View>
      <View style={styles.storeItemText}>
        <Text>{store.storeTitle}</Text>
        <Text>
          {store.city}, {store.state}
        </Text>
        <Text>
          ⭐ {store.rating} ({store.votes})
        </Text>
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
    resizeMode: "contain",
  },
  storeItemText: { margin: 5 },
});

export default StoreItem;
