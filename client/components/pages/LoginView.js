import React from "react";
import {
  Platform,
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";

import colors from "../../helpers/colors";
import CircularLogoHeader from "../molecules/CircularLogoHeader";

function LoginView({ navigation }) {
  return (
    <View style={styles.loginContainer}>
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
            onPress={() => navigation.replace("StoreProductsView")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor:
      Platform.OS === "android" ? colors.white : colors.programmingBlue,
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
