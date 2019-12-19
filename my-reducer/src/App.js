import React from "react";
import "./App.css";
import { AppContainer } from "./styling/Styling";
import TodoList from "./components/TodoList";

function App() {
  return (
    <AppContainer className="App">
      <h1>This Week's Todo Items</h1>
      <TodoList />
    </AppContainer>
  );
}

export default App;
