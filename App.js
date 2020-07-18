import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FlyBox from './containers/FlyBox';
import AddFly from './containers/AddFly';
import EditFly from './containers/EditFly';

const Tab = createMaterialBottomTabNavigator();
const FlyBoxStack = createStackNavigator();
const AddFlyStack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="MyFlyBox">
      <Tab.Screen name="MyFlyBox" component={FlyBoxContainer} />
      <Tab.Screen name="AddFly" component={AddFlyContainer} />
    </Tab.Navigator>
  );
}

function FlyBoxContainer() {
  return (
    <FlyBoxStack.Navigator>
      <FlyBoxStack.Screen name="MyFlyBox" component={FlyBox} />
      <FlyBoxStack.Screen name="EditFly" component={EditFly} /> 
    </FlyBoxStack.Navigator>
  )
}

function AddFlyContainer() {
  return (
    <AddFlyStack.Navigator>
      <AddFlyStack.Screen name="AddFly" component={AddFly} />
    </AddFlyStack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
