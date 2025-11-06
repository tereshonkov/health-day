import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./navigation/AppNavigator";
import { useEffect } from "react";
import { registerForPush } from "./utils/notifications";


export default function App() {
  useEffect(() => {
    registerForPush();
  }, []);
  return (
    <SafeAreaProvider>
        <AppNavigator />
    </SafeAreaProvider>
  );
}
