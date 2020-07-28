import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FlyBox from "./containers/FlyBox";
import AddFly from "./containers/AddFly";
import EditFly from "./containers/EditFly";
import FishCaught from "./containers/FishCaught";
import AddFish from "./containers/AddFish";
import EditFish from "./containers/EditFish";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import PhotoSelector from "./components/PhotoSelector";

const Tab = createMaterialBottomTabNavigator();
const FlyBoxStack = createStackNavigator();
const AddFlyStack = createStackNavigator();
const FishStack = createStackNavigator();
const store = createStore(rootReducer, composeWithDevTools());

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="MyFlyBox"
      activeColor={"#f7841f"}
      barStyle={{ backgroundColor: "#212326" }}
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
            backgroundColor: "#212326",
          },
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <FlyBoxStack.Screen
        name="EditFly"
        component={EditFly}
        options={{
          title: "Edit Fly",
          headerStyle: {
            backgroundColor: "#212326",
          },
          headerTintColor: "#ffffff",
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
          title: "Add New Fly",
          headerStyle: {
            backgroundColor: "#212326",
          },
          headerTintColor: "#ffffff",
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
            backgroundColor: "#212326",
          },
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <FishStack.Screen
        name="EditFish"
        component={EditFish}
        options={{
          title: "Edit Fish",
          headerStyle: {
            backgroundColor: "#212326",
          },
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <FishStack.Screen
        name="AddFish"
        component={AddFish}
        options={{
          title: "Add Fish",
          headerStyle: {
            backgroundColor: "#212326",
          },
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <FishStack.Screen
        name="PhotoSelector"
        component={PhotoSelector}
        options={{
          title: "Upload or take a photo of your catch!",
          headerStyle: {
            backgroundColor: "#212326",
          },
          headerTintColor: "#ffffff",
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
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
