import { Text, View, Image, StyleSheet, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles/styles";
import { useHeartbeat } from "../../hooks/useHeartbeat";
import { headerStyles } from "../../styles/styles";

export default function Header() {
  const formatted = new Date().toLocaleDateString("uk-UA", {
    day: "numeric",
    month: "long",
  });
  const scale = useHeartbeat(1, 1.2, 400);
  return (
    <SafeAreaView>
      <View style={headerStyles.container}>
        <Image
          source={require("../../assets/hearts-bg.png")}
          style={headerStyles.bgImage}
        />
        <View style={headerStyles.avatar}></View>
        <Text style={styles.textLg}>{formatted}</Text>
        <Animated.Image
          source={require("../../assets/heart.png")}
          style={[headerStyles.heart, { transform: [{ scale }] }]}
        />
      </View>
    </SafeAreaView>
  );
}


