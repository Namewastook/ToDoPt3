import React, { Component } from "react";
import "./index.css";
import todosList from "./todos.json";
import TodoList from "./ToDoList";
import { NavLink, Route } from "react-router-dom";

class App extends Component {
  state = {
    todos: todosList,
    value: ""
  };

  handleDeleteToDo = todoId => event => {
    const newtodos = this.state.todos.filter(todo => todo.id !== todoId);
    this.setState({ todos: newtodos });
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleCheckToDo = todoID => event => {
    const newtodos = this.state.todos.map(todo => {
      if (todo.id === todoID) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: newtodos });
  };

  handleAddToDo = event => {
    if (event.key === "Enter") {
      const newtodos = this.state.todos.slice();
      const newtodo = {
        userId: 1,
        id: Math.ceil(Math.random() * 10000000),
        title: this.state.value,
        completed: false
      };
      newtodos.push(newtodo);
      this.setState({
        todos: newtodos,
        value: ""
      });
    }
  };

  handleClearToDos = event => {
    const newtodos = this.state.todos.filter(todo => todo.completed === false);
    this.setState({
      todos: newtodos
    });
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
            return (
              <TodoList
                todos={this.state.todos}
                handleDeleteToDo={this.handleDeleteToDo}
                handleCheckToDo={this.handleCheckToDo}
              />
            );
          }}
        />
        <Route
          exact
          path="/active"
          render={() => {
            return (
              <TodoList
                todos={this.state.todos.filter(
                  todo => todo.completed === false
                )}
                handleDeleteToDo={this.handleDeleteToDo}
                handleCheckToDo={this.handleCheckToDo}
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
                todos={this.state.todos.filter(
                  todo => todo.completed !== false
                )}
                handleDeleteToDo={this.handleDeleteToDo}
                handleCheckToDo={this.handleCheckToDo}
              />
            );
          }}
        />
        <footer className="footer">
          <span className="todo-count">
            <strong>
              {this.state.todos.filter(todo => todo.completed === false).length}
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
          <button onClick={this.handleClearToDos} className="clear-completed">
            Clear completed
          </button>
        </footer>
      </section>
    );
  }
}

export default App;
