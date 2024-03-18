import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome6';
//Screens
import Home from './components/Home';
import Deals from './components/Deals';
import Food from './components/Food';
import MyAccount from './components/MyAccount';
import About from './components/About';
import TermsAndConditions from './components/TermsAndConditions';
import Feedback from './components/Feedback';
import FAQs from './components/FAQs';
import { style } from './assets/style/style';

const drawerItemsMain = [
  { name : 'Home', route: Home, icon : 'house',headerbutton : false},
  { name : 'Deals', route: Deals, icon : 'handshake-angle',headerbutton : false},
  { name : 'Food', route: Food, icon: 'bowl-food',headerbutton : false },
  { name : 'My Account', route: MyAccount, icon : 'user-tie',headerbutton : true},
  { name : 'About', route: About, icon: 'circle-info',headerbutton : false},
  { name : 'Terms And Conditions', route: TermsAndConditions, icon:'file-circle-question',headerbutton : false},
  { name : 'Feedback', route: Feedback, icon: 'circle-info',headerbutton : false},
  { name : 'FAQs', route: FAQs, icon:'question',headerbutton : false},
]

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <AppDrawer/>
    </NavigationContainer>
  );
}


function AppDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Food"  screenOptions={{ header: () => <View /> }}>
      {
        drawerItemsMain.map((item)=>{
          return(<Drawer.Screen name={item.name} component={item.route} key={item.name}  options={
            {
              drawerIcon: ({ color}) => (
                <View style={{width:25}}>
                  <Icon name={item.icon} type='font-awesome' size={20} color={color}/>
                </View>
              ),
              headerRight:()=>(
                item.headerbutton? 
                <TouchableOpacity onPress={()=>Alert.alert('test edit button')}>
                  <Text style={[style.colorgray,style.fontSize15,{marginRight:20}]}>Edit</Text>
                </TouchableOpacity>
                :null),
              
            }
          }/>)
        })
      }
    </Drawer.Navigator>
  );
}
