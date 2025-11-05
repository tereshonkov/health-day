import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../../styles/styles";
import { headerStyles } from "../../styles/styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabMenu({ state, descriptors, navigation }: any) {
  return (
    <SafeAreaView>
      <View style={headerStyles.container}>
        <Image
          source={require("../../assets/hearts-bg.png")}
          style={headerStyles.bgImageBottom}
        />
        {state.routes.map((route: any, index: number) => {
          const isFocused = state.index === index;
          const { options } = descriptors[route.key];

          const iconSrc = options.icon;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              style={{ flex: 1, alignItems: "center" }}
              key={index}
              onPress={onPress}
            >
              <Image
                source={iconSrc}
                style={[styles.tabIcon, { transform: [{ scale: isFocused ? 1.2 : 1 }] }]}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
