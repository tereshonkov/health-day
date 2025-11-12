import { Modal, Text, useColorScheme, View, Pressable } from "react-native";
import { darkTheme, lightTheme } from "../../styles/theme";
import Input from "../Input/Input";
import { useState } from "react";
import Button from "../Button/Button";

type ReminderKey = "morning" | "lunch" | "dinner" | "night";

interface ModalItemProps {
  isVisible: boolean;
  onClose: () => void;
  id?: string;
  reminderKey: ReminderKey;
}

export default function ModalItem({ isVisible, onClose, id, reminderKey }: ModalItemProps) {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const handleOnSubmit = () => {
    const data = {
        name,
        quantity,
        reminderKey,
    }
    console.log(data);
    setName("");
    setQuantity("");
    onClose();
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          console.log("Modal has been closed.");
        }}
      >
        <Pressable style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'rgba(0, 0, 0, 0.5)' }} onPress={onClose}>
            <View style={[theme.container, {padding: 20}]}>
                <Text style={[theme.textSm, theme.primary]}>Додай назву і кількість</Text>
                <View style={{marginTop: 20, flexDirection: "row", gap: 10, justifyContent: "center"}}>
                    <Input value={name} setValue={setName} />
                    <Input value={quantity} setValue={setQuantity} type="number" />
                </View>
                <View style={{marginTop: 20, flexDirection: "row", justifyContent: "space-between"}}>
                    <Button onPress={handleOnSubmit}>Зберегти</Button>
                </View>
            </View>
        </Pressable>
      </Modal>
    </View>
  );
}
