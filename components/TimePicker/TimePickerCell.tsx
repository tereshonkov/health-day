import { useState } from "react";
import { Pressable, Text, View } from "react-native";
// import DateTimePicker from "@react-native-community/datetimepicker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { styles } from "../../styles/styles";

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
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10, justifyContent: 'center', marginTop: 20}}>
        <Pressable onPress={() => setOpen(true)}>
            <Text style={styles.textLg}>{label} {formatTime(value)}</Text>
        </Pressable>
            <DateTimePickerModal
            // style={{backgroundColor: '#fff', borderRadius: 20, position: 'absolute', zIndex: 1000}}
            isVisible={open}
            date={value}
            mode="time"
            onConfirm={(d) => {
                setOpen(false);
                onChange(d);
            }} 
            onCancel={() => setOpen(false)}
            pickerContainerStyleIOS={{ backgroundColor: "#fff" }} // светлый фон на iOS
            />
        </View>
    )
}
