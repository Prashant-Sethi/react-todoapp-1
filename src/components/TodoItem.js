import React from "react";

function TodoItem(props) {
  console.log(props);
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        name=""
        id=""
        checked={props.todo.completed}
        onChange={(e) => props.handleChange(props.todo.id)}
      />
      <span>{props.todo.text}</span>
    </li>
  );
}

export default TodoItem;
