import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ProductShowcase from "../molecules/ProductShowcase";
import { gql, useQuery } from "@apollo/client";

function ProductDisplayList(props) {
  const PRODUCT_QUERY = gql`
    {
      products {
        id
        productTitle
        productPrice
        productFormat
        productImage
      }
    }
  `;

  const { loading, error, data } = useQuery(PRODUCT_QUERY);
  if (loading) {
    return <></>;
  }
  if (error) {
    console.log("query error", error);
  }

  return (
    <ScrollView>
      <View style={styles.productDisplayListContainer}>
        <>
          {data.products.map((product, index) => (
            <ProductShowcase
              key={index}
              product={product}
              // navigation={props.navigation}
            />
          ))}
        </>
      </View>
    </ScrollView>
  );

  // return (
  //   <ScrollView>
  //     <View style={styles.productDisplayListContainer}>
  //       <ProductShowcase />
  //       <ProductShowcase />
  //       <ProductShowcase />
  //     </View>
  //   </ScrollView>
  // );
}

const styles = StyleSheet.create({
  productDisplayListContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    backgroundColor: "white",
  },
});

export default ProductDisplayList;
