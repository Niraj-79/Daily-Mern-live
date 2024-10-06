import React from "react";
import { useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";

function App() {
  const initialTodoItems = [
    { id: 1, todoText: "Buy Milk", todoDate: "4-sep-2024" },
    { id: 2, todoText: "Go to college", todoDate: "Weekday" },
    { id: 3, todoText: "Go to Gym", todoDate: "Everyday" },
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);
  console.log(todoItems);

  return (
    <>
      <center>
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todoItems} />
      </center>
    </>
  );
}

export default App;
