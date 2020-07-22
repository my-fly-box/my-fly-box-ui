import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
// import { updateFlyEntry } from '../actions'
import { connect } from "react-redux";

class FishForm extends Component {
  state = {
    species: '',
    image: '',
    length: '',
    weight: '',
		location: '',
		flyName: ''
  }

  handleSpecies = (text) => {
    this.setState({ species: text })
    // this.props.updateFlyEntry('name', text)
  }

  // handleColor = (text) => {
  //   this.setState({ color: text })
  //   this.props.updateFlyEntry('color', text)
  // }

  // handleSize = (text) => {
  //   this.setState({ size: text })
  //   this.props.updateFlyEntry('size', text)
  // }

  // handleType = (text) => {
  //   this.setState({ category: text })
  //   this.props.updateFlyEntry('category', text)
  // }

  // handleAmount = (text) => {
  //   this.setState({ amount: text })
  //   this.props.updateFlyEntry('amount', text)
  // }

render() {
    return (
        <View>
          <Text style={styles.label}>Species Name</Text>
          <TextInput style={styles.input}
            placeholder = "Enter Species Name"
            // value={this.state.species}
            onChangeText = {this.handleSpecies}
          />

          {/* <Text style={styles.label}>Color</Text>
          <TextInput style={styles.input}
            placeholder = "Enter Fly Color"
            value={this.props.currentFlyEntry.color}
            onChangeText = {this.handleColor}
          />

          <Text style={styles.label}>Size</Text>
          <TextInput style={styles.input}
            placeholder = "Enter Fly Size"
            keyboardType = 'number-pad'
            value={this.props.currentFlyEntry.size}
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
            onChangeText = {this.handleAmount} */}
          {/* /> */}
					<TouchableOpacity style={styles.button}
            onPress = {() => {
              alert('species: ' + this.state.species)
              }}>
            <Text>state check</Text>
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

// const mapStateToProps = state => ({
//   currentFlyEntry: state.currentFlyEntry,
// })

// const mapDispatchToProps = (dispatch) => ({
//   updateFlyEntry: (name, data) => dispatch( updateFlyEntry(name, data) ),
// })

export default connect(null, null)(FishForm);