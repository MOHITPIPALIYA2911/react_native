import { TouchableOpacity, Text } from "react-native";
import React from "react";
import tailwind from "twrnc";

export default function Formbutton(props) {
  let { text, primary, ...other } = props;
  let prStyle = tailwind`bg-blue-500 border-none px-6 py-3 rounded mb-3`,
    secStyle = tailwind`border-blue-500 border bg-transparent px-6 py-3 rounded mb-3`,
    peText = tailwind`text-center text-white font-bold`,
    secText = tailwind`text-center text-blue-500 font-bold`;

  return (
    <TouchableOpacity style={primary ? prStyle : secStyle} {...other}>
      <Text style={primary ? peText : secText}>{text}</Text>
    </TouchableOpacity>
  );
}
