import { useEffect, useRef } from "react";
import { Animated } from "react-native";

export function useHeartbeat(min = 1, max = 1.2, duration = 400) {
  const scale = useRef(new Animated.Value(min)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: max,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: min,
          duration,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return scale;
}
