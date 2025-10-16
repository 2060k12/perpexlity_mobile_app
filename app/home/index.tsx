import { useAppTheme } from "@/context/ThemeProvider";
import { ThemedText, ThemedView } from "@/theme/ThemedComponents";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomAppBar from "../components/CustomAppBar";
import MessageBox from "../components/MessageBox";
const HomeScreen = () => {
  const { colors } = useAppTheme();
  return (
    <ThemedView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <SafeAreaView style={styles.container}>
        <CustomAppBar
          leftSide={
            <Pressable style={styles.leftButton}>
              <ThemedText style={{ fontSize: 18 }}>Q</ThemedText>
            </Pressable>
          }
          rightSide={
            <Pressable style={styles.leftButton}>
              <ThemedText style={{ fontSize: 18 }}>R</ThemedText>
            </Pressable>
          }
        />

        <KeyboardAvoidingView
          style={styles.insideContainer}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ThemedText
            style={{
              fontSize: 24,
            }}
          >
            Hello World
          </ThemedText>
          <MessageBox />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ThemedView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {},
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  insideContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  leftButton: {
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: "50%",
  },
});
