import AppStack from "./stacks/stackindex";
import { useEffect } from "react";
export default function Food({navigation}){
    useEffect(() => {
        navigation.navigate('FoodIndex')
    },[navigation])
    
    return(
        <AppStack/>
    )
}