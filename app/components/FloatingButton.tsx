import { useAppTheme } from "@/context/ThemeProvider";
import React, { ReactNode } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const FloatingButton = ({
  icon,
  onPress,
}: {
  icon: ReactNode;
  onPress: () => void;
}) => {
  const { colors } = useAppTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor: colors.inverseColor }]}
    >
      {icon}
    </TouchableOpacity>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: "50%",
    padding: 16,
  },
});
