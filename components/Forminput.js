import { TextInput } from "react-native";
import React from "react";
import tailwind from "twrnc";

export default function Forminput(props) {
  let { ...other } = props;
  return (
    <TextInput
      style={tailwind`border border-blue-400 rounded px-3 py-2`}
      {...other}
    />
  );
}
