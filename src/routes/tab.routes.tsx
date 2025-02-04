import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { Image } from "react-native";
import styles from './styles'

const Tab = createBottomTabNavigator();

import meuPerfil from "../assets/meuPerfil.png";
import Plus from "../assets/plus.svg"
import House from "../assets/house.svg";
import Search from "../assets/search.svg";
import Store from "../assets/store.svg";
import Union from "../assets/union.svg";


export function TabsRoutes() {
  return (
    <Tab.Navigator 
        screenOptions={ 
            {
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "#000"
                },
                tabBarShowLabel: false,
            }
        }
    >
        <Tab.Screen 
            options={
                {
                    tabBarIcon: ({color}) => <House />
                }
            } 
            name="Home" 
            component={Home} 
        />
         <Tab.Screen 
            options={
                {
                    tabBarIcon: ({color}) => <Search />
                }
            } 
            name="Home2" 
            component={Home} 
        />
         <Tab.Screen 
            options={
                {
                    tabBarIcon: ({color}) => <Plus style={styles.foto}/>
                }
            } 
            name="Home3" 
            component={Home} 
        />
         <Tab.Screen 
            options={
                {
                    tabBarIcon: ({color}) => <Union />
                }
            } 
            name="Hom4" 
            component={Home} 
        />
         <Tab.Screen 
            options={
                {
                    tabBarIcon: ({color}) => <Image style={styles.foto} source={meuPerfil} />
                }
            } 
            name="Home5" 
            component={Home} 
        />
    </Tab.Navigator>
  );
}
