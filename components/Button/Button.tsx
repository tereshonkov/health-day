import { Pressable, Text, useColorScheme } from "react-native";
import { styles } from "../../styles/styles";
import { darkTheme, lightTheme } from "../../styles/theme";

export default function Button({
  children,
  onPress,
}: {
  children: React.ReactNode;
  onPress: () => void;
}) {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme.btn : lightTheme.btn;
  return (
    <Pressable
      style={({ pressed }) => [theme, pressed && styles.buttonPressed]}
      onPress={onPress}
    >
      <Text style={{color: "#FFFFFF", fontWeight: "bold", textTransform: "uppercase", fontSize: 18}}>{children}</Text>
    </Pressable>
  );
}
