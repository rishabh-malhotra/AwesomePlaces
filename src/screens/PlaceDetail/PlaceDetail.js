import React from "react";
import {Modal,View,Text,Image,Button,StyleSheet,TouchableOpacity} from "react-native"
//import Icon from '../../../node_modules/react-native-vector-icons/Ionicons'
import Icon from '../../../node_modules/react-native-vector-icons/Ionicons'

const placeDetail = props =>{
    
    return(
            <View style={styles.container}>
                <View>
                    <Image style={styles.placeImage} source={props.selectedPlace.image}/>
                    <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
                </View>
                <TouchableOpacity  onPress={props.onItemDeleted}>
                    <View style={styles.deleteButton}>
                        <Icon size={30} name="ios-trash" color="red"/>
                    </View>
                </TouchableOpacity>
            </View>
    );
}

const styles=StyleSheet.create({
    container:{
        margin:22
    },
    placeImage:{
        width:"100%",
        height:200
    },
    placeName:{
        fontWeight:"bold",
        textAlign:"center",
        fontSize:28
    },
    deleteButton:{
        alignItems:"center"
    }
})

export default placeDetail;