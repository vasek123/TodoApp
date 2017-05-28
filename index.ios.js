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
import { TopPanel, TodosList } from './src/components';

export default class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      todos: {
        '1': { 'id': 1, 'active': true, 'text': 'Clean the car' },
        '2': { 'id': 2, 'active': true, 'text': 'Buy milk' },
        '3': { 'id': 3, 'active': true, 'text': 'Call Jessey' },
        '4': { 'id': 4, 'active': false, 'text': 'Do the laundry' },
        'allIds': [1, 2, 3, 4]
      }
    }

    this.updateTodo = this.updateTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  updateTodo(id, update) {
    this.setState({
      todos: {
        ...this.state.todos,
        [id]: {
          ...this.state.todos[id],
          ...update
        }
      }
    })
  }

  deleteTodo(id) {
    this.setState({
      todos: {
        ...this.state.todos,
        [id]: undefined,
        'allIds': this.state.todos.allIds.filter(x => x != id)
      }
    })
  }

  render() {
    return (
      //App container
      <View>

        {/*Top panel*/}
        <TopPanel todos={this.state.todos} />

        <TodosList
          todos={this.state.todos}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
        />

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
