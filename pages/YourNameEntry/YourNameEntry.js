'use strict';

import React, {
  Component,
  View,
  Text,
  TextInput
} from 'react-native';

const Button = require('react-native-button');

import styles from '../../styles/styles.js'

export default class YourNameEntry extends Component {

  constructor() {
    super();
    this.state = {
      text: ''
    };
    console.log('create your name entry');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>
          What would you like us to call you?
        </Text>
        <TextInput
          autoFocus={true}
          multiline={false}
          value={this.state.text}
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={this.onInputSubmitEditing.bind(this)}
        />
      </View>
    )
  }

  onInputSubmitEditing() {
    // TODO load next page
    // TODO permanently store new name for the user
  }
}
