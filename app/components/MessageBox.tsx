import { useAppTheme } from "@/context/ThemeProvider";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import IconButton from "./IconButton";
const MessageBox = () => {
  const { colors } = useAppTheme();
  const [message, setMessage] = useState("");
  const iconSize = 14;
  return (
    <View style={[styles.container]}>
      <TextInput
        style={[styles.textBox, { color: colors.text }]}
        value={message}
        onChangeText={(text) => setMessage(text)}
        placeholder="Ask anything..."
      />
      <View style={styles.bottomContainer}>
        <View style={styles.bottomContainerLeft}>
          <IconButton onPress={() => {}}>
            <FontAwesome6 name="add" size={iconSize} color="white" />
          </IconButton>
          <IconButton onPress={() => {}}>
            <FontAwesome5 name="searchengin" size={iconSize} color="white" />
          </IconButton>
        </View>

        <View style={styles.bottomContainerRight}>
          <IconButton onPress={() => {}}>
            <FontAwesome5 name="microphone" size={iconSize} color="white" />
          </IconButton>
          <IconButton onPress={() => {}} isPrimaryButton={true}>
            <Feather name="send" size={iconSize} color="white" />
          </IconButton>
        </View>
      </View>
    </View>
  );
};

export default MessageBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#252A2A",
    padding: 10,
    height: 90,
    flexDirection: "column",
    borderRadius: 20,
    width: "100%",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textBox: {
    flex: 1,
    paddingHorizontal: 5,
  },
  bottomContainerLeft: {
    flexDirection: "row",
    gap: "10",
  },
  bottomContainerRight: {
    flexDirection: "row",
    gap: "10",
  },
});
