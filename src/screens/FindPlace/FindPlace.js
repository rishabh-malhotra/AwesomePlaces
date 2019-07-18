import React,{Component} from 'react';
import {View} from 'react-native';
import { connect } from "react-redux";
import PlaceList from '../../components/PlaceList/PlaceList'
import {Navigation} from 'react-native-navigation'
class FindPlace extends Component{
    constructor(props){
      super(props);
      Navigation.events().bindComponent(this);
      this.isSideDrawerVisible = false;
    }
    navigationButtonPressed({buttonId}) {
      if (buttonId === "btn_toggle_drawer") {
        (!this.isSideDrawerVisible) ? this.isSideDrawerVisible = true : this.isSideDrawerVisible = false
          Navigation.mergeOptions(this.props.componentId, {
              sideMenu: {
                  left: {
                      visible:  this.isSideDrawerVisible
                  }
              }
          });
      }
  }
    itemSelectedHandler=(key)=>{
        const selPlace=this.props.places.find(place=>{
            return place.key===key
        });
        Navigation.push(this.props.componentId, {
            component: {
              name: 'awesome-places.PlaceDetail',
              passProps:{
                selectedPlace: selPlace
              },
              options: {
                topBar: {
                  title: {
                    text: selPlace.name
                  }
                }
              }
            }
          });
    }
    
    render(){
        return(
        <View>
            <PlaceList places={this.props.places}  onItemSelected={this.itemSelectedHandler}/>
        </View>
        );
    }
}

mapStateToProps=(state)=>{
    return{
        places:state.places.places
    }
}

export default connect(mapStateToProps)(FindPlace);