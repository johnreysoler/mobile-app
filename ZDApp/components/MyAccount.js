import AppStack from "./stacks/stackindex";
import { useEffect } from "react";
export default function MyAccount({navigation}){
    useEffect(() => {
        navigation.navigate('Userprofile')
    },[navigation])
    
    return(
        <AppStack/>
    )
}

