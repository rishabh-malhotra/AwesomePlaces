import {Navigation} from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import {Provider} from 'react-redux'
import configureStore from './src/store/configureStore'
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';

const store=configureStore();

//Register screens
Navigation.registerComponentWithRedux("awesome-places.AuthScreen",()=>AuthScreen,Provider,store);
Navigation.registerComponentWithRedux("awesome-places.FindPlace",()=>FindPlaceScreen,Provider,store);
Navigation.registerComponentWithRedux("awesome-places.SharePlace",()=>SharePlaceScreen,Provider,store);
Navigation.registerComponentWithRedux("awesome-places.PlaceDetail",()=>PlaceDetailScreen,Provider,store);

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