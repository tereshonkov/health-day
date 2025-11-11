import { View, useColorScheme, Text, Image } from "react-native";
import { darkTheme, lightTheme } from "../../styles/theme";

const colors = ["blue", "red", "green", "yellow"] as const;

export default function Popup({ color }: { color: (typeof colors)[number] }) {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;
  const popupStyles = {
    blue: theme.popupBlue,
    red: theme.popupRed,
    green: theme.popupGreen,
    yellow: theme.popupYellow,
  };
  return (
    <View style={[popupStyles[color], { flexDirection: "row", gap: 10 }]}>
      <Image
      style={{ width: 16, height: 16, resizeMode: "contain" }}
        source={
          theme === lightTheme
            ? require(`../../assets/info-white.png`)
            : require(`../../assets/info-green.png`)
        }
      />
      <Text style={[theme.textSm, theme.popupText]}>Popup {color}</Text>
    </View>
  );
}
