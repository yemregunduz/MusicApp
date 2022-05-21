import React ,{useState}from 'react'
import {View,Text,StyleSheet,SafeAreaView,TextInput, FlatList,Button} from 'react-native'
import musicData from './music-data.json'
import MusicCard from './components/musicCard/musicCard'
import SearchBar from './components/searchBar'
const App = () =>{
  const renderItem = ({item})=><MusicCard music={item}></MusicCard>
  const renderSeperator = () => <View style={styles.seperator}></View>
  const [musicList,setMusicList] = useState(musicData)
  const onSearch = (text) => {
    const filteredList = musicData.filter(m=>{
      const searchedText = text.toLowerCase();
      const currentTitle = m.title.toLowerCase();
      const currentArtist = m.artist.toLowerCase();
      return currentTitle.indexOf(searchedText)>-1 || currentArtist.indexOf(searchedText)>-1
    })
    setMusicList(filteredList);
  }
  
  return (
    <View style={styles.container}>
      <FlatList 
        ListHeaderComponent={<SearchBar onSearch={onSearch}></SearchBar>}
        data={musicList}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeperator}
      />
    
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    paddingRight:10,
    paddingLeft:10,
    flex:1
  },
  seperator:{
    borderWidth:1,
    borderColor:'#e0e0e0',
    marginRight:10
  }
})

export default App