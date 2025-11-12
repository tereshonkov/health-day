import { View, useColorScheme } from 'react-native';
import { styles } from '../../styles/styles';
import { darkTheme, lightTheme } from '../../styles/theme';

export default function TabletColumn({children}: {children: React.ReactNode}) {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
    <View style={{gap: 20, width: '90%'}}>
        {children}
    </View>
    </View>
  )
}
