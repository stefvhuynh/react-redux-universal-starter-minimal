import { List, Map } from "immutable";

const ADD_TODO = "TODOS/ADD_TODO";
const TOGGLE_TODO = "TODOS/TOGGLE_TODO";
const REMOVE_TODO = "TODOS/REMOVE_TODO";

const initialState = Map({
  todos: List()
});

const reducer = (state = initialState, action = {}) => {
  const { payload, type } = action;
  switch (action.type) {
    case ADD_TODO:
      return state.update(
        "todos",
        (todos) => todos.push(Map({
          description: payload.description,
          completed: false
        }))
      );
    case TOGGLE_TODO:
      return state.updateIn(
        ["todos", payload.index, "completed"],
        (completed) => !completed
      );
    case REMOVE_TODO:
      return state.update("todos", (todos) => todos.delete(payload.index));
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
export const removeTodo = (index) => ({
  type: REMOVE_TODO,
  payload: { index }
});

export const getTodos = (state) => state.todos.get("todos").toJS();
