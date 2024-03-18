import { View, Text, StyleSheet, Alert, Modal, Pressable } from "react-native";
import { style } from "../../../assets/style/style";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../layouts/header/header";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome6';

export default function FoodIndex({ navigation }) {
    const [category, setcategory] = useState([
        { name: 'All' }, { name: 'For Sharing' }, { name: 'Breakfast' }, { name: 'Burgers' }, { name: 'Chicken & Rice Meals' }, { name: 'Drinks & Desserts' }, { name: 'Fries & Sides' }
    ])
    const [modalVisible, setModalVisible] = useState(false);
    const [count, setcount] = useState([1, 2,3,4,5,6,7,8,9,0,11,12,13])
    const viewitem = (a) => {
        setModalVisible(true)
    }

    const viewfood = (x) => {
        console.log(x)
    }
    const viewcart = () => {
        navigation.navigate('BasketIndex')
    }
    return (
        <SafeAreaView>
            <Header navigation={navigation} headerbutton={[{ text: '', action: viewcart, icon: 'cart-shopping', count: 0 }]} name='Food' isOpenDrawerComponent={true} bgColor={'#fff'} />
            <View style={[style.container]}>
                <View style={{ width: '90%', marginTop: 15 }}>
                    <FlatList horizontal={true} style={{ marginBottom: 15 }}
                        data={category}
                        renderItem={(a) => {
                            return (
                                <TouchableOpacity style={[styles.btncategory]} key={a.item.name} onPress={() => viewfood(a.item.name)}>
                                    <Text>{a.item.name}</Text>
                                </TouchableOpacity>
                            )
                        }}>
                    </FlatList>
                    <FlatList
                        data={count}
                        numColumns={2}
                        renderItem={(a) => {
                            return (
                                <View style={{  width: '49%', margin: 1 }}>
                                    <View style={{ height: 250, borderColor:'gray',borderWidth:1,paddingHorizontal:10 }} >
                                        <View style={{height:'75%',marginTop:'5%'}}>
                                            <TouchableOpacity onPress={()=> setModalVisible(true)}>
                                                <Icon name='bowl-food' type='font-awesome' size={125} style={{alignSelf:'center'}}/>
                                                <Text style={{fontSize:10,textAlign:'center'}}>Click to view</Text>
                                            </TouchableOpacity>
                                            <View style={{marginTop:10}}>
                                                <Text style={{fontWeight:'bold'}}>NAMe</Text>
                                                <Text style={{fontSize:12}}>description</Text>
                                            </View>
                                        </View>
                                        <View style={{flexDirection:'row'}}>
                                            <Text style={{paddingVertical:5,flex:1,justifyContent:'flex-start',fontWeight:'bold'}}>$123</Text>
                                            <TouchableOpacity style={{flex:1,justifyContent:'flex-end',borderWidth:1,paddingVertical:5,paddingHorizontal:15}}><Text>Add</Text></TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )
                        }}>
                    </FlatList>
                </View>
            </View>

            <View style={[style.container]}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}>
                        <View style={{backgroundColor: 'rgba(0,0,0,0.5)',height:'100%'}}>
                            <View style={{ backgroundColor:'#fff',borderRadius:5,width:'75%',alignSelf:'center',marginVertical:'35%',flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{borderWidth:1,width:'90%',borderRadius:5}}>
                                    <TouchableOpacity style={{paddingVertical:10}} onPress={() => setModalVisible(false)}>
                                        <Text style={{textAlign:'center'}}>Close</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                </Modal>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    btncategory: {
        borderWidth: 1,
        padding: 7,
        paddingHorizontal: 15,
        borderRadius: 100,
        marginEnd: 5
    }
})