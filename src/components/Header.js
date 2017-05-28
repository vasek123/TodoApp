import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  header: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 48
  }
})

const Header = (props) => (
  <Text style={[styles.header, StyleSheet.flatten(props.style)]}>{props.children}</Text>
)

Header.propTypes = {
  children: PropTypes.string.isRequired
}

export default Header;
