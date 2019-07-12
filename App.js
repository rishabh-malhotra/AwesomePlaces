import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
//import placeImage from './src/assets/beautiful-place.jpg'
import {addPlace,deletePlace,deselectPlace,selectPlace} from './src/store/actions';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'
class App extends Component {
  placeAddedHandler = placeName => {
    this.props.actions.addPlace(placeName);
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.concat({
    //       key: Math.random().toString(),
    //       name: placeName,
    //       image:{
    //         uri:"https://www.planetware.com/photos-large/AUS/australia-beautiful-places-port-douglas.jpg"
    //       }
    //     })
    //   };
    // });
  };

  placeSelectedHandler = key => {
    this.props.actions.selectPlace(key);
    // this.setState(prevState=>{
    //   return{
    //     selectedPlace:prevState.places.find(place=>{
    //       return place.key === key;
    //     })
    //   }
    // });
  };

  placeDeletedHandler=()=>{
    this.props.actions.deletePlace();
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.filter(place => {
    //       return place.key !== prevState.selectedPlace.key;
    //     }),
    //     selectedPlace:null
    //   };
    // });
  }

  modalClosedHandler = () =>{
    this.props.actions.deselectPlace();
    // this.setState({
    //   	selectedPlace:null
    // })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={/*this.state.selectedPlace*/this.props.selectedPlace}
                      onItemDeleted={this.placeDeletedHandler}
                      onModalClose={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={/*this.state.places*/this.props.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = (dispatch) => (
   {actions:bindActionCreators({addPlace,deselectPlace,deletePlace,selectPlace},dispatch)}
)

export default connect(mapStateToProps,mapDispatchToProps)(App);
