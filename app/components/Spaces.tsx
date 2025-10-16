import React from "react";
import { StyleSheet, View } from "react-native";
import EachSpace from "./EachSpace";

const Spaces = () => {
  return (
    <View style={styles.container}>
      <EachSpace />
      <EachSpace />
      <EachSpace />
      <EachSpace />
      <EachSpace />
    </View>
  );
};

export default Spaces;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginHorizontal: 16,
  },
});
