import React from 'react';
import Delete from '@material-ui/icons/Delete';
import Done from '@material-ui/icons/Done';
import Undo from '@material-ui/icons/Undo';

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