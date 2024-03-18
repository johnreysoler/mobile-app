import { useState } from "react";
import { View,Text, TouchableOpacity, StyleSheet,Alert } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome6';

export default function Header({navigation,headerbutton,name,isOpenDrawerComponent,bgColor}){
    const [ItemCount, setItemCount] = useState()
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
        <View style={[{flexDirection:'row',padding:10,height:50,backgroundColor:bgColor}]}>
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
                                <View style={{flexDirection:'row'}}>
                                    <Icon name={item.icon} type='font-awesome' size={20} />
                                    <Text style={{fontSize:13,marginHorizontal:2}}>{item.count}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
                </View>
            </View>
        </View>
    )
}