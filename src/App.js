import React from "react";

import todosData from "./data/todosData";
import TodoItem from "./components/TodoItem";

import "./App.css";

function getTodoList() {
  const todoList = todosData.map((todo) => (
    <TodoItem key={todo.id} todo={todo} />
  ));
  return todoList;
}

function App() {
  return <div className="todo-list">{getTodoList()}</div>;
}

export default App;
