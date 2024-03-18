import { createStackNavigator } from '@react-navigation/stack';
import { View } from "react-native";
import ProfileIndex from './Profile/ProfileIndex';
import Editprofile from './Profile/Editprofile';
import { useState } from 'react';
import ChangePassword from './Profile/Changepassword';
import About from './AppInfo/About';
import FAQs from './AppInfo/FAQs';
import Feedback from './AppInfo/Feedback';
import TermsAndConditions from './AppInfo/TermsAndConditions';
import PrivacyStatement from './AppInfo/PrivacyStatement';
import FoodIndex from './Food/FoodIndex';
import BasketIndex from './Food/Basket/BasketIndex';

const Stack = createStackNavigator();
export default function AppStack() {

    const [stack,setstack] =  useState([
        { name : 'Userprofile', route: ProfileIndex},
        { name : 'Editprofile', route: Editprofile},
        { name : 'ChangePassword', route: ChangePassword},
        { name : 'About', route: About},
        { name : 'FAQs', route: FAQs},
        { name : 'Feedback', route: Feedback},
        { name : 'TermsAndConditions', route: TermsAndConditions},
        { name : 'PrivacyStatement', route: PrivacyStatement},
        { name : 'FoodIndex', route: FoodIndex},
        { name : 'BasketIndex', route: BasketIndex},
    ])
    return (
      <Stack.Navigator screenOptions={{ header: () => <View /> }}>
        {
            stack.map((item)=>{
                return(
                    <Stack.Screen key={item.name} name={item.name} component={item.route} />
                )
            })
        }
      </Stack.Navigator>
    );
  }