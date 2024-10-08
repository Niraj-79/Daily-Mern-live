import { useContext } from "react";
import Button from "./Buttons";
import { TodoItemsContext } from "../store/TodoItemsContext";

const TodoItem = ({ id, todoText, todoDate }) => {
  const { deleteTodoItem } = useContext(TodoItemsContext);

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-5 text-truncate">{todoText}</div>

        <div className="col-3">{todoDate}</div>

        <div className="col-2">
          <Button
            btnType="danger"
            btnText="delete"
            handler={() => deleteTodoItem(id)}
          />
        </div>
      </div>
    </div>
  );
};
export default TodoItem;
