import {
  Pressable,
  ScrollView,
  Keyboard,
  useColorScheme,
  Text,
  View,
} from "react-native";
import Button from "../components/Button/Button";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { darkTheme, lightTheme } from "../styles/theme";
import CalendarComponent from "../components/Сalendar/Calendar";
import { useRef } from "react";

export default function List() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;
  const insets = useSafeAreaInsets();
  const scrollRef = useRef<ScrollView>(null);
  return (
    <SafeAreaView>
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "flex-start",
          marginTop: insets.top,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <Pressable
          onPress={Keyboard.dismiss}
          style={{
            paddingHorizontal: 16,
            gap: 22,
            alignItems: "center",
            paddingTop: 24,
          }}
        >
          <View style={{ gap: 16, alignItems: "center" }}>
            <Text style={[theme.primary, theme.textXl]}>Генеруй PDF</Text>
          </View>
          <CalendarComponent />
          <Button onPress={() => {}}>Завантажити</Button>
          <View style={theme.container}>
            <Text
              style={[theme.primary, theme.textSm, { textAlign: "center" }]}
            >
              Твій лікар отримає PDF з усіма твоїми вимірами та графіками
            </Text>
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
