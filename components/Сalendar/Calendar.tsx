import { Calendar, DateData } from "react-native-calendars";
import { useColorScheme } from "react-native";
import { lightTheme, darkTheme } from "../../styles/theme";
import { useState } from "react";

type MarkedDatesType = {
  [date: string]: {
    startingDay?: boolean;
    endingDay?: boolean;
    color: string;
    textColor: string;
  };
};

export default function CalendarComponent() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;
  const [range, setRange] = useState({ startDate: "", endDate: "" });
  const [markedDates, setMarkedDates] = useState<MarkedDatesType>({});
  const selectedDates = Object.keys(markedDates);
  console.log(selectedDates);
  

  const handleDayPress = (day: any) => {
    const { dateString } = day;

    if (!range.startDate || (range.startDate && range.endDate)) {
      setRange({ startDate: dateString, endDate: "" });
      setMarkedDates({
        [dateString]: {
          startingDay: true,
          endingDay: true,
          color: theme.secondary.color,
          textColor: "#ffffff",
        },
      });
      return;
    }

    if (dateString < range.startDate) {
      setRange({ startDate: dateString, endDate: "" });
      setMarkedDates({
        [dateString]: {
          startingDay: true,
          endingDay: true,
          color: theme.secondary.color,
          textColor: "#ffffff",
        },
      });
      return;
    }

    // формируем диапазон
    const startDate = new Date(range.startDate);
    const endDate = new Date(dateString);
    const marked: MarkedDatesType = {};
    let current = new Date(startDate);

    while (current <= endDate) {
      const d = current.toISOString().split("T")[0];
      marked[d] = { color: theme.primary.color, textColor: "#fff" };
      current.setDate(current.getDate() + 1);
    }

    // помечаем крайние даты
    marked[range.startDate] = { ...marked[range.startDate], startingDay: true };
    marked[dateString] = { ...marked[dateString], endingDay: true };

    setRange({ startDate: range.startDate, endDate: dateString });
    setMarkedDates(marked);
  };
  return (
    <Calendar
      markingType="period"
      markedDates={markedDates}
      onDayPress={handleDayPress}
      style={{
        borderRadius: 12,
        padding: 10,
        backgroundColor: theme.container.backgroundColor,
        width: 350,
      }}
      theme={{
        dayTextColor: theme.secondary.color,
        todayTextColor: theme === darkTheme ? "#FFA500" : "#5932EA",
        monthTextColor: theme.primary.color,
        arrowColor: theme.primary.color,
        calendarBackground: "transparent",
      }}
    />
  );
}
