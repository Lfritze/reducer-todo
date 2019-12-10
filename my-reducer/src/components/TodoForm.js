import React, { useState } from "react";
import { TodoInput } from "../styling/Styling";

const TodoForm = ({ dispatch }) => {
  const [item, setItem] = useState("");

  const handleChanges = event => {
    setItem(event.target.value);
  };

  const submitTodo = event => {
    event.preventDefault();
    dispatch({
      type: "ADD_TODO", // see Reducer first case
      payload: item // see todo in Reducer
    });
    setItem("");
  };

  return (
    <div className="form-todo">
      <form onSubmit={submitTodo}>
        <TodoInput
          className="input"
          type="text"
          value={item}
          onChange={handleChanges}
        />
        <button className="button-form" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};
export default TodoForm;

// NOTES *****
// Redux and Immutability
// Redux has a single immutable state tree (referred to as the store) where all state changes are explicitly handled by dispatching actions. Dispatched actions are processed by a reducer that accepts the previous state and the action and returns the next state of your application. It is easy to predict how the state tree is going to change based on actions that are dispatched. It is also easy to predict which action will be dispatched based on some event or interaction. This all leads to very predictable state management.
