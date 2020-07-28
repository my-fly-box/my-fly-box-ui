import React, { Component } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { updateFlyEntry, clearFlyEntry } from "../actions";
import { connect } from "react-redux";

class FlyForm extends Component {
  state = {
    name: "",
    color: "",
    size: "",
    category: "",
    amount: "",
  };

  componentDidMount() {
    this.props.clearFlyEntry();
  }

  handleChange = (property, text) => {
    this.setState({ property: text });
    this.props.updateFlyEntry(property, text);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Fly Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Fly Name"
          value={this.props.currentFlyEntry.name}
          onChangeText={(text) => this.handleChange("name", text)}
        />

        <Text style={styles.label}>Fly Color:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Fly Color"
          value={this.props.currentFlyEntry.color}
          onChangeText={(text) => this.handleChange("color", text)}
        />

        <Text style={styles.label}>Fly Size:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Fly Size"
          keyboardType="number-pad"
          value={this.props.currentFlyEntry.size.toString()}
          onChangeText={(text) => this.handleChange("size", text)}
        />

        <Text style={styles.label}>Type of Fly:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Fly Type"
          value={this.props.currentFlyEntry.category}
          onChangeText={(text) => this.handleChange("category", text)}
        />

        <Text style={styles.label}>Quantity:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Fly Amount"
          keyboardType="number-pad"
          value={this.props.currentFlyEntry.amount.toString()}
          onChangeText={(text) => this.handleChange("amount", text)}
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
    marginVertical: "10%",
  },

  label: {
    color: "#212326",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 5,
  },

  input: {
    color: "#212326",
    fontSize: 18,
    textAlign: "center",
    width: "70%",
    height: "25%",
    marginBottom: "3%",
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

const mapStateToProps = (state) => ({
  currentFlyEntry: state.currentFlyEntry,
});

const mapDispatchToProps = (dispatch) => ({
  updateFlyEntry: (name, data) => dispatch(updateFlyEntry(name, data)),
  clearFlyEntry: () => dispatch(clearFlyEntry()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FlyForm);
