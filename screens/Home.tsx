import { Keyboard, Pressable, ScrollView, Text, View } from "react-native";
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
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { colorType } from "../types/global";
import ImageCard from "../components/ImageCard/ImageCard";
import Line from "../components/Line/Line";

const images = [
  {
    src: require("../assets/statisticks.jpg"),
    text: "Переглядай статистику"
  },
  {
    src: require("../assets/download-pdf.jpg"),
    text: "Завантажуй звіти"
  },
  {
    src: require("../assets/ai.jpg"),
    text: "Використовуй AI"
  },
  {
    src: require("../assets/shelude-time.jpg"),
    text: "Плануй час"
  },
];

export default function Home() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;
  const [pressure, setPressure] = useState<string>("");
  const [pulse, setPulse] = useState<string>("");
  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  const [popupColor, setPopupColor] = useState<colorType>("green");
  const scrollRef = useRef<ScrollView>(null);
  const insets = useSafeAreaInsets();

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
    <SafeAreaView>
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={{
          justifyContent: "flex-start",
          flexGrow: 1,
          paddingBottom: insets.bottom + 30,
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
          <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
            {images.map((img, index) => (
              <ImageCard key={index} srcImage={img.src} text={img.text} />
            ))}
          </View>

          <Line />
          
          <Text style={[theme.textXl, theme.primary]}>
            Переглядай статистику
          </Text>
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
                Трохи відпочинь і розслабся. Пий воду, щоб підтримувати сили.
                Якщо стане гірше — звернися до лікаря.
              </Text>
            </CardContainer>
          )}
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
