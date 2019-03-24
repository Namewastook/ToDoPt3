import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
import { toggleToDo, deleteToDo } from "./Actions";
import { connect } from "react-redux";

class TodoList extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.props.todos.map(todo => (
            <ToDoItem
              title={todo.title}
              completed={todo.completed}
              handleDeleteToDo={() => this.props.deleteToDo(todo.id)}
              handleCheckToDo={() => this.props.toggleToDo(todo.id)}
            />
          ))}
        </ul>
      </section>
    );
  }
}

const MapDispatchToProps = { toggleToDo, deleteToDo };

export default connect(
  null,
  MapDispatchToProps
)(TodoList);
