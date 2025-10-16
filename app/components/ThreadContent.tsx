import { useAppTheme } from "@/context/ThemeProvider";
import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import EachThread from "./EachThread";
import FloatingButton from "./FloatingButton";

const ThreadContent = () => {
  const router = useRouter();
  const { colors } = useAppTheme();
  return (
    <>
      <ScrollView style={{ paddingHorizontal: 16 }}>
        <EachThread />
        <EachThread />
        <EachThread />
        <EachThread />
        <EachThread />
        <EachThread />
        <EachThread />
      </ScrollView>

      <View style={styles.floatingButton}>
        <FloatingButton
          onPress={() => {
            router.dismissTo("/home");
          }}
          icon={<Feather name="edit" size={20} color={colors.inverseText} />}
        />
      </View>
    </>
  );
};

export default ThreadContent;

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 16,
  },
});
