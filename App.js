import React, { userEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/Login";
import Register from "./screens/Register";
//import { initializeApp } from "firebase/app"; //firebase concept
//import { config } from "./firebaseconfig"; //firebase concept

const Stack = createNativeStackNavigator();

export default function App() {
  // userEffect(() => {                                      //firebase concept
  //   if (!firebase.app.length) {
  //     firebase.initializeApp(config);
  //   } else {
  //     firebase.app();
  //   }
  // }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
