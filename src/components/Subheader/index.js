import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  subheader: {
    fontFamily: 'Poppins',
    fontWeight: '100',
    fontSize: 20
  }
})

const Subheader = (props) => (
  <Text style={[styles.subheader, StyleSheet.flatten(props.style)]}>{props.children}</Text>
)

Subheader.propTypes = {
  children: PropTypes.string.isRequired
}

export default Subheader;
