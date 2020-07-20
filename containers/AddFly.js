import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FlyForm from '../components/FlyForm';
import { connect } from "react-redux";
import { addFly } from '../actions';

const TestAddFlies = 
    {
        id: 6,
        name: "Pandas in Pajamas",
        size: 2,
        color: "red",
        category: "unpleasing to fish",
        amount: 8,
        isFavorite: false,
        user_id: 1,
        created_at: "07/18/2020",
        updated_at: null
    }



class AddFly extends Component {

  addFly = (flyToAdd) => {
    this.props.addFly(flyToAdd)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlyForm />
        
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity style={styles.button}
              onPress = {() => {alert('Go to Home Page')}}>
            <Text style={styles.button}>Cancel</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.button}
              onPress = {() => {alert('Fly Added')}}>
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

// const mapStateToProps = state => ({
//     currentFlies: state.currentFlies,
//   })

const mapDispatchToProps = (dispatch) => ({
    addFly: data => dispatch( addFly(data) ),
  })

export default connect(null, mapDispatchToProps)(AddFly);