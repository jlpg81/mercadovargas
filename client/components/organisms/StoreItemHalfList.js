import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import StoreItem from "../molecules/StoreItem";
import StoreItemHalf from "../molecules/StoreItemHalf";

function StoreItemHalfList(props) {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
      <View style={styles.storeItemHalfListContainer}>
        <StoreItemHalf />
        <StoreItemHalf />
        <StoreItemHalf />
        <StoreItemHalf />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  storeItemHalfListContainer: {
    // width: "100%",
    flexDirection: "row",
    // flexWrap: "wrap",
    // backgroundColor: "dodgerblue",
    // flex: 1,
  },
  one: { width: "50%", backgroundColor: "green" },
});

export default StoreItemHalfList;
