import React  from "react";
import {View,Text,Image} from "react-native"
import styles from './musicCard.style'
const MusicCard = ({music}) =>{
    return (

        <View style={styles.container}>
            <Image source={{uri:music.imageUrl}} style={styles.image}></Image>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{music.title}</Text>
                <View style={styles.infoContainer}>
                 <Text style={styles.artist}>{music.artist}</Text>
                 <Text style={styles.year}>{music.year}</Text>
                </View> 
                <Text style={styles.album}>({music.album})</Text>
            </View>
            {music.isSoldOut && <Text style={styles.soldOut}>Tükendi</Text>}
        </View>
    )
}


export default MusicCard