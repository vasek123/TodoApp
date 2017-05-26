/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

//Import components
import { TopPanel } from './src/components';

export default class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      todos: {
        "1": {
          "id": 1,
          "active": true
        },
        "allIds": [1]
      }
    }
  }

  render() {
    return (
      //App container
      <View>

        {/*Top panel*/}
        <TopPanel todos={this.state.todos} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TodoApp', () => TodoApp);
