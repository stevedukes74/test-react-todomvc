import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import { REMOVE_TODO, TOGGLE_TODO } from '../utils/constants';
import Todos from '../components/Todos';
import '../styles/App.css';

/**
 * TodosList is a container for all todos
 * @param handleDelete dispatches the delete action to redux
 * @param handleToggle dispatches the toggle action to redux
 */

class TodosList extends Component {
  handleDelete = id => {
    this.props.removeTodoItem(id);
  }
  handleToggle = id => {
    this.props.toggleTodoItem(id);
  }
  render() {
    const numTodos = this.props.todos.length;
    return (
      <Fragment>
        <p>{`${numTodos} todo item${numTodos !== 1 ? 's' : ''}`}</p>
        <Todos todos={this.props.todos} handleDelete={this.handleDelete} handleToggle={this.handleToggle} />
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  removeTodoItem: id => {
    dispatch({
      type: REMOVE_TODO,
      payload: id
    })
  },
  toggleTodoItem: id => {
    dispatch({
      type: TOGGLE_TODO,
      payload: id
    })
  }
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(TodosList);
