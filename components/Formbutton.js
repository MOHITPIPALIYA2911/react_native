import { TouchableOpacity, Text } from "react-native";
import React from "react";
import tailwind from "twrnc";
import { LinearGradient } from "expo-linear-gradient";

export default function Formbutton(props) {
  let { text, ...other } = props;
  return (
    <TouchableOpacity {...other}>
      <LinearGradient
        // Button Linear Gradient
        style={tailwind` dark:bg-white border-0 px-6 py-3 rounded-xl mb-3`}
        colors={["#df7198", "#8a6ecc", "#466bf4"]}
      >
        <Text style={tailwind`text-center text-white font-bold`}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
