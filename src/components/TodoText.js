import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { fontColors } from './colors';

const styles = StyleSheet.create({
  todoText: {
    fontFamily: 'Poppins',
    fontSize: 24
  }
})

const TodoText = (props) => (
  <Text style={[styles.todoText, fontColors.darkGray, StyleSheet.flatten(props.style)]}>{props.children}</Text>
)

TodoText.propTypes = {
  children: PropTypes.string.isRequired
}

export default TodoText;
