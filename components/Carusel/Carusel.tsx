import { View, Image, Dimensions, FlatList } from "react-native";
import { useRef, useEffect } from "react";

const width = Dimensions.get("window").width;

const CAROUSEL_DATA = [
  {
    src: require("../../assets/checklist-advanced.jpg"),
  },
  {
    src: require("../../assets/unlimit-downloads.jpg"),
  },
  {
    src: require("../../assets/ai.jpg"),
  },
];
const ITEM_WIDTH = width * 0.8;
const SPACING = 10;

export default function Carusel() {
  const flatListRef = useRef<FlatList>(null);
  const currentIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex.current = (currentIndex.current + 1) % CAROUSEL_DATA.length;
      flatListRef.current?.scrollToIndex({
        index: currentIndex.current,
        animated: true,
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <View style= {{ height: 200, alignItems: "center" }}>
      <FlatList ref={flatListRef} data={CAROUSEL_DATA}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image
            source={item.src}
            style={{ width: ITEM_WIDTH, height: 200, marginHorizontal: SPACING / 2, borderRadius: 10 }}
          />
        )}
      />
    </View>
  );
}
