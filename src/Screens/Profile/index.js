import React from 'react';
import { View, Text, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../Components/Header/Header';

const Profile = ({ navigation }) => {
    const NavigateOnOtherPage = () => {
        navigation.navigate("Home")
    }
    return (
        <SafeAreaView>
            <Header navigation={navigation} actionKey="Logout" />
            <Text>Profile Screen1</Text>
            <Button onPress={NavigateOnOtherPage} title="go on Home" />
        </SafeAreaView>
    )
}
export default Profile;