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
        
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity style={styles.button}
            onPress = {() => {
              this.props.navigation.navigate('FishCaught');
              this.props.clearFishEntry();
              }}>
            <Text style={styles.button}>Cancel</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.button}
            onPress = {() => {
              this.addFish();
              this.props.navigation.navigate('FishCaught');
              this.props.clearFishEntry();
              }}>
            <Text style={styles.button}>Submit</Text>
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
  },
  button: {
    backgroundColor: '#00a8d5',
    color: 'white',
    margin: 5,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
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