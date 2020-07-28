import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { setSelectedFlyId } from "../actions";
import { render } from "react-dom";
import { connect } from "react-redux";

class Fly extends Component {
  constructor(props) {
    super(props);
  }

  addSelectedFlyId = () => {
    this.props.setSelectedFlyId(this.props.fly.id);
  };

  deletionAlert = (flyId) =>
    Alert.alert(
      "Remove Fly",
      "Are you sure you want to remove this fly from your fly box? Doing so will remove this fly from any fish caught.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => this.props.handleDelete(flyId) },
      ],
      { cancelable: false }
    );

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.name}> {this.props.fly.attributes.name}</Text>

        <View style={styles.categoryContainer}>
          <Text style={styles.text}>{this.props.fly.attributes.category} </Text>
        </View>

        <View style={styles.flyInfoContainer}>
          <Text style={styles.text}>
            Size: {this.props.fly.attributes.size}{" "}
          </Text>
          <Text style={styles.text}>
            Color: {this.props.fly.attributes.color}{" "}
          </Text>
          <Text style={styles.text}>
            Amount: {this.props.fly.attributes.amount}{" "}
          </Text>
          <TouchableOpacity
            testID="editButton"
            onPress={() => {
              this.addSelectedFlyId();
              this.props.navigation.navigate("EditFly");
            }}
          >
            <FontAwesome name="chevron-right" color={"#f7841f"} size={20} />
          </TouchableOpacity>
        </View>

        <View style={styles.deleteContainer}>
          <TouchableOpacity
            testID="deleteButton"
            onPress={() => this.deletionAlert(this.props.fly.id)}
          >
            <FontAwesome name="remove" color={"#212326"} size={18} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    paddingVertical: 7,
    paddingHorizontal: 3,
    marginVertical: 5,
    height: 115,
    width: "100%",
    borderWidth: 0.2,
    borderColor: "#212326",
    borderRadius: 5,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  name: {
    fontSize: 17,
    fontFamily: "Helvetica Neue",
    fontWeight: "bold",
    color: "#0b7d83",
    paddingHorizontal: 4,
  },
  flyInfoContainer: {
    flexDirection: "row",
    paddingHorizontal: 7,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 15,
    fontFamily: "Helvetica Neue",
    fontWeight: "400",
    color: "#212326",
  },
  categoryContainer: {
    paddingHorizontal: 7,
  },
  deleteContainer: {
    paddingHorizontal: 7,
  },
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedFlyId: (data) => dispatch(setSelectedFlyId(data)),
});

export default connect(null, mapDispatchToProps)(Fly);
