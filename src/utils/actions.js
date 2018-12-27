import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './constants';

export const addTodo = todo => dispatch =>
    // console.log('payload', todo);
    // console.log('dispatch', dispatch);
    dispatch({
        type: ADD_TODO,
        payload: todo,
    });

export const removeTodo = id => dispatch => {
    dispatch({
        type: REMOVE_TODO,
        payload: id,
    });
};
export const toggleTodo = id => dispatch => {
    dispatch({
        type: TOGGLE_TODO,
        payload: id,
    });
};