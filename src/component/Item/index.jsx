import React, { Component } from "react";
import "./index.css";

export default class index extends Component {
  state = { mouse: false }; //表示鼠标移入

  // 处理鼠标移入移出事件
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };

  // 处理checkbox选择事件
  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    };
  };

  //处理删除按钮事件
  handleDelete = (id, value) => {
    if (window.confirm(`确定删除 ${value} 吗?`)) {
      this.props.deleteTodo(id);
    }
  };

  render() {
    const { id, value, done } = this.props;
    const { mouse } = this.state;

    return (
      <li
        style={{ backgroundColor: mouse ? "#ddd" : "white" }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{value}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
          onClick={() => {
            this.handleDelete(id, value);
          }}
        >
          删除
        </button>
      </li>
    );
  }
}
