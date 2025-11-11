import { View, Dimensions, Text, useColorScheme } from "react-native";
import Svg, { Rect, Text as SvgText } from "react-native-svg";
import { darkTheme, lightTheme } from "../../styles/theme";
import React from "react";

const screenWidth = Dimensions.get("window").width;
const data = [150, 125, 130, 128, 122, 126, 124];

export default function LineChartTable() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;

  const svgWidth = screenWidth - 16 * 2 * 2;
  const svgHeight = 200;
  const barWidth = 30;
  const max = Math.max(...data);

  const numberOfBars = data.length;
  const space = (svgWidth - numberOfBars * barWidth) / (numberOfBars + 1);

  return (
    <View style={{ alignItems: "center" }}>
      <View style={[theme.container]}>
        <Text style={[theme.textXl, theme.primary]}>твій тиждень</Text>
        <Svg height={svgHeight} width={svgWidth}>
          {data.map((value, index) => {
            const barHeight = (value / max) * (svgHeight - 20);
            const x = space + index * (barWidth + space);

            return (
              <React.Fragment key={index}>
                {/* Столбец */}
                <Rect
                  x={x}
                  y={svgHeight - barHeight}
                  width={barWidth}
                  height={barHeight}
                  fill={theme.primary.color}
                  rx={16}
                />
                {/* Цифра сверху */}
                <SvgText
                  x={x + barWidth / 2} // по центру столбца
                  y={svgHeight - barHeight - 5} // чуть выше столбца
                  fontSize="12"
                  fill={theme.primary.color} // цвет текста
                  textAnchor="middle" // центрируем по горизонтали
                >
                  {value}
                </SvgText>
              </React.Fragment>
            );
          })}
        </Svg>
      </View>
    </View>
  );
}
