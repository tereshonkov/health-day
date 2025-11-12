import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function TabletItem({
  title,
  count,
  onToogle,
  id,
}: {
  title?: string;
  count?: number;
  isTaken?: boolean;
  onToogle?: (id: string) => void;
  id: string;
}) {
  const handlePress = () => {
    onToogle && onToogle(id);
  };
  return (
    <View style={tabsStyles.item}>
      <Text style={tabsStyles.text}>{title}</Text>
      <Text style={tabsStyles.count}>{count}</Text>
      <View style={{ gap: 10, flexDirection: "row" }}>
        <TouchableOpacity onPress={handlePress} style={tabsStyles.btn}>
          <Feather name="edit-3" size={22} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress} style={tabsStyles.btn}>
          <Feather name="trash-2" size={22} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const tabsStyles = StyleSheet.create({
  item: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#59CECF",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#42454558",
  },
  text: {
    fontSize: 18,
    color: "#59CECF",
    width: "40%",
  },
  count: {
    fontSize: 20,
    color: "#59CECF",
  },
  btn: {
    padding: 10,
    backgroundColor: "#59CECF",
    borderRadius: 10,
    alignItems: "center",
  },
});
