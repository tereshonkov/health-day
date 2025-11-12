import { Modal, Text, useColorScheme, View } from "react-native";
import { darkTheme, lightTheme } from "../../styles/theme";

type ReminderKey = "morning" | "lunch" | "dinner" | "night";

interface ModalItemProps {
  isVisible: boolean;
  onClose: () => void;
  id?: string;
  reminderKey?: ReminderKey;
}

export default function ModalItem({ isVisible, onClose, id, reminderKey }: ModalItemProps) {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;
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
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <View style={[theme.container, {padding: 20}]}>
                <Text style={[theme.textSm, theme.primary]}>Додай назву і кількість</Text>
            </View>
        </View>
      </Modal>
    </View>
  );
}
