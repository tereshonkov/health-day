import { View, Text, StyleSheet, Keyboard, Pressable, Image } from "react-native";
import { styles } from "../../styles/styles";
import SaveItem from "../SavedItem/SaveItem";

export default function SavedList() {
  return (
    <Pressable onPress={Keyboard.dismiss} style={pressureStyles.container}>
        <View style={pressureStyles.blockDay}>
          <Text style={styles.textSm}>Збережені</Text>
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
        <SaveItem />
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
