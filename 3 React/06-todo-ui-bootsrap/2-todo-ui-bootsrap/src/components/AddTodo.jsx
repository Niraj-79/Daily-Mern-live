import Button from "./Buttons";

const AddTodo = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-5">
          {" "}
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo Here"
          ></input>
        </div>

        <div className="col-3">
          <input type="date" className="form-control"></input>
        </div>

        <div className="col-2">
          {" "}
          <Button btnType="success" btnText="Add" />
          {/* <button type="button" className="btn btn-success">
          Add
        </button> */}
        </div>
      </div>
    </div>
  );
};
export default AddTodo;
