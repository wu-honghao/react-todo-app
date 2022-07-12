import React, { Component } from "react";
import { nanoid } from "nanoid";
import PropType from "prop-types";
import "./index.css";

export default class index extends Component {
  //对接受的props进行类型和必要性的限制
  static propTypes = {
    addTodo: PropType.func.isRequired,
  };

  //处理回车添加事件
  handleKeyup = (event) => {
    // 从父节点中接受addTodo方法
    const { addTodo } = this.props;
    //解构赋值获得keyCode和target
    const { keyCode, target } = event;

    if (keyCode !== 13) return;
    if (target.value.trim() === "") {
      alert("输入事项不可为空！");
      return;
    }

    //将输入的项传递给父元素
    addTodo({ id: nanoid(), value: target.value, done: false });
    // 清空输入项
    target.value = "";
  };

  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
          onKeyUp={this.handleKeyup}
        />
      </div>
    );
  }
}
