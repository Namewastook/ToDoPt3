import React, { Component } from "react";
import "./index.css";
import todosList from "./todos.json";

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
        <TodoList
          todos={this.state.todos}
          handleDeleteToDo={this.handleDeleteToDo}
          handleCheckToDo={this.handleCheckToDo}
        />
        <footer className="footer">
          <span className="todo-count">
            <strong>0</strong> item(s) left
          </span>
          <button onClick={this.handleClearToDos} className="clear-completed">
            Clear completed
          </button>
        </footer>
      </section>
    );
  }
}

class TodoItem extends Component {
  render() {
    return (
      <li className={this.props.completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.completed}
            onClick={this.props.handleCheckToDo}
          />
          <label>{this.props.title}</label>
          <button onClick={this.props.handleDeleteToDo} className="destroy" />
        </div>
      </li>
    );
  }
}

class TodoList extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.props.todos.map(todo => (
            <TodoItem
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

export default App;
