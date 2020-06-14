import React from "react";

function TodoItem(props) {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#cdcdcd',
    textDecoration: 'line-through'
  }

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        name=""
        id=""
        checked={props.todo.completed}
        onChange={(e) => props.handleChange(props.todo.id)}
      />
      <span style={props.todo.completed ? completedStyle : null}>{props.todo.text}</span>
    </li>
  );
}

export default TodoItem;
