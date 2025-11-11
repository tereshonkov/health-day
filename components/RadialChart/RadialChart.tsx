import React from "react";
import { View, Text, useColorScheme } from "react-native";
import Svg, { Circle, Text as SvgText } from "react-native-svg";
import { darkTheme, lightTheme } from "../../styles/theme";

type PulseChartProps = {
  pulse: number;       // текущий пульс
  maxPulse?: number;   // максимальный пульс для шкалы
};

export default function PulseChart({ pulse, maxPulse = 150 }: PulseChartProps) {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;

  const size = 180;           // размер SVG
  const strokeWidth = 25;     // толщина кольца
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // вычисляем процент заполнения
  const percent = Math.min(pulse / maxPulse, 1);
  const strokeDashoffset = circumference * (1 - percent);

  return (
    <View style={[theme.container, { width: "100%" }]}>
      <Text style={[theme.textXl, theme.primary]}>Твій Пульс</Text>
      <Svg width={size} height={size}>
        {/* Фон круга */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={theme === darkTheme ? "#115C6F" : "#16C098"}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Заполненный сегмент */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={theme.primary.color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin={`${size / 2}, ${size / 2}`}
        />
        {/* Текст посередине */}
        <SvgText
          x={size / 2}
          y={size / 2 + 5} // чуть смещаем вниз, чтобы центрировалось визуально
          fontSize="20"
          fill={theme.primary.color}
          textAnchor="middle"
        >
          {pulse}
        </SvgText>
      </Svg>
    </View>
  );
}
