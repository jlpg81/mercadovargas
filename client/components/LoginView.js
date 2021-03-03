import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import colors from "../helpers/colors";
import CircularLogoHeader from "./presentationals/CircularLogoHeader";

function LoginView(props) {
  return (
    <View style={styles.loginStyle}>
      <CircularLogoHeader></CircularLogoHeader>
      <View style={styles.loginInputContainer}>
        <Text style={styles.loginInputLabel}>Email</Text>
        <TextInput style={styles.loginInputFields}></TextInput>
        <Text style={styles.loginInputLabel}>Password</Text>
        <TextInput style={styles.loginInputFields}></TextInput>
        <View style={styles.loginButton}>
          <Button
            color={colors.green100}
            title="Log In"
            onPress={() => console.log("Button log in pressed")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  loginInputContainer: {
    transform: [{ translateY: -130 }],
  },
  loginInputLabel: {
    color: colors.green100,
  },
  loginInputFields: {
    backgroundColor: colors.greenlogin,
    borderColor: colors.greenlogin,
    borderWidth: 2,
    borderRadius: 5,
    height: 30,
    width: 250,
  },
  loginButton: {
    marginTop: 20,
    borderRadius: 5,
    overflow: "hidden",
  },
});

export default LoginView;
