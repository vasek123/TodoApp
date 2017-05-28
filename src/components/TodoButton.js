import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import colors from './colors';

const styles = StyleSheet.create({
  todoButton: {
    display: 'inline',
    fontFamily: 'Poppins'
  }
})

class TodoButton extends Component {
  render() {
    return (
      <Icon.Button
        {...this.props}
        backgroundColor="transparent"
      />
    )
  }
}

TodoButton.propTypes = {
  onPress: PropTypes.func.isRequired
}

export default TodoButton;
