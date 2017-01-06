import React, { Component } from "react";
import { TodosContainer } from "../containers";

export default class TodosPage extends Component {
  render() {
    return (
      <div>
        <h3>Todos Page</h3>
        <TodosContainer/>
      </div>
    );
  }
}
