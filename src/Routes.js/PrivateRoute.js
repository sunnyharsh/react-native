import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabRoute from './TabRoute';
import navigationString from '../constants/navigationString';
import CustomDrawer from '../Components/CustomDrawer.js';
import Profile from '../Screens/Profile';

const PrivateRoute = () => {
    const Drawer = createDrawerNavigator();
    return (

        <Drawer.Navigator
            initialRouteName={navigationString.Home}
            drawerContent={
                (props) => <CustomDrawer {...props}
                />
            }
            screenOptions={{ headerShown: false }}
        >
            <Drawer.Screen name={"overView"} component={TabRoute} />
            <Drawer.Screen name={navigationString.Profile} component={Profile} />

        </Drawer.Navigator >
    )
}

export default PrivateRoute;