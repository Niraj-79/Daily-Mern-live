import React from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import TestForm from "./components/TestForm";
import StateVsRef from "./components/StateVsRef";

function App() {
  return (
    <>
      <center>
        <AppName />
        <StateVsRef />
        
        {/* <TestForm /> 
        <AddTodo />
        <TodoItems /> */}
      </center>
    </>
  );
}

export default App;
