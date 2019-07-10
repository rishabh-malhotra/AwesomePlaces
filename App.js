import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { PlaceInput } from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";

export default class App extends Component {
  state = {
    places: []
  };
  placeSubmitButton = place => {
    this.setState(prevState => {
      const placename = place;
      this.state.placename = "";
      return {
        places: prevState.places.concat(placename)
      };
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeSubmitButton} />
        <PlaceList places={this.state.places} />
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
