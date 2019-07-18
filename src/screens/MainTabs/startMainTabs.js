import {Navigation} from 'react-native-navigation';
import Icon from '../../../node_modules/react-native-vector-icons/Ionicons'


const startTabs=()=>{
    Promise.all([
    Icon.getImageSource('md-map',30),
    Icon.getImageSource('ios-share-alt',30)
    ]).then(sources=>{
        Navigation.setRoot({
            root: {
              bottomTabs: {
                children: [{
                  stack: {
                    children: [{
                      component: {
                        name: 'awesome-places.FindPlace',
                      }
                    }],
                    options: {
                      topBar:{
                          title:{
                            text:'Find Place',
                            fontFamily:".SFUIDisplay-Bold"
                          }
                      },  
                      bottomTab: {
                        text:'Find Place',
                        icon: sources[0],
                        testID: 'FIRST_TAB_BAR_BUTTON'
                      }
                    }
                  }
                },
                {
                    stack: {
                        children: [{
                          component: {
                            name: 'awesome-places.SharePlace',
                          }
                        }],
                        options: {
                            topBar:{
                                title:{
                                  text:'Share Place',
                                  fontFamily:".SFUIDisplay-Bold"
                                }
                            },
                            bottomTab: {
                            text: 'Share-Place',
                            icon: sources[1],
                            testID: 'SECOND_TAB_BAR_BUTTON'
                          }
                        }
                    }
                //   component: {
                //     name: 'awesome-places.SharePlace',
                //     options: {
                //       bottomTab: {
                //         text: 'SharePlace',
                //         icon: sources[1],
                //         testID: 'SECOND_TAB_BAR_BUTTON'
                //       }
                //     }
                //   }
                }]
              }
            }
          });
    });
}


  export default startTabs;