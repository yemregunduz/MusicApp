import {StyleSheet,Dimensions} from 'react-native'

const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:10,
        backgroundColor:'white', 
    },
    image:{
        height:100,
        width:100,
        borderRadius:50,
    },
    innerContainer:{
        padding:10,
        justifyContent:'center',
        flex:1,

    },
    title:{
        fontSize:20,
        color:'black',
        fontWeight:"800",
        
    },
    infoContainer:{
        flexDirection:"row",
    },
    artist:{
        fontSize:17,
        color:'black',
        fontWeight:"600",
        marginRight:6
    },
    year:{
        color:'#73777B',
        fontWeight:"400"
    },
    soldOut:{
        borderWidth:1,
        alignSelf:"flex-start",
        borderColor:'red',
        color:'red',
        paddingLeft:5,
        paddingRight:5,
        borderRadius:5
    },
    album:{
        fontSize:15,
        fontWeight:"bold"
    }

})

export default styles;