import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import EachThread from "./EachThread";

const ThreadContent = () => {
  return (
    <ScrollView style={{ paddingHorizontal: 16 }}>
      <EachThread />
      <EachThread />
      <EachThread />
      <EachThread />
      <EachThread />
      <EachThread />
      <EachThread />
    </ScrollView>
  );
};

export default ThreadContent;

const styles = StyleSheet.create({});
