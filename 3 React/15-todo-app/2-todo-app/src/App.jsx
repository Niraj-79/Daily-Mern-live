import React from "react";
import { useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import initialTodoItems from "./data/InitialTodoItems";

function App() {
  const [todoItems, setTodoItems] = useState(initialTodoItems);
  // console.log(todoItems);

  const addTodoItem = (todoText, todoDate) => {
    setTodoItems((currentItems) => {
      // return [...currentItems,   { id: 1, todoText: todoText, todoDate: todoDate }]
      return [...currentItems, { id: todoText, todoText, todoDate }];
    });
  };

  const deleteTodoItem = (todoId) => {
    setTodoItems((currentItems) => {
      return currentItems.filter((item) => item.id != todoId);
    });
  };

  return (
    <>
      <center>
        <AppName />
        <AddTodo addTodoItem={addTodoItem} />
        <TodoItems todoItems={todoItems} deleteTodoItem={deleteTodoItem} />
      </center>
    </>
  );
}

export default App;