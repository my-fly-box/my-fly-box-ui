import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from "react-native";
import { setSelectedFishId } from "../actions";
import { connect } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";

class Fish extends Component {
  constructor(props) {
    super(props);
  }

  addSelectedFishId = () => {
    this.props.setSelectedFishId(this.props.fish.id);
  };

  deletionAlert = (fishId) =>
    Alert.alert(
      "Remove Fish",
      "Are you sure you want to remove this fish?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => this.props.handleDelete(fishId) },
      ],
      { cancelable: false }
    );

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.addSelectedFishId();
            this.props.navigation.navigate("EditFish");
          }}
        >
          <Image
            style={styles.fishImage}
            source={{
              uri:
                "https://images.unsplash.com/photo-1594088979895-6086bd8d1f83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
            }}
          />
          <Text style={styles.species}>
            Species: {this.props.fish.attributes.species}
          </Text>
          <Text style={styles.location}>
            Location: {this.props.fish.attributes.location}{" "}
          </Text>
          <TouchableOpacity
            onPress={() => this.deletionAlert(this.props.fish.id)}
          >
            <FontAwesome
              name="remove"
              color={"#264653"}
              size={13}
            />
          </TouchableOpacity>
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
    justifyContent: "center",
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
  },
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedFishId: data => dispatch( setSelectedFishId(data) ),
});

export default connect(null, mapDispatchToProps)(Fish);
