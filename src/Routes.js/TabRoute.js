import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import About from '../Screens/About';
import navigationString from '../constants/navigationString';
import Welcome from '../Screens/Welcome';

const TabRoute = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false

        }}>
            <Tab.Screen
                name={navigationString.Home}
                component={Home}
                options={{ tabBarBadge: 3 }}
            />
            <Tab.Screen name={navigationString.About} component={About} />
            <Tab.Screen name={navigationString.Welcome} component={Welcome} />
        </Tab.Navigator>
    )
}

export default TabRoute;