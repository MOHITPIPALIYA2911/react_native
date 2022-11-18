import { TouchableOpacity, Text, View, Image, Appearance } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import tailwind from "twrnc";
import Title from "../components/Title";
import Forminput from "../components/Forminput";
import Formbutton from "../components/Formbutton";
import Layout from "./Layout";
import Register from "./Register";
import Forgot from "./Forgot";
import { LinearGradient } from "expo-linear-gradient";

// for Validation
const login = (email, pass) => {
  if (!email || !pass) {
    alert("Please enter all the required fields!!");
  } else {
    alert("finding result");
  }
};

// Form input group styling
const FormInputGroup = ({ children }) => {
  return <View style={tailwind`my-3`}>{children}</View>;
};

export default function Login() {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  useEffect(() => {
    Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme);
    });
  }, []);
  const navigation = useNavigation(),
    [email, setEmail] = useState(""),
    [pass, setPass] = useState("");
  return (
    <Layout>
      <View style={tailwind`w-3/4`}>
        {/* Title */}
        <Title text="Login in to IPx" />
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
        {/* login form */}
        <View>
          <FormInputGroup>
            <Forminput
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeHolder="Email or phone number"
            ></Forminput>
            <Forminput
              onChangeText={(text) => setPass(text)}
              value={pass}
              secureTextEntry={true}
              placeHolder="password"
            ></Forminput>
          </FormInputGroup>
          <Formbutton text="LOGIN" onPress={() => login(email, pass)} />
          <View style={tailwind`justify-between  flex-row`}>
            <TouchableOpacity onPress={() => navigation.navigate(Register)}>
              <Text style={tailwind`text-neutral-500 text-sm`}>
                Create a new account
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(Forgot)}>
              <Text style={tailwind`text-neutral-500 text-sm`}>
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Line */}
        <View style={tailwind`mt-7 flex flex-row items-center`}>
          <View style={tailwind` flex-1 h-px bg-neutral-600`} />
          <View>
            <Text style={tailwind` w-32 text-center text-neutral-600`}>
              Or continue with
            </Text>
          </View>
          <View style={tailwind` flex-1 h-px bg-neutral-600`} />
        </View>
      </View>
      {/* T&C image/button */}
      <View style={tailwind`flex justify-center`}>
        <View
          style={
            theme == "dark"
              ? tailwind` border border-neutral-700 rounded-full p-3.5 mt-6 `
              : tailwind` border border-neutral-500 rounded-full p-3.5 mt-6 `
          }
        >
          <Image
            source={require("../assets/metamask.png")}
            style={tailwind` w-6 h-6 `}
          ></Image>
        </View>
      </View>
      {/* T&C Text */}
      <Text
        style={
          theme == "dark"
            ? tailwind`w-3/4 text-white text-center text-xs mt-3 font-extralight text-neutral-500`
            : tailwind`w-3/4 text-white text-center text-xs mt-3 font-light text-neutral-800`
        }
      >
        By clicking above button, you agree to our terms of use and privacy
        policies
      </Text>
    </Layout>
  );
}
