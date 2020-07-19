import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Fly({ navigation, fly }) {
return (
    <View style={styles.container}>
        <Text> {fly.name}</Text> 
        <Text> {fly.category} </Text>
        <Text> {fly.size} </Text>
        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('EditFly')}>
            <Text style={styles.buttonText}>Edit Fly</Text>
        </TouchableOpacity>
    </View>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-around',
        padding: 5,
    },
    button: {
        backgroundColor: '#264653',
        padding: 5,
        alignItems: 'center',
        alignSelf: 'center',
        width: 60,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 13,
        fontFamily: 'Helvetica-Bold',
        color: 'white',
        textAlign: 'center',
    }
});