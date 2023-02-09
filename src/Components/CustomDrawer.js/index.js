import React from 'react';
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';
import navigationString from '../../constants/navigationString';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import imagePath from '../../constants/imagePath';
import UserInfo from '../userInfo';

const CustomDrawer = (props) => {
    const { navigation } = props;
    const moveToScreen = (screen) => {
        navigation.navigate(screen)
    }
    return (
        <DrawerContentScrollView style={{ backgroundColor: '#4C919D' }} {...props}   >
            <View>
                <UserInfo navigation={navigation} />
                {/* Customize Drawer */}
                <View style={{ ...styles.textStyle }}>
                    <TouchableOpacity onPress={() => moveToScreen(navigationString.Home)} style={{ ...styles.btnContainer }}>
                        <Image
                            source={imagePath.icHome} style={{ ...styles.iconStyle }}
                        />
                        <Text style={styles.txtStyle}>
                            Home
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => moveToScreen(navigationString.About)} style={{ ...styles.btnContainer }}>
                        <Image
                            source={imagePath.icAbout} style={{ ...styles.iconStyle }}
                        />
                        <Text style={styles.txtStyle}>
                            About
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => moveToScreen(navigationString.Profile)}
                        style={{ ...styles.btnContainer }}>
                        <Image
                            source={imagePath.icAbout} style={{ ...styles.iconStyle }}
                        />
                        <Text style={styles.txtStyle}>
                            Profile
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* Default drawer */}
                {/* <DrawerItem
                    label={navigationString.Home}
                    onPress={() => navigation.navigate(navigationString.Home)}
                    icon={
                        () => <Image
                            source={imagePath.icHome} style={{ width: 20, height: 20, borderRadius: "50%" }}

                        />
                    }
                    labelStyle={{
                        color: '#fff', fontWeight: 'bold', fontSize: 18
                    }}
                />
                <DrawerItem
                    label={navigationString.About}
                    onPress={() => navigation.navigate(navigationString.About)}
                    icon={() => <Image source={imagePath.icAbout} style={{ width: 20, height: 20, borderRadius: "50%" }} />}
                    labelStyle={{
                        color: '#fff', fontWeight: 'bold', fontSize: 18
                    }}
                /> */}
            </View>
        </DrawerContentScrollView >
    );
}
export default CustomDrawer;

const styles = StyleSheet.create({
    textStyle: {
        padding: 10,
    },
    iconStyle: {
        width: 20,
        height: 20,
        borderRadius: "50%",
        marginTop: 10,
    },
    btnContainer: {
        flexDirection: "row"
    },
    txtStyle: {
        fontWeight: 'bold',
        color: "#fff",
        margin: 10
    }
})