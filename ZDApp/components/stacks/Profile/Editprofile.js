import { View,Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../layouts/header/header";

export default function Editprofile({navigation}){
    const save = () =>{
        Alert.alert('mama mo save')
    }
    return (
        <SafeAreaView>
            <Header navigation={navigation} headerbutton={[{text: 'Save',action:save}]} name='Edit Profile' isOpenDrawerComponent={false}/>
        </SafeAreaView>
    )
}