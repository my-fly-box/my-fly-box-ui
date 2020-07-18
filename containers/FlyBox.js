import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import EditFly from './EditFly';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function FlyBox({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.item}>Fly Box</Text>
            <Button
                style={styles.item}
                title="EditFly"
                onPress={() => navigation.navigate('EditFly')} >
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
  });