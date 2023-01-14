import React from "react";
import { View, StyleSheet, Image } from "react-native";
import RepositoryStats from "./RepositoryStats";
import StyledText from "./StyledText";
import theme from "./theme";

const RepositoryItemHeader = ({
  ownerAvatarUrl,
  fullName,
  description,
  language,
}) => {
  return (
    <View style={{ flexDirection: "row", paddingBottom: 3 }}>
      <View style={{ paddingRight: 10 }}>
        <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
      </View>

      <View style={{ flex: 1 }}>
        <StyledText fontSize="subheading" fontWeight="bold">
          {fullName}
        </StyledText>
        <StyledText>Description: {description}</StyledText>
        <StyledText style={styles.language}> {language}</StyledText>
      </View>
    </View>
  );
};
const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.cotainer}>
      <RepositoryItemHeader {...props} />
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
  language: {
    color: theme.colors.white,
    padding: 4,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 4,
    overflow: "hidden",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 10,
  },
});

export default RepositoryItem;
