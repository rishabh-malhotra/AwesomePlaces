import {Navigation} from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';

//Register screens
Navigation.registerComponent("awesome-places.AuthScreen",()=>AuthScreen);

//start the app

Navigation.setRoot({
  root: {
    stack: {
      children: [{
        component: {
          name: 'awesome-places.AuthScreen',
        }
      }],
      options: {
        topBar: {
          title: {
            text: 'Login'
          }
        }
      }
    }
  }
});