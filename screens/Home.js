import { TouchableOpacity, View, Text, Appearance } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import tailwind from "twrnc";
import Title from "../components/Title";
import Forminput from "../components/Forminput";
import Formbutton from "../components/Formbutton";
import Layout from "./Layout";
import Login from "./Login";

export default function Home() {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  const navigation = useNavigation();
  useEffect(() => {
    Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme);
    });
  }, []);
  return (
    <Layout>
      {/* Title */}
      <View style={tailwind`w-3/4`}>
        <Title text="Home page" />
        <Text
          style={
            theme == "dark"
              ? tailwind`text-center text-sm mt-3 mb-8 font-extralight text-neutral-400`
              : tailwind`text-center text-sm mt-3 mb-8 font-light text-neutral-600`
          }
        >
          Welcome to home page from mohit pipaliya
        </Text>
        {/* signup form */}
        <View>
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
