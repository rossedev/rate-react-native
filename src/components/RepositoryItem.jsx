import React from "react";
import { Text, View, StyleSheet } from "react-native";
import StyledText from "./StyledText";

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.cotainer}>
      <StyledText bold big>
        {props.id}
      </StyledText>
      <Text>fullName: {props.fullName}</Text>
      <Text>description: {props.description}</Text>
      <Text>language: {props.language}</Text>
      <Text>forksCount: {props.forksCount}</Text>
      <Text>stargazersCount: {props.stargazersCount}</Text>
      <Text>ratingAverage: {props.ratingAverage}</Text>
      <Text>reviewCount: {props.reviewCount}</Text>
      <Text>ownerAvatarUrl: {props.ownerAvatarUrl}</Text>
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
