import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { updateFlyEntry, clearFlyEntry } from '../actions'
import { connect } from "react-redux";

class FlyForm extends Component {
  state = {
    name: '',
    color: '',
    size: '',
    category: '',
    amount: ''
  }

  componentDidMount() {
    this.props.clearFlyEntry()
  }

  handleName = (text) => {
    this.setState({ name: text })
    this.props.updateFlyEntry('name', text)
  }

  handleColor = (text) => {
    this.setState({ color: text })
    this.props.updateFlyEntry('color', text)
  }

  handleSize = (text) => {
    this.setState({ size: text })
    this.props.updateFlyEntry('size', text)
  }

  handleType = (text) => {
    this.setState({ category: text })
    this.props.updateFlyEntry('category', text)
  }

  handleAmount = (text) => {
    this.setState({ amount: text })
    this.props.updateFlyEntry('amount', text)
  }

render() {
    return (
        <View style={styles.container}>
          <TextInput style={styles.input}
            placeholder = "Enter Fly Name"
            value={this.props.currentFlyEntry.name}
            onChangeText = {this.handleName}
          />

          <TextInput style={styles.input}
            placeholder = "Enter Fly Color"
            value={this.props.currentFlyEntry.color}
            onChangeText = {this.handleColor}
          />

          <TextInput style={styles.input}
            placeholder = "Enter Fly Size"
            keyboardType = 'number-pad'
            value={this.props.currentFlyEntry.size.toString()}
            onChangeText = {this.handleSize}
          />

          <TextInput style={styles.input}
            placeholder = "Enter Fly Category"
            value={this.props.currentFlyEntry.category}
            onChangeText = {this.handleType}
          />

          <TextInput style={styles.input}
            placeholder = "Enter Fly Amount"
            keyboardType = 'number-pad'
            value={this.props.currentFlyEntry.amount.toString()}
            onChangeText = {this.handleAmount}
          />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 45,
  },
  label: {
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'white',
    textAlign: 'center',
    width: '70%',
    height: '25%',
    marginBottom: '3%',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
})

const mapStateToProps = state => ({
  currentFlyEntry: state.currentFlyEntry,
})

const mapDispatchToProps = (dispatch) => ({
  updateFlyEntry: (name, data) => dispatch( updateFlyEntry(name, data) ),
  clearFlyEntry: () => dispatch( clearFlyEntry() )
})

export default connect(mapStateToProps, mapDispatchToProps)(FlyForm);