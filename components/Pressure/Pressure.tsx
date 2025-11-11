import {
  View,
  Text,
  TextInput,
  Keyboard,
  Pressable,
  useColorScheme,
} from "react-native";
import { MaskedTextInput } from "react-native-mask-text";
import { darkTheme, lightTheme } from "../../styles/theme";

export default function Pressure({pressure, setPressure, pulse, setPulse}: any) {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;

  const handlePressureChange = (text: string) => {
    const digitsOnly = text.replace(/[^0-9]/g, "");
    const limited = digitsOnly.slice(0, 5);
    const formatted =
      limited.length <= 3
        ? limited
        : `${limited.slice(0, 3)}/${limited.slice(3)}`;

    setPressure((prev: string) => (prev === formatted ? prev : formatted));
  };
  const handlePulseChange = (text: string) => {
    const only = text.replace(/[^0-9]/g, "").slice(0, 3);
    setPulse(only);
  };
  return (
    <Pressable onPress={Keyboard.dismiss} style={theme.container}>
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
        <Text style={[theme.textLg, theme.secondary]}>Тиск</Text>
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
            style={theme.input}
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
        <Text style={[theme.textLg, theme.secondary]}>Пульс</Text>
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
            style={theme.input}
            value={pulse}
            onChangeText={handlePulseChange}
            maxLength={3}
          />
        </View>
      </View>
    </Pressable>
  );
}
