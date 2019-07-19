import React,{Component} from "react";
import {View,Text,Image,StyleSheet,TouchableOpacity,Platform} from "react-native";
import Icon from '../../../node_modules/react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {deletePlace} from '../../store/actions';
import {bindActionCreators} from 'redux';
import {Navigation} from 'react-native-navigation';

class PlaceDetail extends Component{
    placeDeletedHandler=()=>{
        this.props.actions.deletePlace(this.props.selectedPlace.key);
        Navigation.pop(this.props.componentId);
    }
   render(){
        return(
            <View style={styles.container}>
                <View>
                    <Image style={styles.placeImage} source={this.props.selectedPlace.image}/>
                    <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
                </View>
                <TouchableOpacity  onPress={this.placeDeletedHandler}>
                    <View style={styles.deleteButton}>
                        <Icon size={30} name={Platform.OS==='android'?"md-trash":"ios-trash"} color="red"/>
                    </View>
                </TouchableOpacity>
            </View> 
        );
   } 
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
mapDispatchToProps=(dispatch)=>{
    return {actions:bindActionCreators({deletePlace},dispatch)}
}

export default connect(null,mapDispatchToProps)(PlaceDetail);