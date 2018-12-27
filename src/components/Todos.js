import React from 'react';
import Delete from '@material-ui/icons/Delete';
import Done from '@material-ui/icons/Done';
import Undo from '@material-ui/icons/Undo';

/**
 * This is a pure function that returns jsx for the list of todos
 * @param {*} todos array all the todos to be listed
 * @param handleToggle func toggless the todo state from completed to not completed
 * @param handleDelete func deletes a todo from the list
 */
const Todos = ({
  todos,
  handleToggle,
  handleDelete
}) => (
  <div>
    {todos.map(todo => (
      <div key={todo.id.toString()} className="todo-row">
        <div className={`todos ${todo.completed ? 'done' : ''}`}>{todo.text}</div>
        <div>{!todo.completed && <button onClick={() => handleToggle(todo.id)}><Done /></button>}</div>
        <div>{todo.completed && <button onClick={() => handleToggle(todo.id)}><Undo /></button>}</div>
        <button onClick={() => handleDelete(todo.id)}><Delete /></button>
      </div>
    ))}
  </div>
);

export default Todos;