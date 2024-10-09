import { useContext } from "react";
import { TodoItemsContext } from "./TodoItemsContext";
import Button from "../components/Button";

const LoadItems = () => {
  const { todoItems, addAllTodoItems } = useContext(TodoItemsContext);

  if (todoItems.length !== 0) {
    return <> </>;
  }

  const loadItemsHandler = () => {
    fetch("http://localhost:3000/todos")
    .then((res) => res.json())
    .then(items => addAllTodoItems(items));
    
    
      };

  return (
    <>
      <h2>Enjoy your day</h2>
      <Button btnText="Load Todos" handler={loadItemsHandler}></Button>
    </>
  );
};
export default LoadItems;

