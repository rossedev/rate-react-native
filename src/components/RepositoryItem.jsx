import React from "react";
import { View, StyleSheet } from "react-native";
import RepositoryStats from "./RepositoryStats";
import StyledText from "./StyledText";

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.cotainer}>
      <StyledText fontSize="subheading" fontWeight="bold">
        {props.fullName}
      </StyledText>
      <StyledText>Description: {props.description}</StyledText>
      <StyledText> {props.language}</StyledText>

      <RepositoryStats {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  cotainer: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  strong: {
    color: "#09f",
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default RepositoryItem;
