import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import StoreItem from "../molecules/StoreItem";

function StoreItemList(props) {
  const displayStores = () => {
    if (props.stores) {
      return (
        <>
          {props.stores.stores.map((store, index) => (
            <StoreItem
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
    <ScrollView>
      <View style={styles.storeItemListContainer}>{displayStores()}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  storeItemListContainer: { flex: 1, marginLeft: 20 },
});

export default StoreItemList;
