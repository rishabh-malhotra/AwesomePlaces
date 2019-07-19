import {Navigation} from 'react-native-navigation';
import Icon from '../../../node_modules/react-native-vector-icons/Ionicons'
import {Platform} from 'react-native'

const startTabs=()=>{
    Promise.all([
    Icon.getImageSource(Platform.OS==='android'?'md-map':'ios-map',30),
    Icon.getImageSource(Platform.OS==='android'?'md-share-alt':'ios-share',30),
    Icon.getImageSource(Platform.OS==='android'?'md-menu':'ios-menu',30)
    ]).then(sources=>{
        Navigation.setRoot({
            root: {
              sideMenu:{
                left:{
                  visible:true,
                  id:10,
                  component:{
                    name:'awesome-places.SideDrawer'
                  }
                },
              
              center:{
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
                          },
                          leftButtons:[{
                            id: 'btn_toggle_drawer',
                            name:'sidemenu-button',
                            icon:sources[2],
                             title:{
                               text:'menu'
                             }
                          }]
                      },  
                      bottomTab: {
                        text:'Find Place',
                        icon: sources[0],
                        testID: 'FIRST_TAB_BAR_BUTTON'
                      },
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
                                },
                                leftButtons:[{
                                  id: 'btn_toggle_drawer2',
                                  icon:sources[2],
                                   title:{
                                     text:'menu'
                                   }
                                }]
                            },
                            bottomTab: {
                            text: 'Share-Place',
                            icon: sources[1],
                            testID: 'SECOND_TAB_BAR_BUTTON'
                          },
                          
                        }
                    }
                }]
              }
            }
          }
            }
          });
    });
}


  export default startTabs;