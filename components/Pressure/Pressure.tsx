import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  Pressable,
} from "react-native";
import { styles } from "../../styles/styles";

export default function Pressure() {
  return (
    <Pressable onPress={Keyboard.dismiss} style={pressureStyles.container}>
      <View style={pressureStyles.topBlock}>
        <View style={pressureStyles.blockDayActive}>
          <Text style={styles.textSm}>Ранок</Text>
        </View>
        <View style={pressureStyles.blockDay}>
          <Text style={styles.textSm}>Вечір</Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 24,
          gap: 10,
          marginRight: 16,
          marginLeft: 16,
        }}
      >
        <Text style={styles.textLg}>Тиск</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <TextInput
            keyboardType="numeric"
            placeholder="120"
            style={pressureStyles.input}
          />
          <TextInput
            keyboardType="numeric"
            placeholder="80"
            style={pressureStyles.input}
          />
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 24,
          gap: 10,
          marginRight: 16,
          marginLeft: 16,
        }}
      >
        <Text style={styles.textLg}>Пульс</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
              <TextInput
                keyboardType="numeric"
                placeholder="65"
                style={pressureStyles.input}
              />
        </View>
      </View>
    </Pressable>
  );
}

const pressureStyles = StyleSheet.create({
  container: {
    borderColor: "#59CECF",
    borderWidth: 1,
    borderRadius: 20,
    overflow: "hidden",
    gap: 31,
  },
  topBlock: {
    flexDirection: "row",
  },
  blockDayActive: {
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 64,
    paddingRight: 64,
    backgroundColor: "#115C6F",
  },
  blockDay: {
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 64,
    paddingRight: 64,
    backgroundColor: "#073844",
  },
  input: {
    borderWidth: 1,
    borderColor: "#59CECF",
    color: "#59CECF",
    fontSize: 26,
    borderRadius: 20,
    width: 161,
    height: 78,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#FFFFFF26",
  },
});
