import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <View>
      <SafeAreaView>
        <Header />
        <SearchBar />
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
