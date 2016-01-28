'use strict';

import React, {
  Component,
  View,
  Text,
  TextInput
} from 'react-native';

const Button = require('react-native-button');

import styles from '../../styles/styles.js'
import { UPDATE_USER_NAME } from '../../constants/actionTypes'

export default class YourNameEntry extends Component {

  constructor() {
    super();

    this.state = {
      text: ""
    };
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

    this.props.store.dispatch({
      type: UPDATE_USER_NAME,
      data: this.state.text
    })
  }
}

