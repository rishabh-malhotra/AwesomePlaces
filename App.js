import React,{Component} from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default class App extends Component {
  state={
    placename:"",
    places:[]
  }
  placenameChangeHandler=val=>{  
    this.setState({
      placename:val
    });
  };
  placeSubmitButton=()=>{
    if(this.state.placename.trim() === ''){
      return;
    }
      this.setState(prevState=>{
        const place=this.state.placename;
        this.state.placename='';
        return{
          places:prevState.places.concat(place)
        };
      })
      
  }
  render(){
    const placesOutput=this.state.places.map((place,i)=>(
      <Text key={i}>{place}</Text>
    ));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.placeInput}
                      placeholder="Awesome Place"
                      value={this.state.placename} 
                      onChangeText={this.placenameChangeHandler}/>
          <Button style={styles.placeButton} title="ADD" onPress={this.placeSubmitButton}/>
        </View> 
        <View>
          {placesOutput}
        </View>         
      </View>
    );
  }
}
         
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer:{
    //flex:1,
    flexDirection:'row',
    //alignContent:'center',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%'
  },
  placeInput:{
    width:"70%"
  },
  placeButton:{
    width:"30%"
  }
});
