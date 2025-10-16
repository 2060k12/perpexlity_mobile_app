import { useAppTheme } from "@/context/ThemeProvider";
import React, { ReactNode } from "react";
import { Pressable, StyleSheet } from "react-native";

const IconButton = ({
  onPress,
  children,
  isPrimaryButton = false,
}: {
  onPress: () => void;
  children: ReactNode;
  isPrimaryButton?: boolean;
}) => {
  const { colors } = useAppTheme();
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.buttonContainer,
        isPrimaryButton
          ? {
              backgroundColor: colors.primary,
            }
          : "",
      ]}
    >
      {children}
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#313636",
    padding: 8,
    borderRadius: "50%",
  },
});
