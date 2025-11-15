import {
  Keyboard,
  Pressable,
  ScrollView,
  Text,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import { useEffect, useRef } from "react";
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
import Carusel from "../components/Carusel/Carusel";
import { postPressure, handlePulse } from "../api/pressure";
import Toast from "react-native-toast-message";

type PressureRecord = {
  pressure: string; // например '155/55'
  pulse: number;
};

const images = [
  {
    src: require("../assets/statisticks.jpg"),
    text: "Переглядай статистику",
  },
  {
    src: require("../assets/download-pdf.jpg"),
    text: "Завантажуй звіти",
  },
  {
    src: require("../assets/analize.jpg"),
    text: "Використовуй AI",
  },
  {
    src: require("../assets/shelude-time.jpg"),
    text: "Плануй свій час",
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
  const [loading, setLoading] = useState(false);
  const [correctPulse, setCorrectPulse] = useState<number>(0);
  const [dataPressable, setDataPressable] = useState<number[]>([150, 125, 130, 128, 122, 126, 124]);

  useEffect(() => {
    const getPulse = async () => {
      const data = await handlePulse("b38bc783-4398-4489-b172-692450ceef51");
      // Берём последние 7 записей
      const lastDay = data.length;
      const startDay = lastDay  - 7;
      const last7 = data.slice(startDay, lastDay);

      const systolicArray = last7.map((record: PressureRecord) => {
        // Берём только число до '/'
        const [systolic] = record.pressure.split("/");
        return Number(systolic) || 0; // превращаем в число
      });
      setDataPressable(systolicArray);
      // Проверяем, что массив не пустой
      if (Array.isArray(data) && data.length > 0) {
        setCorrectPulse(data[0].pulse); // берём поле pulse первого элемента
        console.log("Полученный пульс:", data[0].pulse);
      } else {
        setCorrectPulse(0); // или 0, если хочешь по умолчанию
      }
    };
    getPulse();
  }, []);

  const handleOnChange = async () => {
    setLoading(true);
    try {
      const res = await postPressure({
        userId: "b38bc783-4398-4489-b172-692450ceef51",
        pressure: pressure,
        pulse: parseInt(pulse, 10),
      });

      if (res?.id) {
        Toast.show({ type: "success", text1: "Дані успішно збережено!" });
      } else if (res?.error) {
        Toast.show({ type: "error", text1: "Помилка мережі." });
      } else {
        Toast.show({ type: "error", text1: "Помилка при збереженні даних." });
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Помилка мережі.",
      });
    }
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
    setLoading(false);
  };

  return (
    <SafeAreaView>
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={{
          justifyContent: "flex-start",
          flexGrow: 1,
          paddingBottom: insets.bottom + 100,
          marginTop: insets.top,
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
          {/* <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {images.map((img, index) => (
              <ImageCard key={index} srcImage={img.src} text={img.text} />
            ))}
          </View>

          <Line /> */}

          <Text style={[theme.textXl, theme.secondary]}>статистика</Text>
          <LineChartTable data={dataPressable || []}/>
          {/* <TableTime /> */}
          <RadialChart pulse={correctPulse} />
          {/* <Line /> */}
          <View
            style={{
              marginBottom: 16,
              width: "100%",
              gap: 32,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* <Image
              source={require("../assets/checklist-advanced.jpg")}
              style={{ width: "100%", height: 200, borderRadius: 20 }}
            /> */}
            {/* <Carusel />
            <Button onPress={() => {}}>Переглянути тарифи</Button> */}
          </View>
          {/* <Line /> */}
          <Text style={[theme.textXl, theme.secondary]}>Збережи свої дані</Text>
          <Pressure
            pressure={pressure}
            setPressure={setPressure}
            pulse={pulse}
            setPulse={setPulse}
          />
          <Button onPress={handleOnChange}>Зберегти</Button>
          {loading && <ActivityIndicator size="large" color="#FFFFFF" />}
          {/* {popupVisible && <Popup color={popupColor} />} */}
          {/* {popupVisible && (
            <CardContainer>
              <Text
                style={[theme.textSm, theme.secondary, { fontWeight: "bold" }]}
              >
                Трохи відпочинь і розслабся. Пий воду, щоб підтримувати сили.
                Якщо стане гірше — звернися до лікаря.
              </Text>
            </CardContainer>
          )} */}
          <CardContainer>
            <Text
              style={[
                theme.textSm,
                theme.secondary,
                { fontWeight: "bold", textAlign: "center" },
              ]}
            >
              Цей застосунок створено для найдорожчої людини в моєму житті.
              Кохаю тебе безмежно!
            </Text>
          </CardContainer>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
