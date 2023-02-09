import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Image, TextInput, TouchableHighlight, Alert } from 'react-native';
import InputBox from '../../Components/InputBox';
import imagePath from '../../constants/imagePath';

export default function Welcome(props, { navigation }) {

    const [formData, setFormData] = useState({
        userName: "",
        password: ""
    })

    const handleChnage = (text, name) => {
        setFormData({ ...formData, [name]: text })
    }

    const submitHandle = () => {
        const { userName, password } = formData
        if (userName.toLowerCase() === "sunny" && password === "1234") {
            Alert.alert("Login successfully");
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <Image style={{ ...styles.iconStyle }} source={imagePath.icLogo} />
            <Text style={styles.welcomeTxt}>Welcome!</Text>

            <InputBox
                placeholder="USERNAME"
                name="userName"
                handleChnage={handleChnage}
            />

            <InputBox
                handleChnage={handleChnage}
                placeholder="PASSWORD"
                keyboardType="numeric"
                name="password"
            />

            <TouchableHighlight
                style={styles.submit}
                underlayColor='#fff'
                onPress={submitHandle}
            >
                <Text style={styles.submitText}>SUBMIT</Text>
            </TouchableHighlight>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    iconStyle: {
        width: 150,
        height: 150,
        borderRadius: "50%",
    },
    welcomeTxt: {
        fontSize: 30,
        marginTop: 12,
        fontWeight: "bold"
    },
    submit: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        width: "60%",
    },
    submitText: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: 20,
        textAlign: 'center',
    }
})