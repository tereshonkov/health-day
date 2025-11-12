import { useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { styles } from "../../styles/styles";
import { Feather } from "@expo/vector-icons";

export default function TimePickerCell({
  label,
  value,
  onChange,
}: {
  label: string;
  value: Date;
  onChange: (date: Date) => void;
}) {
  const [open, setOpen] = useState(false);

  const formatTime = (date: Date) =>
    `${String(date.getHours()).padStart(2, "0")}:${String(
      date.getMinutes()
    ).padStart(2, "0")}`;

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
        <Text style={styles.textLg}>{label}</Text>
        <View style={{ paddingHorizontal: 12, paddingVertical: 6, borderWidth: 1, borderColor: "#364A5F", borderRadius: 20 }}>
          <Text style={styles.textLg}>{formatTime(value)}</Text>
        </View>
        <TouchableOpacity style={{ paddingHorizontal: 12, paddingVertical: 6, borderWidth: 1, borderColor: "#364A5F", borderRadius: 20 }}>
          <Feather name="plus" size={28} color="#59CECF" />
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
