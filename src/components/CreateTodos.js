import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ADD_TODO } from '../utils/constants';

/**
 * Create Todo app
 * This component dispatches an ADD_TODO action to the redux store
 * It features a form for user input and processes that input before adding
 */
class CreateTodo extends Component {
  constructor(props) {
    super();
    this.state = {
      text: '',
      id: 0,
    }
  }
  static propTypes = {
    addTodo: PropTypes.func,
    addTodoItem: PropTypes.func,
  }
  handleSubmitTodo = e => {
    e.preventDefault();
    const todoText = e.target.text.value.trim();
    if (todoText.length > 0) {
      this.props.addTodoItem({
        type: ADD_TODO,
        payload: {
          text: todoText,
          id: this.state.id,
          completed: false,
        }
      });
      this.setState({
        text: '',
        id: this.state.id + 1
      });
    } else {
      // Clear the input field because user sent no text or just spaces
      this.setState({
        text: ''
      });
    }
    
  }
  handleAdd = () => {}
  handleChange = e => {
    this.setState({ text: e.target.value });
  }
  render() {
    console.log('props', this.props);
    return (
      <Fragment>
        <div>Please enter a todo item in the input field below.</div>
        <form onSubmit={this.handleSubmitTodo}>
          <input type="text" id="text" value={this.state.text} onChange={this.handleChange} autoFocus />
          <button onClick={() => this.handleSubmitTodo}>Add Todo</button>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  state,
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  addTodoItem: (todo) => {
    dispatch({
      type: ADD_TODO,
      payload: todo.payload
    })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);