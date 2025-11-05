import { Text, View, Image, StyleSheet, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles/styles";
import { useHeartbeat } from "../../hooks/useHeartbeat";

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

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderWidth: 1,
    borderColor: "#59CECF",
    borderRadius: 100,
    backgroundColor: "#115C6F47",
  },
  heart: {
    width: 34,
    height: 30,
  },
  avatar: {
    borderRadius: 100,
    width: 34,
    height: 34,
    borderColor: "#59CECF",
    borderWidth: 1,
  },
  bgImage: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
  },
});
