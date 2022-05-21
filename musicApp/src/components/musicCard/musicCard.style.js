import {StyleSheet,Dimensions} from 'react-native'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        marginTop:10,
        borderRadius:10,
        flexDirection:'row',
        marginBottom:10,
        marginRight:10
    },
    innerContainer:{
        flexDirection:'column',
        flex:1,
        justifyContent:'center'
    },
    image:{
        height:80,
        width: 80,
        borderRadius:80,
        marginRight:10
    },
    title:{
        fontSize:20,
        color:'black',
        fontWeight:'bold',
    },
    artist:{
        fontSize:13,
        color:'black'
    },
    year:{
        fontSize:12,
        marginLeft:5,
        fontWeight:'500'
    },
    descriptionContainer:{
        flexDirection:'row',
        paddingTop:5,
        paddingBottom:5,
        
    },
    soldOut:{
        borderWidth:1,
        fontSize:14,
        padding:5,
        borderRadius:10,
        textAlign:'center',
        color:'red',
        borderColor:'red'
    },
    infoContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    }

})


export default styles;