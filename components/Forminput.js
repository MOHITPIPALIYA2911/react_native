import { TextInput } from "react-native";
import React from "react";
import tailwind from "twrnc";

export default function Forminput(props) {
  let { placeHolder, ...other } = props;
  return (
    <TextInput
      style={tailwind`border border-0 bg-neutral-800 rounded-md px-3 py-2 mb-4 text-base text-neutral-400`}
      placeholder={placeHolder}
      placeholderTextColor={"#5A5A5A"}
      {...other}
    />
  );
}
