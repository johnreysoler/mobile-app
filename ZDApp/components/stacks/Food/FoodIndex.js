import { View, Text, StyleSheet, Alert, Modal, FlatList,TouchableOpacity,TextInput } from "react-native";
import { style } from "../../../assets/style/style";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../layouts/header/header";
import { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome6';

export default function FoodIndex({ navigation }) {
    const [category, setcategory] = useState([
        { name: 'All' }, { name: 'For Sharing' }, { name: 'Breakfast' }, { name: 'Burgers' }, { name: 'Chicken & Rice Meals' }, { name: 'Drinks & Desserts' }, { name: 'Fries & Sides' }
    ])

    const [items, setitems] = useState([
        {
            name: 'Product 1',
            description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
            price:100.00
        },
        {
            name: 'Product 23',
            description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
            price:25.00
        },
        {
            name: 'Product 75',
            description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
            price:50.00
        },
        {
            name: 'Product 100',
            description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
            price:5375.00
        }
    ])

    const [selecteditem, setselecteditem] = useState([])

    const [modalVisible, setModalVisible] = useState(false);
    const [itemcount,setItemCount] = useState(0)
    const viewitem = (item) => {
        setselecteditem([item])
        setModalVisible(true)
        // setItemCount(itemcount +1)
        
    }

    const viewfood = (item) => {
        console.log(item)
    }
    const viewcart = () => {
        navigation.navigate('BasketIndex')
    }
    return (
        <SafeAreaView>
            <Header navigation={navigation} headerbutton={[{ text: '', action: viewcart, icon: 'cart-shopping', count: itemcount }]} name='h' isOpenDrawerComponent={true} bgColor={'#fff'} />
            <View style={[style.container]}>
                <View style={{ width: '90%',flex:1 }}>
                    <View style={{maxHeight:35,marginVertical: 15}}>
                        <FlatList horizontal={true} 
                            data={category}
                            renderItem={({item}) => 
                            <TouchableOpacity style={[styles.btncategory]} key={item.name} onPress={viewitem}>
                                <Text>{item.name}</Text>
                            </TouchableOpacity>}
                        />
                    </View>
                    <View style={{maxHeight:'42%'}}>
                    <FlatList
                    numColumns={2}
                        data={items}
                        renderItem={({item}) => ( 
                            <View style={{  width: '49%', margin: 1 }}>
                            <View style={{ height: 225, borderColor:'gray',borderWidth:1,paddingHorizontal:10 }} >
                                <View style={{height:'75%',marginTop:'5%'}}>
                                    <TouchableOpacity onPress={()=>viewitem(item)}>
                                        <Icon name='bowl-food' type='font-awesome' size={125} style={{alignSelf:'center'}}/>
                                        <Text style={{fontSize:10,textAlign:'center'}}>Click to view</Text>
                                    </TouchableOpacity>
                                    <View style={{marginTop:10}}>
                                        <View style={{flexDirection:'row'}}>
                                            <Text style={{fontWeight:'bold'}}>{item.name}</Text>
                                            <Text style={{flex:1,textAlign:'right',fontWeight:'bold'}}>{item.price}</Text>
                                        </View>
                                        <Text style={{fontSize:12}}>{item.description < 25 ? `${item.description}` : `${item.description.substring(0,35)}...`}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        )}
                        />   
                    </View>
                </View>
            </View>

            <View style={[style.container]}>
                <Modal
                    animationType="silde"
                    transparent={true}
                    visible={modalVisible}>
                        <View style={{backgroundColor: 'rgba(0,0,0,0.5)',height:'100%'}}>
                            <View style={{ backgroundColor:'#fff',borderRadius:5,width:'75%',alignSelf:'center',marginVertical:'50%',flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            { selecteditem.length > 0 ?
                                <View style={{width:'90%'}}>
                                    <View style={{marginVertical:10}}>
                                        <View>
                                            <Icon name='bowl-food' type='font-awesome' size={150} style={{alignSelf:'center'}}/>
                                        </View>
                                        <View style={{flexDirection:'row',marginBottom:10}}>
                                            <Text style={{fontWeight:'bold',fontSize:20}}>{selecteditem[0].name}</Text>
                                            <Text style={{fontWeight:'bold',fontSize:20,flex:1,justifyContent:'flex-end',textAlign:'right'}}>{selecteditem[0].price}</Text>
                                        </View>
                                        <View>
                                            <Text style={{fontSize:13}}>{'\t'}{'\t'}{'\t'}{selecteditem[0].description}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'row',marginVertical:10}}>
                                        <View style={{borderWidth:1,borderRadius:100,width:'15%'}}>
                                            <TouchableOpacity style={{paddingVertical:10}}>
                                                <Text style={{textAlign:'center'}}>+</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{borderWidth:1,borderRadius:5,width:'50%'}}>
                                            <TextInput></TextInput>
                                        </View>
                                        <View style={{borderWidth:1,borderRadius:100,width:'15%'}}>
                                            <TouchableOpacity style={{paddingVertical:10}}>
                                                <Text style={{textAlign:'center'}}>-</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                    <View style={{borderWidth:1,borderRadius:5}}>
                                        <TouchableOpacity style={{paddingVertical:10}} onPress={() => setModalVisible(false)}>
                                            <Text style={{textAlign:'center'}}>Cancel</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            :null}
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