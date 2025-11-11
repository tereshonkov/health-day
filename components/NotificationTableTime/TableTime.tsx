import { View, useColorScheme, Image, Text } from "react-native";
import { darkTheme, lightTheme } from "../../styles/theme";

export default function TableTime() {
    const colorScheme = useColorScheme();
    const theme = colorScheme === "dark" ? darkTheme : lightTheme;
  return (
    <View style={[theme.container, {flexDirection: 'row', gap: 10, width: '100%', alignItems: 'center', height: 114}]}>
        <Image
          source={theme === lightTheme ? require("../../assets/info-black.png") : require("../../assets/info-green.png")}
          style={{ width: 18, height: 18, resizeMode: "contain" }}
        />
        <Text style={[theme.textLg, theme.secondary, {fontWeight: "bold"}]}>Випити таблетки: 14:00</Text>
    </View>
  )
}
