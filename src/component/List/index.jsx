import React, { Component } from "react";
import PropType from "prop-types";
import Item from "../Item";
import "./index.css";

export default class index extends Component {
  //对接受的props进行类型和必要性的限制
  static propTypes = {
    todos: PropType.array.isRequired,
    updateTodo: PropType.func.isRequired,
    deleteTodo: PropType.func.isRequired,
  };

  render() {
    const { todos, updateTodo, deleteTodo } = this.props;

    return (
      <ul className="todo-main">
        {todos.map((todo) => {
          return (
            <Item
              key={todo.id}
              {...todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    );
  }
}
