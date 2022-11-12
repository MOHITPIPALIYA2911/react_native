import { Text } from "react-native";
import React from "react";
import tailwind from "twrnc";

export default function Title({ text }) {
  return (
    <Text style={tailwind`text-2xl font-bold tracking-wide p-2 text-center`}>
      {text}
    </Text>
  );
}
