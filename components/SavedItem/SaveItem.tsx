import { View, Text } from "react-native";

export default function SaveItem() {
  return (
    <View
      style={{
        padding: 10,
        gap: 8,
        borderWidth: 1,
        borderColor: "#59CECF",
        flexDirection: "row",
        justifyContent: "center",
        minWidth: 350,
        borderRadius: 20,
        backgroundColor: "#FFFFFF26",
      }}
    >
      <Text style={{ fontSize: 16, color: "#59CECF" }}>01.11.2025 |</Text>
      <Text style={{ fontSize: 16, color: "#59CECF" }}>Тиск: 120/80</Text>
      <Text style={{ fontSize: 16, color: "#59CECF" }}>Пульс: 75</Text>
    </View>
  );
}
