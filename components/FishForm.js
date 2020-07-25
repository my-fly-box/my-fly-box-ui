import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { updateFishEntry, clearFishEntry } from "../actions";
import { connect } from "react-redux";
import RNPickerSelect from "react-native-picker-select";

class FishForm extends Component {
  state = {
    species: "",
    image: "",
    length: "",
    weight: "",
    location: "",
    flyName: "",
  };

  componentDidMount() {
    this.props.clearFishEntry();
  }

  handleChange = (property, text) => {
    this.setState({ property: text });
    this.props.updateFishEntry(property, text);
  };

  mapCurrentFlies = () => {
    return this.props.currentFlies.map((fly) => {
      return { value: fly.attributes.id, label: fly.attributes.name };
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
        <TextInput
          style={styles.input}
          placeholder="Enter Species Name"
          value={this.props.currentFishEntry.species}
          onChangeText={(text) => this.handleChange("species", text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Image"
          value={this.props.currentFishEntry.image}
          onChangeText={(text) => this.handleChange("image", text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Length"
          keyboardType="number-pad"
          value={this.props.currentFishEntry.length.toString()}
          onChangeText={(text) => this.handleChange("length", parseInt(text))}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Weight"
          keyboardType="number-pad"
          value={this.props.currentFishEntry.weight.toString()}
          onChangeText={(text) => this.handleChange("weight", parseInt(text))}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Location"
          value={this.props.currentFishEntry.location}
          onChangeText={(text) => this.handleChange("location", text)}
        />

        <RNPickerSelect
          style={styles}
          onValueChange={(value) => {
            this.handleChange("fly_id", parseInt(value));
          }}
          items={this.mapCurrentFlies()}
        />

        <TextInput
          style={styles.input}
          editable={false}
          placeholder="Fly Used"
          value={this.findFlyName()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
    marginTop: "10%",
  },
  label: {
    textAlign: "center",
  },
  input: {
    backgroundColor: "white",
    textAlign: "center",
    width: "70%",
    height: "20%",
    marginBottom: "3%",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  inputIOS: {
    alignSelf: "center",
    backgroundColor: "white",
    textAlign: "center",
    width: "40%",
    height: 40,
    marginBottom: "3%",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});

const mapStateToProps = (state) => ({
  currentFlies: state.currentFlies,
  currentFishEntry: state.currentFishEntry,
});

const mapDispatchToProps = (dispatch) => ({
  updateFishEntry: (name, data) => dispatch(updateFishEntry(name, data)),
  clearFishEntry: () => dispatch(clearFishEntry()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FishForm);
