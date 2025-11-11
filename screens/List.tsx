import {
  Pressable,
  ScrollView,
  Keyboard,
  useColorScheme,
  Text,
  View,
} from "react-native";
import Button from "../components/Button/Button";
import SavedList from "../components/SavedList/SavedList";
import { darkTheme, lightTheme } from "../styles/theme";
import { Calendar } from "react-native-calendars";
import CalendarComponent from "../components/Сalendar/Calendar";

export default function List() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "flex-start",
      }}
      keyboardShouldPersistTaps="handled"
    >
      <Pressable
        onPress={Keyboard.dismiss}
        style={{ paddingHorizontal: 16, gap: 28, alignItems: "center" }}
      >
        <View style={{ gap: 16, alignItems: "center" }}>
          <Text style={[theme.primary, theme.textXl]}>Генеруй PDF</Text>
        </View>
        <CalendarComponent />
        <Button onPress={() => {}}>Завантажити</Button>
      </Pressable>
    </ScrollView>
  );
}
