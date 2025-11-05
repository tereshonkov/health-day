import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Header() {
    const formatted = new Date().toLocaleDateString("ru-RU", {
  day: "numeric",
  month: "short",
});
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 16, fontWeight: 'bold', color: "#fff" }}>{formatted}</Text>
    </SafeAreaView>
  )
}
