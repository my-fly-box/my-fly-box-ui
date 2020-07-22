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
        <View>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input}
            placeholder = "Enter Fly Name"
            value={this.props.currentFlyEntry.name}
            onChangeText = {this.handleName}
          />

          <Text style={styles.label}>Color</Text>
          <TextInput style={styles.input}
            placeholder = "Enter Fly Color"
            value={this.props.currentFlyEntry.color}
            onChangeText = {this.handleColor}
          />

          <Text style={styles.label}>Size</Text>
          <TextInput style={styles.input}
            placeholder = "Enter Fly Size"
            keyboardType = 'number-pad'
            value={this.props.currentFlyEntry.size.toString()}
            onChangeText = {this.handleSize}
          />

          <Text style={styles.label}>Category</Text>
          <TextInput style={styles.input}
            placeholder = "Enter Fly Category"
            value={this.props.currentFlyEntry.category}
            onChangeText = {this.handleType}
          />

          <Text style={styles.label}>Amount</Text>
          <TextInput style={styles.input}
            placeholder = "Enter Fly Amount"
            keyboardType = 'number-pad'
            value={this.props.currentFlyEntry.amount}
            onChangeText = {this.handleAmount}
          />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  label: {
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'white',
    textAlign: 'center',
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