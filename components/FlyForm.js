import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

class FlyForm extends Component {
  state = {
    name: '',
    color: '',
    size: '',
    type: '',
    amount: null
  }

  handleName = (text) => {
    this.setState({ name: text })
  }

  handleColor = (text) => {
    this.setState({ color: text })
  }

  handleSize = (text) => {
    this.setState({ size: text })
  }

  handleType = (text) => {
    this.setState({ type: text })
  }

  handleAmount = (text) => {
    this.setState({ amount: text })
  }

  checkState = (name, color, size, type, amount) => {
    alert('name: ' + name + ' color: ' + color + ' size: ' + size + ' type: ' + type
    + ' amount: ' + amount)
  }

render() {
    return (
        <View>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input}
            placeholder = "Enter Fly Name"
            value={this.state.name}
            onChangeText = {this.handleName}
          />

          <Text style={styles.label}>Color</Text>
          <TextInput style={styles.input}
            placeholder = "Enter Fly Color"
            value={this.state.color}
            onChangeText = {this.handleColor}
          />

          <Text style={styles.label}>Size</Text>
          <TextInput style={styles.input}
            placeholder = "Enter Fly Size"
            value={this.state.size}
            onChangeText = {this.handleSize}
          />

          <Text style={styles.label}>Type</Text>
          <TextInput style={styles.input}
            placeholder = "Enter Fly Type"
            value={this.state.type}
            onChangeText = {this.handleType}
          />

          <Text style={styles.label}>Amount</Text>
          <TextInput style={styles.input}
            placeholder = "Enter Fly Amount"
            keyboardType = 'number-pad'
            value={this.state.amount}
            onChangeText = {this.handleAmount}
          />

        <TouchableOpacity
          onPress = {() => this.checkState(this.state.name, this.state.color, 
          this.state.size, this.state.type, this.state.amount)}>
          <Text style={styles.button}>Check State</Text>
        </TouchableOpacity>
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

export default FlyForm;