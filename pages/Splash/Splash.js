'use strict';

import React, {
  Component,
  View,
  Text
} from 'react-native';

import styles from '../../styles/styles'

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>
          Tea And Pronouns
        </Text>
      </View>
    )
  }
}
