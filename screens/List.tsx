import { Image, Pressable, ScrollView, Keyboard } from "react-native";
import { styles } from "../styles/styles";
import Button from "../components/Button/Button";
import SavedList from "../components/SavedList/SavedList";

export default function List() {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "flex-start",
      }}
      keyboardShouldPersistTaps="handled"
    >
      <Pressable
        style={{
          ...styles.container,
          gap: 32,
          paddingBottom: 24,
          paddingTop: 24,
        }}
        onPress={Keyboard.dismiss}
      >
        <Image
          source={require("../assets/smoke.png")}
          style={styles.backgroundImage}
        />
        <SavedList />
        <Button onPress={() => {}}>Завантажити</Button>
      </Pressable>
    </ScrollView>
  );
}
