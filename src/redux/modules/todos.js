import { createSelector } from "reselect";

const ADD_TODO = "TODOS/ADD_TODO";
const TOGGLE_TODO = "TODOS/TOGGLE_TODO";

const initialState = {
  todos: []
};

const reducer = (state = initialState, action = {}) => {
  const { payload, type } = action;
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat({
          description: payload.description,
          completed: false
        })
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          return index === payload.index ?
            { ...todo, completed: !todo.completed } : todo;
        })
      };
    default:
      return state;
  }
};

export default { todos: reducer };

export const addTodo = (description) => ({
  type: ADD_TODO,
  payload: { description }
});
export const toggleTodo = (index) => ({
  type: TOGGLE_TODO,
  payload: { index }
});

export const getTodos = (state) => state.todos.todos;
export const getCompletedTodos = createSelector(
  getTodos,
  (todos) => todos.filter((todo) => todo.completed)
);
