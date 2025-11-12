import { useState } from "react";

type MarkedDatesType = {
  [date: string]: {
    startingDay?: boolean;
    endingDay?: boolean;
    color: string;
    textColor: string;
  };
};

export default function useDayPress({ theme }: { theme: any }) {
  const [range, setRange] = useState({ startDate: "", endDate: "" });
  const [markedDates, setMarkedDates] = useState<MarkedDatesType>({});
  const selectedDates = Object.keys(markedDates);

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
  return { range, markedDates, handleDayPress, selectedDates };
}
