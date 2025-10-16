import { useAppTheme } from "@/context/ThemeProvider";
import { ThemedText } from "@/theme/ThemedComponents";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
const SearchBarThread = () => {
  const [searchText, setSearchText] = useState("");
  const { colors } = useAppTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.accent }]}>
      <Pressable style={styles.searchButtonContainer}>
        <View style={styles.textContainer}>
          <EvilIcons name="search" size={20} color={colors.bodyText} />
          <ThemedText style={{ color: colors.bodyText }}>
            Search threads
          </ThemedText>
        </View>
      </Pressable>
    </View>
  );
};

export default SearchBarThread;

const styles = StyleSheet.create({
  searchButtonContainer: {
    flexDirection: "row",
    flex: 1,
  },
  textContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  container: {
    margin: 16,
    borderRadius: 20,
  },
});
