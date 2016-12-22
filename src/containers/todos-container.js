import { connect } from "react-redux";
import { TodoList } from "../components";
import { addTodo, getTodos, toggleTodo } from "../redux/modules/todos";

const TodosContainer = connect(
  (state) => ({ todos: getTodos(state) }),
  (dispatch) => ({
    onAddTodo: (todoDescription) => dispatch(addTodo(todoDescription)),
    onToggleTodo: (todoIndex) => dispatch(toggleTodo(todoIndex))
  })
)(TodoList);

export default TodosContainer;
