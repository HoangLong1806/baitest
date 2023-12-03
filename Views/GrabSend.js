import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  Feather,
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Entypo,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";

const GrabSend = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <view style={{ backgroundColor: "#99FFCC" }}>
        <View style={{ width: 80, height: 40 }}>
          <Pressable onPress={() => navigation.navigate("Home")}>
            <AntDesign name="left" size={24} color="black" />
          </Pressable>
        </View>
        <view
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Text
            style={{ fontWeight: "600", fontSize: "18", margin: 10 }}
          >{` Express Xin chào 
                    Dịch vụ giao nhận hàng mọi lúc`}</Text>
          <Image
            source={require("../assets/bikeviewheader.jpg")}
            style={{ width: 140, height: 100, marginLeft: 260, marginTop: -79 }}
          ></Image>
        </view>
      </view>

      <view
        style={{
          marginTop: -10,
          marginLeft: 45,
        }}
      >
        <Pressable
          style={{
            backgroundColor: "pink",
            width: 300,
            height: 100,
            borderRadius: 5,
            borderWidth: -1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View style={{}}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.circle}>
                <FontAwesome5 name="map-marker" size={5} color={"white"} />
              </View>
              <Text
                style={{
                  color: "black",
                  fontSize: 12,
                  fontWeight: "700",
                  marginLeft: 10,
                }}
              >
                Near 137/27 Alley 168 Hoang Minh Chanh
              </Text>
            </View>
            <View>
              <Text style={{}}>.</Text>
              <Text style={{}}>.</Text>
              <Text style={{}}>.</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <FontAwesome5 name="map-marker" size={18} color={"red"} />
              <Text
                style={{
                  color: "black",
                  fontSize: 12,
                  fontWeight: "700",
                  marginLeft: 10,
                }}
              >
                VinHomes Central Park,
                208 Nguyễn Hữu Cả..
              </Text>
            </View>
          </View>
        </Pressable>
      </view>



      {/* Center */}
      <View style={{ flexDirection: "row" }}>
        <view
          style={{
            marginTop: 20,
            marginLeft: 33,
          }}
        >
          <Pressable
            style={{
              backgroundColor: "#DDDDDD",
              width: 150,
              height: 40,
              borderRadius: 5,
              borderWidth: -1,

              flexDirection: "row",
            }}
          >
            <View style={{}}>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 12,

                    marginLeft: 10,
                  }}
                >
                  Giao Đến
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 12,
                    fontWeight: "700",
                    marginLeft: 10,
                  }}
                >
                  VinHomes Central Park
                </Text>
              </View>
            </View>
          </Pressable>
        </view>
        <view
          style={{
            marginTop: 20,
            marginLeft: 25,
          }}
        >
          <Pressable
            style={{
              backgroundColor: "#DDDDDD",
              width: 150,
              height: 40,
              borderRadius: 5,
              borderWidth: -1,

              flexDirection: "row",
            }}
          >
            <View style={{}}>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 12,

                    marginLeft: 10,
                  }}
                >
                  Giao Đến
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 12,
                    fontWeight: "700",
                    marginLeft: 10,
                  }}
                >
                  VinHomes Central Park
                </Text>
              </View>
            </View>
          </Pressable>
        </view>
      </View>




      <View style={{ flexDirection: "row" }}>
        <view
          style={{
            marginTop: 20,
            marginLeft: 33,
          }}
        >
          <Pressable
            style={{
              backgroundColor: "#DDDDDD",
              width: 150,
              height: 40,
              borderRadius: 5,
              borderWidth: -1,

              flexDirection: "row",
            }}
          >
            <View style={{}}>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 12,

                    marginLeft: 10,
                  }}
                >
                  Giao Đến
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 12,
                    fontWeight: "700",
                    marginLeft: 10,
                  }}
                >
                  VinHomes Central Park
                </Text>
              </View>
            </View>
          </Pressable>
        </view>
        <view
          style={{
            marginTop: 20,
            marginLeft: 25,
          }}
        >
          <Pressable
            style={{
              backgroundColor: "#DDDDDD",
              width: 150,
              height: 40,
              borderRadius: 5,
              borderWidth: -1,
              flexDirection: "row",
            }}
          >
            <View style={{}}>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 12,

                    marginLeft: 10,
                  }}
                >
                  Giao Đến
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 12,
                    fontWeight: "700",
                    marginLeft: 10,
                  }}
                >
                  VinHomes Central Park
                </Text>
              </View>
            </View>
          </Pressable>
        </view>
      </View>

      {/* Butoon xem giá cước */}
      <view
        style={{
          marginTop: 300,
          marginLeft: 20,


        }}
      >
        <Pressable

          onPress={() => navigation.navigate("Viewgrabsend")}
          style={{
            backgroundColor: "#00CC00",
            width: 350,
            height: 40,
            borderRadius: 5,
            borderWidth: -1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",

          }}
        >
          <View style={{}}>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  color: "black",
                  fontSize: 12,
                  fontWeight: "700",
                  marginLeft: 10,

                }}
              >
                Xem giá ước tính
              </Text>
            </View>

          </View>
        </Pressable>
      </view>
    </View>
  );
};

export default GrabSend;

const styles = StyleSheet.create({
  circle: {
    width: 15,
    height: 15,
    borderRadius: "100%",
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {},
});
