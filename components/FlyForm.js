import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

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

render() {
    return (
        <View>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input}
            placeholder = "Enter Fly Name"
            onChangeText = {this.handleName}
          />

          <Text style={styles.label}>Color</Text>
          <TextInput style={styles.input}
            placeholder = "Enter Fly Color"
            onChangeText = {this.handleColor}
          />

          <Text style={styles.label}>Size</Text>
          <TextInput style={styles.input}
            placeholder = "Enter Fly Size"
            onChangeText = {this.handleSize}
          />

          <Text style={styles.label}>Size</Text>
          <TextInput style={styles.input}
            placeholder = "Enter Fly Type"
            onChangeText = {this.handleType}
          />

          <Text style={styles.label}>Size</Text>
          <TextInput style={styles.input}
            placeholder = "Enter Fly Amount"
            keyboardType = 'number-pad'
            onChangeText = {this.handleAmount}
          />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  label: {
    flex: 1,
    textAlign: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    textAlign: 'center',
  },
})

export default FlyForm;