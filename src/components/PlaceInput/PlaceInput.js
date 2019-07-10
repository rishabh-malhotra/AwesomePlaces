import React from "react";
import { TextInput, View, StyleSheet, Button } from "react-native";

export class PlaceInput extends React.Component {
  state = {
    placename: ""
  };

  placenameChangeHandler = val => {
    this.setState({
      placename: val
    });
  };

  placeSubmitHandler = ()=>{
    if(this.state.placename.trim() === ''){
        return;
    }
    this.props.onPlaceAdded(this.state.placename);
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder="Awesome Place"
          value={this.state.placename}
          onChangeText={this.placenameChangeHandler}
        />
        <Button
          style={styles.placeButton}
          title="Add"
          onPress={this.placeSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  placeButton: {
    width: "30%"
  },
  inputContainer: {
    //flex:1,
    flexDirection: "row",
    //alignContent:'center',
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  placeInput: {
    width: "70%"
  }
});

export default PlaceInput;
