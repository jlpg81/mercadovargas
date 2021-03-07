import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Modal,
  Button,
} from "react-native";
import colors from "../../helpers/colors";

function CitySelector(props) {
  const [modalVisible, setModalVisible] = useState(false);
  console.log(modalVisible);
  return (
    <>
      <View style={styles.citySelectorContainer}>
        <View>
          <Text style={styles.selectorLabel}>Select City: </Text>
        </View>
        <View style={styles.selectorItemContainer}>
          <TouchableWithoutFeedback
            onPress={() => {
              console.log("pressing city selector");
              setModalVisible(true);
            }}
          >
            <Text style={styles.selectorItem}>Valencia</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalTextContainer}>
            <Text style={styles.modalText}>Valencia</Text>
          </View>
          <View style={styles.modalTextContainer}>
            <Text style={styles.modalText}>Caracas</Text>
          </View>
          <View style={styles.modalTextContainer}>
            <Text style={styles.modalText}>Maracaibo</Text>
          </View>
          <View style={styles.modalTextContainer}>
            <Text style={styles.modalText}>Maracay</Text>
          </View>

          <Button
            title="Close"
            onPress={() => {
              console.log("setting modal visibility to false");
              setModalVisible(false);
            }}
          />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  citySelectorContainer: {
    backgroundColor: colors.green100,
    flexDirection: "row",
    padding: 15,
  },
  selectorLabel: { color: "white", fontSize: 18 },
  selectorItemContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    // backgroundColor: "blue",
  },
  selectorItem: {
    color: "white",
    fontSize: 18,
    flex: 1,
    borderBottomColor: colors.green200,
    borderBottomWidth: 1,
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    margin: 30,
    width: "80%",
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    margin: 10,
  },
  modalTextContainer: {
    width: "100%",
    borderBottomColor: colors.green200,
    borderBottomWidth: 1,
  },
});

export default CitySelector;
