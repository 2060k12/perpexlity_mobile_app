import { useAppTheme } from "@/context/ThemeProvider";
import { ThemedText, ThemedView } from "@/theme/ThemedComponents";
import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavBar from "../components/BottomNavBar";
import CustomAppBar from "../components/CustomAppBar";
import IconButton from "../components/IconButton";
import SearchBarThread from "../components/SearchBarThread";
import Spaces from "../components/Spaces";
import ThreadContent from "../components/ThreadContent";

const index = () => {
  const { colors } = useAppTheme();
  const [selected, setSelected] = useState<0 | 1>(0);

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        {/* Title Bar */}
        <View style={styles.appBar}>
          <CustomAppBar
            leftSide={
              <View style={styles.navLeft}>
                <IconButton onPress={() => {}}>
                  <Feather name="settings" size={14} color={colors.text} />
                </IconButton>

                <ThemedText style={styles.userNameText}>
                  Pranish Pathak
                </ThemedText>
              </View>
            }
            rightSide={
              <IconButton onPress={() => {}}>
                <Feather name="arrow-right" size={14} color={colors.text} />
              </IconButton>
            }
          />
        </View>

        {/* Thread Search Bar */}
        <SearchBarThread />

        {/* Thread Contents */}
        <View style={{ flex: 1 }}>
          {selected === 0 ? <ThreadContent /> : <Spaces />}
        </View>

        {/* Bottom Navigation */}
        <View style={styles.nav}>
          <BottomNavBar
            selectedIndex={selected}
            onIndexChange={(e) => {
              setSelected(e);
            }}
          />
        </View>
      </SafeAreaView>
    </ThemedView>
  );
};

export default index;

const styles = StyleSheet.create({
  appBar: {
    paddingHorizontal: 16,
  },

  nav: {},

  userNameText: {
    fontSize: 18,
  },
  container: {
    flex: 1,
  },
  navLeft: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
});
