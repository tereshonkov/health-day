import { Keyboard, Pressable, ScrollView, Image } from "react-native";
import { styles } from "../styles/styles";
import Pressure from "../components/Pressure/Pressure";
import Button from "../components/Button/Button";
import { useState } from "react";

export default function Home() {
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
        flexGrow: 1,
        justifyContent: "flex-start",
      }}
      keyboardShouldPersistTaps="handled"
    >
      <Pressable
        style={{
          ...styles.container,
          gap: 32,
          paddingBottom: 24,
          paddingTop: 24,
        }}
        onPress={Keyboard.dismiss}
      >
        <Image
          source={require("../assets/smoke.png")}
          style={styles.backgroundImage}
        />
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
