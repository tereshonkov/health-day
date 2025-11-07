import { Text, View } from 'react-native';
import { styles } from '../styles/styles';

export default function Settings() {
  return (
    <View style={{padding: 16, gap: 16, alignItems: 'center'}}>
          <View
      style={{
        padding: 10,
        gap: 8,
        borderWidth: 1,
        borderColor: "#59CECF",
        flexDirection: "row",
        justifyContent: "center",
        minWidth: 350,
        borderRadius: 20,
        backgroundColor: "#FFFFFF26",
      }}
    >
      <Text style={{ fontSize: 22, color: "#59CECF" }}>Налаштування пігулки</Text>
    </View>
              <View
      style={{
        padding: 10,
        gap: 8,
        borderWidth: 1,
        borderColor: "#59CECF",
        flexDirection: "row",
        justifyContent: "center",
        minWidth: 350,
        borderRadius: 20,
        backgroundColor: "#FFFFFF26",
      }}
    >
      <Text style={{ fontSize: 22, color: "#59CECF" }}>Часті запитання</Text>
    </View>
                  <View
      style={{
        padding: 10,
        gap: 8,
        borderWidth: 1,
        borderColor: "#ffffffff",
        flexDirection: "row",
        justifyContent: "center",
        minWidth: 350,
        borderRadius: 20,
        backgroundColor: "#f00924ff",
      }}
    >
      <Text style={{ fontSize: 22, color: "#ffffffff" }}>Видалити обліковий запис</Text>
    </View>
    </View>
  )
}