import { Text } from "react-native";
import React from "react";
import tailwind from "twrnc";

export default function Formlables({ text }) {
  return <Text style={tailwind`text-lg font-semibold mb-2`}>{text}</Text>;
}
