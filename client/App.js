import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import MenuBar from "./components/MenuBar";
import colors from "./helpers/colors";
import Screen from "./components/Screen";
import StoreView from "./components/StoreView";

export default function App() {
  const [content, setContent] = useState(<StoreView></StoreView>);

  const menuHandler = (content) => setContent(<Text>{content}</Text>);

  return (
    <Screen>
      <View style={styles.mainContainer}>
        {/* Here starts different views content */}

        {content}

        {/* Here ends different views content */}
      </View>
      <MenuBar menuHandler={menuHandler} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  mainContainer: {
    backgroundColor: "dodgerblue",
    flex: 1,
    width: "100%",
  },
});
