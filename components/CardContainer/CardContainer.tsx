import { View, useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "../../styles/theme";

export default function CardContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;

  return <View style={theme.container}>{children}</View>;
}
