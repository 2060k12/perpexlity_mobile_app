import { useAppTheme } from "@/context/ThemeProvider";
import { ThemedText } from "@/theme/ThemedComponents";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
const BottomNavBar = ({
  selectedIndex,
  onIndexChange,
}: {
  selectedIndex: 0 | 1;
  onIndexChange: (e: 0 | 1) => void;
}) => {
  const { colors } = useAppTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.accent }]}>
      <Pressable
        onPress={() => {
          onIndexChange(0);
        }}
        style={[
          styles.eachButton,
          { backgroundColor: selectedIndex == 0 ? "#293E40" : "" },
        ]}
      >
        <AntDesign
          name="menu"
          size={14}
          color={selectedIndex == 0 ? colors.primary : colors.bodyText}
        />
        <ThemedText
          style={[
            styles.buttonText,
            { color: selectedIndex == 0 ? colors.primary : colors.bodyText },
          ]}
        >
          Threads
        </ThemedText>
      </Pressable>
      <Pressable
        onPress={() => {
          onIndexChange(1);
        }}
        style={[
          styles.eachButton,
          { backgroundColor: selectedIndex == 1 ? "#293E40" : "" },
        ]}
      >
        <MaterialIcons
          name="space-dashboard"
          size={20}
          color={selectedIndex == 1 ? colors.primary : colors.bodyText}
        />
        <ThemedText
          style={[
            styles.buttonText,
            { color: selectedIndex == 1 ? colors.primary : colors.bodyText },
          ]}
        >
          Spaces
        </ThemedText>
      </Pressable>
    </View>
  );
};

export default BottomNavBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    height: 60,
    padding: 4,
    borderRadius: 50,
  },
  eachButton: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "49%",
    borderRadius: 50,

    gap: 6,
  },
  buttonText: {
    fontSize: 10,
  },
});
