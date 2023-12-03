import { Pressable, StyleSheet, Text, View, Image, TextInput } from 'react-native'
import { Feather, FontAwesome, FontAwesome5, AntDesign, Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
var data = [];
var url = "https://655841139c0b643cb2d6e996.mockapi.io/bike";
const GrabGo = () => {
    const navigation = useNavigation();
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
        <View style={{ flex: 1 }}>
            <view style={{ backgroundColor: '#99FFCC' }}>
                <View style={{ width: 80, height: 40, }}>
                    <Pressable onPress={() => navigation.navigate("Home")}  ><FontAwesome5 name="arrow-left" size={20} color={"green"} /></Pressable>
                </View>
                <view style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}><Text style={{ fontWeight: '600', fontSize: '18', margin: 10 }}>{` Di chuyển 
    Chúng tối đưa bạn đến bất kỳ đâu!`}</Text>
                    <Image source={require('../assets/bikeviewheader.jpg')} style={{ width: 140, height: 100, marginLeft: 245, marginTop: -79 }}></Image>
                </view>
            </view>
            <View
                style={{
                    backgroundColor: "white",
                    marginLeft: 5,
                    borderRadius: 100,
                    padding: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    width: 380,
                }}
            >
                <Feather name="search" size={24} color="black" />
                <TextInput
                    placeholder="Bạn đang thèm gì nào?"
                    style={{ fontSize: 15, color: "gray", width: 400, height: 30 }}
                ></TextInput>
            </View>
            <view>
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
            <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 16 }}>
                <Pressable
                    onPress={() => {
                        navigation.navigate('ThanhCong')
                    }}
                    style={{
                        backgroundColor: "#00CC00",
                        width: 70,
                        height: 30,
                        borderRadius: 5,
                        borderWidth: -1,
                        alignSelf: 'center',

                    }}
                >
                    <View>
                        <Text
                            style={{
                                color: "black",
                                fontSize: 12,
                                fontWeight: "700",
                                textAlign: 'center',
                            }}
                        >
                            Đặt Ngay
                        </Text>
                    </View>
                </Pressable>
            </View>



        </View >
    )
}

export default GrabGo

const styles = StyleSheet.create({})