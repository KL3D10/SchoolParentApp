import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen'
import VectorIcon from '../utils/VectorIcon'
import NotificationsScreen from '../screens/Notifications/NotificationsScreen'
import PaymentsScreen from '../screens/Payments/PaymentsScreen'
import GalleryScreen from '../screens/GalleryScreen'
import ProfileScreen from '../screens/ProfileScreen'
import MessagesScreen from '../screens/Notifications/MessagesScreen'
import SingleNotificationScreen from '../screens/Notifications/SingleNotificationScreen'
import SingleMessageScreen from '../screens/Notifications/SingleMessageScreen'

const AppNavigation = () => {
    const Stack = createNativeStackNavigator()
    const Tab = createBottomTabNavigator()

    const NotificationsStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} options={{ headerShown: false }} />
                <Stack.Screen name="SingleNotificationScreen" component={SingleNotificationScreen} options={{ headerShown: false }} />
                <Stack.Screen name="MessagesScreen" component={MessagesScreen} options={{ headerShown: false }} />
                <Stack.Screen name="SingleMessageScreen" component={SingleMessageScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        )
    }
    const PaymentsStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="PaymentsScreen" component={PaymentsScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        )
    }
    const CalendarStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="PaymentsScreen" component={PaymentsScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        )
    }
    const GalleryStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="GalleryScreen" component={GalleryScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        )
    }
    const ProfileStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name='Notifications'
                    component={NotificationsStack}
                    options={{
                        headerShown: false,
                        tabBarLabel: ({ focused }) => 
                            focused ? (
                                <Text style={{color: "#10388d", fontSize: 12}}>Njoftime</Text>
                            ) : (
                                <Text style={{color: "#fca311", fontSize: 12}}>Njoftime</Text>
                            ),
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <VectorIcon type='Ionicons' name="notifications" size={24} color="#10388d" />
                            ) : (
                                <VectorIcon type='Ionicons' name="notifications" size={24} color="#fca311" />
                            )
                    }}
                />
                <Tab.Screen
                    name='Payments'
                    component={PaymentsStack}
                    options={{
                        tabBarLabel: ({ focused }) => 
                        focused ? (
                            <Text style={{color: "#10388d", fontSize: 12}}>Pagesa</Text>
                        ) : (
                            <Text style={{color: "#fca311", fontSize: 12}}>Pagesa</Text>
                        ),
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <VectorIcon type='Entypo' name="credit-card" size={24} color="#10388d" />
                            ) : (
                                <VectorIcon type='Entypo' name="credit-card" size={24} color="#fca311" />
                            )
                    }}
                />
                <Tab.Screen
                    name='Calendar'
                    component={CalendarStack}
                    options={{
                        tabBarLabel: ({ focused }) => 
                        focused ? (
                            <Text style={{color: "#10388d", fontSize: 12}}>Kalendari</Text>
                        ) : (
                            <Text style={{color: "#fca311", fontSize: 12}}>Kalendari</Text>
                        ),
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <VectorIcon type='Ionicons' name="calendar" size={24} color="#10388d" />
                            ) : (
                                <VectorIcon type='Ionicons' name="calendar" size={24} color="#fca311" />
                            )
                    }}
                />
                <Tab.Screen
                    name='Gallery'
                    component={GalleryStack}
                    options={{
                        tabBarLabel: ({ focused }) => 
                        focused ? (
                            <Text style={{color: "#10388d", fontSize: 12}}>Publikime</Text>
                        ) : (
                            <Text style={{color: "#fca311", fontSize: 12}}>Publikime</Text>
                        ),
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <VectorIcon type='Fontisto' name="photograph" size={24} color="#10388d" />
                            ) : (
                                <VectorIcon type='Fontisto' name="photograph" size={24} color="#fca311" />
                            )
                    }}
                />
                <Tab.Screen
                    name='Profili'
                    component={ProfileStack}
                    options={{
                        tabBarLabel: ({ focused }) => 
                        focused ? (
                            <Text style={{color: "#10388d", fontSize: 12}}>Profili</Text>
                        ) : (
                            <Text style={{color: "#fca311", fontSize: 12}}>Profili</Text>
                        ),
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <VectorIcon type='Ionicons' name="person-sharp" size={24} color="#10388d" />
                            ) : (
                                <VectorIcon type='Ionicons' name="person-sharp" size={24} color="#fca311" />
                            )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation