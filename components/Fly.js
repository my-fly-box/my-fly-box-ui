import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Fly({ navigation, fly }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}> {fly.attributes.name}</Text>
      <Text style={styles.text}> {fly.attributes.category} </Text>
      <Text style={styles.text}> {fly.attributes.size} </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("EditFly")}
        }
      >
        <Text id={fly.attributes.id} style={styles.buttonText}>Edit Fly</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
  },
  name: {
    fontSize: 17,
    fontFamily: "Helvetica-Bold",
    color: "#7A5C58",
  },
  text: {
    fontSize: 15,
    fontFamily: "Helvetica",
    color: "#7A5C58",
  },
  button: {
    backgroundColor: "#264653",
    padding: 5,
    alignItems: "center",
    alignSelf: "center",
    width: 60,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    color: "white",
    textAlign: "center",
  },
});
