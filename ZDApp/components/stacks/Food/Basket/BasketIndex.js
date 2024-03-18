import { View,Text } from "react-native";
import Header from "../../../layouts/header/header";
import { SafeAreaView } from "react-native-safe-area-context";
import { style } from "../../../../assets/style/style";

export default function BasketIndex({navigation}){
    return(
        <SafeAreaView>
            <Header navigation={navigation} headerbutton={[]} name='Basket' isOpenDrawerComponent={false} />
            <View style={[style.container]}>
                <View style={[style.containerfluid]}>
                    <Text>Cart</Text>
                </View>
            </View>
        </SafeAreaView>
    )

}