import { ScrollView, View } from "react-native";
import { styles } from "../styles/styles";
import TabletItem from "../components/TabletItem/TabletItem";
import TabletColumn from "../components/TabletColumn/TabletColumn";
import { useState } from "react";
import TimePickerCell from "../components/TimePicker/TimePickerCell";
import {
  scheduleNotificationSafe,
  cancelNotificationSafe,
} from "../utils/notifications";

const initialItems = [
  {
    id: "1",
    title: "Канкорд",
    count: 1,
    isTaken: false,
    time: "morning",
  },
  {
    id: "2",
    title: "Тиразол",
    count: 1,
    isTaken: false,
    time: "morning",
  },
  {
    id: "3",
    title: "Тиотриозалин",
    count: 1,
    isTaken: false,
    time: "morning",
  },
  {
    id: "4",
    title: "Сорбифен",
    count: 1,
    isTaken: false,
    time: "morning",
  },
  {
    id: "5",
    title: "Витакаб",
    count: 1,
    isTaken: false,
    time: "morning",
  },
  {
    id: "6",
    title: "Тиразол",
    count: 0.5,
    isTaken: false,
    time: "lunch",
  },
  {
    id: "7",
    title: "Тиотриозалин",
    count: 1,
    isTaken: false,
    time: "lunch",
  },
  {
    id: "8",
    title: "Тиразол",
    count: 0.5,
    isTaken: false,
    time: "dinner",
  },
  {
    id: "9",
    title: "Тиотриозалин",
    count: 1,
    isTaken: false,
    time: "dinner",
  },
  {
    id: "10",
    title: "Сорбифен",
    count: 1,
    isTaken: false,
    time: "dinner",
  },
  {
    id: "11",
    title: "Велпанат",
    count: 1,
    isTaken: false,
    time: "night",
  },
  {
    id: "12",
    title: "Мікрогенон",
    count: 1,
    isTaken: false,
    time: "night",
  },
];

const createTimeToday = (hour: number, minute: number) => {
  const now = new Date();
  return new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hour,
    minute,
    0,
    0
  );
};

type ReminderKey = "morning" | "lunch" | "dinner" | "night";
type ReminderEntry = { time: Date; notificationIds: string[] };
type ReminderState = Record<ReminderKey, ReminderEntry>;

export default function Tablets() {
  const [items, setItems] = useState(initialItems);
  const [reminders, setReminders] = useState<ReminderState>({
    morning: { time: createTimeToday(8, 0), notificationIds: [] },
    lunch: { time: createTimeToday(14, 0), notificationIds: [] },
    dinner: { time: createTimeToday(18, 0), notificationIds: [] },
    night: { time: createTimeToday(20, 0), notificationIds: [] },
  });
  const handleToogle = (id: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isTaken: !item.isTaken } : item
      )
    );
  };

const updateReminder = async (key: ReminderKey, selected: Date) => {
  const nextTime = new Date(selected);
  setReminders((prev) => ({
    ...prev,
    [key]: { ...prev[key], time: nextTime },
  }));

  const prevIds = reminders[key].notificationIds;
  for (const id of prevIds) {
    await cancelNotificationSafe(id);
  }

  try {
    const { initialId, repeatingId } = await scheduleNotificationSafe(
      nextTime,
      "Час випити таблетки",
      "Прийміть ваші таблетки зараз, будь ласка"
    );

    setReminders(prev => ({
      ...prev,
      [key]: { time: nextTime, notificationIds: [initialId, repeatingId] },
    }));
  } catch (error) {
    console.warn("Не вдалося запланувати нагадування:", error);
  }
};
  return (
    <ScrollView>
      <View style={styles.container}>
        <TimePickerCell
          label="Ранок"
          value={reminders.morning.time}
          onChange={(date: Date) => updateReminder("morning", date)}
        />
        <TabletColumn>
          {items &&
            items
              .filter((item) => item.time === "morning")
              .map((item) => (
                <TabletItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  count={item.count}
                  onToogle={handleToogle}
                  isTaken={item.isTaken}
                />
              ))}
        </TabletColumn>

        <TimePickerCell
          label="Обід"
          value={reminders.lunch.time}
          onChange={(date: Date) => updateReminder("lunch", date)}
        />
        <TabletColumn>
          {items &&
            items
              .filter((item) => item.time === "lunch")
              .map((item) => (
                <TabletItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  count={item.count}
                  onToogle={handleToogle}
                  isTaken={item.isTaken}
                />
              ))}
        </TabletColumn>

        <TimePickerCell
          label="Вечеря"
          value={reminders.dinner.time}
          onChange={(date: Date) => updateReminder("dinner", date)}
        />
        <TabletColumn>
          {items &&
            items
              .filter((item) => item.time === "dinner")
              .map((item) => (
                <TabletItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  count={item.count}
                  onToogle={handleToogle}
                  isTaken={item.isTaken}
                />
              ))}
        </TabletColumn>

        <TimePickerCell
          label="Добові"
          value={reminders.night.time}
          onChange={(date: Date) => updateReminder("night", date)}
        />
        <TabletColumn>
          {items &&
            items
              .filter((item) => item.time === "night")
              .map((item) => (
                <TabletItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  count={item.count}
                  onToogle={handleToogle}
                  isTaken={item.isTaken}
                />
              ))}
        </TabletColumn>
      </View>
    </ScrollView>
  );
}
