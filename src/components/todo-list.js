import React, { Component, PropTypes } from "react";

class TodoList extends Component {
  static propTypes = {
    onAddTodo: PropTypes.func,
    onToggleTodo: PropTypes.func,
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        completed: PropTypes.bool.isRequired,
        description: PropTypes.string.isRequired
      })
    )
  }

  static defaultProps = {
    todos: []
  }

  constructor(props) {
    super(props);
    this.handleTodoInputChange = this.handleTodoInputChange.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleToggleTodo = this.handleToggleTodo.bind(this);
    this.state = { nextTodo: "" };
  }

  handleToggleTodo(index) {
    const { onToggleTodo } = this.props;
    if (onToggleTodo) {
      onToggleTodo(index);
    }
  }

  handleAddTodo() {
    const { onAddTodo } = this.props;
    if (onAddTodo) {
      onAddTodo(this.state.nextTodo);
    }

    this.setState({ nextTodo: "" });
  }

  handleTodoInputChange(event) {
    this.setState({ nextTodo: event.target.value });
  }

  render() {
    const todoListItems = this.props.todos.map((todo, index) => {
      return (
        <li key={`todo-${todo.description}-${todo.index}`}>
          <div>
            {todo.description}
            <input
              type="checkbox"
              checked={todo.completed ? true : false}
              onClick={this.handleToggleTodo.bind(null, index)}
            />
          </div>
        </li>
      );
    });

    return (
      <div>
        <input
          placeholder="Todo Description"
          value={this.state.nextTodo}
          onChange={this.handleTodoInputChange}
        />
        <button onClick={this.handleAddTodo}>Add Todo</button>
        <br/>
        <ul>
          {todoListItems}
        </ul>
      </div>
    );
  }
}

export default TodoList;
