import {Navigation} from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';
import FindPlace from './src/screens/FindPlace/FindPlace';
import SharePlace from './src/screens/SharePlace/SharePlace';
import {Provider} from 'react-redux'
import configureStore from './src/store/configureStore'

const store=configureStore();

//Register screens
Navigation.registerComponent("awesome-places.AuthScreen",()=>AuthScreen,store,Provider);
Navigation.registerComponent("awesome-places.FindPlace",()=>FindPlace,store,Provider);
Navigation.registerComponent("awesome-places.SharePlace",()=>SharePlace,store,Provider);

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
            text: 'Login',
            fontFamily:".SFUIDisplay-Bold"
          }
        }
      }
    }
  }
});