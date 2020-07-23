import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FlyBox from "./containers/FlyBox";
import AddFly from "./containers/AddFly";
import EditFly from "./containers/EditFly";
import FishCaught from "./containers/FishCaught";
import AddFish from "./containers/AddFish";
import EditFish from "./containers/EditFish";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const Tab = createMaterialBottomTabNavigator();
const FlyBoxStack = createStackNavigator();
const AddFlyStack = createStackNavigator();
const FishStack = createStackNavigator();
const store = createStore(rootReducer, composeWithDevTools());

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="MyFlyBox"
      activeColor={"white"}
      barStyle={{ backgroundColor: "#2A9D8F" }}
    >
      <Tab.Screen
        name="MyFlyBox"
        component={FlyBoxContainer}
        options={{
          tabBarLabel: "My Fly Box",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="hook" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="AddFly"
        component={AddFlyContainer}
        options={{
          tabBarLabel: "Add Fly",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="FishCaught"
        component={FishContainer}
        options={{
          tabBarLabel: "Fish Caught",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="fish" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function FlyBoxContainer() {
  return (
    <FlyBoxStack.Navigator>
      <FlyBoxStack.Screen
        name="MyFlyBox"
        component={FlyBox}
        options={{
          title: "My Fly Box",
          headerStyle: {
            backgroundColor: "#2A9D8F",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <FlyBoxStack.Screen
        name="EditFly"
        component={EditFly}
        options={{
          title: "Edit Fly Information",
          headerStyle: {
            backgroundColor: "#2A9D8F",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </FlyBoxStack.Navigator>
  );
}

function AddFlyContainer() {
  return (
    <AddFlyStack.Navigator>
      <AddFlyStack.Screen
        name="AddFly"
        component={AddFly}
        options={{
          title: "My Fly Box",
          headerStyle: {
            backgroundColor: "#2A9D8F",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </AddFlyStack.Navigator>
  );
}

function FishContainer() {
  return (
    <FishStack.Navigator>
      <FishStack.Screen
        name="FishCaught"
        component={FishCaught}
        options={{
          title: "Fish Caught",
          headerStyle: {
            backgroundColor: "#2A9D8F",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <FishStack.Screen
        name="EditFish"
        component={EditFish}
        options={{
          title: "Edit Fish Information",
          headerStyle: {
            backgroundColor: "#2A9D8F",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <FishStack.Screen
        name="AddFish"
        component={AddFish}
        options={{
          title: "Add Fish Information",
          headerStyle: {
            backgroundColor: "#2A9D8F",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </FishStack.Navigator>
  );
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
