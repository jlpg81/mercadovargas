import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../../helpers/colors";

function ProductDetailDescription(props) {
  return (
    <View style={styles.ProductDetailDescriptionContainer}>
      <Text style={styles.productDescriptionTitle}>Product Description</Text>
      <View style={styles.table}>
        <View style={styles.tableRight}>
          <Text style={styles.tableElement}>Brand:</Text>
          <Text style={styles.tableElement}>Weight:</Text>
          <Text style={styles.tableElement}>Package:</Text>
        </View>
        <View style={styles.tableRight}>
          <Text style={styles.tableElement}>MooMoo Farm</Text>
          <Text style={styles.tableElement}>1 Liter</Text>
          <Text style={styles.tableElement}>1 Carton Brick</Text>
        </View>
      </View>
      <Text style={styles.productDescriptionTitle}>Product Description</Text>
      <Text style={styles.extraDescription}>
        This is just a normal, standard carton of milk. Not good if youre
        lactose intolerant.
      </Text>
      <Text style={styles.extraDescription}>
        Blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla
        blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla
        blabla blabla blabla blabla blabla blabla blabla blabla
      </Text>
      <Text style={styles.extraDescription}>
        Blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla
        blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla
        blabla blabla blabla blabla blabla blabla blabla blabla
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ProductDetailDescriptionContainer: { margin: 10 },
  productDescriptionTitle: {
    color: colors.green100,
  },
  table: {
    flexDirection: "row",
  },
  tableRight: {
    margin: 10,
  },
  tableElement: {
    margin: 5,
  },
  extraDescription: {
    margin: 10,
  },
});

export default ProductDetailDescription;
