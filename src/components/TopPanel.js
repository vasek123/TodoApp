import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from './Header';
import Subheader from './Subheader';

import { colors, fontColors } from './colors';

import { getActiveTodos } from '../helpers';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.greenish,
    padding: 20
  }
})

class TopPanel extends Component {
  render() {

    let activeTodos = getActiveTodos(this.props.todos);

    console.log(colors);

    return (
      <View style={styles.container}>
        <View>
          <Header style={[fontColors.yellow, { marginBottom: -14 }]}>todos</Header>
          <Subheader style={fontColors.yellow}>
            {activeTodos.length > 0 ? (
              `You have ${activeTodos.length} unfinished todo` + (activeTodos.length > 1 ? 's' : '')
            ) : 'All todos are done!'}
          </Subheader>
        </View>
      </View>
    )
  }
}

export default TopPanel;
