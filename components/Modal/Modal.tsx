import { Modal, Text, useColorScheme, View } from "react-native";
import { darkTheme, lightTheme } from "../../styles/theme";

interface ModalItemProps {
  isVisible: boolean;
  onClose: () => void;
  id?: string;
}

export default function ModalItem({ isVisible, onClose, id }: ModalItemProps) {
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
        <Text style={theme.textXl}>Modal</Text>
      </Modal>
    </View>
  );
}
