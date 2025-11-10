import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "../../styles/theme";

export default function Header() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;
  console.log(colorScheme);
  
  return (
    <SafeAreaView style={{ backgroundColor: 'transparent' }}>
      <View style={{justifyContent: "space-between", alignItems: "center", flexDirection: "row", paddingHorizontal: 16, paddingVertical: 10}}>
        <View style={theme.circleHeader}></View>
        <TouchableOpacity style={theme.btnVersion}>
          <Text style={theme.textSm}>Pro version</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}



