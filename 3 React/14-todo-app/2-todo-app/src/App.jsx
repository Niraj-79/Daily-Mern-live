import React from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import TestForm from "./components/TestForm";

function App() {
  return (
    <>
      <center>
        <AppName />
        <TestForm /> 
        {/* <AddTodo />
        <TodoItems /> */}
      </center>
    </>
  );
}

export default App;
