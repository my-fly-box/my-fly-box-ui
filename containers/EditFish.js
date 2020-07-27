import React, { Component } from "react";
import FishForm from "../components/FishForm";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { setCurrentFish, clearFishEntry, updateFish } from "../actions";
import { addUpdatedFish } from "../ApiCalls";
import { connect } from "react-redux";

class EditFish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFish: null,
    };
  }

  componentDidMount = () => {
    const selectedFish = this.props.currentFish.find(
      (fish) => fish.id == this.props.selectedFishId
    );
    this.setState({ selectedFish: selectedFish });
    this.setCurrentFish(selectedFish);
  };

  setCurrentFish = (selectedFish) => {
    this.props.setCurrentFish(selectedFish.attributes);
  };

  updateFish = () => {
    addUpdatedFish(this.state.selectedFish).then((data) => {
      this.props.updateFish(data);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.intro}>Make changes to the selected fish:</Text>
        <FishForm />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.clearFishEntry();
              this.props.navigation.navigate("FishCaught");
            }}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.updateFish();
              this.props.clearFishEntry();
              this.props.navigation.navigate("FishCaught");
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
  currentFish: state.currentFish,
  selectedFishId: state.selectedFishId,
  currentFishEntry: state.currentFishEntry,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentFish: (data) => dispatch(setCurrentFish(data)),
  setFish: (data) => dispatch(addFish(data)),
  clearFishEntry: () => dispatch(clearFishEntry()),
  updateFish: (data) => dispatch(updateFish(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditFish);
