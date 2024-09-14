import Button from "./Buttons";

const TodoItem = ({ id, todoText, todoDate }) => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-5 text-truncate">{todoText}</div>

        <div className="col-3">{todoDate}</div>

        <div className="col-2">
          <Button btnType="danger" btnText="delete" />
        </div>
      </div>
    </div>
  );
};
export default TodoItem;
