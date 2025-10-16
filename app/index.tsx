import { useTheme } from "@react-navigation/native";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  const { colors } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: colors.text }}>Welcome!</Text>
      <Link href="/home">Go to Home Screen</Link>
      <Link href="/search">Go to Search</Link>
      <Link href="/threads">Go to Threads</Link>
    </View>
  );
}
