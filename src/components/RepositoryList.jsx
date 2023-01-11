import React from "react";
import { FlatList, Text, View } from "react-native";
import repositories from "../data/repositories";
const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => (
        <View
          key={repo.id}
          style={{ padding: 20, paddingBottom: 5, paddingTop: 5 }}
        >
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>{repo.id}</Text>
          <Text>fullName: {repo.fullName}</Text>
          <Text>description: {repo.description}</Text>
          <Text>language: {repo.language}</Text>
          <Text>forksCount: {repo.forksCount}</Text>
          <Text>stargazersCount: {repo.stargazersCount}</Text>
          <Text>ratingAverage: {repo.ratingAverage}</Text>
          <Text>reviewCount: {repo.reviewCount}</Text>
          <Text>ownerAvatarUrl: {repo.ownerAvatarUrl}</Text>
        </View>
      )}
    ></FlatList>
  );
};

export default RepositoryList;
