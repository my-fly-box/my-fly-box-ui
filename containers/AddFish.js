import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import FishForm from '../components/FishForm'
import { clearFishEntry, addFish } from '../actions';
import { addFishToAPI } from "../ApiCalls";

class AddFish extends Component {
  constructor(props) {
    super(props);
  }

  addFish = () => {
    const currentFishEntry = this.props.currentFishEntry
    addFishToAPI(currentFishEntry)
      .then(data => {
        this.props.addFish(data.data);
        this.props.clearFishEntry();
      }
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {/* working on getting camera integrated */}
        <TouchableOpacity style={styles.button}
            onPress = {() => {
              this.props.navigation.navigate('PhotoSelector');
              }}>
            <Text style={styles.button}>Upload Image</Text>
          </TouchableOpacity>

        <FishForm />
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}
            onPress = {() => {
              this.props.navigation.navigate('FishCaught');
              this.props.clearFishEntry();
              }}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.button}
            onPress = {() => {
              this.addFish();
              this.props.navigation.navigate('FishCaught');
              this.props.clearFishEntry();
              }}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    width: "100%",
    height:"100%",
    justifyContent: 'center',
  },
  buttonContainer: {
    width: "80%",
    height:"100%", 
    flex: 1, 
    flexDirection: 'row',
    alignSelf: "center",
  },
  button: {
    backgroundColor: 'white',
    color: 'white',
    flex: 1,
    alignSelf: "center",
    margin: 5,
    marginTop: "20%",
    height: "20%",
    width: "40%",
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#2A9D8F',
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
})

const mapStateToProps = state => ({
  currentFishEntry: state.currentFishEntry,
})

const mapDispatchToProps = (dispatch) => ({
  clearFishEntry: () => dispatch( clearFishEntry() ),
  addFish: data => dispatch( addFish(data) ),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddFish);