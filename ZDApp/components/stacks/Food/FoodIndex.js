import { View, Text, StyleSheet, Alert, Modal, FlatList,TouchableOpacity,TextInput,Keyboard } from "react-native";
import { style } from "../../../assets/style/style";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../layouts/header/header";
import { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome6';
import { ScrollView } from "react-native-gesture-handler";

export default function FoodIndex({ navigation }) {

    let listitem = [
        {
            id: 1,
            name: 'Product 1',
            description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
            price:100.00,
            qty : 0,
            category : 1
        },
        {
            id: 2,
            name: 'Product 23',
            description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
            price:25.00,
            qty : 0,
            category : 2
        },
        {
            id: 3,
            name: 'Product 75',
            description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
            price:50.00,
            qty : 0,
            category : 1
        },
        {
            id: 4,
            name: 'Product 100',
            description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
            price:5375.00,
            qty : 0,
            category : 2
        },
        {
            id: 5,
            name: 'Product 122',
            description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
            price:1500.00,
            qty : 0,
            category : 3
        },
        {
            id: 6,
            name: 'Product 676',
            description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
            price:975.00,
            qty : 0,
            category : 6
        },
        {
            id: 7,
            name: 'Product 777',
            description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
            price: 890.00,
            qty : 0,
            category : 6
        }
        
    ]

    useEffect(() => {
        filter(0)
      },[navigation]);

    const [category, setcategory] = useState([
        { id : 0 ,name: 'All' }, 
        { id : 1 ,name: 'For Sharing' }, 
        { id : 2 ,name: 'Breakfast' }, 
        { id : 3 ,name: 'Burgers' }, 
        { id : 4 ,name: 'Chicken & Rice Meals' }, 
        { id : 5 ,name: 'Drinks & Desserts' }, 
        { id : 6 ,name: 'Fries & Sides' }
    ])

    const [items, setitems] = useState([])

    const [addtocartitem,setaddtocartitem] = useState([])

    const [quantity, setquantity] = useState(0)

    const [selecteditem, setselecteditem] = useState([])

    const [modalVisible, setModalVisible] = useState(false);

    const [itemcount,setItemCount] = useState(0)

    const viewitem = (item) => {
        setselecteditem([item])
        setModalVisible(true)
        let qty = addtocartitem.filter(o=>o.id==item.id)

        if(qty.length > 0){
            qty = qty[0].qty
        }
        else {
            qty = 0
        }
        setquantity(qty)
        
    }

    const filter = (id)=>{
        let item = listitem
        if(id !== 0){
            item = listitem.filter(o=> o.category == id)
        }
        setitems(item)
    }

    const itemquantity = (opr)=>{
        if(opr === 1){
            setquantity(quantity + 1)
        }
        else{
            if(quantity > 0){
                setquantity(quantity - 1)
            }
        }
    }
    const viewcart = () => {
        navigation.navigate('BasketIndex')
    }

    const addtocart =(item)=>{
        setaddtocartitem([...addtocartitem.filter(o=>o.id !== item[0].id),{
            id:item[0].id,
            qty: quantity
        }])

        setModalVisible(false)
        // setItemCount(addtocartitem.length)
    }

    return (
        <SafeAreaView>
            <Header navigation={navigation} headerbutton={[{ text: '', action: viewcart, icon: 'cart-shopping', count: itemcount }]} name='' isOpenDrawerComponent={true} bgColor={'#fff'} />
            <View style={[style.container]}>
                <View style={{ width: '90%',flex:1 }}>
                    <View style={{maxHeight:35,marginVertical: 15}}>
                        <FlatList horizontal={true} 
                            data={category}
                            renderItem={({item}) => 
                            <TouchableOpacity style={[styles.btncategory]} key={item.id} onPress={()=> filter(item.id)}>
                                <Text>{item.name}</Text>
                            </TouchableOpacity>
                            }
                        />
                    </View>
                    <View style={{maxHeight:'42%'}}>
                        {items.length > 0 ?
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
                        :
                        <View><Text style={{textAlign:'center'}}>No item available</Text></View>
                        } 
                    </View>
                </View>
            </View>

            <View style={[style.container]}>
                <Modal
                    animationType="silde"
                    transparent={true}
                    visible={modalVisible}>
                        <View style={{backgroundColor: 'rgba(0,0,0,0.5)',height:'100%',flex:1,justifyContent:'center',alignItems:'center'}}>
                            <View style={{ backgroundColor:'#fff',borderRadius:5,width:'75%',maxHeight:'60%',alignSelf:'center',flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            { selecteditem.length > 0 ?
                                <View style={{width:'90%'}}>
                                    <View>
                                    <View style={{alignSelf:'flex-end'}}>
                                        <TouchableOpacity onPress={()=> setModalVisible(false)}>
                                            <Icon name='xmark' type='font-awesome' size={30} color={'red'}/>
                                        </TouchableOpacity>
                                    </View>
                                        <View>
                                            <Icon name='bowl-food' type='font-awesome' size={150} style={{alignSelf:'center'}}/>
                                        </View>
                                        <View style={{flexDirection:'row',marginBottom:10}}>
                                            <Text style={{fontWeight:'bold',fontSize:20}}>{selecteditem[0].name}</Text>
                                            <Text style={{fontWeight:'bold',fontSize:20,flex:1,justifyContent:'flex-end',textAlign:'right'}}>{selecteditem[0].price}</Text>
                                        </View>
                                        <ScrollView style={{height:'35%'}}>
                                            <Text style={{fontSize:13}}>{'\t'}{'\t'}{'\t'}{selecteditem[0].description}</Text>
                                        </ScrollView>
                                    </View>
                                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:10}}>
                                            <TouchableOpacity style={{paddingVertical:10}} onPress={()=> itemquantity(0)}>
                                                <Icon name='minus' type='font-awesome' size={25}/>
                                            </TouchableOpacity>
                                            <View style={{paddingHorizontal:20}}>
                                                <Text style={{textAlign:'center',fontSize:25}}>{quantity}</Text>
                                            </View>
                                            <TouchableOpacity style={{paddingVertical:10}} onPress={()=> itemquantity(1)}>
                                            <Icon name='plus' type='font-awesome' size={25}/>
                                            </TouchableOpacity>
                                    </View>
                                    <View>
                                        <TouchableOpacity style={{width:'50%',paddingVertical:10,alignSelf:'center'}} onPress={()=> addtocart(selecteditem)} disabled={quantity > 0 ? false:true}>
                                            <Text style={{fontSize:20,textAlign:'center'}}>add to cart</Text>
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