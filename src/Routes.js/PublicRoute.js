import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import navigationString from '../constants/navigationString';
import CustomDrawer from '../Components/CustomDrawer.js';
import Welcome from '../Screens/Welcome';

const PublicRoute = ({ enablePrivate }) => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator
            initialRouteName={navigationString.Welcome}
            drawerContent={
                (props) => <CustomDrawer {...props}
                />
            }
            screenOptions={{ headerShown: false }}
        >
            <Drawer.Screen name={navigationString.Welcome} component={Welcome} enablePrivate={enablePrivate} />
        </Drawer.Navigator >
    )
}

export default PublicRoute;