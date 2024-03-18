import { View,Text,StyleSheet, Alert } from "react-native";
import { style } from "../../../assets/style/style";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../layouts/header/header";
import { FlatList, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";

export default function FoodIndex({navigation}){
    const [category, setcategory] = useState([
        { name:'All'},{ name:'For Sharing'},{ name:'Breakfast'},{ name:'Burgers'},{ name:'Chicken & Rice Meals'},{ name:'Drinks & Desserts'},{ name:'Fries & Sides'}
    ])

    const viewfood = (name)=>{
        Alert.alert(name)
    }
    return(
        <SafeAreaView>
            <Header navigation={navigation} headerbutton={[]} name='Food' isOpenDrawerComponent={true}/>
            <View style={[style.container]}>
                <View style={{width:'90%',marginTop:15}}>
                    <FlatList horizontal={true} style={{marginBottom:15}}
                    data={category}
                    renderItem={(a)=>{
                        return(
                            <TouchableOpacity style={[styles.btncategory]} key={a.item.name} onPress={()=>viewfood(a.item.name)}>
                                <Text>{a.item.name}</Text>
                            </TouchableOpacity>
                        )
                    }}>
                    </FlatList>
                    <ScrollView>
                        <View style={{flexDirection:'row',justifyContent:'space-between',gap:6,flexWrap: 'wrap'}}>
                            <View style={{backgroundColor:'gray',height:250,width:'49%'}}>
                                <TouchableOpacity style={{height:'100%'}} onPress={()=> Alert.alert('Test Product')}>
                                    <Text>Test Product</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{backgroundColor:'gray',height:250,width:'49%'}}>
                                <TouchableOpacity style={{height:'100%'}} onPress={()=> Alert.alert('Test Product')}>
                                    <Text>Test Product</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{backgroundColor:'gray',height:250,width:'49%'}}>
                                <TouchableOpacity style={{height:'100%'}} onPress={()=> Alert.alert('Test Product')}>
                                    <Text>Test Product</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{backgroundColor:'gray',height:250,width:'49%'}}>
                                <TouchableOpacity style={{height:'100%'}} onPress={()=> Alert.alert('Test Product')}>
                                    <Text>Test Product</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{backgroundColor:'gray',height:250,width:'49%'}}>
                                <TouchableOpacity style={{height:'100%'}} onPress={()=> Alert.alert('Test Product')}>
                                    <Text>Test Product</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{backgroundColor:'gray',height:250,width:'49%'}}>
                                <TouchableOpacity style={{height:'100%'}} onPress={()=> Alert.alert('Test Product')}>
                                    <Text>Test Product</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{backgroundColor:'gray',height:250,width:'49%'}}>
                                <TouchableOpacity style={{height:'100%'}} onPress={()=> Alert.alert('Test Product')}>
                                    <Text>Test Product</Text>
                                </TouchableOpacity>
                            </View>




                            {/* <Productdescription style={{borderWidth:1}}/> */}
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )    
}


function Productdescription(){
    const items = []

    for(let i = 1;i <= 10;i++ ){
        items.push(
            <View style={{backgroundColor:'gray',height:250,width:'49%'}} key={i}>
                <TouchableOpacity style={{height:'100%'}} onPress={()=> Alert.alert('Test Product '+i+'')}>
                    <Text>Test Product {i}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return items;
} 

const styles = StyleSheet.create({
    btncategory : {
        borderWidth:1,
        padding:7,
        paddingHorizontal:15,
        borderRadius:100,
        marginEnd:5
    }
})