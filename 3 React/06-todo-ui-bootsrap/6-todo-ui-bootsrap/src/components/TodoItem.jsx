import Button from "./Buttons";

const TodoItem = ({ id, todoText, todoDate }) => {
  const deleteHandler = () => {
    console.log(`Trying to delete ${id} ${todoText}`);
  };
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-5 text-truncate">{todoText}</div>

        <div className="col-3">{todoDate}</div>

        <div className="col-2">
          <Button btnType="danger"  btnText="delete" handler={deleteHandler} />
        </div>
      </div>
    </div>
  );
};
export default TodoItem;
