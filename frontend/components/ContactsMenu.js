import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const ContactmenuButton = [
  { type: "starred", name: "Starred" },
  {
    type: "contact",
    name: "milan k",
    photo: require("../assets/map.png"),
  },
  {
    type: "contact",
    name: "milan k",
    photo: require("../assets/inshort.png"),
  },
];

const ContactsMenu = () => {
  return (
    <View style={styles.container}>
      {ContactmenuButton.map((item, key) => (
        <View style={styles.row}>
          {item.type === "starred" ? (
            <View style={styles.icon}>
              <AntDesign name="star" size={30} color="#fff" />
            </View>
          ) : (
            <View>
              <Image source={item.photo} style={styles.image} />
            </View>
          )}
          <Text style={styles.text}>{item.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default ContactsMenu;

const styles = StyleSheet.create({
  container: {},
  text: {
    color: "white",
    paddingLeft: 15,
    fontSize: 18,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  icon: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 20,
  },
});
