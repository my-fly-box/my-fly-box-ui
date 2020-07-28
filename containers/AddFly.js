import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FlyForm from "../components/FlyForm";
import { connect } from "react-redux";
import { addFly, clearFlyEntry } from "../actions";
import { addFlyToAPI } from "../ApiCalls";

class AddFly extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.clearFlyFields();
  }

  addFly = () => {
    const currentFlyEntry = this.props.currentFlyEntry;
    addFlyToAPI(currentFlyEntry).then((data) => {
      this.props.addFly(data.data);
      this.props.clearFlyFields();
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.intro}>Please enter the fly's information:</Text>

        <FlyForm />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            color="white"
            style={styles.button}
            onPress={() => {
              this.props.clearFlyFields();
              this.props.navigation.navigate("MyFlyBox");
            }}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.addFly();
              this.props.navigation.navigate("MyFlyBox");
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
    height: "100%",
    width: "100%",
    justifyContent: "center",
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
  currentFlyEntry: state.currentFlyEntry,
});

const mapDispatchToProps = (dispatch) => ({
  addFly: (data) => dispatch(addFly(data)),
  clearFlyFields: () => dispatch(clearFlyEntry()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFly);
