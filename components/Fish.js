import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
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
            {this.props.fish.attributes.species}
          </Text>
          <Text style={styles.info}>
            Location: {this.props.fish.attributes.location}{" "}
          </Text>
          <Text style={styles.info}>
            Weight: {this.props.fish.attributes.weight} lbs
          </Text>
          <Text style={styles.info}>
            Length: {this.props.fish.attributes.length} in
          </Text>
          <TouchableOpacity
            onPress={() => this.deletionAlert(this.props.fish.id)}
          >
            <FontAwesome
              name="remove"
              color={"#212326"}
              size={20}
              style={styles.removeButton}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignSelf: "center",
    paddingVertical: 7,
    paddingHorizontal: 7,
    marginVertical: 5,
    height: 330,
    width: "80%",
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
  species: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: "#2A9D8F",
    margin: "3%",
    alignSelf: "center",
    textDecorationLine: "underline",
  },
  info: {
    fontSize: 17,
    fontFamily: "Helvetica",
    color: "#212326",
    marginLeft: "10%",
    margin: "1%",
  },
  fishImage: {
    width: 220,
    alignSelf: "center",
    height: 150,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#212326",
  },
  removeButton: {
    alignSelf: "flex-end",
    marginRight: "2%",
  },
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedFishId: (data) => dispatch(setSelectedFishId(data)),
});

export default connect(null, mapDispatchToProps)(Fish);
