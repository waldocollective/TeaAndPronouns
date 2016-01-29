'use strict';

import React, {
  Component,
  View,
  Text
} from 'react-native';

const Button = require('react-native-button');

import styles from '../../styles/styles';

export default class WhoAreYou extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>
          Hello!
        </Text>
        <Button onPress={this.onButtonPress.bind(this)}>
          Who are you?
        </Button>
      </View>
    );
  }

  onButtonPress() {
    const { navigator } = this.props;

    navigator.replace({
      id: 'YourNameEntry'
    });
  }
}
