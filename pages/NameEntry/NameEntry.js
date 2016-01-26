'use strict';

import React, {
  Component,
  View,
  Text,
  TextInput
} from 'react-native';

const Button = require('react-native-button');

import styles from '../../styles/styles.js'

export default class WhoAreYou extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>
          What would you like us to call you?
        </Text>
        <TextInput/>
      </View>
    )
  }
}
