import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FlyForm from '../components/FlyForm';
import { connect } from "react-redux";
import { addFly, clearFlyEntry } from '../actions';

class AddFly extends Component {

  addFly = (flyToAdd) => {
    this.props.addFly(this.props.currentFlyEntry);
    this.props.clearFlyField()
  }

  cancelFlyEntry = () => {
    this.props.clearFlyField()
  }

  render() {
    return (
      <View style={styles.container}>
        <FlyForm />
        
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity style={styles.button}
              onPress = {() => {this.cancelFlyEntry()}}>
            <Text style={styles.button}>Cancel</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.button}
              onPress = {() => {this.addFly()}}>
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
    currentFlyEntry: state.currentFlyEntry,
  })

const mapDispatchToProps = (dispatch) => ({
    addFly: data => dispatch( addFly(data) ),
    clearFlyField: () => dispatch( clearFlyEntry() ),
  })

export default connect(mapStateToProps, mapDispatchToProps)(AddFly);