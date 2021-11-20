import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwosome from "react-native-vector-icons/FontAwesome";
const MenuButtons = () => {
  const items = [
    {
      id: 1,
      name: "video-camera",
      title: "New Meeting",
      custoncolor: "#FF751F",
    },
    {
      id: 2,
      name: "plus-square",
      title: "Join",
    },
    {
      id: 3,
      name: "calendar",
      title: "Schedule",
    },
    {
      id: 4,
      name: "upload",
      title: "Share Screen",
    },
  ];

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{
              backgroundColor: item.custoncolor ? item.custoncolor : "#0470DC",
              height: 50,
              width: 50,
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwosome name={item.name} size={23} color="#efefef" />
          </TouchableOpacity>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default MenuButtons;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingBottom: 10,
    borderBottomColor: "#1F1F1F",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    color: "#858585",
    fontSize: 12,
    paddingTop: 10,
    fontWeight: "600",
  },
  buttonContainer: {
    alignItems: "center",
    flex: 1,
  },
});
