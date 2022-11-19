import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/Login";
import Register from "./screens/Register";
import Forgot from "./screens/Forgot";
import Home from "./screens/Home";
import { Appearance } from "react-native";
//import { initializeApp } from "firebase/app"; //Authentication purpose
//import { config } from "./firebaseconfig"; //Authentication purpose

const Stack = createNativeStackNavigator();

export default function App() {
  // userEffect(() => {                                      //Authentication purpose
  //   if (!firebase.app.length) {
  //     firebase.initializeApp(config);
  //   } else {
  //     firebase.app();
  //   }
  // }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
