import React, { Component } from "react";

export default class TodoItem extends Component {
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
