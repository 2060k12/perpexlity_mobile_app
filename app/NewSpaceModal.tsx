import { useAppTheme } from "@/context/ThemeProvider";
import { ThemedText, ThemedView } from "@/theme/ThemedComponents";
import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomAppBar from "./components/CustomNavBar";
import IconButton from "./components/IconButton";
const NewSpaceModel = () => {
  const { colors } = useAppTheme();
  const router = useRouter();
  return (
    <ThemedView style={styles.main}>
      <SafeAreaView style={styles.container}>
        <CustomAppBar
          leftSide={
            <IconButton
              onPress={() => {
                router.back();
              }}
            >
              <Entypo name="cross" size={20} color={colors.bodyText} />
            </IconButton>
          }
          rightSide={
            <View style={{ flex: 1 }}>
              <ThemedText style={{ fontSize: 24 }}>New Space</ThemedText>
            </View>
          }
          titleOnCenter={true}
        />

        {/* Body */}

        <ThemedText>Title</ThemedText>
        <ThemedText>Icon</ThemedText>
        <ThemedText>Description</ThemedText>
        <ThemedText>Ai Prompt</ThemedText>
        <ThemedText>Privacy</ThemedText>
      </SafeAreaView>
    </ThemedView>
  );
};

export default NewSpaceModel;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 16,
  },
});
