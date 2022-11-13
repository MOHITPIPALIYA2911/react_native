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
const register = (fname, lname, email, pass, mobile, refcode) => {
  if (!fname || !lname || !mobile || !refcode || !email || !pass)
    alert("Please enter all the required fields!!");
};
// Form input group styling
const FormInputGroup = ({ children }) => {
  return <View style={tailwind`my-3`}>{children}</View>;
};

export default function Register() {
  const navigation = useNavigation(),
    [fname, setFname] = useState(""),
    [lname, setLname] = useState(""),
    [email, setEmail] = useState(""),
    [pass, setPass] = useState(""),
    [mobile, setMobile] = useState(""),
    [refcode, setRefcode] = useState("");
  return (
    <Layout>
      {/* Title */}
      <View style={tailwind`w-3/4`}>
        <Title text="Create a new account" />
        <Text
          style={tailwind`text-white text-center text-xs mt-3 mb-8 font-extralight text-neutral-400`}
        >
          Invest as little as INR 10,000 into your favourite films, music, games
          and books.
        </Text>
        {/* signup form */}
        <View>
          <FormInputGroup>
            <Forminput
              onChangeText={(text) => setFname(text)}
              value={fname}
              placeHolder="First name"
            ></Forminput>
            <Forminput
              onChangeText={(text) => setLname(text)}
              value={lname}
              placeHolder="Last name"
            ></Forminput>
            <Forminput
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeHolder="Email"
            ></Forminput>
            <Forminput
              onChangeText={(text) => setPass(text)}
              value={pass}
              placeHolder="New password"
            ></Forminput>
            <Forminput
              onChangeText={(text) => setMobile(text)}
              value={mobile}
              placeHolder="Your 10 digit mobile number"
            ></Forminput>
            <Forminput
              onChangeText={(text) => setRefcode(text)}
              value={refcode}
              placeHolder="Your referral code"
            ></Forminput>
          </FormInputGroup>
          <Formbutton
            text="SIGNUP"
            onPress={() => register(fname, lname, email, pass, mobile, refcode)}
          />
          <TouchableOpacity onPress={() => navigation.navigate(Login)}>
            <Text style={tailwind`text-neutral-500 text-sm`}>
              Already have an account?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
}
