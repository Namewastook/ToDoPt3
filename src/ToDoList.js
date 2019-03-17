import React, { Component } from "react";
import ToDoItem from "./ToDoItem";

export default class TodoList extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.props.todos.map(todo => (
            <ToDoItem
              title={todo.title}
              completed={todo.completed}
              handleDeleteToDo={this.props.handleDeleteToDo(todo.id)}
              handleCheckToDo={this.props.handleCheckToDo(todo.id)}
            />
          ))}
        </ul>
      </section>
    );
  }
}
