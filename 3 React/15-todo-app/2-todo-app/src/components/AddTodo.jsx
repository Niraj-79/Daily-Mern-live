import Button from "./Buttons";
import { useRef } from "react";

const AddTodo = ({ addTodoItem }) => {
  const todoTextInput = useRef();
  const todoDateInput = useRef();

  //// first step
  // const addHandler = () => {
  //   console.log(`Trying to add item ${todoTextInput.current.value} ${todoDateInput.current.value}`);
  // };

  // // second step
  // const addHandler = () => {
  //   addTodoItem(todoDateInput.current.value, todoTextInput.current.value);
  // };

  // // third step
  // const addHandler = () => {
  //   const todoText = todoDateInput.current.value;
  //   const todoDate = todoTextInput.current.value;
  //   addTodoItem(todoText, todoDate);
  // };

  // fourth step
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
