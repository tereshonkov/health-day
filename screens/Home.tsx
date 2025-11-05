import { Keyboard, Pressable, ScrollView } from "react-native";
import { styles } from "../styles/styles";
import Pressure from "../components/Pressure/Pressure";
import Button from "../components/Button/Button";

export default function Home() {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "flex-start",
      }}
      keyboardShouldPersistTaps="handled"
    >
      <Pressable
        style={{ ...styles.container, gap: 58, paddingBottom: 24, paddingTop: 24 }}
        onPress={Keyboard.dismiss}
      >
        <Pressure />
        <Button onPress={() => {}}>Зберегти</Button>
      </Pressable>
    </ScrollView>
  );
}
