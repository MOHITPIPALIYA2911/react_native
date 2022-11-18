import { TouchableOpacity, View, Text, Appearance } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import tailwind from "twrnc";
import Title from "../components/Title";
import Forminput from "../components/Forminput";
import Formbutton from "../components/Formbutton";
import Layout from "./Layout";
import Login from "./Login";

// for validation
const forgot = (email) => {
  if (!email) alert("Please enter an email field!!");
};
// Form input group styling
const FormInputGroup = ({ children }) => {
  return <View style={tailwind`my-3`}>{children}</View>;
};

export default function Forgot() {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  useEffect(() => {
    Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme);
    });
  }, []);
  const navigation = useNavigation(),
    [email, setEmail] = useState("");
  return (
    <Layout>
      {/* Title */}
      <View style={tailwind`w-3/4`}>
        <Title text="Forgot Password" />
        <Text
          style={
            theme == "dark"
              ? tailwind`text-center text-sm mt-3 mb-8 font-extralight text-neutral-400`
              : tailwind`text-center text-sm mt-3 mb-8 font-light text-neutral-600`
          }
        >
          Enter the email associated with your account and we will send an email
          with the instructions to reset your password.
        </Text>
        {/* signup form */}
        <View>
          <FormInputGroup>
            <Forminput
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeHolder="Enter your email id"
            ></Forminput>
          </FormInputGroup>
          <Formbutton text="SUBMIT" onPress={() => forgot(email)} />
          <TouchableOpacity onPress={() => navigation.navigate(Login)}>
            <Text
              style={
                theme == "light"
                  ? tailwind`text-neutral-500 text-center text-sm`
                  : tailwind`text-neutral-500 text-center text-sm`
              }
            >
              Back to login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
}
