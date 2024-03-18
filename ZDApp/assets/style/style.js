import { StyleSheet} from 'react-native';

const color = '#fff'
export const style = StyleSheet.create({
    
    theme:{
        backgroundColor : color
    },
    container : {
        height : '100%',
        backgroundColor : color,
        alignItems:'center'
    },
    containerfluid : {
        width:'90%',
        height:'100%'
    },
    formcontrol : {
        borderBottomWidth:1,
        borderColor:'#A4A4A2',
        marginVertical:7,
        backgroundColor:'#F4F4F4',
        padding:7,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        paddingLeft:15
    },
    textlight:{
        color:color
    },
    btnprimary:{
        backgroundColor:'#1688CD',
        paddingVertical:13,
        width:'100%',
        borderRadius:5,
        marginVertical:25
    },
    fwbold :{
        fontWeight:'bold'
    },
    colorgray:{
        color:'#707070'
    },
    fontsize12:{
        fontSize : 12
    },
    fontsize17:{
        fontSize : 17
    },
    fontSize15:{
        fontSize : 15
    },
    fontsize20 : {
        fontSize : 20
    },
    ascenter :{
        alignSelf : 'center'
    }

})