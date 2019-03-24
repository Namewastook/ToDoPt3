import React, { Component } from "react";
import "./index.css";
import TodoList from "./ToDoList";
import { NavLink, Route } from "react-router-dom";
import { connect } from "react-redux";
import { addTodo, clearCompletedToDos } from "./Actions";

class App extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleAddToDo = event => {
    if (event.key === "Enter") {
      this.props.addTodo(this.state.value);
      this.setState({ value: "" });
    }
  };

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            onKeyDown={this.handleAddToDo}
            value={this.state.value}
            className="new-todo"
            placeholder="What needs to be done?"
            autofocus
            onChange={this.handleChange}
          />
        </header>
        <Route
          exact
          path="/"
          render={() => {
            return <TodoList todos={this.props.todos} />;
          }}
        />
        <Route
          exact
          path="/active"
          render={() => {
            return (
              <TodoList
                todos={this.props.todos.filter(
                  todo => todo.completed === false
                )}
              />
            );
          }}
        />
        <Route
          exact
          path="/completed"
          render={() => {
            return (
              <TodoList
                todos={this.props.todos.filter(
                  todo => todo.completed !== false
                )}
              />
            );
          }}
        />
        <footer className="footer">
          <span className="todo-count">
            <strong>
              `
              {this.props.todos.filter(todo => todo.completed === false).length}
              `
            </strong>{" "}
            item(s) left
          </span>
          <ul className="filters">
            <li>
              <NavLink exact activeClassName="selected" to="/">
                All
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/active">
                Active
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/completed">
                Completed
              </NavLink>
            </li>
          </ul>
          <button
            onClick={this.props.clearCompletedToDos}
            className="clear-completed"
          >
            Clear completed
          </button>
        </footer>
      </section>
    );
  }
}

function MapStateToProps(state) {
  return {
    todos: state.todoList
  };
}

const mapDispatchToProps = { addTodo, clearCompletedToDos };

export default connect(
  MapStateToProps,
  mapDispatchToProps
)(App);
