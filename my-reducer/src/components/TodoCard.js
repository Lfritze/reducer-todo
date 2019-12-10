import React from "react";

const TodoCard = ({ todo, dispatch }) => {
  const toggleCompleted = () => {
    dispatch({
      type: "TOGGLE_COMPLETED", // see reducer 2nd case
      payload: todo.id // see todo in Reducer
    });
  };
  const clearTodo = event => {
    event.preventDefault();
    dispatch({
      type: "CLEAR_TODO_ITEM" // see reducer 3rd case
    });
  };

  return (
    <div className="todo-card">
      <div
        className={`todo${todo.completed ? " completed" : ""}`}
        onClick={toggleCompleted}
      >
        <h1>{todo.item}</h1>
      </div>
      <div>
        <button className="button-clear" onClick={clearTodo}>
          Clear Items
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
