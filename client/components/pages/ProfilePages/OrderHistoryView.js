import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CircularLogoHeader2 from "../../molecules/CircularLogoHeader2";

function OrderHistoryView(props) {
  return (
    <View style={styles.orderHistoryViewContainer}>
      <CircularLogoHeader2 />
      <View style={styles.profileContent}>
        <Text>OrderHistoryView</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  orderHistoryViewContainer: { backgroundColor: "white", flex: 1 },
  profileContent: {
    transform: [{ translateY: -180 }],
    marginLeft: 30,
  },
});

export default OrderHistoryView;
