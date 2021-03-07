import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

function MenuItem(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.menuItemContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(props.goTo);
        }}
      >
        <Text>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menuItemContainer: {
    // backgroundColor: "dodgerblue", onPress={() => {props.navigation.navigate('Play')}}
    width: "80%",
    alignSelf: "center",
    color: "black",
    margin: 10,
  },
});

export default MenuItem;
