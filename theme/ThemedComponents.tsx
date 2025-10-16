import { useAppTheme } from "@/context/ThemeProvider";
import { ReactNode } from "react";
import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";

export const ThemedView = ({
  style,
  children,
}: {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}) => {
  const { colors } = useAppTheme();
  return (
    <View style={[{ backgroundColor: colors.background }, style]}>
      {children}
    </View>
  );
};

export const ThemedText = ({
  style,
  children,
}: {
  style?: StyleProp<TextStyle>;
  children: ReactNode;
}) => {
  const { colors } = useAppTheme();
  return <Text style={[{ color: colors.text }, style]}>{children}</Text>;
};
