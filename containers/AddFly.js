import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FlyForm from '../components/FlyForm'

export default function AddFly() {
  return (
    <View style={styles.container}>
      <FlyForm />

      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity style={styles.button}
          onPress = {() => {alert('Go to Home Page')}}>
          <Text style={styles.button}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
          onPress = {() => {alert('Submit Fly')}}>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
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