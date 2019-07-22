import React,{Component} from 'react';
import {View,TouchableOpacity,StyleSheet,Text,Animated} from 'react-native';
import { connect } from "react-redux";
import PlaceList from '../../components/PlaceList/PlaceList'
import {Navigation} from 'react-native-navigation'
class FindPlace extends Component{
    state={
      placesLoaded:false,
      removeAnim:new Animated.Value(1),
      placesAnim:new Animated.Value(0)
    }
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
    placesLoadedHandler=()=>{
      Animated.timing(this.state.placesAnim,{
        toValue:1,
        duration:500,
        useNativeDriver:true
      }).start();
    }
    placesSearchHandler=()=>{
      Animated.timing(this.state.removeAnim,{
        toValue:0,
        duration:500,
        useNativeDriver:true
      }).start();
      this.setState({
        placesLoaded:true
      })
      this.placesLoadedHandler();
    }

    render(){
        let content=(
          <Animated.View style={{
            opacity:this.state.removeAnim,
            transform:[
              {
                scale:this.state.removeAnim.interpolate({
                  inputRange:[0,1],
                  outputRange:[12,1]
                })
              }
            ]
          }}>
            <TouchableOpacity onPress={this.placesSearchHandler}>
              <View style={styles.searchButton}>
                <Text style={styles.searchButtonText}>Find Place</Text>
              </View>
            </TouchableOpacity>
          </Animated.View>
        );
        if(this.state.placesLoaded){
          content=(
            <Animated.View 
              style={{
                opacity:this.state.placesAnim,
                // transform:[
                //   {
                //     scale:this.state.placesAnim.interpolate({
                //       inputRange:[0,1],
                //       outputRange:[12,1]
                //     })
                //   }
                // ]
                }}
            >
              <PlaceList 
                places={this.props.places}  
                onItemSelected={this.itemSelectedHandler}
              />
            </Animated.View>
          );
        }
        return(
        <View style={this.state.placesLoaded ? null : styles.buttonContainer}>
            {content}
        </View>
        );
    }
}

const styles=StyleSheet.create({
  buttonContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"  
  },
  searchButton:{
    borderColor:"orange",
    borderWidth:3,
    borderRadius:50,
    padding:20
  },
  searchButtonText:{
    color:"orange",
    fontWeight:"bold",
    fontSize:26
  }
})

mapStateToProps=(state)=>{
    return{
        places:state.places.places
    }
}

export default connect(mapStateToProps)(FindPlace);