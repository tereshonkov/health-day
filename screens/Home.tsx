import { Keyboard, Pressable, Text } from 'react-native';
import { styles } from '../styles/styles';
import Pressure from '../components/Pressure/Pressure';

export default function Home() {
  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <Pressure />
    </Pressable>
  )
}
