import { TodoItemsContext } from "../store/TodoItemsContext";
import Button from "./Buttons";
import { useContext, useRef } from "react";

const AddTodo = () => {
  const todoTextInput = useRef();
  const todoDateInput = useRef();
  const { addTodoItem } = useContext(TodoItemsContext);

  const addHandler = () => {
    const todoText = todoTextInput.current.value;
    const todoDate = todoDateInput.current.value;
    todoTextInput.current.value = "";
    todoDateInput.current.value = "";
    addTodoItem(todoText, todoDate);
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-5">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo Here"
            ref={todoTextInput}
          />
        </div>

        <div className="col-3">
          <input
            type="date"
            className="form-control"
            ref={todoDateInput}
          ></input>
        </div>

        <div className="col-2">
          <Button btnType="success" btnText="Add" handler={addHandler} />
        </div>
      </div>
    </div>
  );
};
export default AddTodo;
