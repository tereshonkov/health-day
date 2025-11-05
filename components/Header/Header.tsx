import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Header() {
    const formatted = new Date().toLocaleDateString("uk-UA", {
  day: "numeric",
  month: "long",
});
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 16, fontWeight: 'bold', color: "#fff" }}>{formatted}</Text>
    </SafeAreaView>
  )
}
