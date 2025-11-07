import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  Pressable,
  Image,
} from "react-native";
import { styles } from "../../styles/styles";
import SaveItem from "../SavedItem/SaveItem";

export default function SavedList() {
  return (
    <Pressable onPress={Keyboard.dismiss} style={pressureStyles.container}>
      <View style={pressureStyles.blockDay}>
        <Text style={styles.textSm}>Історія вимірювань: 55</Text>
        <Image
          source={require("../../assets/save.png")}
          style={{ width: 17, height: 22 }}
        />
      </View>
      {/* Content */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 16,
          gap: 10,
        }}
      >
        {/* item */}
        <SaveItem />
        <SaveItem />
        <SaveItem />
        <SaveItem />
        <Pressable
          style={({ pressed } : { pressed: boolean }) => [
            { transform: [{ scale: pressed ? 0.75 : 1 }] },
            {
              // alignItems: "center",
              // borderWidth: 1,
              // borderColor: "#59CECF",
              // padding: 8,
              // borderRadius: 20,
              // flexDirection: "row",
              // gap: 8,
              marginTop: 8,
              // backgroundColor: "#4621ca47",
            },
          ]}
        >
          <Image
            source={require("../../assets/arrow-down.png")}
            style={{ width: 27, height: 27 }}
          />
        </Pressable>
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
    gap: 8,
    zIndex: 10,
    backgroundColor: "#115C6F47",
  },
  blockDay: {
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 64,
    paddingRight: 64,
    backgroundColor: "#073844",
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
