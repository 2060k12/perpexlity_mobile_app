import { useAppTheme } from "@/context/ThemeProvider";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import EachSpace from "./EachSpace";
import FloatingButton from "./FloatingButton";

const Spaces = () => {
  const router = useRouter();
  const { colors } = useAppTheme();

  return (
    <>
      <View style={styles.container}>
        <EachSpace />
        <EachSpace />
        <EachSpace />
        <EachSpace />
        <EachSpace />
      </View>
      <View style={styles.floatingButton}>
        <FloatingButton
          onPress={() => {
            router.push("/NewSpaceModal");
          }}
          icon={<Ionicons name="add" size={20} color={colors.inverseText} />}
        />
      </View>
    </>
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
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 16,
  },
});
