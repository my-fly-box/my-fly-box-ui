import React, { Component } from "react";
import FishForm from "../components/FishForm";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
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

  findFlyName = () => {
    let currentFly = this.props.currentFlies.find(
      (fly) => fly.id == this.props.currentFishEntry.fly_id
    );
    if (currentFly === undefined) {
      return "";
    } else {
      return currentFly.attributes.name;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.intro}>Make changes to the selected fish:</Text>

        <Image
          style={styles.fishImage}
          source={{
            uri: `data:image/gif;base64,${this.props.currentFishEntry.image}`,
          }}
        />
        
        <FishForm />

        <Text style={styles.previousFly}>
          Previously Selected Fly Used: {this.findFlyName()}
        </Text>

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
    paddingTop: 30,
    height: "90%",
    backgroundColor: "#f8f8ff",
  },
  intro: {
    alignSelf: "center",
    fontSize: 20,
    fontFamily: "Helvetica Neue",
    fontWeight: "bold",
    color: "#0b7d83",
  },
  fishImage: {
    alignSelf: "center",
    width: 180,
    height: 110,
    margin: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#212326",
  },
  previousFly: {
    alignSelf: "center",
    fontSize: 13,
    fontWeight: "300",
    color: "#212326",
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "80%",
    alignSelf: "center",
    marginTop: 10,
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
  currentFlies: state.currentFlies,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentFish: (data) => dispatch(setCurrentFish(data)),
  setFish: (data) => dispatch(addFish(data)),
  clearFishEntry: () => dispatch(clearFishEntry()),
  updateFish: (data) => dispatch(updateFish(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditFish);
