import { TouchableOpacity, View, Text } from "react-native";
import React, { useState } from "react";
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
  const navigation = useNavigation(),
    [email, setEmail] = useState("");
  return (
    <Layout>
      {/* Title */}
      <View style={tailwind`w-3/4`}>
        <Title text="Forgot Password" />
        <Text
          style={tailwind`text-white text-center text-xs mt-3 mb-8 font-extralight text-neutral-400`}
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
            <Text style={tailwind`text-neutral-500 text-center text-sm`}>
              Back to login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
}
