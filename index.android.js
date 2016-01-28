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
  Splash,
  WhoAreYou,
  YourNameEntry
} from './pages/pages'

import { createDataStore } from './dataStore/dataStore';

class TeaAndPronouns extends Component {

  constructor() {
    super();
    this.store = null;
    this.state = {hasStore: false};

    createDataStore()
      .then((store) => {
        this.store = store;
        this.setState({hasStore: true});
      });
  }

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
    if (this.state.hasStore) {
      var routeId = route.id;

      const props = {
        store: this.store,
        navigator: navigator
      };

      if (routeId === 'WhoAreYou') {
        return (
          <WhoAreYou {...props}/>
        );
      } else if (routeId === 'YourNameEntry') {
        return <YourNameEntry {...props}/>
      }
    } else {
      return <Splash/>;
    }
  }
}

AppRegistry.registerComponent('TeaAndPronouns', () => TeaAndPronouns);
