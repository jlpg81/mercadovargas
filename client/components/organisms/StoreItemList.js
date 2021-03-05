import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import StoreItem from "../molecules/StoreItem";

function StoreItemList(props) {
  return (
    <ScrollView>
      <View style={styles.storeItemListContainer}>
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  storeItemListContainer: { flex: 1 },
});

export default StoreItemList;
