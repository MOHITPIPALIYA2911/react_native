import { View } from "react-native";
import React, { useState } from "react";
import tailwind from "twrnc";
import Formlables from "./Formlables";
import Forminput from "./Forminput";
import Formbutton from "./Formbutton";
import { useNavigation } from "@react-navigation/native";

const FormInputGroup = ({ children }) => {
  return <View style={tailwind`my-3`}>{children}</View>;
};

export default function Form({ signup, onSubmit }) {
  const navigation = useNavigation(),
    screen = signup ? "Login" : "Register",
    [email, setEmail] = useState("Enter your email"),
    [pass, setPass] = useState("Enter your password");
  return (
    <View>
      <FormInputGroup>
        <Formlables text="Email" />
        <Forminput
          onChangeText={(text) => setEmail(text)}
          value={email}
        ></Forminput>
        <Formlables text="Password" />
        <Forminput
          onChangeText={(text) => setPass(text)}
          value={pass}
          secureTextEntry={true}
        ></Forminput>
      </FormInputGroup>
      <Formbutton
        text={!signup ? "Login" : "Resister"}
        primary={true}
        onPress={() => onSubmit(email, pass)}
      />
      <Formbutton
        text={signup ? "Login" : "Resister"}
        primary={false}
        onPress={() => navigation.navigate(screen)}
      />
    </View>
  );
}
