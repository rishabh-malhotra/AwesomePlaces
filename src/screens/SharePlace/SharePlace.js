import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {connect} from 'react-redux'
import {addPlace} from '../../store/actions'
import {bindActionCreators} from "redux";
import PlaceInput from '../../components/PlaceInput/PlaceInput'
import {Navigation} from 'react-native-navigation'

class SharePlace extends Component{
    
    

    placeAddedHandler=(placeName)=>{
        this.props.actions.addPlace(placeName);
    }
    render(){
        return(
            <View>
                <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
            </View>
        );
    }
}

mapDispatchToProps=(dispatch)=>{
    return {actions:bindActionCreators({addPlace},dispatch)}
}

export default connect(null,mapDispatchToProps)(SharePlace);