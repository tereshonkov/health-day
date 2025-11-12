import { useState } from "react";
import {
  Pressable,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Feather } from "@expo/vector-icons";
import { darkTheme, lightTheme } from "../../styles/theme";

export default function TimePickerCell({
  label,
  value,
  onChange,
  visibleModal,
}: {
  label: string;
  value: Date;
  onChange: (date: Date) => void;
  visibleModal?: () => void;
}) {
  const [open, setOpen] = useState(false);

  const formatTime = (date: Date) =>
    `${String(date.getHours()).padStart(2, "0")}:${String(
      date.getMinutes()
    ).padStart(2, "0")}`;

  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        justifyContent: "center",
        marginTop: 32,
      }}
    >
      <Pressable
        style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
        onPress={() => setOpen(true)}
      >
        <Text style={[theme.textLg, theme.primary]}>{label}</Text>
        <View style={theme.borderTabletTime}>
          <Text style={[theme.textLg, theme.primary]}>{formatTime(value)}</Text>
        </View>
        <TouchableOpacity style={theme.borderTabletTime} onPress={visibleModal}>
          <Feather name="plus" size={28} color={theme.primary.color} />
        </TouchableOpacity>
      </Pressable>
      <DateTimePickerModal
        isVisible={open}
        date={value}
        mode="time"
        onConfirm={(d) => {
          setOpen(false);
          onChange(d);
        }}
        onCancel={() => setOpen(false)}
      />
    </View>
  );
}
