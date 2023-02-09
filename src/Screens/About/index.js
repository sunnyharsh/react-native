import React from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from "../../Components/Header/Header";
const About = (props) => {
    const { navigation } = props
    return (
        <SafeAreaView>
            <Header navigation={navigation} />
            <Text>
                About Screen
            </Text>
        </SafeAreaView>
    )
}
export default About;