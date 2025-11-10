import { Keyboard, Pressable, ScrollView, Text } from "react-native";
import Pressure from "../components/Pressure/Pressure";
import Button from "../components/Button/Button";
import { useState } from "react";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "../styles/theme";

export default function Home() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;
  const [pressure, setPressure] = useState<string>("");
  const [pulse, setPulse] = useState<string>("");
  const handleOnChange = () => {
    console.log(pressure, pulse);
    setPulse("");
    setPressure("");
  };
  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: "flex-start",
      }}
      style={{ flex: 1, backgroundColor: "transparent" }}
      keyboardShouldPersistTaps="handled"
    >
      <Pressable
        style={{
          backgroundColor: "transparent",
          flex: 1,
          alignItems: "center",
          gap: 32,
          paddingVertical: 24,
          paddingHorizontal: 24,
        }}
        onPress={Keyboard.dismiss}
      >
        <Text style={[theme.textXl, theme.primary]}>Збережи свої дані</Text>
        <Pressure
          pressure={pressure}
          setPressure={setPressure}
          pulse={pulse}
          setPulse={setPulse}
        />
        <Button onPress={handleOnChange}>Зберегти</Button>
      </Pressable>
    </ScrollView>
  );
}
