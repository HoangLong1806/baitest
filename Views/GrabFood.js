import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from "react-native";

import React, { useEffect, useState } from "react";
import {
  Feather,
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Entypo,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";

var data = [];
var url = "https://65419d75f0b8287df1fe8b4a.mockapi.io/bikek";
const GrabFood = () => {
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
    // Header
    <View>
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

      {/* Center */}

      <view style={{ backgroundColor: "#CCFFFF", marginTop: 30 }}>
        {data.map((item) => {
          return (
            <View
              key={item.id}
              style={{
                flex: 1,
                flexDirection: "row",
                backgroundColor: "white",
                marginTop: 10,
              }}
            >
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                  margin: 15,
                }}
                source={{ uri: item.img }}
              />

              <View>
                <Text
                  style={{
                    fontWeight: "700",
                    color: "Black",
                    marginTop: 20,
                    height: 40,
                  }}
                >
                  {/* {Tên} */}
                  <Text>{item.name}</Text>
                </Text>

                <Text
                  style={{
                    fontWeight: "700",
                    color: "Black",

                    height: 40,
                  }}
                >
                  <FontAwesome5
                    name="star"
                    size={20}
                    color={"yellow"}
                    backgroundColor={"yellow"}
                  />
                  {/* {đánh giá} */}
                  <Text style={{ marginLeft: 10 }}>{item.gold}</Text>
                </Text>
                {/* Phan đặt ngay */}
                <View style={{
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  alignContent: 'space-between'

                }}>

                  <Text
                    style={{
                      fontWeight: "700",
                      color: "Black",

                      height: 40,
                    }}
                  >
                    {/* {Giá tiền} */}
                    <Text>{item.price}</Text>
                    <view
                      style={{
                        marginTop: 10,
                        marginLeft: 20,
                        alignItems: "flex-start",
                        justifyContent: 'space-between'
                      }}
                    >
                      <Pressable
                        style={{
                          backgroundColor: "#00CC00",
                          width: 70,
                          height: 30,
                          borderRadius: 5,
                          borderWidth: -1,
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "row",
                          marginLeft: 100,

                        }}
                      >
                        <View style={{}}>
                          <View style={{ flexDirection: "row" }}>
                            <Text
                              style={{
                                color: "black",
                                fontSize: 12,
                                fontWeight: "700",
                                marginLeft: 0,
                              }}
                            >
                              Đặt Ngay
                            </Text>
                          </View>
                        </View>
                      </Pressable>
                    </view>
                  </Text>
                </View>


              </View>
            </View>
          );
        })}
      </view>
    </View>
  );
};

export default GrabFood;

const styles = StyleSheet.create({});
