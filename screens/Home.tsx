import { Keyboard, Pressable, ScrollView } from "react-native";
import { styles } from "../styles/styles";
import Pressure from "../components/Pressure/Pressure";
import Button from "../components/Button/Button";

//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

// ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIIBM7EQvTj3QwE3kFAOJ+O+nhAiUaDctFHWuJYguqL4g tereshonkov.dima@gmail.com

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
