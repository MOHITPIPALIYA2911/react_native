import { View } from "react-native";
import React from "react";
import tailwind from "twrnc";
import Form from "../components/Form";
import Title from "../components/Title";
import Layout from "./Layout";

const register = (email, pass) => {
  if (!email || !pass) alert("Please enater all the required fields!!");
};

export default function Register() {
  return (
    <Layout>
      <View style={tailwind`w-3/4`}>
        <Title text="Register" />
        <Form signup={true} onSubmit={register} />
      </View>
    </Layout>
  );
}
