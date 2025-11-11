import { Calendar } from "react-native-calendars";
import { useColorScheme } from "react-native";
import { lightTheme, darkTheme } from "../../styles/theme";

export default function CalendarComponent() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;
  return (
    <Calendar
      style={
        {
          borderRadius: 12,
          padding: 10,
          backgroundColor: theme.container.backgroundColor,
          width: 350,
        }
      }
      theme={{
        dayTextColor: theme.secondary.color,
        todayTextColor: "#FFFFFF",
        monthTextColor: theme.primary.color,
        arrowColor: theme.primary.color,
        calendarBackground: "transparent",
      }}
    />
  );
}
