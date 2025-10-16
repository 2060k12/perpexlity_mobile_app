import { useAppTheme } from "@/context/ThemeProvider";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import EachChip from "../components/EachChip";
const ChipViewHorizontal = () => {
  const imageSize = 12;
  const { colors } = useAppTheme();
  return (
    <ScrollView
      style={styles.chipsContainer}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <EachChip
        icons={<Entypo name="open-book" size={imageSize} color={colors.text} />}
        label="Perpexlity Pro"
        onPress={() => {}}
      />
      <EachChip
        icons={
          <Ionicons
            name="images-outline"
            size={imageSize}
            color={colors.text}
          />
        }
        label="Images"
        onPress={() => {}}
      />
      <EachChip
        icons={<Entypo name="open-book" size={imageSize} color={colors.text} />}
        label="Perpexlity Pro"
        onPress={() => {}}
      />

      <EachChip
        icons={<Entypo name="globe" size={imageSize} color={colors.text} />}
        label="Sources"
        onPress={() => {}}
      />
    </ScrollView>
  );
};

export default ChipViewHorizontal;

const styles = StyleSheet.create({
  chipsContainer: {
    gap: 6,
    marginVertical: 8,
  },
});
