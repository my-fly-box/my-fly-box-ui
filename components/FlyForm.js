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

  alert = (name, color) => {
    alert('Name: ' + name + ' Color: ' + color)
  }

render() {
    return (
        <View>
          <Text style={styles.header}>Name</Text>
          <TextInput style={styles.input}
            placeholder = "Enter Fly Name"
            onChangeText = {this.handleName}
          />

          <Text style={styles.header}>Color</Text>
          <TextInput style={styles.input}
            placeholder = "Enter Fly Color"
            onChangeText = {this.handleColor}
          />

          <TouchableOpacity style={styles.button}
            onPress = {() => this.alert(this.state.name, this.state.color)}>
            <Text style={styles.button}>Check</Text>
          </TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    textAlign: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#00a8d5',
    color: 'white',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default FlyForm;