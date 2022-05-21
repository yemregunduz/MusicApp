import React from "react";
import {TextInput,View} from 'react-native'
import styles from './searchBar.style';

const SearchBar = (props) =>{
    return(
            <TextInput placeholder="Muzik ara..." onChangeText={props.onSearch} style={styles.searchInput}></TextInput>
    )
}

export default SearchBar