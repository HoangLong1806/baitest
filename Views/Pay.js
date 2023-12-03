import { StyleSheet, Text, View, Image, TextInput, Pressable, fontSize } from "react-native";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Tab = createBottomTabNavigator();
const Pay = () => {
  return (
    <view style={{ flex: 1, backgroundColor: 'White' }} >
      <view style={{ textAlign: 'center' }}><Text style={{ fontSize: 30, fontWeight: '700', }}>Thanh toán</Text></view>
      <view style={{ flex: 1, }}>
        <Image style={{ width: 410, height: 200, marginLeft: 2, marginTop: 70 }} source={require('../assets/thanhtoanview.jpg')} />
      </view>
      <view >
        <button style={{ width: 380, height: 40, borderWidth: 1, borderRadius: 5, margin: 1, backgroundColor: 'green' }} >
          <view><FontAwesomeIcon icon={faCreditCard} /><Text style={{ fontWeight: '600', marginLeft: '5' }}>Thêm thẻ</Text></view>

        </button>

      </view>
      <view style={{ flexDirection: "row", justifyContent: 'space-around', }}>
        <view style={{}}><button style={{ width: 120, height: 40, borderWidth: 1, borderRadius: 5, backgroundColor: 'white' }} >
          <view><FontAwesomeIcon icon={faCreditCard} /><Text style={{ fontWeight: '600', marginLeft: '10' }}>Nạp tiền</Text></view>
        </button></view>

        <view><button style={{ width: 120, height: 40, borderWidth: 1, borderRadius: 5, marginLeft: 10, backgroundColor: 'white', }} >
          <view><FontAwesomeIcon icon={faCreditCard} /><Text style={{ fontWeight: '600', marginLeft: 10 }}>Quét mã QR</Text></view>
        </button></view>

        <view><button style={{ width: 120, height: 40, borderWidth: 1, borderRadius: 5, marginLeft: 10, backgroundColor: 'white' }} >
          <view><FontAwesomeIcon icon={faCreditCard} /><Text style={{ fontWeight: '600', marginLeft: '10' }}>Gửi</Text></view>
        </button></view>
      </view >
    </view >
  );
};

export default Pay;
const styles = StyleSheet.create({});
