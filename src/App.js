import React, { Component } from "react";

import todosData from "./data/todosData";
import TodoItem from "./components/TodoItem";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todosData: todosData,
    };
  }

  getTodoList() {
    const todoList = this.state.todosData.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ));
    return todoList;
  }

  render() {
    return <div className="todo-list">{this.getTodoList()}</div>;
  }
}

export default App;
