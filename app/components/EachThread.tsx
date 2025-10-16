import { useAppTheme } from "@/context/ThemeProvider";
import { ThemedText } from "@/theme/ThemedComponents";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import React from "react";
import { StyleSheet, View } from "react-native";

const EachThread = () => {
  const { colors } = useAppTheme();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <ThemedText style={{ color: "#ffffff" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          cum!.
        </ThemedText>
        <SimpleLineIcons name="options" size={14} color={colors.text} />
      </View>
      <ThemedText style={[styles.bodyText, { color: colors.bodyText }]}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus non
        minima ea at fugit exercitationem!
      </ThemedText>
      <View style={styles.timeContainer}>
        <SimpleLineIcons name="clock" size={10} color={colors.text} />
        <ThemedText style={[styles.timeText, { color: colors.bodyText }]}>
          5h
        </ThemedText>
      </View>
      <View
        style={{
          borderColor: colors.borderColor,
          borderWidth: 0.6,
          marginVertical: 16,
        }}
      />
    </View>
  );
};

export default EachThread;

const styles = StyleSheet.create({
  container: {},
  titleText: {},

  bodyText: {
    marginBottom: 8,
  },

  timeText: {
    fontSize: 10,
  },

  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
    gap: 5,
    width: "95%",
  },
  timeContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 3,
  },
});
