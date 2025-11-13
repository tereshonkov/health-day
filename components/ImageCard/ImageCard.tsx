import { View, Image, useColorScheme, Text } from "react-native";
import { darkTheme, lightTheme } from "../../styles/theme";

const CARD_HEIGHT = 150;
const CARD_WIDTH = 150;

export default function ImageCard({
  srcImage,
  text,
}: {
  srcImage: string | number;
  text: string;
}) {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;
  return (
    <View
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: 20,
        overflow: "hidden",
        marginRight: 16,
        marginBottom: 16,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={typeof srcImage === "string" ? { uri: srcImage } : srcImage}
        style={{
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          borderRadius: 20,
          resizeMode: "cover",
        }}
      />
      <View
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          position: "absolute",
          inset: 0,
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
        }}
      ></View>
      <Text
        style={[
          theme.textSm,
          {
            position: "absolute",
            bottom: "40%",
            width: "80%",
            textAlign: "center",
          },
          { color: "#FFFFFF" },
        ]}
      >
        {text}
      </Text>
    </View>
  );
}
