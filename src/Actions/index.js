export const TOGGLE_TODO = "TOGGLE_TODO";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const CLEAR_COMPLETED_TODOS = "CLEAR_COMPLETED_TODOS";

export const toggleToDo = id => {
  return {
    type: TOGGLE_TODO,
    payload: id
  };
};

export const addTodo = title => {
  return {
    type: ADD_TODO,
    payload: title
  };
};

export const deleteToDo = id => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};

export const clearCompletedToDos = () => {
  return {
    type: CLEAR_COMPLETED_TODOS
  };
};
