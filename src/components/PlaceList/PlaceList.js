import React from "react";
import { TextInput, View, StyleSheet, Button } from "react-native";
import ListItem from '../ListItem/ListItem'
const placeList = props => {
  const placesOutput = props.places.map((place, i) => (
    <ListItem
      key={i}
      placename={place}
      onItemPressed={() => alert("id:" + i)}
    />
  ));
  return <View style={styles.listContainer}>{placesOutput}</View>;
};

const styles = StyleSheet.create({
    listContainer: {
      width: "100%"
    }
});

export default placeList;