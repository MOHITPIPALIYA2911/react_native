import { TouchableOpacity, Text } from "react-native";
import React from "react";
import tailwind from "twrnc";

export default function Formbutton(props) {
  let { text, ...other } = props;

  return (
    <TouchableOpacity
      style={tailwind`bg-violet-700 border-0 px-6 py-3 rounded mb-3`}
      {...other}
    >
      <Text style={tailwind`text-center text-white font-bold`}>{text}</Text>
    </TouchableOpacity>
  );
}
