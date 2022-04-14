import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, Text, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppColors } from "../../Theme";

const DrawerContent = () => {

    const Data = [
     
        {
            label:"Temprature",
            parm1:"°C",
            parm2:"°F",
            id:"2"
        },
        {
            label:"Wind speed",
            parm1:"m/s",
            parm2:"km/h",
            parm3:"mi/h",
            id:"3"
        },
        {
            label:"Pressure",
            parm1:"°C",
            parm2:"°F",
            id:"4"
        },
        {
            label:"Precipitation",
            parm1:"°C",
            parm2:"°F",
            id:"5"
        },
        {
            label:"Distance",
            parm1:"°C",
            parm2:"°F",
            id:"6"
        },
        {
            label:"Time Formate",
            parm1:"°C",
            parm2:"°F",
            id:"7"
        },
        {
            label:"Temprature",
            parm1:"°C",
            parm2:"°F",
            id:"8"
        },

    ]

    const renderList = (item) => {
        return(
            <>

          {item.label == "Wind speed" ?
           <View style={{  marginBottom: 40 }}>
           <Text style={{ fontSize: 15, color: '#fff' }}>{item.label}</Text>
          <View style={{ width: '75%', flexDirection: 'row', height: 45, borderWidth: 2, borderColor: AppColors.Orange, marginTop: 15, borderRadius: 5 }}>
                <TouchableOpacity style={{ flex: 1, backgroundColor: AppColors.Orange, justifyContent:"center" }}>
                    <Text style={{fontSize:18,textAlign:'center',color:AppColors.backGround1}}>{item.parm1}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, justifyContent:"center", alignItems:"center" }}>
                <Text style={{fontSize:18,textAlign:'center',color:AppColors.backGround2}}>{item.parm2}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex:1 , justifyContent:"center", alignItems:"center", borderLeftColor:AppColors.Orange,borderLeftWidth:1 }}>
                <Text style={{fontSize:18,textAlign:'center',color:AppColors.backGround2}}>{item.parm3}</Text>
                </TouchableOpacity>
            </View>
             </View>
            :
        
            <View style={{  marginBottom: 40 }}>
            <Text style={{ fontSize: 15, color: '#fff' }}>{item.label}</Text>
            <View style={{ width: '50%', flexDirection: 'row', height: 45, borderWidth: 2, borderColor: AppColors.Orange, marginTop: 15, borderRadius: 5 }}>
                <TouchableOpacity style={{ flex: 0.5, backgroundColor: AppColors.Orange, justifyContent:"center" }}>
                <Text style={{fontSize:18,textAlign:'center',color:AppColors.backGround1}}>{item.parm1}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 0.5, justifyContent:"center", alignItems:"center" }}>
                <Text style={{fontSize:18,textAlign:'center',color:AppColors.backGround2}}>{item.parm2}</Text>
                </TouchableOpacity>
            </View>
            </View>
            }
            </>
        )
    }

    return (
        <SafeAreaView style={{ backgroundColor: AppColors.backGround1 }}>
            <View style={{ padding: 30,marginBottom:30, backgroundColor: AppColors.backGround1 }}>
                <Text style={{ fontSize: 25, color: '#fff',marginBottom: 40 }}>Settings</Text>
                <View >
                    <FlatList
                        data={Data}
                        renderItem={item => renderList(item.item,)}
                        listKey={(item, index) => 'b' + index + item.id.toString()}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ justifyContent: 'center', }}
                    />
                  
                </View>
            </View>
        </SafeAreaView>

    );

}

export default DrawerContent