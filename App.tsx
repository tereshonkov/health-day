import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./navigation/AppNavigator";
import { useEffect } from "react";
import { registerForPush } from "./utils/notifications";


export default function App() {
  useEffect(() => {
    registerForPush().catch(error => console.warn("Error registering for push notifications:", error));
  }, []);
  return (
    <SafeAreaProvider>
        <AppNavigator />
    </SafeAreaProvider>
  );
}
