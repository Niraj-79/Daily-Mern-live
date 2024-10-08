import { createContext, useReducer } from "react";
import initialTodoItems from "./InitialTodoItems";

export const TodoItemsContext = createContext();

const todoItemsReducer = (currentItems, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const todoText = action.payload.todoText;
      const todoDate = action.payload.todoDate;
      return [...currentItems, { id: todoText, todoText, todoDate }];
    }
    case "DELETE_ITEM":
      return currentItems.filter((item) => item.id != action.payload.todoId);
    default:
      return currentItems;
  }
};

export const TodoItemsProvider = ({ children }) => {
  const [todoItems, dispatch] = useReducer(todoItemsReducer, initialTodoItems);

  const addTodoItem = (todoText, todoDate) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        todoText,
        todoDate,
      },
    });
  };

  const deleteTodoItem = (todoId) => {
    dispatch({
      type: "DELETE_ITEM",
      payload: {
        todoId,
      },
    });
  };
  return (
    <TodoItemsContext.Provider
      value={{ todoItems, addTodoItem, deleteTodoItem }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
