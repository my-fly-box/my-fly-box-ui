import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import FishForm from "../components/FishForm";
import { clearFishEntry, addFish } from "../actions";
import { addFishToAPI } from "../ApiCalls";

class AddFish extends Component {
  constructor(props) {
    super(props);
  }

  addFish = () => {
    const currentFishEntry = this.props.currentFishEntry;
    addFishToAPI(currentFishEntry).then((data) => {
      this.props.addFish(data.data);
      this.props.clearFishEntry();
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.intro}>Add information about your fish:</Text>

        <TouchableOpacity
          style={styles.imageButton}
          onPress={() => {
            this.props.navigation.navigate("PhotoSelector");
          }}
        >
          <Text style={styles.buttonText}>Upload Image</Text>
        </TouchableOpacity>

        <FishForm />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("FishCaught");
              this.props.clearFishEntry();
            }}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.addFish();
              this.props.navigation.navigate("FishCaught");
              this.props.clearFishEntry();
            }}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    justifyContent: "center",
    backgroundColor: "#f8f8ff",
  },
  intro: {
    flex: 0.15,
    alignSelf: "center",
    fontSize: 20,
    fontFamily: "Helvetica Neue",
    fontWeight: "bold",
    color: "#0b7d83",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    width: "80%",
    alignSelf: "center",
  },
  imageButton: {
    backgroundColor: "#f7841f",
    alignSelf: "center",
    marginHorizontal: "5%",
    marginVertical: "4%",
    height: 50,
    width: 130,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.2,
    borderColor: "#212326",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  button: {
    backgroundColor: "#f7841f",
    alignSelf: "center",
    marginHorizontal: "5%",
    height: 50,
    width: 130,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.2,
    borderColor: "#212326",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  buttonText: {
    fontSize: 15,
    color: "#ffffff",
    fontFamily: "Helvetica-Bold",
    textAlign: "center",
  },
});

const mapStateToProps = (state) => ({
  currentFishEntry: state.currentFishEntry,
});

const mapDispatchToProps = (dispatch) => ({
  clearFishEntry: () => dispatch(clearFishEntry()),
  addFish: (data) => dispatch(addFish(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFish);
