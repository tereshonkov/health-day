import { Keyboard, Pressable, ScrollView, Text } from "react-native";
import { useRef } from "react";
import Pressure from "../components/Pressure/Pressure";
import Button from "../components/Button/Button";
import { useState } from "react";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "../styles/theme";
import TableTime from "../components/NotificationTableTime/TableTime";
import getColor from "../utils/popupColor";
import Popup from "../components/Popup/Popup";
import LineChartTable from "../components/LineChart/LineChartTable";
import RadialChart from "../components/RadialChart/RadialChart";
import CardContainer from "../components/CardContainer/CardContainer";

type colorType = "red" | "yellow" | "green" | "blue";

export default function Home() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;
  const [pressure, setPressure] = useState<string>("");
  const [pulse, setPulse] = useState<string>("");
  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  const [popupColor, setPopupColor] = useState<colorType>("green");
  const scrollRef = useRef<ScrollView>(null);

  const handleOnChange = () => {
    console.log(pressure, pulse);
    const color = getColor.getColor(pressure, pulse);
    console.log("Колір показань:", color);
    if (pressure && pulse) {
      setPopupVisible(true);
      setPopupColor(color as colorType);
    }
    setPulse("");
    setPressure("");

    setTimeout(() => {
      scrollRef.current?.scrollToEnd({ animated: true });
    }, 50);
  };

  return (
    <ScrollView
      ref={scrollRef}
      contentContainerStyle={{
        justifyContent: "flex-start",
        flexGrow: 1,
      }}
      style={{ backgroundColor: "transparent" }}
      keyboardShouldPersistTaps="handled"
    >
      <Pressable
        style={{
          backgroundColor: "transparent",
          alignItems: "center",
          gap: 32,
          paddingVertical: 24,
          paddingHorizontal: 24,
        }}
        onPress={Keyboard.dismiss}
      >
        <LineChartTable />
        <TableTime />
        <RadialChart pulse={pulse ? parseInt(pulse) : 60} />
        <Text style={[theme.textXl, theme.primary]}>Збережи свої дані</Text>
        <Pressure
          pressure={pressure}
          setPressure={setPressure}
          pulse={pulse}
          setPulse={setPulse}
        />
        <Button onPress={handleOnChange}>Зберегти</Button>
        {popupVisible && <Popup color={popupColor} />}
        {popupVisible && (
          <CardContainer>
            <Text
              style={[theme.textSm, theme.secondary, { fontWeight: "bold" }]}
            >
              Трохи відпочинь і розслабся. Пий воду, щоб підтримувати сили. Якщо
              стане гірше — звернися до лікаря.
            </Text>
          </CardContainer>
        )}
      </Pressable>
    </ScrollView>
  );
}
