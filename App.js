import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FlyBox from './containers/FlyBox';
import AddFly from './containers/AddFly';
import EditFly from './containers/EditFly';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();
const FlyBoxStack = createStackNavigator();
const AddFlyStack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
      style={styles.navBar} initialRouteName="MyFlyBox"
      activeColor={"white"}
      barStyle={{ backgroundColor: '#2A9D8F' }}
      >
        <Tab.Screen 
          name="MyFlyBox" 
          component={FlyBoxContainer}
          options={{
            tabBarLabel: 'My Fly Box',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="hook" color={color} size={25} />
          )
          }} />
        <Tab.Screen 
          name="AddFly" 
          component={AddFlyContainer}
          options={{
            tabBarLabel: 'Add Fly',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="plus" color={color} size={25} />
          )
          }}/>
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
  navBar: {
    backgroundColor: "#264653"
  }
});
