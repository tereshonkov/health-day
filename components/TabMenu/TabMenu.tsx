import { View, Image, TouchableOpacity, useColorScheme } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { darkTheme, lightTheme } from "../../styles/theme";

export default function TabMenu({ state, descriptors, navigation }: any) {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;
  return (
    <SafeAreaView style={{ backgroundColor: 'transparent', position: "absolute", bottom: 0 }}>
      <View style={theme.tabBar}>
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
                style={[{width: 40, height: 40}, { transform: [{ scale: isFocused ? 1.2 : 1 }] }]}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
