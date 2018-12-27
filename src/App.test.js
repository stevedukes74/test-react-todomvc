import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { todosReducer } from './utils/reducers'
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const store = createStore(
  todosReducer,
  applyMiddleware(logger)
  );

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
