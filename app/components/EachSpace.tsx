import { useAppTheme } from "@/context/ThemeProvider";
import { ThemedText } from "@/theme/ThemedComponents";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
const EachSpace = () => {
  const { colors } = useAppTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.accent }]}>
      <View style={styles.headerContaier}>
        <Text style={{ fontSize: 24 }}>👻</Text>
        <FontAwesome name="user" size={24} color={colors.text} />
      </View>

      <View style={styles.bodyContainer}>
        <ThemedText style={styles.titleText}>Job Guru</ThemedText>
        <View style={styles.bottomContainer}>
          <ThemedText style={{ color: colors.bodyText }}>2d</ThemedText>
          <Entypo name="dot-single" size={15} color={colors.bodyText} />
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <AntDesign name="lock" size={12} color={colors.bodyText} />
            <ThemedText style={{ color: colors.bodyText }}>Private</ThemedText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EachSpace;

const styles = StyleSheet.create({
  container: {
    height: 130,
    padding: 16,
    width: "48%",
    borderRadius: 10,
    justifyContent: "space-between",
  },

  headerContaier: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  titleText: {},

  bodyContainer: {},
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
