import { useContext, useEffect } from "react";
import { TodoItemsContext } from "./TodoItemsContext";
import { useState } from "react";

const LoadItems = () => {
  const { todoItems, addAllTodoItems } = useContext(TodoItemsContext);

  const [isLoding, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((items) => {
        const newItems = items.map((item) => ({
          id: item.id,
          todoText: item.task,
          todoDate: item.date,
        }));
        addAllTodoItems(newItems);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const loadItemsHandler = () => {};

  return (
    <>
      {isLoding && <p>Loading...</p>}
      {!isLoding && todoItems.length === 0 && <p>Enjoy your day</p>}
    </>
  );
};
export default LoadItems;
