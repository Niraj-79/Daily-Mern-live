import Button from "./Buttons";

const AddTodo = () => {
  const addHandler = () => {
    console.log(`Trying to add item`);
  };

  // const textChangeHandler = (event) => {
  //   console.log(event.target.value);
  // }

  // const textChangeHandler = (event) => {
  //   console.log(event);
  // };

  const textChangeHandler = (event) => {
    console.log(event.target.value, event);
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-5">
          {" "}
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo Here"
            onChange={textChangeHandler}
          ></input>
        </div>

        <div className="col-3">
          <input type="date" className="form-control"></input>
        </div>

        <div className="col-2">
          {" "}
          <Button btnType="success" btnText="Add" handler={addHandler} />
          {/* <button type="button" className="btn btn-success">
          Add
        </button> */}
        </div>
      </div>
    </div>
  );
};
export default AddTodo;
