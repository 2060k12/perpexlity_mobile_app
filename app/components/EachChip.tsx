import { useAppTheme } from "@/context/ThemeProvider";
import { ThemedText } from "@/theme/ThemedComponents";
import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

const EachChip = ({
  icons,
  label,
  onPress,
}: {
  icons: ReactNode;
  label: string;
  onPress: () => void;
}) => {
  const { colors } = useAppTheme();
  return (
    <View style={styles.eachChip}>
      {icons}
      <ThemedText style={styles.text}>{label}</ThemedText>
    </View>
  );
};

export default EachChip;

const styles = StyleSheet.create({
  eachChip: {
    flexDirection: "row",
    gap: 3,
    backgroundColor: "#252A2A",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 6,
  },

  text: {
    fontSize: 10,
  },
});
