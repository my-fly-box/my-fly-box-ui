import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { updateFishEntry } from '../actions'
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
    this.props.updateFishEntry('species', text)
  }

  handleImage = (text) => {
		this.setState({ image: text })
		this.props.updateFishEntry('image', text)
  }

  handleLength = (text) => {
		this.setState({ length: text })
		this.props.updateFishEntry('length', text)
  }

  handleWeight = (text) => {
		this.setState({ weight: text })
		this.props.updateFishEntry('weight', text)
  }

  handleLocation = (text) => {
		this.setState({ location: text })
		this.props.updateFishEntry('location', text)
	}
	
	handleFlyName = (text) => {
		this.setState({ flyName: text })
		this.props.updateFishEntry('flyName', text)
  }

render() {
    return (
        <View>
          <Text style={styles.label}>Species Name</Text>
          <TextInput style={styles.input}
            placeholder = "Enter Species Name"
            value={this.props.currentFishEntry.species}
            onChangeText = {this.handleSpecies}
          />

					<Text style={styles.label}>Image</Text>
          <TextInput style={styles.input}
            placeholder = "Enter Image"
            value={this.props.currentFishEntry.image}
            onChangeText = {this.handleImage}
          />

					<Text style={styles.label}>Length</Text>
          <TextInput style={styles.input}
						placeholder = "Enter Length"
						keyboardType = 'number-pad'
            value={this.props.currentFishEntry.length}
            onChangeText = {this.handleLength}
          />

					<Text style={styles.label}>Weight</Text>
          <TextInput style={styles.input}
						placeholder = "Enter Weight"
						keyboardType = 'number-pad'
            value={this.props.currentFishEntry.weight}
            onChangeText = {this.handleWeight}
          />

					<Text style={styles.label}>Location</Text>
          <TextInput style={styles.input}
            placeholder = "Enter Location"
            value={this.props.currentFishEntry.location}
            onChangeText = {this.handleLocation}
          />

					<Text style={styles.label}>Fly Name</Text>
          <TextInput style={styles.input}
            placeholder = "Select Fly"
            value={this.props.currentFishEntry.flyName}
            onChangeText = {this.handleFlyName}
          />

					<TouchableOpacity style={styles.button}
            onPress = {() => {
							alert('species: ' + this.state.species + ' image: ' + this.state.image 
								+ ' length: ' + this.state.length + ' weight: ' + this.state.weight
								+ ' location: ' + this.state.location + ' fly name: ' + this.state.flyName)
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

const mapStateToProps = state => ({
  currentFishEntry: state.currentFishEntry,
})

const mapDispatchToProps = (dispatch) => ({
  updateFishEntry: (name, data) => dispatch( updateFishEntry(name, data) ),
})

export default connect(mapStateToProps, mapDispatchToProps)(FishForm);