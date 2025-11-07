import { ScrollView, View } from "react-native";
import { styles } from "../styles/styles";
import TabletItem from "../components/TabletItem/TabletItem";
import TabletColumn from "../components/TabletColumn/TabletColumn";
import { useState } from "react";
import TimePickerCell from "../components/TimePicker/TimePickerCell";
import { scheduleNotificationSafe } from '../utils/notifications';

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

export default function Tablets() {
  const [items, setItems] = useState(initialItems);
  const [times, setTimes] = useState({
    morning: new Date(2024, 0, 1, 8, 0),
    lunch: new Date(2024, 0, 1, 14, 0),
    dinner: new Date(2024, 0, 1, 18, 0),
    night: new Date(2024, 0, 1, 20, 0),
  });
  const handleToogle = (id: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isTaken: !item.isTaken } : item
      )
    );
  };
  return (
    <ScrollView>
      <View style={styles.container}>

        <TimePickerCell
          label="Ранок"
          value={times.morning}
          onChange={(d) => {
            setTimes(prev => ({ ...prev, morning: d }));
            scheduleNotificationSafe(d, 'Час випити таблетки', 'Прийміть ваші таблетки зараз, будь ласка');
          }}
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
          value={times.lunch}
          onChange={(d) => {
            setTimes(prev => ({ ...prev, lunch: d }));
            scheduleNotificationSafe(d, 'Час випити таблетки', 'Прийміть ваші таблетки зараз, будь ласка');
          }}
        />
        <TabletColumn >
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
          value={times.dinner}
          onChange={(d) => {
            setTimes(prev => ({ ...prev, dinner: d }));
            scheduleNotificationSafe(d, 'Час випити таблетки', 'Прийміть ваші таблетки зараз , будь ласка');
          }}
        />
        <TabletColumn >
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
          value={times.night}
          onChange={(d) => {
            setTimes(prev => ({ ...prev, night: d }));
            scheduleNotificationSafe(d, 'Час випити таблетки', 'Прийміть ваші таблетки зараз , будь ласка');
          }}
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
