import React from "react";
import { Image, View, StyleSheet } from "react-native";
import colors from "../../helpers/colors";

function CircularLogoHeader2(props) {
  return (
    <View style={styles.circularLogoHeader2Container}>
      <View style={styles.greenTop}></View>
      <View style={styles.whiteCircle}>
        <Image
          style={styles.vargasLogo}
          source={require("../../assets/mercadoVargasLogo.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  circularLogoHeader2Container: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
  },

  greenTop: {
    backgroundColor: colors.green100,
    height: 200,
    width: 440,
    transform: [{ translateX: 0 }, { translateY: -150 }, { rotate: "-10deg" }],
  },
  whiteCircle: {
    backgroundColor: colors.white,
    height: 120,
    width: 120,
    borderRadius: 100,
    transform: [{ translateX: -90 }, { translateY: -190 }],
    alignItems: "center",
    justifyContent: "center",
  },
  vargasLogo: {
    height: 110,
    width: 110,
  },
});

export default CircularLogoHeader2;
