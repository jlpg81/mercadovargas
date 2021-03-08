import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import StoreItem from "../molecules/StoreItem";
import StoreItemHalf from "../molecules/StoreItemHalf";

function StoreItemHalfList(props) {
  const displayStores = () => {
    if (props.stores) {
      return (
        <>
          {props.stores.stores.map((store, index) => (
            <StoreItemHalf
              key={index}
              store={store}
              navigation={props.navigation}
            />
          ))}
        </>
      );
    }
  };
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
      <View style={styles.storeItemHalfListContainer}>{displayStores()}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  storeItemHalfListContainer: {
    flexDirection: "row",
  },
  one: { width: "50%", backgroundColor: "green" },
});

export default StoreItemHalfList;
