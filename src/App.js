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

  getTodoList = () => {
    const todoList = this.state.todosData.map((todo) => (
      <TodoItem key={todo.id} todo={todo} handleChange={this.handleChange} />
    ));
    return todoList;
  };

  handleChange = (id) => {
    this.setState((prevState) => {
      const newTodoList = prevState.todosData.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return { todosData: newTodoList };
    });
  };

  render() {
    return <div className="todo-list">{this.getTodoList()}</div>;
  }
}

export default App;
