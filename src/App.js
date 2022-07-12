import React, { Component } from "react";
import Header from "./component/Header";
import List from "./component/List";
import Footer from "./component/Footer";
import "./App.css";

export default class App extends Component {
  //状态在哪里，操作的方法在哪里
  state = {
    todos: [
      { id: "001", value: "吃饭", done: true },
      { id: "002", value: "打代码", done: true },
      { id: "003", value: "学习", done: false },
    ],
  };

  //添加代办事项
  addTodo = (todoObj) => {
    const { todos } = this.state;

    const newTodos = [...todos, todoObj];

    this.setState({ todos: newTodos });
  };

  //更新代办事项
  updateTodo = (id, done) => {
    const { todos } = this.state;

    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) {
        return { ...todoObj, done };
      } else return todoObj;
    });

    this.setState({ todos: newTodos });
  };

  //删除代办事项
  deleteTodo = (id) => {
    const { todos } = this.state;

    // Array.prototype.filter 返回符合条件的项
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({ todos: newTodos });
  };

  //全选和全不选代办事项
  checkAllTodos = (done) => {
    const { todos } = this.state;

    const newTodos = todos.map((todo) => {
      return { ...todo, done };
    });

    this.setState({ todos: newTodos });
  };

  // 清楚所有已完成的事项
  clearAllDoneTodos = () => {
    const { todos } = this.state;

    const newTodos = todos.filter((todo) => {
      return !todo.done;
    });

    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todos={todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todos={todos}
            checkAllTodos={this.checkAllTodos}
            clearAllDoneTodos={this.clearAllDoneTodos}
          />
        </div>
      </div>
    );
  }
}
