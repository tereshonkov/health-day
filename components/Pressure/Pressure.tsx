import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  Pressable,
} from "react-native";
import { styles } from "../../styles/styles";
import { MaskedTextInput } from "react-native-mask-text";
import { useState } from "react";

export default function Pressure({pressure, setPressure, pulse, setPulse}: any) {
  const [morningActive, setMorningActive] = useState(true);

  const handlePressureChange = (text: string) => {
    const digitsOnly = text.replace(/[^0-9]/g, "");
    const limited = digitsOnly.slice(0, 5);
    const formatted =
      limited.length <= 3
        ? limited
        : `${limited.slice(0, 3)}/${limited.slice(3)}`;

    setPressure(formatted);
  };
  const handlePulseChange = (text: string) => {
    const only = text.replace(/[^0-9]/g, "").slice(0, 3);
    setPulse(only);
  };
  return (
    <Pressable onPress={Keyboard.dismiss} style={pressureStyles.container}>
      <View style={pressureStyles.topBlock}>
        <Pressable onPress={() => setMorningActive(true)} style={morningActive ? pressureStyles.blockDayActive : pressureStyles.blockDay}>
          <Text style={styles.textSm}>Ранок</Text>
        </Pressable>
        <Pressable onPress={() => setMorningActive(false)} style={morningActive ? pressureStyles.blockDay : pressureStyles.blockDayActive}>
          <Text style={styles.textSm}>Вечір</Text>
        </Pressable>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 24,
          gap: 10,
          marginRight: 16,
          marginLeft: 16,
        }}
      >
        <Text style={styles.textLg}>Тиск</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <MaskedTextInput
            mask="999/99"
            keyboardType="number-pad"
            placeholder="120/80"
            style={pressureStyles.input}
            value={pressure}
            onChangeText={handlePressureChange}
            maxLength={6}
          />
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 24,
          gap: 10,
          marginRight: 16,
          marginLeft: 16,
        }}
      >
        <Text style={styles.textLg}>Пульс</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <TextInput
            keyboardType="number-pad"
            placeholder="65"
            style={pressureStyles.input}
            value={pulse}
            onChangeText={handlePulseChange}
            maxLength={3}
          />
        </View>
      </View>
    </Pressable>
  );
}

const pressureStyles = StyleSheet.create({
  container: {
    borderColor: "#59CECF",
    borderWidth: 1,
    borderRadius: 20,
    overflow: "hidden",
    gap: 8,
    zIndex: 10,
    backgroundColor: "#115C6F47",
  },
  topBlock: {
    flexDirection: "row",
  },
  blockDayActive: {
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 64,
    paddingRight: 64,
    backgroundColor: "#115C6F",
  },
  blockDay: {
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 64,
    paddingRight: 64,
    backgroundColor: "#073844",
  },
  input: {
    borderWidth: 1,
    borderColor: "#59CECF",
    color: "#59CECF",
    fontSize: 26,
    borderRadius: 20,
    width: "100%",
    height: 78,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#FFFFFF26",
  },
});
