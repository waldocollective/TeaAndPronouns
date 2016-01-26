/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import {
  WhoAreYou,
  NameEntry
} from './pages/pages'

class TeaAndPronouns extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{id: 'WhoAreYou', name: 'WhoAreYou'}}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.VerticalDownSwipeJump;
        }
      }/>
    );
  }

  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'WhoAreYou') {
      return (
        <WhoAreYou
          navigator={navigator}/>
      );
    } else if (routeId === 'NameEntry') {
      return <NameEntry
        navigator={navigator}/>
    }
  }
}

AppRegistry.registerComponent('TeaAndPronouns', () => TeaAndPronouns);
