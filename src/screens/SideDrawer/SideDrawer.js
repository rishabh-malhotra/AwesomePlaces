import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Navigation } from "react-native-navigation";
import Icon from "../../../node_modules/react-native-vector-icons/Ionicons";
class SideDrawer extends Component {
  constructor(props) {
    super(props);
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          visible: false
        }
      }
    });
  }
  render() {
    return (
      <View
        style={[
          styles.container,
          { width: Dimensions.get("window").width * 0.8 }
        ]}
      >
        <TouchableOpacity>
          <View style={styles.drawerItem}>
            <Icon name="ios-log-out" size={30} color="#aaa" style={styles.drawerItemIcon}/>
            <Text>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "white",
    flex: 1
  },
  drawerItem:{
      flexDirection:"row",
      alignItems:"center",
      padding:10,
      backgroundColor:'#eee'
  },
  drawerItemIcon:{
      marginRight:10
  }
});

export default SideDrawer;
