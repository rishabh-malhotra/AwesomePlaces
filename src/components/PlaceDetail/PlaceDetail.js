import React from "react";
import {Modal,View,Text,Image,Button,StyleSheet,TouchableOpacity} from "react-native"
import Icon from '../../../node_modules/react-native-vector-icons/Ionicons'

const placeDetail = props =>{
    let ModelContent=null;
    if(props.selectedPlace){
    ModelContent=(
                <View style={styles.modalContainer}>
                    <Image style={styles.placeImage} source={props.selectedPlace.image}/>
                    <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
                </View>
    )    
    }
    return(
        <Modal onRequestClose={props.onModalClose} visible={props.selectedPlace !== null} animationType="slide">
            <View>
                {ModelContent}
                {/* <Text>{props.selectedPlace?props.selectedPlace.placeName:''}</Text>
                <Image source={props.selectedPlace.placeImage}/> */}
                <TouchableOpacity  onPress={props.onItemDeleted}>
                    <View style={styles.deleteButton}>
                        <Icon size={30} name="ios-trash" color="red" />
                    </View>
                </TouchableOpacity>
                <Button title="Close"  onPress={props.onModalClose}/>
            </View>
        </Modal>
    );
}

const styles=StyleSheet.create({
    modalContainer:{
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