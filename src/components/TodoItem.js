import React from "react";

function TodoItem(props) {
  console.log(props);
  return (
    <li className="todo-item">
      <input type="checkbox" name="" id="" checked={props.todo.completed} />
      <span>{props.todo.text}</span>
    </li>
  );
}

export default TodoItem;
