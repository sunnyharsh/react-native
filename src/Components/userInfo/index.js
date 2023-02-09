import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import imagePath from '../../constants/imagePath';

const UserInfo = (props) => {
    const { navigation } = props;
    return (
        <View>
            <View>
                <TouchableOpacity onPress={() => navigation.closeDrawer()}
                    style={{ alignSelf: "flex-end", paddingRight: 10 }}>
                    <Image style={{ width: 30, height: 30 }} source={imagePath.icCross} />
                </TouchableOpacity>
            </View>
            <View style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 5,
                borderBottomColor: '#fff',
                borderBottomWidth: 2,
                paddingBottom: 5
            }}
            >
                <View>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }} style={{
                        width: 80,
                        height: 80,
                        borderRadius: 40
                    }} />
                </View>
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ color: "#fff" }}>Sunny kumar singh</Text>
                    <Text style={{ color: "#fff" }}>Age: 28</Text>
                    <Text style={{ color: "#fff" }}>Patna</Text>
                </View>
            </View>
        </View >
    )
}
export default UserInfo;