import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

class Fish extends Component {
  constructor({ navigation, fish }) {
    super({ navigation, fish });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("EditFish")} >
            <Image 
                style={styles.fishImage}
                source={{
                    uri: 'https://images.unsplash.com/photo-1594088979895-6086bd8d1f83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                }}
            />
            <Text style={styles.species}>Species: {this.props.fish.attributes.species}</Text>
            <Text style={styles.location}>Location: {this.props.fish.attributes.location} </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    padding: 25,
    backgroundColor: "#E8E9F3",
    justifyContent: "center"
  },
  species: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#7A5C58",
  },
  location: {
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#7A5C58",
  },
  fishImage: {
    width: 150,
    height: 150,
  }
});

export default Fish;
