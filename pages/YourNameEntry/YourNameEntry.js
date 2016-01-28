'use strict';

import React, {
  Component,
  View,
  Text,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';

const Button = require('react-native-button');

import styles from '../../styles/styles.js'
import { updateSelfName } from '../../actionCreators/people'

class RawYourNameEntry extends Component {

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
          onSubmitEditing={this.onSubmitEditing.bind(this)}
        />
      </View>
    );
  }

  onSubmitEditing() {
    const { dispatch } = this.props;
    dispatch(updateSelfName(this.state.text));
  }

}

const YourNameEntry = connect()(RawYourNameEntry);

export default YourNameEntry;
