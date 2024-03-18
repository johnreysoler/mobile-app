import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./layouts/header/header";

export default function Home({navigation}){
    return(
        <SafeAreaView>
            <Header navigation={navigation} headerbutton={[]} name='' isOpenDrawerComponent={true}/>
        </SafeAreaView>
    )
}