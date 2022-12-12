import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import{ createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from '@expo/vector-icons'
//importar Pantallas
import Home from "../../../screens/Home";
import Settings from "../../../screens/Settings";
import Actions from "../../../screens/Actions";
import News from "../../../screens/News";
import Portafolio from "../../../screens/Portafolio";
import Prices from "../../../screens/Prices";

import TabBar from "../TabBar";




const HomeStackNavigator = createNativeStackNavigator();

function MyStack(){
//Creando una Stack
    return(
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreen"
        >

        <HomeStackNavigator.Screen
        name="Pantalla Principal"
        component={Home}
        />
        <HomeStackNavigator.Screen
        name="Nuevos Libros"
        component={News}
        options={{
            headerBackTitleVisible: false,
        }}
        />
        </HomeStackNavigator.Navigator>
    )
        
}

const TabBarNavigator = createBottomTabNavigator();
//Creacion de los botones, colores, iconos
const TabNavigator = () => {
    return(
        <TabBarNavigator.Navigator
        initialRouteName="Home"
        screenOptions={{
            tabBarActiveTintColor: 'purple',
            
        }}
        >
            <TabBarNavigator.Screen name="Inicio"component={MyStack}
            options={{
                tabBarLabel: 'Inicio',
                tabBarIcon: ({color, size }) => (
                   <MaterialCommunityIcons name="home-roof" color={color} size={size}/> 
                ),
                tabBarBadge: 10,
                headerShown: false,
            }}
            />   
            <TabBarNavigator.Screen name="Biblioteca"component={Portafolio}
             options={{
                tabBarLabel: 'Libros',
                tabBarIcon: ({color, size }) => (
                   <MaterialCommunityIcons name="book-open-page-variant" color={color} size={size}/> 
                )
            }}
            />
            <TabBarNavigator.Screen name="Precio"component={Prices}
             options={{
                tabBarLabel: 'Precios',
                tabBarIcon: ({color, size }) => (
                   <MaterialCommunityIcons name="credit-card-fast-outline" color={color} size={size}/> 
                )
            }}
            />
            <TabBarNavigator.Screen name="Acciones"component={Actions} 
             options={{
                tabBarLabel: 'Notificaciones',
                tabBarIcon: ({color, size }) => (
                   <MaterialCommunityIcons name="bell-ring-outline" color={color} size={size}/> 
                )
            }}
            />
            <TabBarNavigator.Screen name="Configuracion"component={Settings} 
             options={{
                tabBarLabel: 'Configuracion',
                tabBarIcon: ({color, size }) => (
                   <MaterialCommunityIcons name="cog-refresh-outline" color={color} size={size}/> 
                )
            }}
            />
        </TabBarNavigator.Navigator>
    )
}

const AppNavigator = () => {
    return(
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    )
}

export default AppNavigator;