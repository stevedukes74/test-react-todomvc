import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import { REMOVE_TODO, TOGGLE_TODO } from '../utils/constants';
import Delete from '@material-ui/icons/Delete';
import Done from '@material-ui/icons/Done';
import Undo from '@material-ui/icons/Undo';
import '../App.css';

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
        <ul>
          {this.props.todos.map(todo => (
            <li key={todo.id.toString()}>
              <span className={todo.completed ? 'done' : ''}>{todo.text}</span>
              {!todo.completed && <button onClick={() => this.handleToggle(todo.id)}><Done /></button>}
              {todo.completed && <button onClick={() => this.handleToggle(todo.id)}><Undo /></button>}
              <button onClick={() => this.handleDelete(todo.id)}><Delete /></button>
            </li>
          ))}
        </ul>
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
