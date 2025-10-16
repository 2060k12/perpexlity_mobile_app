import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

const CustomAppBar = ({
  leftSide,
  rightSide,
  titleOnCenter = false,
}: {
  leftSide: ReactNode;
  rightSide: ReactNode;
  titleOnCenter?: boolean;
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        {/*  Left Button */}
        <View>{leftSide}</View>
        {/* Right Button */}
        {titleOnCenter ? (
          <View
            style={{
              width: "100%",
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {rightSide}
          </View>
        ) : (
          <View>{rightSide}</View>
        )}
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
