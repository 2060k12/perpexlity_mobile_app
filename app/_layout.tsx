import { AppThemeProvider } from "@/context/ThemeProvider";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? DarkTheme : DefaultTheme;

  return (
    <AppThemeProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen
          name="threads"
          options={{
            animation: "ios_from_right",
          }}
        />
        <Stack.Screen
          name="NewSpaceModal"
          options={{
            presentation: "fullScreenModal",
            headerShown: false,
          }}
        />
      </Stack>
    </AppThemeProvider>
  );
}
