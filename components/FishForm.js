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

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.label}>Species:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Species Name"
          value={this.props.currentFishEntry.species}
          onChangeText={(text) => this.handleChange("species", text)}
        />

        <Text style={styles.label}>Length of the Fish:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Length (in)"
          keyboardType="number-pad"
          value={this.props.currentFishEntry.length.toString()}
          onChangeText={(text) => this.handleChange("length", parseInt(text))}
        />

        <Text style={styles.label}>Weight of the Fish:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Weight (lb)"
          keyboardType="number-pad"
          value={this.props.currentFishEntry.weight.toString()}
          onChangeText={(text) => this.handleChange("weight", parseInt(text))}
        />

        <Text style={styles.label}>Location Caught:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Location"
          value={this.props.currentFishEntry.location}
          onChangeText={(text) => this.handleChange("location", text)}
        />

        <Text style={styles.label}>Fly Used:</Text>
        <RNPickerSelect
          placeholder={{
            value: "Select the Fly Used",
            label: "Select the Fly Used",
          }}
          style={{ ...pickerStyles }}
          onValueChange={(value) => {
            this.handleChange("fly_id", parseInt(value));
          }}
          items={this.mapCurrentFlies()}
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
    paddingTop: 10,
    marginVertical: "3%",
  },
  
  label: {
    color: "#212326",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 5,
  },
  
  input: {
    color: "#212326",
    fontSize: 14,
    textAlign: "center",
    width: "70%",
    height: 45,
    marginBottom: 5,
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
});

const pickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    alignSelf: "center",
    textAlign: "center",
    width: "70%",
    height: 45,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 0.2,
    borderColor: "#212326",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
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
