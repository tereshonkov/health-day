import { Pressable, Text, View, StyleSheet } from 'react-native';

export default function TabletItem({title, count, isTaken, onToogle, id}: {title?: string, count?: number, isTaken?: boolean, onToogle?: (id: string) => void, id: string}) {
    const handlePress = () => {
        onToogle && onToogle(id);
    }
  return (
    <View style={isTaken ? tabsStyles.itemActive : tabsStyles.item}>
    <Text style={isTaken ? tabsStyles.textActive : tabsStyles.text}>{title}</Text>
    <Text style={isTaken ? tabsStyles.countActive : tabsStyles.count}>{count}</Text>
    <Pressable onPress={handlePress} style={isTaken ? tabsStyles.btnActive : tabsStyles.btn}>
        <Text>{!isTaken ? 'Прийняти' : 'Прийнято'}</Text>
    </Pressable>
  </View>
  )
}

const tabsStyles = StyleSheet.create({
    item: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#59CECF',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    itemActive: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#59CECF',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#42A5F5',
    },
    text: {
        fontSize: 18,
        color: '#59CECF',
        width: '40%',
    },
    textActive: {
        fontSize: 18,
        color: '#FFFFFF',
        width: '40%',
    },
    count: {
        fontSize: 20,
        color: '#59CECF',
    },
    countActive: {
        fontSize: 20,
        color: '#FFFFFF',
    },
    btn: {
        padding: 10,
        backgroundColor: '#59CECF',
        borderRadius: 10,
        alignItems: 'center',
    },
    btnActive: {
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        alignItems: 'center',
    },
})
