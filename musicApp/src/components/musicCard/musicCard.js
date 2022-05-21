import React  from "react";
import {View,Text,Image} from "react-native"
import styles from './musicCard.style'
const MusicCard = ({music}) =>{
    return (

        <View style={styles.container}>
            <View > 
              <Image style={styles.image} source={{uri:music.imageUrl}}></Image> 
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{music.title}</Text>
                <View style={styles.infoContainer} >
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.artist}>{music.artist}</Text>
                        <Text style={styles.year}>{music.year}</Text>
                    </View>
                    {music.isSoldOut && <Text style={styles.soldOut}>TÜKENDİ</Text>}
                </View>
            </View>
            

        </View>
    )
}


export default MusicCard