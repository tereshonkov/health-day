import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./navigation/AppNavigator";
import { useEffect } from "react";
import { registerForPush } from "./utils/notifications";
import { LinearGradient } from "expo-linear-gradient";
import { useColorScheme } from "react-native";
import { darkGradient, lightGradient } from "./styles/theme";
import Toast from "react-native-toast-message";

export default function App() {
  useEffect(() => {
    registerForPush().catch((error) =>
      console.warn("Error registering for push notifications:", error)
    );
  }, []);
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkGradient : lightGradient;
  return (
    <SafeAreaProvider>
      <LinearGradient colors={theme} style={{ flex: 1 }}>
        <AppNavigator />
        <Toast />
      </LinearGradient>
    </SafeAreaProvider>
  );
}
