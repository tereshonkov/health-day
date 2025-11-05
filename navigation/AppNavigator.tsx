import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import List from "../screens/List";
import Chat from "../screens/Chat";
import Settings from "../screens/Settings";
import Header from "../components/Header/Header";
import TabMenu from "../components/TabMenu/TabMenu";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Header />
            <Tab.Navigator screenOptions={{headerShown: false}}
            tabBar={(props) => <TabMenu {...props} />}
            >
                <Tab.Screen name="Home" component={Home} options={{
                    icon: require("../assets/home.png")
                } as any}/>
                <Tab.Screen name="List" component={List} options={{
                    icon: require("../assets/list.png")
                } as any}/>
                <Tab.Screen name="Chat" component={Chat} options={{
                    icon: require("../assets/chat.png")
                } as any}/>
                <Tab.Screen name="Settings" component={Settings} options={{
                    icon: require("../assets/settings.png")
                } as any}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}