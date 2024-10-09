import { useContext } from "react";
import { TodoItemsContext } from "./TodoItemsContext";
import Button from "../components/Button";

const LoadItems = () => {
  const { todoItems, addAllTodoItems } = useContext(TodoItemsContext);

  if (todoItems.length !== 0) {
    return <> </>;
  }

  //// ------------------------------------ first ------------------------------------------
  // const loadItemsHandler = () => {
  //   fetch("http://localhost:3000/todos")
  //   .then((res) => res.json())
  //   .then(items => addAllTodoItems(items));

  //// ------------------------------------ second ------------------------------------------
  // const loadItemsHandler = () => {
  //   fetch("http://localhost:3000/todos")
  //     .then((res) => res.json())
  //     .then((items) => {
  //       console.log(items);
  //       addAllTodoItems(items);
  //     });
  // };

  // ------------------------------------ third ------------------------------------------
  const loadItemsHandler = () => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((items) => {
        console.log(items);
        const newItems = items.map((item) => ({
          id: item.id,
          todoText: item.task,
          todoDate: item.date,
        }));
        addAllTodoItems(newItems);
      });
  };

  return (
    <>
      <h2>Enjoy your day</h2>
      <Button btnText="Load Todos" handler={loadItemsHandler}></Button>
    </>
  );
};
export default LoadItems;
