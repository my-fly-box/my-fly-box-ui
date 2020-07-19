// Rachael: Attempted to create a custom component but couldn't get it working properly. Revisit later.
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const CustomButton = ({ text, onPress, customStyles, customTextStyles }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, customStyles]}>
    <Text style={[styles.text, customTextStyles]}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#264653',
    padding: 5,
    alignItems: 'center',
    alignSelf: 'center',
    width: 60,
    borderRadius: 5
  },
  text: {
    fontSize: 13,
    fontFamily: 'Helvetica-Bold',
    color: 'white',
    textAlign: 'center',
  },
});