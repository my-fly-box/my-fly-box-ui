import React, { Component } from "react";
import FlyForm from "../components/FlyForm";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { setCurrentFly, clearFlyEntry, updateFly } from "../actions";
import { addUpdatedFly } from "../ApiCalls";
import { connect } from "react-redux";

class EditFly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFly: null,
    };
  }

  componentDidMount = () => {
    const selectedFly = this.props.currentFlies.find(
      (fly) => fly.id == this.props.selectedFlyId
    );
    this.setState({ selectedFly: selectedFly });
    this.setCurrentFly(selectedFly);
  };

  setCurrentFly = (selectedFly) => {
    this.props.setCurrentFly(selectedFly.attributes);
  };

  updateFly = () => {
    addUpdatedFly(this.state.selectedFly).then((data) => {
      this.props.updateFly(data);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.intro}>Make changes to the selected fly:</Text>

        <FlyForm />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.clearFlyEntry();
              this.props.navigation.navigate("MyFlyBox");
            }}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.updateFly();
              this.props.clearFlyEntry();
              this.props.navigation.navigate("MyFlyBox");
            }}
          >
            <Text style={styles.buttonText}>Update</Text>
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
    backgroundColor: "#f8f8ff",
  },
  intro: {
    flex: 0.2,
    alignSelf: "center",
    fontSize: 20,
    fontFamily: "Helvetica Neue",
    fontWeight: "bold",
    color: "#0b7d83",
    marginBottom: 10,
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
  currentFlies: state.currentFlies,
  selectedFlyId: state.selectedFlyId,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentFly: (data) => dispatch(setCurrentFly(data)),
  setFlies: (data) => dispatch(addFly(data)),
  updateFly: (data) => dispatch(updateFly(data)),
  clearFlyEntry: () => dispatch(clearFlyEntry()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditFly);
