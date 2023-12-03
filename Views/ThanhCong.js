import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
const ThanhCong = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: 'white', }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <view style={{ flex: 1, justifyContent: 'space-around' }}>
                        <Image source={require('../assets/nhanvien.png')} style={{ width: 400, height: 400, marginTop: 70, }}></Image>
                    </view>



                </View>
            </View>
            <view >
                <Pressable onPress={() => {
                    navigation.navigate('Home')
                }} ><view style={{ width: 200, height: 30, borderWidth: 1, borderRadius: 5, marginLeft: 125 }}><Text style={{ fontSize: 19, fontWeight: 600, color: 'green' }}>Hoàn tất đặt xe</Text></view></Pressable>
            </view>
        </View >
    )
}

export default ThanhCong

const styles = StyleSheet.create({})