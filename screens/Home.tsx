import { Keyboard, Pressable, ScrollView } from 'react-native';
import { styles } from '../styles/styles';
import Pressure from '../components/Pressure/Pressure';
// import Button from '../components/Button/Button';

export default function Home() {
  return (
    <ScrollView style={{flex: 1}}>
    <Pressable style={{...styles.container, gap: 58}} onPress={Keyboard.dismiss}>
      <Pressure />
      {/* <Button onPress={() => {}}>Зберегти</Button> */}
    </Pressable>
    </ScrollView>
  )
}
