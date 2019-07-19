import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { addPlace } from "../../store/actions";
import { bindActionCreators } from "redux";
import PlaceInput from "../../components/PlaceInput/PlaceInput";
import { Navigation } from "react-native-navigation";
import MainText from "../../components/UI/MainText/MainText";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import PickImage from "../../components/PickImage/PickImage";
import PickLocation from "../../components/PickLocation/PickLocation";

class SharePlace extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.isSideDrawerVisible = false;
    this.state = {
        placeName: ""
      };
  }
  navigationButtonPressed({ buttonId }) {
    if (buttonId === "btn_toggle_drawer2") {
      !this.isSideDrawerVisible
        ? (this.isSideDrawerVisible = true)
        : (this.isSideDrawerVisible = false);
      Navigation.mergeOptions(this.props.componentId, {
        sideMenu: {
          left: {
            visible: this.isSideDrawerVisible
          }
        }
      });
    }
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeAddedHandler = () => {
    if(this.state.placeName.trim() !==''){
        this.props.actions.addPlace(this.state.placeName);
    }
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Share a Place With Us!</HeadingText>
          </MainText>
          <PickImage />
          <PickLocation />
          <PlaceInput
            placeName={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
          <View style={styles.button}>
            <Button
              title="Share the Place!"
              onPress={this.placeAddedHandler}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150,
    flex: 1
  },
  button: {
    margin: 8
  },
  previewImage: {
    width: "100%",
    height: "100%"
  }
});

mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators({ addPlace }, dispatch) };
};

export default connect(null,mapDispatchToProps)(SharePlace);
