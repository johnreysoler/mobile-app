import { View,Text,TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../layouts/header/header";
import { style } from "../../../assets/style/style";
import { useState } from "react";

export default function ChangePassword({navigation}){
    const save = ()=>{
        Alert.alert('mama mo save')
    }
    const back = ()=>{
        navigation.navigate('Userprofile')
    }
    return(
        <SafeAreaView>
            <Header navigation={navigation} headerbutton={[]} name='Change Password' isOpenDrawerComponent={false}/>
            <View style={[style.container]}>
                <View style={[style.containerfluid]}>
                    <View style={[style.formcontrol]}>
                        <View>
                            <Text style={[style.fontsize12,style.colorgray]}>Current Password</Text>
                        </View>
                        <View>
                            <Text style={[style.fontsize17,{color:'#B5B5B5'}]}></Text>
                        </View>
                    </View>
                    <View style={[style.formcontrol]}>
                        <View>
                            <Text style={[style.fontsize12,style.colorgray]}>New Password</Text>
                        </View>
                        <View>
                            <Text style={[style.fontsize17,{color:'#B5B5B5'}]}></Text>
                        </View>
                    </View>
                    <View>
                        <Text style={[style.fontsize12,style.colorgray]}>
                            Must include 8 characters, 1 uppercase, 1 lowercase and digit.
                        </Text>
                    </View>
                    <View style={[style.ascenter,style.btnprimary]}>
                        <TouchableOpacity onPress={save}><Text style={[style.ascenter,style.textlight]}>Change Password</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>  
    )
}