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

const Viewgrabsend = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <view style={{ backgroundColor: "#99FFCC", }}>
        <View style={{ width: 200, height: 100, flexDirection: "row", alignItems: "center", fontSize: '700' }}>
          <Pressable onPress={() => navigation.navigate("GrabSend")}>
            <AntDesign name="left" size={24} color="black" />
          </Pressable>
          <View style={{ fontSize: 700 }}>
            <Text style={{ fontSize: 25, fontWeight: 700, marginLeft: 20 }}>Chi tiết đơn hàng</Text>
          </View>

        </View>



      </view>
      <view
        style={{
          marginTop: -20,
          marginLeft: 45,
        }}
      >
        <View
          style={{
            backgroundColor: "#DDDDDD",
            width: 300,
            height: '100%%',
            borderRadius: 5,
            borderWidth: -1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.circle}>
                <FontAwesome5 name="map-marker" size={5} color={"white"} />
              </View>
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 12,
                    fontWeight: "700",
                    marginLeft: 10,
                  }}
                >
                  {`Near Tiệm Sửa Xe Đông`}
                </Text> <Text
                  style={{
                    color: "#888888",
                    fontSize: 12,
                    fontWeight: "700",
                    marginLeft: 10,
                  }}
                >
                  {`Nam Trần - 84363767820`}
                </Text>
              </View>
            </View>
            <View style={{ marginLeft: 5 }}>

              <Text style={{}}>.</Text>

            </View>

            <View style={{ flexDirection: "row" }}>
              <FontAwesome5 name="map-marker" size={18} color={"red"} />
              <View style={{ flexDirection: "column", marginLeft: 10, }}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 12,
                    fontWeight: "700",

                  }}
                >
                  VinHomes Central Park,
                  208 Nguyễn Hữu Cả..
                </Text>
                <Text style={{ color: 'blue' }}>Thêm ngày nhận *</Text>
              </View>
            </View>
            <View style={{ marginLeft: 5, fontSize: '700' }}>

              <Text style={{}}>.</Text>

            </View>

            <View style={{ flexDirection: "row" }}>
              <FontAwesome5 name="map-marker" size={18} color={"#BBBBBB"} />
              <Text
                style={{
                  color: "black",
                  fontSize: 12,
                  fontWeight: "700",
                  marginLeft: 10,
                }}
              >
                Thêm điểm giao
              </Text>
            </View>

            <View style={{ height: 1, borderWidth: 1, marginTop: 10, backgroundColor: '#DDDDDD' }}>

            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <FontAwesome5 name="box" size={18} color={"red"} style={{ marginTop: 5 }} />
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 12,
                    fontWeight: "700",
                    marginLeft: 10,
                  }}
                >
                  {`Lấy hàng ngay (trong vòng 15 phút)`}
                </Text>
                <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <Text
                    style={{
                      color: "#888888",
                      fontSize: 12,
                      fontWeight: "700",
                      marginLeft: 10,
                    }}
                  >
                    {`Giao vào 21:45 - 1 tiếng`}
                  </Text>
                  <FontAwesome5 name="arrow-right" size={18} color={"red"} style={{ marginLeft: 100 }} />
                </View>
              </View>
            </View>



            <View style={{ height: 1, borderWidth: 1, marginTop: 10, backgroundColor: '#DDDDDD' }}>

            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <FontAwesome5 name="car" size={18} color={"red"} />
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 12,
                    fontWeight: "700",
                    marginLeft: 10,
                  }}
                >
                  {`Xe Ô tô`}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      color: "#888888",
                      fontSize: 12,
                      fontWeight: "700",
                      marginLeft: 10,
                    }}
                  >
                    {`Đề xuất dựa trên chi tiết món hàng`}
                  </Text>
                  <FontAwesome5 name="arrow-right" size={18} color={"red"} style={{ marginLeft: 40 }} />
                </View>
              </View>
            </View>




            <View style={{ height: 1, borderWidth: 1, marginTop: 10, backgroundColor: '#DDDDDD' }}>

            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <FontAwesome5 name="box" size={18} color={"red"} style={{ marginTop: 5 }} />
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 12,
                    fontWeight: "700",
                    marginLeft: 10,
                  }}
                >
                  {`Thêm chi tiết món hàng *`}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      color: "#888888",
                      fontSize: 12,
                      fontWeight: "700",
                      marginLeft: 10,
                    }}
                  >
                    {`Delivery Guarantee - 1 Tiêu chuẩn`}
                  </Text>
                  <FontAwesome5 name="arrow-right" size={18} color={"red"} style={{ marginLeft: 40 }} />
                </View>

              </View>
            </View>

          </View>

        </View>


      </view>

      {/*  view 2 */}
      <View style={{ marginTop: 20, marginLeft: 20 }}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 700 }}>
            Áp dụng ưu đãi
          </Text>

          <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>

            <FontAwesome5 name="percent" size={15} color={"red"} style={{ marginTop: 5, }} />
            <Text style={{ marginLeft: -40, marginTop: 2 }}>
              Áp dụng ưu đãi để được giảm giá
            </Text>
            <FontAwesome5 name="arrow-right" size={18} color={"red"} style={{ marginTop: 2, marginRight: 10 }} />

          </View>
        </View>


        <View>

          <Text style={{ fontSize: 20, fontWeight: 700 }}>
            Dịch vụ thêm
          </Text>

          <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', marginRight: 10 }}>

            <Text style={{ marginTop: 2 }}>
              Thu tiền hộ {`(COD)`}
            </Text>
            <FontAwesome5 name="plus" size={18} color={"red"} style={{ marginLeft: 70, marginTop: 2 }} />

          </View>

          <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', marginRight: 10 }}>

            <Text style={{ marginTop: 2 }}>
              Giao hàng tận tay
            </Text>
            <FontAwesome5 name="plus" size={18} color={"red"} style={{ marginLeft: 70, marginTop: 2 }} />

          </View>

          <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', marginRight: 10 }}>

            <Text style={{ marginTop: 2 }}>
              Ba gác bóc dỡ hàng
            </Text>
            <FontAwesome5 name="plus" size={18} color={"red"} style={{ marginLeft: 70, marginTop: 2 }} />

          </View>

          <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', marginRight: 10 }}>

            <Text style={{ marginTop: 2 }}>
              Giao hàng cỡ lớn {`(lên đến 50kg, 60x70x60cm)`}
            </Text>
            <FontAwesome5 name="plus" size={18} color={"red"} style={{ marginLeft: 70, marginTop: 2 }} />

          </View>

        </View>

      </View>
      <View style={{ height: 110, borderWidth: 1, marginTop: 50, backgroundColor: '#DDDDDD', }}>

        <View style={{ marginBottom: 40 }}>
          <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', marginRight: 30, marginLeft: 30 }}>
            <Text style={{ fontSize: 20, fontWeight: 700 }}>
              Tổng cộng
            </Text>
            <Text style={{ marginTop: 6, }}>
              143.000đ
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ marginTop: 10, flexDirection: 'row', marginRight: 30, marginLeft: 30, width: 50, height: 50, borderWidth: 1, justifyContent: "center", alignItems: 'center', borderRadius: "100%" }}>
              <View><FontAwesome5 name="save" size={18} color={"red"} style={{ marginTop: 2 }} /></View>

            </View>
            <View style={{ marginTop: 10, flexDirection: 'row', marginRight: 10, width: 200, height: 50, borderWidth: 1, justifyContent: "center", alignItems: 'center', borderRadius: 50 }}>
              <Text style={{ fontSize: 15, fontWeight: 700 }}>
                Kiểm tra đơn hàng
              </Text>
            </View>

          </View>
        </View>
      </View>





























    </View>
  );
};

export default Viewgrabsend;

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
