import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
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

  handleSpecies = (text) => {
    this.setState({ species: text });
    this.props.updateFishEntry("species", text);
  };

  handleImage = (text) => {
    this.setState({ image: text });
    this.props.updateFishEntry("image", text);
  };

  handleLength = (text) => {
    this.setState({ length: text });
    this.props.updateFishEntry("length", parseInt(text));
  };

  handleWeight = (text) => {
    this.setState({ weight: text });
    this.props.updateFishEntry("weight", parseInt(text));
  };

  handleLocation = (text) => {
    this.setState({ location: text });
    this.props.updateFishEntry("location", text);
  };

  handleFlyId = (value) => {
    this.setState({ flyName: value });
    this.props.updateFishEntry("fly_id", parseInt(value));
  };

  mapCurrentFlies = () => {
    return this.props.currentFlies.map((fly) => {
      return { value: fly.attributes.id, label: fly.attributes.name };
    });
  };

  render() {
    return (
      <View>
        <Text style={styles.label}>Species Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Species Name"
          value={this.props.currentFishEntry.species}
          onChangeText={this.handleSpecies}
        />

        <Text style={styles.label}>Image</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Image"
          value={this.props.currentFishEntry.image}
          onChangeText={this.handleImage}
        />

        <Text style={styles.label}>Length</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Length"
          keyboardType="number-pad"
          value={this.props.currentFishEntry.length.toString()}
          onChangeText={this.handleLength}
        />

        <Text style={styles.label}>Weight</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Weight"
          keyboardType="number-pad"
          value={this.props.currentFishEntry.weight.toString()}
          onChangeText={this.handleWeight}
        />

        <Text style={styles.label}>Location</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Location"
          value={this.props.currentFishEntry.location}
          onChangeText={this.handleLocation}
        />

        <Text style={styles.label}>Select Fly Name</Text>
        <RNPickerSelect
          onValueChange={(value) => {
            this.handleFlyId(value);
          }}
          items={this.mapCurrentFlies()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    textAlign: "center",
  },
  input: {
    backgroundColor: "white",
    textAlign: "center",
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
