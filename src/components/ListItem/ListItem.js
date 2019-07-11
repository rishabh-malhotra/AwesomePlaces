import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Image} from 'react-native';

const listItem = props => {
  return(
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Image resizeMode="cover" style={styles.placeImage} source={props.placeImage}/>
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
  );
}

const styles=StyleSheet.create({
    listItem:{
        width:'100%',
        padding:10,
        backgroundColor:'#eee',
        marginBottom:5,
        flexDirection:"row",
        alignItems:"center"
    },
    placeImage:{
      margin:8,
      //flex:1,
      // alignContent:"center",
      width:50,
      height:50
    }
})

export default listItem;