import { ThemedText } from "@/theme/ThemedComponents";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

const CustomNavBar = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        {/*  Left Button */}
        <Pressable style={styles.leftButton}>
          <ThemedText style={{ fontSize: 18 }}>Q</ThemedText>
        </Pressable>

        {/* Right Button */}
        <Pressable>
          <ThemedText style={{ fontSize: 24 }}>R</ThemedText>
        </Pressable>
      </View>
    </View>
  );
};

export default CustomNavBar;

const styles = StyleSheet.create({
  mainContainer: {
    height: 50,
  },
  container: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
  },

  leftButton: {
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: "50%",
  },
});
