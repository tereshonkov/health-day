import { View, Text } from 'react-native';
import { styles } from '../../styles/styles';

export default function TabletColumn({children}: {children: React.ReactNode}) {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
    <View style={styles.tabletContainer}>
        {children}
    </View>
    </View>
  )
}
