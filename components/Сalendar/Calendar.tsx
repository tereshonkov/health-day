import { Calendar } from "react-native-calendars";
import { useColorScheme } from "react-native";
import { lightTheme, darkTheme } from "../../styles/theme";
import { useState } from "react";
import useDayPress from "../../hooks/useDayPress";

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
  const { markedDates, handleDayPress, selectedDates } = useDayPress({ theme });
  console.log(selectedDates);
  
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
