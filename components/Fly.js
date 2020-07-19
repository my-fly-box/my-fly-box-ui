import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Button from './Button'

export default function Fly({ navigation, fly }) {
return (
    <View style={styles.container}>
        <Text> {fly.name}</Text> 
        <Text> {fly.category} </Text>
        <Text> {fly.size} </Text>
        <Button
        buttonStyle={styles.button}
        title="Edit Fly"
        onPress={() => navigation.navigate('EditFly')}
        /> 
    </View>
)
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-around',

},
button: {
    backgroundColor: '#00aeef',
    borderColor: 'red',
    borderWidth: 5,
    borderRadius: 15       
 }
});