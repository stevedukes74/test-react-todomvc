import React, { Component } from 'react';
import CreateTodos from './components/CreateTodos';
import TodosList from './containers/TodosList';
import logo from './logo.svg';
import './styles/App.css';

/**
 * Main Todos App
 * This handles the display/view of the todo app
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Above is the Great Eye of the React God.<br />
            The God will approve your todo, if it is worthy.
          </p>
        </header>
        <CreateTodos />
        <TodosList />
      </div>
    );
  }
}

export default App;
