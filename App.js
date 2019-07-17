import {Navigation} from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';
import FindPlace from './src/screens/FindPlace/FindPlace';
import SharePlace from './src/screens/SharePlace/SharePlace';
import {Provider} from 'react-redux'
import configureStore from './src/store/configureStore'

const store=configureStore();

//Register screens
Navigation.registerComponentWithRedux("awesome-places.AuthScreen",()=>AuthScreen,Provider,store);
Navigation.registerComponentWithRedux("awesome-places.FindPlace",()=>FindPlace,Provider,store);
Navigation.registerComponentWithRedux("awesome-places.SharePlace",()=>SharePlace,Provider,store);

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