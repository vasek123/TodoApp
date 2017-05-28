import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { colors, backgroundColors } from './colors';

import TodoText from './TodoText';
import TodoButton from './TodoButton';

const styles = StyleSheet.create({
  todoContainer: {
    height: 80,
    padding: 20,
    flexDirection: 'row',
    //justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E9E9E9'
  },
  buttonsContainer: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  lineThrough: {
    textDecorationLine: 'line-through'
  }
})

class Todo extends Component {
  render() {
    return (
      <View style={[styles.todoContainer, backgroundColors.lightGray]}>
        <TodoText style={this.props.active ? {} : styles.lineThrough}>{this.props.text}</TodoText>
        <View style={styles.buttonsContainer}>
          <TodoButton
            name={ this.props.active ? 'check' : 'close' }
            color={colors.darkGray}
            onPress={() => { this.props.updateTodo(this.props.id, { active: !this.props.active })}}
          />
          <TodoButton
            name="trash"
            color={colors.darkGray}
            onPress={() => { this.props.deleteTodo(this.props.id)}}
          />
        </View>
      </View>
    )
  }
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  text: PropTypes.string,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default Todo;
