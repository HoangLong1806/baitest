import {
  Pressable,
  StyleSheet,
  Text,
  View,
  map,
  Image,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
var data = [];
var url = "https://655841139c0b643cb2d6e996.mockapi.io/ACTION";
const Actions = () => {
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
    <View>
      <view>
        <text style={{ justifyContent: "center", alignItems: 'center', fontWeight: '600', margin: 10, color: 'green' }}> Hoạt động gần đây</text>
      </view>
      {data.map((item) => {
        return (
          <View
            key={item.id}
            style={{
              flex: 1,
              flexDirection: "row",
              // justifyContent: "space-around",
              // alignItems: "flex-start",

            }}
          >

            <Image
              style={{ width: 40, height: 40, borderRadius: 100, margin: 10 }}
              source={{ uri: item.image }}
            />
            <Text
              style={{

                color: "Black",
                marginTop: 20
              }}
            >
              {item.name}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default Actions;

const styles = StyleSheet.create({});
