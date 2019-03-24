import {
  TOGGLE_TODO,
  ADD_TODO,
  DELETE_TODO,
  CLEAR_COMPLETED_TODOS
} from "../Actions/index.js";
import todoList from "../todos.json";

const initialState = {
  todoList
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      let makeId = Math.floor(Math.random() * 500000000);
      let newest = {
        userId: 1,
        id: makeId,
        title: action.payload,
        completed: false
      };
      return {
        ...state,
        todoList: [...state.todoList, newest]
      };

    case CLEAR_COMPLETED_TODOS:
      const newTodosDeleteComp = state.todoList.filter(todo => !todo.completed);
      return {
        ...state,
        todoList: newTodosDeleteComp
      };

    case DELETE_TODO:
      const newTodosDelete = state.todoList.filter(todo => {
        if (todo.id === action.payload) {
          return false;
        }

        return true;
      });
      return {
        ...state,
        todoList: newTodosDelete
      };

    case TOGGLE_TODO:
      const newTodosToggle = state.todoList.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }

        return todo;
      });
      return {
        ...state,
        todoList: newTodosToggle
      };

    default:
      return state;
  }
};

export default todoReducer;
