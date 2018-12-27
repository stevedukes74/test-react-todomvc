import { todosReducer } from '../reducers'
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../constants';


describe('Test todo actions/reducers', () => {
  test('should add a todo', () => {
    const beforeState = {
      todos: [
        {
          text: 'A test todo',
          id: 0,
          completed: false,
        }
      ]
    };
    const afterState = {
      todos: [
        {
          text: 'A test todo',
          id: 0,
          completed: false,
        },
        {
          text: 'todo2',
          id: 1,
          completed: false,
        }
      ]
    };
    const newTodo = {
      text: 'todo2',
      id: 1,
      completed: false,
    };
    const action = {
      type: ADD_TODO,
      payload: newTodo,
    };
    expect( todosReducer(beforeState, action) ).toEqual(afterState);
  });

  test('should remove a todo', () => {
    const beforeState = {
      todos: [
        {
          text: 'A test todo',
          id: 0,
          completed: false,
        },
        {
          text: 'todo2',
          id: 1,
          completed: false,
        }
      ]
    };
    const afterState = {
      todos: [
        {
          text: 'A test todo',
          id: 0,
          completed: false,
        }
      ]
    };
    const action = {
      type: REMOVE_TODO,
      payload: 1,
    };
    expect( todosReducer(beforeState, action)).toEqual(afterState);
  })
  
  test('should toggle completed state of a todo', () => {
    const beforeState = {
      todos: [
        {
          text: 'A test todo',
          id: 0,
          completed: false,
        },
        {
          text: 'todo2',
          id: 1,
          completed: false,
        }
      ]
    };
    const afterState = {
      todos: [
        {
          text: 'A test todo',
          id: 0,
          completed: true,
        },
        {
          text: 'todo2',
          id: 1,
          completed: false,
        }
      ]
    };
    const action = {
      type: TOGGLE_TODO,
      payload: 0,
    };

    expect( todosReducer(beforeState, action)).toEqual(afterState);
  })
  
})