import * as types from './constants';

const initialState = {
    todos: []
};

export const todosReducer = (state = initialState, action = {}, todo = {}) => {
    switch (action.type) {
        case types.ADD_TODO:
            const oldTodos = state.todos.slice();
            const todos = [
                ...oldTodos,
                action.payload,
            ];
            return {
                ...state,
                todos
            };
        case types.REMOVE_TODO:
            const newTodos = state.todos.filter(todo => todo.id !== action.payload);
            return {
                ...state,
                todos: newTodos,
            };
        case types.TOGGLE_TODO:
            const id = action.payload;
            const currentTodos = state.todos.slice();
            currentTodos.forEach(todo => {
                if (todo.id === id) todo.completed = !todo.completed;
            })
            return {
                ...state,
                todos: currentTodos,
            };
        default:
            return state;
    }
}
