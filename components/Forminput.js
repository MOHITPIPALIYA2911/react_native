import { TextInput, Appearance } from "react-native";
import React, { useEffect, useState } from "react";
import tailwind from "twrnc";

export default function Forminput(props) {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  useEffect(() => {
    Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme);
    });
  }, []);
  let { placeHolder, ...other } = props;
  return (
    <TextInput
      style={
        theme == "dark"
          ? tailwind`border border-0 bg-neutral-800 rounded-md px-3 py-2 mb-4 text-base text-neutral-400`
          : tailwind`border border-0 bg-neutral-300 rounded-md px-3 py-2 mb-4 text-base text-neutral-700`
      }
      placeholder={placeHolder}
      placeholderTextColor={theme == "dark" ? "#5A5A5A" : "gray"}
      {...other}
    />
  );
}
