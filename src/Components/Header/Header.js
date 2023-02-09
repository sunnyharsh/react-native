import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import imagePath from '../../constants/imagePath';
import navigationString from '../../constants/navigationString';

const Header = ({ navigation, actionKey }) => {
    const cx = styles;
    return (
        <View style={cx.container}>
            <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
                {actionKey === "Logout" && <View style={{ marginRight: 10 }}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()} >
                        <Image style={{ ...styles.iconStyle }} source={imagePath.icMenu} />
                    </TouchableOpacity>
                </View>}

                {/* <View style={{
                    backgroundColor: "grey",
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <TouchableOpacity onPress={() => navigation.navigate(navigationString.Home)}>
                            <Image style={{ ...styles.iconStyle }} source={imagePath.icLogo} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View> */}
            </View>
            <View>
                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", padding: 5 }}>{actionKey}</Text>
            </View>
        </View >
    )
}
export default Header;
const styles = StyleSheet.create({
    container: {
        backgroundColor: "dodgerblue",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        flex: 'flex'
    },
    iconStyle: {
        width: 50,
        height: 50,
        borderRadius: "50%",
    },
});