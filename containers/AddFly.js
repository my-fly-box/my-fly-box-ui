import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FlyForm from '../components/FlyForm'

export default function AddFly() {
    return (
        <View style={styles.container}>
            <View>
                <FlyForm />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 45,
    },
})