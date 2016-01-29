'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import { Provider } from 'react-redux';

import {
  Splash,
  WhoAreYou,
  YourNameEntry
} from './pages/pages'

import { createDataStore } from './dataStore/dataStore';

export default class TeaAndPronouns extends Component {

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
    if (!this.state.hasStore) {
      return <Splash/>
    } else {
      return (
        <Provider store={this.store}>
          <Navigator
            initialRoute={{id: 'WhoAreYou', name: 'WhoAreYou'}}
            renderScene={this.renderScene.bind(this)}
            configureScene={(route) => {
              if (route.sceneConfig) {
                return route.sceneConfig;
              }
              return Navigator.SceneConfigs.VerticalDownSwipeJump;
            }}
          />
        </Provider>
      );
    }
  }

  renderScene(route, navigator) {
    if (this.state.hasStore) {
      var routeId = route.id;

      const props = {
        navigator: navigator
      };

      if (routeId === 'WhoAreYou') {
        return <WhoAreYou {...props}/>;
      } else if (routeId === 'YourNameEntry') {
        return <YourNameEntry {...props}/>
      }
    } else {
      return <Splash/>;
    }
  }
}
