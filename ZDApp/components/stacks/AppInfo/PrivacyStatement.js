import { View,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../layouts/header/header";
import { style } from "../../../assets/style/style";


export default function PrivacyStatement({navigation}){
    return(
        <SafeAreaView>
            <Header navigation={navigation} headerbutton={[]} name='Privacy Statement' isOpenDrawerComponent={false}/>
            <View style={[style.container]}>
                <View style={[style.containerfluid]}>
                    <Text>test</Text>
                </View>
            </View>
        </SafeAreaView>
        
    )
}