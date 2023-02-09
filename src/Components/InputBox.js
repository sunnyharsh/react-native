import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

export default function InputBox(props) {
    const { handleChnage, name } = props
    return (
        <TextInput
            style={styles.input}
            name="username"
            onChangeText={(txt) => handleChnage(txt, name)}
            {...props}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        width: "60%",
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 4
    },
})