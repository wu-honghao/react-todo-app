import React, { Component } from "react";
import "./index.css";

export default class index extends Component {
  handleCheck = (event) => {
    this.props.checkAllTodos(event.target.checked);
  };

  hanleClearAllDone = () => {
    this.props.clearAllDoneTodos();
  };

  render() {
    const { todos } = this.props;

    const total = todos.length;
    const doneCount = todos.reduce(
      (preN, todo) => preN + (todo.done ? 1 : 0),
      0
    );

    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={doneCount === total && total !== 0 ? true : false}
            onChange={this.handleCheck}
          />
        </label>
        <span>
          <span>已完成 {doneCount}</span> / 全部 {total}
        </span>
        <button className="btn btn-danger" onClick={this.hanleClearAllDone}>
          清除已完成任务
        </button>
      </div>
    );
  }
}
