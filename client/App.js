import React, { useState } from "react";
import { Platform, Text, StyleSheet, View, ScrollView } from "react-native";
import MenuBar from "./components/MenuBar";
import colors from "./helpers/colors";
import Screen from "./components/Screen";
import StoreView from "./components/StoreView";
import LoginView from "./components/LoginView";

export default function App() {
  const [content, setContent] = useState(<LoginView />);

  const menuHandler = (content) => setContent(<Text>{content}</Text>);

  return (
    <Screen>
      <View style={styles.mainContainer}>
        {/* Here starts different views content */}
        {/* <ScrollView> */}
        {content}
        {/* </ScrollView> */}

        {/* Here ends different views content */}
        <View style={styles.menuBar}>
          <MenuBar menuHandler={menuHandler} />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor:
      Platform.OS === "android" ? colors.white : colors.programmingBlue,
    flex: 1,
    width: "100%",
  },
  menuBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
