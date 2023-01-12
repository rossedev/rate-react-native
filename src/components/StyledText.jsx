import React from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: "gray",
  },
  bold: {
    fontWeight: "bold",
  },
  blue: {
    color: "blue",
  },
  big: {
    fontSize: 20,
  },
  small: {
    fontSize: 10,
  },
});

export default function StyledText({ blue, bold, children, big, small }) {
  const textStyles = [
    styles.text,
    blue && styles.blue,
    bold && styles.bold,
    big && styles.big,
    small && styles.small,
  ];
  return <Text style={textStyles}>{children}</Text>;
}
