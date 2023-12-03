import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
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


export default function thanhcong({ }) {
   
  return (
        <View style = {{width: '100%', height: '100%'}}>
            <Pressable style = {{width: '100%', backgroundColor: "#33FF00", height: '100%', justifyContent: 'center', alignItems: 'center'}} onPress={() => navigation.navigate("Home")}>
                <View style = {{width: '100%', backgroundColor: "#33FF00", height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <View style = {{height: 100,width: 100, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: '100%'}}>
                        <FontAwesome5 name="check" size={40} color={"red"} style={{ marginTop: 2 }} />
                    </View>
            
                <Text style = {{fontSize: 40}}> 
                    Đăng kí thành công
                </Text> 
                </View>
            </Pressable>

        </View>
  )
}