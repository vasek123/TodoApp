import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Todo from './Todo';

import { getActiveTodos, getFinishedTodos } from '../helpers';

class TodosList extends Component {
  render() {
    let { todos, ...props } = this.props;

    console.log('todos length', todos.allIds.length);
    let activeTodos = getActiveTodos(todos);
    let finishedTodos = getFinishedTodos(todos);
    console.log(finishedTodos.length);

    return (
      <View>
        {
          activeTodos.map(todo => <Todo key={todo.id} {...todo} {...props} />)
        }
        {
          finishedTodos.map(todo => <Todo key={todo.id} {...todo} {...props} />)
        }
      </View>
    )
  }
}

TodosList.propTypes = {
  todos: PropTypes.object.isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodosList;
