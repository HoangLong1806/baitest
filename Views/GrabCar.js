import {
    Pressable,
    StyleSheet,
    Text,
    View,
    map,
    Image,
    Button,
} from 'react-native'

import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, FontAwesome, FontAwesome5, AntDesign, Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';

var data = [];
var url = "https://655841139c0b643cb2d6e996.mockapi.io/bike";
const GrabCar = ({ navigation }) => {
    var [data, setData] = useState([]);
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                data = json;
                console.log(data);
                setData(data);
            });
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: '#CCFFFF' }}>
            <view style={{ backgroundColor: '#99FFCC' }}>
                <View style={{ width: 80, height: 40, }}>
                    <Pressable onPress={() => navigation.navigate("Home")}  ><FontAwesome5 name="arrow-left" size={20} color={"green"} /></Pressable>
                </View>
                <view style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}><Text style={{ fontWeight: '600', fontSize: '18', margin: 10 }}>{` Di chuyển 
    Chúng tối đưa bạn đến bất kỳ đâu!`}</Text>
                    <Image source={require('../assets/bikeviewheader.jpg')} style={{ width: 140, height: 100, marginLeft: 240, marginTop: -79 }}></Image>

                </view>
            </view>


            <view style={{ justifyContent: 'center', alignItems: 'center', marginTop: -16, alignItems: 'center', marginLeft: 45, }} >
                <Pressable onPress={() => {
                    navigation.navigate('GrabGo')
                }} style={{ backgroundColor: 'white', width: 300, height: 30, borderRadius: 5, borderWidth: -1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <FontAwesome5 name="map-marker" size={24} color={"red"} />
                    <Text style={{ color: 'red', fontSize: '18', fontWeight: '700', marginLeft: 10 }}>Đến Đâu?</Text></Pressable>
            </view>
            <view style={{ backgroundColor: '#CCFFFF', marginTop: 30 }}>
                <View><text style={{ fontSize: 18, fontWeight: 600, marginLeft: 120, marginTop: 10, color: 'GrayText' }}>Điểm đến gần đây</text></View>
                {data.map((item) => {
                    return (
                        <View
                            key={item.id}
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                backgroundColor: '#00FFFF',
                                marginTop: 10
                                // justifyContent: "space-around",
                                // alignItems: "flex-start",

                            }}
                        >

                            <Image
                                style={{ width: 40, height: 40, borderRadius: 100, margin: 15 }}
                                source={{ uri: item.image }}
                            />

                            <Text
                                style={{

                                    color: "Black",
                                    marginTop: 20,

                                    height: 40
                                }}
                            >
                                {/* {item.name} */}
                                <Text>{item.Title}</Text>
                            </Text>
                        </View>
                    );
                })}

            </view>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, marginTop: 30 }}>
                <text style={{ fontWeight: 600, fontSize: 18 }}>Đến các địa điểm yêu thích</text>
                <FontAwesome5 name="arrow-right" size={20} color={"green"} /></View>
            <View >


                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', margin: 10 }}>
                    <View style={{ width: 40, height: 40, borderRadius: 100, borderWidth: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                        <FontAwesome5 name="home" size={20} color={"green"} />
                        {/* <text>Nhà</text> */}
                    </View>
                    <View style={{ width: 40, height: 40, borderRadius: 100, borderWidth: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                        <FontAwesome5 name="briefcase" size={20} color={"green"} />
                        {/* <text>Cơ quan</text> */}
                    </View>
                    <View style={{ width: 40, height: 40, borderRadius: 100, borderWidth: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                        <FontAwesome5 name="plus" size={20} color={"green"} />
                        {/* <text>Mới</text> */}
                    </View>

                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', margin: 5 }}>
                    <text style={{ marginLeft: 7 }}>Nhà</text>
                    <text>Cơ quan</text>
                    <text style={{ marginRight: 8 }}>Mới</text>
                </View>



            </View >
        </View >
    )
}

export default GrabCar

const styles = StyleSheet.create({})
