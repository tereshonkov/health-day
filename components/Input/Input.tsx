import { TextInput, useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "../../styles/theme";

interface InputProps {
  value: string;
  setValue: (text: string) => void;
  type?: "number" | "text";
}

export default function Input({ value, setValue, type = "text" }: InputProps) {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;
  return (
    <TextInput
      keyboardType={type === "number" ? "number-pad" : "default"}
      style={[theme.input, { width: type === "number" ? 100 : 200 }]}
      value={value}
      onChangeText={setValue}
      maxLength={type === "number" ? 3 : undefined}
    />
  );
}
