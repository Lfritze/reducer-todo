import React, { useReducer } from "react";
import { todo, reducer } from "../reducers/Reducer";
import TodoCard from "./TodoCard";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, todo);
  return (
    <div>
      <TodoForm dispatch={dispatch} />
      {state.map(todo => {
        return <TodoCard key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
};
export default TodoList;
