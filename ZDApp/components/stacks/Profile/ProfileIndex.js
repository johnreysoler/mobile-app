import { View,Text,TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../layouts/header/header";
import { style } from "../../../assets/style/style";
import { useState } from "react";
import ChangePassword from "./Changepassword";
import PrivacyStatement from "../AppInfo/PrivacyStatement";


export default function Userprofile({navigation}){
    const [link, setlink] = useState([
        {
            displayText : 'Privacy Statement',
            route : PrivacyStatement
        },
        {
            displayText : 'Change Password',
            route : ChangePassword
        },
        {
            displayText : 'Logout',
            route : 'Logout'
        }
    ])
 
    const [basicuserinfo, setbasicuserinfo] = useState([
        {
            id: 1,
            label: 'First Name',
            info: 'John Rey'
        },
        {   id: 2,
            label: 'Last Name',
            info: 'Soler'
        },
        {
            id: 3,
            label: 'Email',
            info: 'solerjohnrey29@gmail.com'
        }
    ])

    const [optionalinfo, setoptionalinfo] = useState([
        {
            id : 1,
            label : 'Phone Number',
            info : '09518914959'
        },
        {
            id : 2,
            label : 'Date of Birth',
            info : 'July 29, 1998'
        },

    ]);

    const edit = ()=>{
        navigation.navigate('Editprofile')
    }

    return(
        <SafeAreaView>
            <Header navigation={navigation} headerbutton={[{text: 'Edit',action:edit}]} name='Account' isOpenDrawerComponent={true}/>
            <View style={[style.container]}>
                <View style={[style.containerfluid]}>
                    {
                        basicuserinfo.map((item)=>{
                            return(
                                <View style={[style.formcontrol]} key={item.id}>
                                    <View>
                                        <Text style={[style.fontsize12,style.colorgray]}>{item.label}</Text>
                                    </View>
                                    <View>
                                        <Text style={[style.fontsize17,{color:'#B5B5B5'}]}>{item.info}</Text>
                                    </View>
                                </View>
                            )
                        })
                    } 

                    <View>
                        <Text style={[style.fontsize12,style.colorgray]}>The Email is used for login and password retrieval so make sure it's valid one.</Text>
                    </View>
                    <View style={{marginTop:30}}>
                        <Text style={[style.fwbold,style.colorgray,style.fontSize15]}>OPTION</Text>
                    </View>
                    {
                        optionalinfo.map((item)=>{
                            return(
                                <View style={[style.formcontrol]} key={item.id}>
                                    <View>
                                        <Text style={[style.fontsize12,style.colorgray]}>{item.label}</Text>
                                    </View>
                                    <View>
                                        <Text style={[style.fontsize17,{color:'#B5B5B5'}]}>{item.info}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                    {
                        link.map((item)=>{
                            return(
                                <View style={{paddingVertical:15}} key={item.route}>
                                    <TouchableOpacity onPress={()=>navigation.navigate(item.route)}>
                                        <Text style={style.fwbold}>{item.displayText}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    } 
                </View>
            </View>
        </SafeAreaView>

    )
}