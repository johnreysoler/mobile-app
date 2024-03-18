import { View,Text, TouchableOpacity, StyleSheet,Alert } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome6';
import { style } from "../../../assets/style/style";
import { useState } from "react";


export default function Header({navigation,headerbutton,name,isOpenDrawerComponent}){
    let isDrawer = 'bars'

    if(!isOpenDrawerComponent){
        isDrawer = 'arrow-left'
    }

    const btnaction = ()=>{
        if(!isOpenDrawerComponent){
            navigation.goBack()
        }
        else{
            navigation.openDrawer()
        }
    }
    
    return(
        <View style={[style.theme,{flexDirection:'row',padding:10,height:50}]}>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={btnaction} style={{height:'100%',marginTop:3,marginStart:10}}>
                    <Icon name={isDrawer} type='font-awesome' size={25} />
                </TouchableOpacity>
                <Text style={{marginLeft:17,fontSize:20}}>{name}</Text>
            </View>
            <View style={{flex:1,alignItems:'flex-end'}}>
                <View style={{flexDirection:'row'}}>
                {
                    headerbutton.map((item)=>{
                        return (
                            <TouchableOpacity key={item.text} onPress={item.action} style={{marginHorizontal:10}}>
                                <Text style={{marginTop:3}}>{item.text}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
                </View>
            </View>
        </View>
    )
}