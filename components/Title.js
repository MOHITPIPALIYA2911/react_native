import { Text, Appearance } from "react-native";
import React, { useEffect, useState } from "react";
import tailwind from "twrnc";

export default function Title({ text }) {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  useEffect(() => {
    Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme);
    });
  }, []);
  return (
    <Text
      style={
        theme == "dark"
          ? tailwind`text-2xl font-bold text-white tracking-wide p-2 text-center`
          : tailwind`text-2xl font-bold text-black tracking-wide p-2 text-center`
      }
    >
      {text}
    </Text>
  );
}
