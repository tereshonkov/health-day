import { View } from "react-native";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "../../styles/theme";

export default function Line() {
    const colorScheme = useColorScheme();
    const theme = colorScheme === "dark" ? darkTheme : lightTheme;
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
      <View
        style={{
          height: 1,
          width: "20%",
          backgroundColor: theme.secondary.color,
          borderRadius: 100,
        }}
      ></View>
      <View
        style={{
          height: 5,
          width: 5,
          backgroundColor: theme.secondary.color,
          borderRadius: 100,
        }}
      ></View>
      <View
        style={{
          height: 1,
          width: "20%",
          backgroundColor: theme.secondary.color,
          borderRadius: 100,
        }}
      ></View>
    </View>
  );
}
