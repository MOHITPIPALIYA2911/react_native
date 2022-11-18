import { TouchableOpacity, View, Text, Appearance } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import tailwind from "twrnc";
import Title from "../components/Title";
import Forminput from "../components/Forminput";
import Formbutton from "../components/Formbutton";
import Layout from "./Layout";
import Login from "./Login";
// import { SafeAreaView } from "react-native";
// for validation
const register = (fname, lname, email, pass, mobile, refcode) => {
  if (!fname || !lname || !mobile || !refcode || !email || !pass) {
    alert("Please enter all the required fields!!");
  } else if (pass.length <= 5) {
    alert("Make your password atleast more then 5 characters long!");
  } else {
    alert("submited");
  }
};
// Form input group styling
const FormInputGroup = ({ children }) => {
  return <View style={tailwind`my-3`}>{children}</View>;
};

export default function Register() {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  useEffect(() => {
    Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme);
    });
  }, []);
  const navigation = useNavigation(),
    [fname, setFname] = useState(""),
    [lname, setLname] = useState(""),
    [email, setEmail] = useState(""),
    [pass, setPass] = useState(""),
    [mobile, setMobile] = useState(""),
    [refcode, setRefcode] = useState("");
  return (
    <Layout>
      {/* <SafeAreaView> */}
      {/* Title */}
      <View style={tailwind`w-3/4`}>
        <Title text="Create a new account" />
        <Text
          style={
            theme == "dark"
              ? tailwind`text-center text-sm mt-3 mb-8 font-extralight text-neutral-400`
              : tailwind`text-center text-sm mt-3 mb-8 font-light text-neutral-600`
          }
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
              secureTextEntry={true}
              placeHolder="New password"
            ></Forminput>
            <Forminput
              onChangeText={(text) => setMobile(text)}
              value={mobile}
              keyboardType="numeric"
              maxLength={10}
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
      {/* </SafeAreaView> */}
    </Layout>
  );
}
