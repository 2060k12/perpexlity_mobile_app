import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

const CustomAppBar = ({
  leftSide,
  rightSide,
}: {
  leftSide: ReactNode;
  rightSide: ReactNode;
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        {/*  Left Button */}
        <View>{leftSide}</View>

        {/* Right Button */}
        <View>{rightSide}</View>
      </View>
    </View>
  );
};

export default CustomAppBar;

const styles = StyleSheet.create({
  mainContainer: {
    height: 50,
  },
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});
