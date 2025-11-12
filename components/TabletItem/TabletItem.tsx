import { Text, View, TouchableOpacity, useColorScheme } from "react-native";
import { Feather } from "@expo/vector-icons";
import { darkTheme, lightTheme } from "../../styles/theme";

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
  
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;
  return (
    <View style={theme.item}>
      <Text style={[theme.textLg, theme.primary]}>{title}</Text>
      <Text style={[theme.textLg, theme.primary]}>{count}</Text>
      <View style={{ gap: 10, flexDirection: "row" }}>
        <TouchableOpacity onPress={handlePress} style={theme.btnItem}>
          <Feather name="edit-3" size={22} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress} style={theme.btnItem}>
          <Feather name="trash-2" size={22} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
