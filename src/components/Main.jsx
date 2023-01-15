import React from "react";
import { Text, View } from "react-native";
import RepositoryList from "./RepositoryList.jsx";
import AppBar from "./AppBar.jsx";
import { Redirect, Route, Routes } from "react-router-native";

const SignIn = () => {
  return <Text>Working on it</Text>;
};
const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" exact element={<RepositoryList />} />
        <Route path="/signin" exact element={<SignIn />} />
      </Routes>
    </View>
  );
};

export default Main;
