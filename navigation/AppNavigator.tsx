import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import List from "../screens/List";
import Chat from "../screens/Chat";
import Settings from "../screens/Settings";
import Header from "../components/Header/Header";
import TabMenu from "../components/TabMenu/TabMenu";
import Tablets from "../screens/Tablets";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "../styles/theme";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
    const colorScheme = useColorScheme();
    const getIcon = (iconDark: any, iconLight: any) => {
        return colorScheme === "dark" ? iconDark : iconLight;
    }
    return (
        <NavigationContainer theme={{ colors: { background: '#000000' } } as any}>
            <Header />
            <Tab.Navigator screenOptions={{headerShown: false}}
            tabBar={(props) => <TabMenu {...props} />}
            >
                <Tab.Screen name="Home" component={Home} options={{
                   icon: getIcon(require("../assets/homeLight.png"), require("../assets/home.png"))
                } as any}/>
                <Tab.Screen name="List" component={List} options={{
                    icon: getIcon(require("../assets/listLight.png"), require("../assets/list.png"))
                } as any}/>
                <Tab.Screen name="Tablets" component={Tablets} options={{
                    icon: getIcon(require("../assets/tabletsLight.png"), require("../assets/tablets.png"))
                } as any}/>
                <Tab.Screen name="Chat" component={Chat} options={{
                    icon: getIcon(require("../assets/chatLight.png"), require("../assets/chat.png"))
                } as any}/>
                <Tab.Screen name="Settings" component={Settings} options={{
                    icon: getIcon(require("../assets/settingsLight.png"), require("../assets/settings.png"))
                } as any}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}