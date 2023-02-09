import React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../Components/Header/Header';

const Home = ({ navigation }) => {
    const NavigateOnOtherPage = () => {
        navigation.navigate("About")
    }
    return (
        <SafeAreaView>
            <Header navigation={navigation} actionKey={"Logout"} />
            <Text>Home Screen1</Text>
            <Button onPress={NavigateOnOtherPage} title="go on About" />
        </SafeAreaView>
    )
}
export default Home;