import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default Fish = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("AddFish");
        }}
      >
        <Text style={styles.buttonText}>Add Fish</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#264653",
    padding: 5,
    alignItems: "center",
    alignSelf: "center",
    width: 70,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    color: "white",
    textAlign: "center",
  },
});
