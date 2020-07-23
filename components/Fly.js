import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { setSelectedFlyId } from '../actions'
import { render } from "react-dom";
import { connect } from "react-redux";

class Fly extends Component{
  constructor(props)  {
    super(props)
  }

  addSelectedFlyId = () => {
    this.props.setSelectedFlyId(this.props.fly.id)
  }
  
  deletionAlert = (flyId) =>
    Alert.alert(
      "Remove Fly",
      "Are you sure you want to remove this fly from your fly box? Doing so will remove this fly from any fish caught.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => this.props.handleDelete(flyId) }
      ],
      { cancelable: false }
    );

    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.name}> {this.props.fly.attributes.name}</Text>
          <Text style={styles.text}> {this.props.fly.attributes.category} </Text>
          <Text style={styles.text}> {this.props.fly.attributes.size} </Text>
          <TouchableOpacity onPress={() => {
            this.addSelectedFlyId()
            this.props.navigation.navigate("EditFly")
            }
          }>
            <AntDesign name="edit" color={"#264653"} size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.deletionAlert(this.props.fly.id)}>
            <MaterialCommunityIcons name="hook-off" color={"#264653"} size={20} />
          </TouchableOpacity>
        </View>
      );
    }
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
    width: 40,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    color: "white",
    textAlign: "center",
  },
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedFlyId: (data) => dispatch(setSelectedFlyId(data)),
});

export default connect(null, mapDispatchToProps)(Fly);